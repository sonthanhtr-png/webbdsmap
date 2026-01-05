import Link from "next/link";

const quickSteps = [
  {
    title: "Tạo tài khoản",
    description: "Đăng ký nhanh, xác thực Supabase và sẵn sàng xem bản đồ.",
  },
  {
    title: "Xem khu vực hot",
    description: "Dùng bản đồ để lọc khu vực, xem mức giá và tin nổi bật.",
  },
  {
    title: "Đăng tin gắn pin",
    description: "Sales chọn khu vực, gắn pin và thêm mô tả chi tiết.",
  },
  {
    title: "Theo dõi hiệu quả",
    description: "Thống kê lượt xem, trạng thái duyệt và gói boost theo thời gian.",
  },
];

const topSales = [
  { name: "Lan Nguyễn", area: "TP.HCM", rating: 4.9, listings: 128 },
  { name: "Minh Trần", area: "Hà Nội", rating: 4.8, listings: 103 },
  { name: "Quang Lê", area: "Đà Nẵng", rating: 4.7, listings: 86 },
];

const packages = [
  {
    name: "Sales Free",
    price: "0đ",
    features: [
      "Tối đa 5 tin/tháng",
      "Hiển thị cơ bản trên bản đồ",
      "Theo dõi lượt xem",
    ],
  },
  {
    name: "Sales Plus",
    price: "499k/tháng",
    highlight: true,
    features: [
      "Ưu tiên hiển thị & boost pin",
      "Ghim khu vực trả phí",
      "Thống kê nâng cao",
    ],
  },
  {
    name: "Viewer Premium",
    price: "199k/tháng",
    features: [
      "Xem khu vực hot",
      "Tin chính chủ ưu tiên",
      "Thống kê giá theo khu vực",
    ],
  },
];

const comparisons = [
  {
    title: "Facebook nhóm",
    pros: "Tương tác đông, quen thuộc",
    cons: "Trôi bài, khó tìm khu vực, không có bản đồ",
  },
  {
    title: "Kênh truyền thống",
    pros: "Có mối quan hệ sẵn",
    cons: "Khó đo lường hiệu quả, tốn thời gian cập nhật",
  },
  {
    title: "Web BĐS Map",
    pros: "Pin theo khu vực, thống kê lượt xem, duyệt tin và gói boost",
    cons: "Cần đăng ký tài khoản để bắt đầu",
  },
];

export default function HomePage() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">Web BĐS Map</div>
        <nav className="nav">
          <Link href="#hero">Trang chủ</Link>
          <Link href="#map">Bản đồ</Link>
          <Link href="#sales">Dành cho Sales</Link>
          <Link href="#pricing">Bảng giá</Link>
          <Link href="#guide">Hướng dẫn</Link>
          <Link className="ghost" href="/login">
            Đăng nhập
          </Link>
          <Link className="primary" href="/login">
            Đăng ký
          </Link>
        </nav>
      </header>

      <main className="content">
        <section id="hero" className="hero">
          <div>
            <p className="eyebrow">MVP → SCALE</p>
            <h1>Bản đồ bất động sản rõ ràng, tin cậy, dễ hành động</h1>
            <p className="lede">
              Không còn trôi tin. Pin khu vực, duyệt tin, boost hiển thị và theo
              dõi hiệu quả trong một nơi duy nhất.
            </p>
            <div className="cta-row">
              <Link className="cta primary" href="/login">
                Xem bản đồ
              </Link>
              <Link className="cta ghost" href="/login">
                Đăng tin ngay
              </Link>
            </div>
            <p className="meta">30–60s để hiểu giá trị • Không cần cài đặt</p>
          </div>
          <div className="card" id="map">
            <div className="card-header">Giả lập bản đồ</div>
            <p>
              Khu vực HOT: Thủ Đức, Quận 7, Hà Đông. Lọc theo giá, trạng thái
              tin, và cấp độ boost. (Tích hợp map thực tế sẽ bổ sung theo yêu
              cầu.)
            </p>
          </div>
        </section>

        <section id="guide" className="section">
          <div className="section-head">
            <p className="eyebrow">Hướng dẫn nhanh</p>
            <h2>4 bước để bắt đầu</h2>
          </div>
          <div className="grid four">
            {quickSteps.map((step) => (
              <div key={step.title} className="feature-card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="sales" className="section muted">
          <div className="section-head">
            <p className="eyebrow">Top Sales uy tín</p>
            <h2>Được xác thực bởi hệ thống</h2>
          </div>
          <div className="grid three">
            {topSales.map((sale) => (
              <div key={sale.name} className="profile-card">
                <div className="avatar">{sale.name.charAt(0)}</div>
                <div>
                  <h3>{sale.name}</h3>
                  <p>{sale.area}</p>
                  <p>
                    ⭐ {sale.rating} • {sale.listings} tin
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="meta">Bán gói "Top Sales tháng" để tăng hiển thị.</p>
        </section>

        <section id="pricing" className="section">
          <div className="section-head">
            <p className="eyebrow">Gói dịch vụ</p>
            <h2>Chọn gói phù hợp cho Sales và Khách xem</h2>
          </div>
          <div className="grid three">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`pricing-card ${pkg.highlight ? "highlight" : ""}`}
              >
                <div className="card-header">{pkg.name}</div>
                <p className="price">{pkg.price}</p>
                <ul>
                  {pkg.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link className="cta primary" href="/login">
                  Dùng thử
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="section muted">
          <div className="section-head">
            <p className="eyebrow">So sánh nhanh</p>
            <h2>Vì sao Web BĐS Map tốt hơn?</h2>
          </div>
          <div className="comparison">
            {comparisons.map((item) => (
              <div key={item.title} className="comparison-card">
                <h3>{item.title}</h3>
                <p className="pros">{item.pros}</p>
                <p className="cons">{item.cons}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-banner">
          <div>
            <h2>Chuẩn bị scale? Tạo tài khoản và gắn pin ngay hôm nay</h2>
            <p>
              Admin kiểm duyệt, Sales đăng tin, Khách xem khu vực hot — mọi thứ
              trên cùng một bản đồ.
            </p>
          </div>
          <div className="cta-row">
            <Link className="cta primary" href="/login">
              Đăng ký
            </Link>
            <Link className="cta ghost" href="/login">
              Đăng nhập
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
