import Link from "next/link";

export default function HomePage() {
  return (
    <div className="form-card">
      <h1>Trang chủ</h1>
      <p>Bạn đang đăng nhập với vai trò customer.</p>
      <div>
        <Link href="/dashboard/sales">Đi tới Sales</Link>
      </div>
      <div>
        <Link href="/admin/moderation">Đi tới Admin</Link>
      </div>
    </div>
  );
}
