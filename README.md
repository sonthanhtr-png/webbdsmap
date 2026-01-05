# webbdsmap

Ứng dụng Next.js mẫu với xác thực Supabase.

## Thiết lập từng bước cho người mới

1. **Tạo project Supabase** và bật email/password auth (Auth → Providers → Email → Enable). Có thể tắt "Confirm email" để đăng nhập ngay sau khi đăng ký.
2. **Tạo bảng `profiles`** (SQL → New query) với schema tối thiểu:

   ```sql
   create table if not exists public.profiles (
     id uuid primary key references auth.users(id) on delete cascade,
     role text not null default 'customer'
   );
   ```

3. (Tùy chọn) **Tạo sẵn tài khoản và gán role** trong Supabase SQL:

   ```sql
   -- tạo user
   insert into auth.users (id, email, encrypted_password)
   values
     (gen_random_uuid(), 'customer@example.com', crypt('password', gen_salt('bf'))),
     (gen_random_uuid(), 'sales@example.com', crypt('password', gen_salt('bf'))),
     (gen_random_uuid(), 'admin@example.com', crypt('password', gen_salt('bf')));

   -- gán role khớp email ở trên
   insert into public.profiles (id, role)
   select id, 'customer' from auth.users where email = 'customer@example.com';
   insert into public.profiles (id, role)
   select id, 'sales' from auth.users where email = 'sales@example.com';
   insert into public.profiles (id, role)
   select id, 'admin' from auth.users where email = 'admin@example.com';
   ```

   Hoặc đăng ký trực tiếp trên trang `/login`, sau đó mở bảng `profiles` để điền `role` cho user vừa tạo.

4. **Sao chép file môi trường**: `cp .env.example .env.local` và điền `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` từ phần **Project Settings → API** của Supabase.
5. **Cài đặt phụ thuộc**: `npm install`.
6. **Chạy dev server**: `npm run dev` rồi mở [http://localhost:3000/login](http://localhost:3000/login).

Sau khi đăng nhập, app sẽ đọc `profiles.role` và tự động điều hướng:

* `customer` → `/`
* `sales` → `/dashboard/sales`
* `admin` → `/admin/moderation`
