# Cách Build Website từ AI - Prompt Guide

## 🤖 Tổng quan

Hướng dẫn sử dụng AI (ChatGPT, Claude, Cursor AI) để build website cho quán ăn một cách hiệu quả.

## 📋 Prompt Template Cơ bản

### Prompt 1: Khởi tạo Project
```
Tôi muốn tạo một website cho quán ăn với các yêu cầu sau:

1. Framework: Next.js 14 với App Router
2. Styling: Tailwind CSS
3. Language: TypeScript
4. Features:
   - Trang chủ với hero section
   - Trang menu động
   - Trang đặt bàn online
   - Trang liên hệ
   - Responsive design (mobile-first)
   - Tối ưu SEO

Hãy tạo cấu trúc project và các file cơ bản.
```

### Prompt 2: Tạo Component
```
Tạo component Hero section cho website quán ăn với:
- Tiêu đề: "Website chuyên nghiệp cho quán ăn"
- Mô tả ngắn
- 2 nút: "Xem menu" và "Đặt bàn"
- Background gradient màu cam (#ea580c)
- Responsive design
- Sử dụng Tailwind CSS
```

### Prompt 3: Tạo Layout
```
Tạo layout cho website quán ăn với:
- Navbar: Logo, menu navigation, nút liên hệ
- Footer: Thông tin liên hệ, social media
- Sử dụng Next.js App Router
- TypeScript
- Tailwind CSS
```

## 🎨 Prompt cho Design

### Prompt Design System
```
Tạo design system cho website quán ăn:

Colors:
- Primary: #ea580c (cam)
- Secondary: #f97316
- Background: #fefbf6
- Text: #1a1a1a

Typography:
- Heading: Bold, large
- Body: Regular, readable
- Font: Inter hoặc system font

Components:
- Buttons: Rounded, shadow, hover effect
- Cards: Rounded corners, shadow
- Forms: Clean, modern
```

### Prompt UI Components
```
Tạo các UI components cho website quán ăn:
1. Button component với variants: primary, secondary, outline
2. Card component để hiển thị món ăn
3. Modal component cho đặt bàn
4. Form component với validation
5. Navigation component responsive

Sử dụng Tailwind CSS và TypeScript.
```

## 📝 Prompt cho Nội dung

### Prompt Menu Section
```
Tạo section hiển thị menu món ăn với:
- Grid layout responsive (3 cột desktop, 2 cột tablet, 1 cột mobile)
- Mỗi món có: hình ảnh, tên, mô tả, giá
- Filter theo category: Khai vị, Món chính, Tráng miệng, Đồ uống
- Hover effect
- Sử dụng Next.js Image component
```

### Prompt Booking System
```
Tạo hệ thống đặt bàn online với:
- Form: Tên, SĐT, Email, Số người, Ngày giờ
- Validation
- Calendar picker
- Time slot selection
- Confirmation modal
- Lưu vào database (Prisma)
```

## 🗄️ Prompt cho Database

### Prompt Database Schema
```
Tạo Prisma schema cho website quán ăn với các model:

1. Dish (Món ăn):
   - id, name, description, price, image, categoryId
   
2. Category (Danh mục):
   - id, name, description
   
3. Reservation (Đặt bàn):
   - id, customerName, phone, email, guests, date, time, status
   
4. Order (Đơn hàng):
   - id, customerName, phone, items, total, status, createdAt

Sử dụng PostgreSQL.
```

## 🔧 Prompt cho Features

### Prompt Payment Integration
```
Tích hợp thanh toán online với:
- Momo
- ZaloPay
- VNPay

Tạo API routes để xử lý payment:
- Create payment
- Verify payment
- Update order status

Sử dụng Next.js API routes.
```

### Prompt Admin Dashboard
```
Tạo admin dashboard để quản lý:
- Món ăn (CRUD)
- Đơn hàng
- Đặt bàn
- Thống kê doanh thu

Sử dụng:
- Next.js App Router
- Prisma
- React Query
- Recharts cho charts
```

## 📱 Prompt cho Mobile Optimization

### Prompt Mobile Menu
```
Tạo mobile menu với:
- Hamburger icon
- Slide-in animation
- Close button
- Responsive navigation
- Touch-friendly
```

## 🚀 Prompt cho Deployment

### Prompt Vercel Setup
```
Hướng dẫn deploy website Next.js lên Vercel:
1. Tạo vercel.json (nếu cần)
2. Environment variables
3. Database setup (Vercel Postgres)
4. Build configuration
5. Domain setup
```

## 💡 Best Practices khi dùng AI

### 1. Prompt Structure
```
Luôn cấu trúc prompt rõ ràng:
- Context: Mục đích, framework, tech stack
- Requirements: Tính năng cụ thể
- Constraints: Giới hạn, yêu cầu
- Output: Format mong muốn
```

### 2. Iterative Approach
```
Không yêu cầu tất cả một lúc:
- Bước 1: Cấu trúc project
- Bước 2: Từng component
- Bước 3: Tích hợp
- Bước 4: Testing
```

### 3. Specific Prompts
```
❌ Bad: "Tạo website quán ăn"
✅ Good: "Tạo component MenuSection với TypeScript, Tailwind CSS, 
         hiển thị danh sách món ăn từ API, responsive grid layout"
```

### 4. Code Review
```
Luôn review code AI tạo:
- Check logic
- Check security
- Check performance
- Check best practices
```

## 📚 Prompt Templates Library

### Template: Full Website
```
Tôi muốn tạo website quán ăn với:

Tech Stack:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Prisma (PostgreSQL)
- NextAuth

Pages:
1. Home: Hero, Features, Menu preview, CTA
2. Menu: Full menu với filter
3. Booking: Form đặt bàn
4. Contact: Thông tin liên hệ, map

Features:
- Responsive design
- SEO optimized
- Image optimization
- Form validation
- Database integration

Hãy tạo cấu trúc project và code cho từng page.
```

### Template: Component
```
Tạo component [Tên Component] với:
- Props: [danh sách props]
- Styling: [mô tả style]
- Behavior: [mô tả hành vi]
- Responsive: [breakpoints]
- Accessibility: [a11y requirements]

Sử dụng: [tech stack]
```

### Template: Feature
```
Tích hợp tính năng [Tên tính năng]:
- Description: [mô tả]
- User flow: [luồng người dùng]
- API endpoints: [nếu có]
- Database: [schema changes]
- UI: [giao diện]

Sử dụng: [tech stack]
```

## 🎯 Workflow Build Website từ AI

### Phase 1: Planning
1. Define requirements
2. Create prompt cho structure
3. Review và refine

### Phase 2: Setup
1. Initialize project
2. Setup dependencies
3. Configure tools

### Phase 3: Development
1. Build components (từng cái một)
2. Integrate components
3. Add features
4. Test functionality

### Phase 4: Polish
1. Optimize performance
2. Fix bugs
3. Improve UX
4. SEO optimization

### Phase 5: Deploy
1. Setup production
2. Deploy to Vercel
3. Configure domain
4. Monitor

## ⚠️ Lưu ý quan trọng

1. **Không copy-paste blind**: Luôn review code
2. **Test thoroughly**: Test mọi tính năng
3. **Security first**: Check security vulnerabilities
4. **Performance**: Optimize images, code splitting
5. **SEO**: Meta tags, sitemap, structured data
6. **Accessibility**: WCAG compliance
7. **Mobile-first**: Test trên mobile thật

## 🔗 Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Prisma: https://www.prisma.io/docs
- Vercel: https://vercel.com/docs

