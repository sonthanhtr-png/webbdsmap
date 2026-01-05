"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const buttonLabel = useMemo(() => (isRegister ? "Đăng ký" : "Đăng nhập"), [
    isRegister,
  ]);

  const handleAuth = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setStatus(null);
    setLoading(true);

    const authResult = isRegister
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });

    if (authResult.error) {
      setError(authResult.error.message);
      setLoading(false);
      return;
    }

    const session = authResult.data.session;
    const user = authResult.data.user;

    if (session?.access_token) {
      document.cookie = `sb-access-token=${session.access_token}; path=/; samesite=lax`;
    }

    if (session?.refresh_token) {
      document.cookie = `sb-refresh-token=${session.refresh_token}; path=/; samesite=lax`;
    }

    if (!user) {
      setStatus("Không thể xác định người dùng.");
      setLoading(false);
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError) {
      setError(profileError.message);
      setLoading(false);
      return;
    }

    const role = profile?.role;

    if (role === "sales") {
      router.replace("/dashboard/sales");
    } else if (role === "admin") {
      router.replace("/admin/moderation");
    } else {
      router.replace("/");
    }

    setStatus(isRegister ? "Đăng ký thành công." : "Đăng nhập thành công.");
    setLoading(false);
  };

  return (
    <div className="form-card">
      <h1>{isRegister ? "Đăng ký" : "Đăng nhập"}</h1>
      <p>Nhập email và mật khẩu Supabase để tiếp tục.</p>

      {error ? <div className="alert">{error}</div> : null}
      {status ? <div className="alert success">{status}</div> : null}

      <form onSubmit={handleAuth}>
        <label>
          Email
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Mật khẩu
          <input
            required
            minLength={6}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Đang xử lý..." : buttonLabel}
        </button>
      </form>

      <div className="toggle">
        <button type="button" onClick={() => setIsRegister((prev) => !prev)}>
          {isRegister ? "Đã có tài khoản? Đăng nhập" : "Chưa có tài khoản? Đăng ký"}
        </button>
      </div>
    </div>
  );
}
