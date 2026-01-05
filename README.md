# WebbDS Map MVP Roadmap

Lộ trình 30 bước để xây dựng MVP có thể chạy được được chia thành 5 giai đoạn. Mỗi bước mô tả thao tác cụ thể và kết quả mong đợi.

## Giai đoạn 0 — Chuẩn bị đồ nghề (B1–B6)
1. **Tạo Gmail + GitHub (nếu chưa có):** GitHub dùng để lưu code và deploy.
2. **Cài Node.js LTS + Git:** cài Node.js LTS (khuyến nghị) và Git để tải/push code.
3. **Cài VS Code:** công cụ chính để mở project.
4. **Cài Docker Desktop (tạm thời có thể bỏ qua):** chưa bắt buộc nếu dùng Supabase cloud.
5. **Tạo folder làm việc** (ví dụ `C:\\web-bds-map`).
6. **Kiểm tra Terminal/Command Prompt:** chạy `node -v`, `npm -v`, `git --version` để đảm bảo môi trường sẵn sàng.

✅ Kết quả: máy sẵn sàng.

## Giai đoạn 1 — Tạo database + đăng nhập bằng Supabase (B7–B12)
7. **Tạo tài khoản Supabase và Project mới.**
8. **Bật Auth Email/Password** trong Supabase.
9. **Tạo bảng `profiles` (role):** customer/sales/admin.
10. **Tạo bảng `pins` (ghim khu vực).**
11. **Tạo bảng `listings`:** tin BĐS với status PENDING/APPROVED, tier NORMAL/PLUS, lat/lng.
12. **Tạo bảng `credits`:** wallets + ledger (nạp/tiêu mock).

✅ Kết quả: có DB + hệ thống user.

## Giai đoạn 2 — Tạo Next.js web chạy local (B13–B18)
13. **Tạo dự án Next.js (TypeScript).**
14. **Cài TailwindCSS** cho giao diện.
15. **Cài Supabase client và cấu hình env.**
16. **Trang `/login`:** đăng ký/đăng nhập.
17. **Middleware/guard đơn giản:** ai chưa login bị đưa về `/login`.
18. **Phân quyền theo role:** Sales vào `/dashboard/sales`, Admin vào `/admin/moderation`, Customer vào `/`.

✅ Kết quả: đăng nhập và vào đúng màn theo vai trò.

## Giai đoạn 3 — Map + xem pin + lọc (B19–B23)
19. **Cài MapLibre** và hiển thị bản đồ OSM.
20. **API query “viewport”:** lấy listings APPROVED trong khung bản đồ (bbox).
21. **Marker + clustering** để tránh chi chít pin.
22. **Click pin mở “Pin Sheet”:** hiện danh sách tin trong pin theo ranking PLUS > BOOST > NORMAL.
23. **Trang chi tiết tin `/listing/[id]`:** ảnh, giá, mô tả, nút chat (tạm).

✅ Kết quả: web map hoạt động đúng tinh thần sản phẩm.

## Giai đoạn 4 — Sales đăng tin ghim + Admin duyệt (B24–B27)
24. **Sales tạo tin:** form nhập tiêu đề/giá/diện tích/địa chỉ, nhập lat/lng hoặc chọn điểm trên map, submit tạo listing PENDING.
25. **Admin moderation:** danh sách PENDING, approve/reject.
26. **Sau khi approve:** listing xuất hiện trên map khách.
27. **Upload ảnh (Supabase Storage):** Sales up ảnh cho tin.

✅ Kết quả: pipeline “đăng → duyệt → hiển thị” chạy thật.

## Giai đoạn 5 — Credits/Gói nạp mock (B28–B30)
28. **Trang `/credits`:** hiện số dư ví và lịch sử ledger.
29. **Nút “Nạp credits (mock)”:** ghi ledger + cộng wallet.
30. **Sales mua Plus/Boost:** từ kho tin bấm “Đẩy tin 7 ngày” hoặc “Plus ⭐”, trừ credits và cập nhật tier/boost_end_at; ranking trong pin phản ánh thay đổi.

✅ Kết quả: mô hình kiếm tiền MVP hoàn chỉnh.
