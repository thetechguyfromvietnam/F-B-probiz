# Website Demo - Dịch vụ Thiết kế Website cho Quán Ăn

Website demo hoàn chỉnh để showcase dịch vụ thiết kế website cho các quán ăn với giá ưu đãi.

## 🚀 Tính năng

- **Trang chủ hiện đại**: Hero section với thông tin giá và thời gian
- **Bảng giá 3 gói**: Starter (2.5M), Professional (4.5M), Premium (8M)
- **Tính năng add-on**: Danh sách đầy đủ các tính năng bổ sung với giá
- **Portfolio**: Hiển thị các dự án đã hoàn thành
- **Form liên hệ**: Modal để khách hàng đăng ký tư vấn
- **Responsive design**: Tối ưu cho mobile, tablet, desktop

## 📦 Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Chạy production server
npm start
```

Website sẽ chạy tại: http://localhost:3000

## 🎨 Cấu trúc

- `/app` - Next.js app router
- `/components` - React components
  - `Hero.tsx` - Section đầu trang
  - `PackagesSection.tsx` - Bảng giá 3 gói
  - `AddonsSection.tsx` - Tính năng bổ sung
  - `FeaturesSection.tsx` - Tính năng nổi bật
  - `ProjectsSection.tsx` - Portfolio
  - `ContactSection.tsx` - Thông tin liên hệ
  - `ContactModal.tsx` - Form liên hệ
  - `Navbar.tsx` - Navigation bar
  - `Footer.tsx` - Footer

## 💰 Bảng giá

### Gói cơ bản:
- **Starter**: 2.500.000 VNĐ (7-10 ngày)
- **Professional**: 4.500.000 VNĐ (10-15 ngày) - Khuyến mãi
- **Premium**: 8.000.000 VNĐ (15-20 ngày)

### Tính năng add-on:
- Từ 500.000 VNĐ đến 5.500.000 VNĐ
- Xem chi tiết trong component `AddonsSection`

## 📝 Cập nhật thông tin

Để cập nhật thông tin liên hệ, giá cả, hoặc nội dung:

1. **Giá các gói**: Sửa trong `components/PackagesSection.tsx`
2. **Tính năng add-on**: Sửa trong `components/AddonsSection.tsx`
3. **Thông tin liên hệ**: Sửa trong `components/ContactSection.tsx`
4. **Hero content**: Sửa trong `components/Hero.tsx`

## 🎯 Mục đích

Website này được tạo để:
- Khách hàng có thể xem mẫu website trước khi quyết định
- Showcase các gói dịch vụ và giá cả
- Thu thập thông tin liên hệ từ khách hàng tiềm năng
- Tăng độ tin cậy và chuyên nghiệp

## 📞 Liên hệ

- Email: thestoriesguys@gmail.com
- Hotline: 0978270038
- Địa chỉ: Nhà B Lô CD Chung Cư Bình Khánh, Quận 2, TP.HCM
