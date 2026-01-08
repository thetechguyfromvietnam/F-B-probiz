# HƯỚNG DẪN CHẠY WEBSITE DEMO

## Bước 1: Cài đặt Dependencies

Mở terminal và chạy lệnh:

```bash
cd "/Users/anhmai/Desktop/F&B Doanh Nghiệp/data/restaurnant-marketing"
npm install
```

## Bước 2: Chạy Development Server

Sau khi cài đặt xong, chạy lệnh:

```bash
npm run dev
```

## Bước 3: Mở trình duyệt

Website sẽ tự động mở tại: **http://localhost:3000**

Hoặc bạn có thể mở trình duyệt và truy cập địa chỉ trên.

## Bước 4: Xem website

Website bao gồm các phần:
- **Hero Section**: Giới thiệu dịch vụ với giá ưu đãi
- **Features Section**: Tính năng nổi bật
- **Packages Section**: 3 gói dịch vụ (Starter, Professional, Premium)
- **Add-ons Section**: Các tính năng bổ sung có thể thêm
- **Projects Section**: Portfolio các dự án đã làm
- **Contact Section**: Thông tin liên hệ và form đăng ký

## Build cho Production

Nếu muốn build website để deploy:

```bash
npm run build
npm start
```

## Lưu ý

- Website sử dụng Next.js 14 với React 18
- Đã được tối ưu responsive cho mobile, tablet, desktop
- Tất cả giá cả đã được cập nhật theo bảng giá mới (2.5M, 4.5M, 8M)
- Có thể chỉnh sửa nội dung trong các file component

## Cập nhật thông tin

Để cập nhật giá hoặc thông tin:
1. Mở file `components/PackagesSection.tsx` để sửa giá các gói
2. Mở file `components/AddonsSection.tsx` để sửa giá add-ons
3. Mở file `components/ContactSection.tsx` để sửa thông tin liên hệ

