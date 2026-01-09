# Cách Build Website từ AI - Prompt Guide

## 🤖 Tổng quan

Hướng dẫn sử dụng AI (ChatGPT, Claude, Cursor AI) để build website cho quán ăn một cách hiệu quả.

## 🚀 Tự động Build Website từ Nội dung có sẵn

### Khi đã có sẵn: Nội dung, Hình ảnh, Menu

Nếu bạn đã có sẵn:
- ✅ Nội dung quán ăn (tên quán, mô tả, địa chỉ, SĐT)
- ✅ Hình ảnh (logo, ảnh món ăn, ảnh quán)
- ✅ Menu (danh sách món ăn với giá)

Bạn có thể sử dụng AI để tự động build website hoàn chỉnh!

### Prompt Template: Build Website Tự động

```
Tôi đã có sẵn nội dung và muốn build website quán ăn tự động:

**Thông tin quán:**
- Tên quán: [Tên quán]
- Địa chỉ: [Địa chỉ]
- SĐT: [Số điện thoại]
- Email: [Email]
- Giờ mở cửa: [Giờ]
- Mô tả: [Mô tả ngắn về quán]

**Menu (đã có sẵn):**
[Paste menu ở đây - có thể là Excel, Word, hoặc text]

**Hình ảnh:**
- Logo: [đường dẫn hoặc mô tả]
- Ảnh món ăn: [danh sách hoặc folder]
- Ảnh quán: [đường dẫn]

**Yêu cầu:**
1. Framework: Next.js 14 với App Router
2. Styling: Tailwind CSS
3. Language: TypeScript
4. Tự động tạo:
   - Trang chủ với hero section (dùng tên quán và mô tả)
   - Trang menu động (từ menu đã có)
   - Trang đặt bàn online
   - Trang liên hệ (từ thông tin đã có)
   - Responsive design
   - SEO optimized

Hãy tạo toàn bộ website với nội dung từ thông tin trên.
```

### Prompt: Xử lý Menu từ Excel/Word

```
Tôi có menu quán ăn trong file Excel/Word với format:
- Cột 1: Tên món
- Cột 2: Giá
- Cột 3: Mô tả (nếu có)
- Cột 4: Category (Khai vị, Món chính, etc.)

[Paste nội dung menu hoặc mô tả format]

Hãy:
1. Parse menu này thành JSON format
2. Tạo TypeScript types cho menu
3. Tạo component MenuSection để hiển thị menu này
4. Tự động phân loại theo category
5. Format giá tiền VNĐ đúng cách
```

### Prompt: Tạo Component từ Menu Data

```
Tôi có menu data như sau:
[Paste JSON menu data]

Tạo component MenuSection với:
- Hiển thị menu theo category
- Filter theo category
- Grid layout responsive
- Mỗi món có: hình ảnh (placeholder nếu chưa có), tên, mô tả, giá
- Nút "Thêm vào giỏ" (nếu có tính năng đặt món)
- Sử dụng Next.js Image component
- Tailwind CSS
- TypeScript
```

### Prompt: Tạo Trang chủ từ Thông tin Quán

```
Tạo trang chủ (Homepage) cho quán ăn với thông tin:

**Thông tin quán:**
- Tên: [Tên quán]
- Tagline: [Câu slogan]
- Mô tả: [Mô tả chi tiết]
- Địa chỉ: [Địa chỉ]
- SĐT: [SĐT]
- Email: [Email]
- Giờ mở cửa: [Giờ]

**Hình ảnh:**
- Logo: [mô tả hoặc đường dẫn]
- Hero image: [mô tả]

**Yêu cầu:**
1. Hero section với tên quán và tagline nổi bật
2. About section với mô tả quán
3. Features section (3-4 điểm nổi bật)
4. Menu preview (hiển thị 6-8 món nổi bật)
5. Contact section với thông tin liên hệ
6. CTA buttons: "Xem menu", "Đặt bàn", "Liên hệ"
7. Responsive design
8. SEO optimized với meta tags

Sử dụng Next.js 14, TypeScript, Tailwind CSS.
```

### Prompt: Tự động tạo Database Schema từ Menu

```
Tôi có menu với các món ăn như sau:
[Paste menu data]

Tạo Prisma schema để lưu trữ menu này với:
1. Model Category (Danh mục món ăn)
2. Model Dish (Món ăn) với các trường:
   - id, name, description, price, image, categoryId
   - available (boolean), featured (boolean)
   - createdAt, updatedAt

3. Seed data: Tạo file seed.ts để import menu vào database

4. API routes để:
   - GET /api/menu - Lấy tất cả menu
   - GET /api/menu/[category] - Lấy menu theo category
   - GET /api/menu/[id] - Lấy chi tiết món ăn
```

### Prompt: Tự động Upload và Optimize Hình ảnh

```
Tôi có folder chứa hình ảnh món ăn:
- Đường dẫn: [đường dẫn folder]
- Format: JPG, PNG
- Tên file: [pattern tên file, ví dụ: "mon-1.jpg", "mon-2.jpg"]

Hãy:
1. Tạo script để tự động:
   - Đọc tất cả hình ảnh trong folder
   - Resize và optimize hình ảnh (sử dụng sharp hoặc next/image)
   - Copy vào folder public/images/
   - Tạo mapping giữa tên file và món ăn

2. Tích hợp vào component MenuSection để tự động load hình ảnh

3. Sử dụng Next.js Image component với lazy loading
```

### Workflow Tự động Build Website

#### Bước 1: Chuẩn bị Dữ liệu
```
1. Thu thập thông tin quán:
   - Tên, địa chỉ, SĐT, email
   - Mô tả, giờ mở cửa
   - Logo, hình ảnh quán

2. Chuẩn bị menu:
   - Export từ Excel/Word sang JSON
   - Hoặc paste trực tiếp vào prompt
   - Đảm bảo có: Tên món, Giá, Category

3. Chuẩn bị hình ảnh:
   - Tổ chức vào folder
   - Đặt tên file rõ ràng
   - Tối ưu kích thước (max 2MB/mỗi ảnh)
```

#### Bước 2: Tạo Project Structure
```
Prompt: "Tạo Next.js 14 project với App Router cho quán ăn [Tên quán]"
```

#### Bước 3: Import Menu Data
```
Prompt: "Parse menu này và tạo database schema + seed data:
[Paste menu data]"
```

#### Bước 4: Tạo Components
```
Prompt: "Tạo component MenuSection từ menu data đã có"
Prompt: "Tạo component HeroSection với thông tin quán [thông tin]"
Prompt: "Tạo component ContactSection với thông tin liên hệ [thông tin]"
```

#### Bước 5: Tích hợp Hình ảnh
```
Prompt: "Tạo script để import hình ảnh từ folder [đường dẫn] 
và tích hợp vào menu"
```

#### Bước 6: Tạo Pages
```
Prompt: "Tạo trang chủ với tất cả components đã tạo"
Prompt: "Tạo trang menu đầy đủ"
Prompt: "Tạo trang đặt bàn"
```

#### Bước 7: SEO và Optimization
```
Prompt: "Thêm SEO meta tags cho website quán ăn [Tên quán]"
Prompt: "Optimize images và performance"
```

### Prompt Template: Full Auto Build

```
Tôi muốn build website quán ăn tự động với thông tin có sẵn:

**THÔNG TIN QUÁN:**
```
Tên quán: [Tên]
Địa chỉ: [Địa chỉ]
SĐT: [SĐT]
Email: [Email]
Giờ mở cửa: [Giờ]
Mô tả: [Mô tả]
```

**MENU:**
```
[Paste menu ở đây - format: Tên món | Giá | Category | Mô tả]
```

**HÌNH ẢNH:**
- Logo: [đường dẫn]
- Folder ảnh món: [đường dẫn folder]

**YÊU CẦU:**
1. Tạo Next.js 14 project với TypeScript và Tailwind CSS
2. Tự động parse menu và tạo database schema
3. Tạo tất cả components cần thiết
4. Tạo pages: Home, Menu, Booking, Contact
5. Tích hợp hình ảnh tự động
6. SEO optimized
7. Responsive design

Hãy build toàn bộ website với nội dung từ thông tin trên.
```

### Ví dụ: Menu Format để Paste vào AI

```
Format menu để paste vào prompt:

KHAI VỊ:
- Gỏi cuốn | 80,000 | Khai vị | Gỏi cuốn tươi ngon với tôm và thịt
- Nem nướng | 120,000 | Khai vị | Nem nướng thơm ngon
- Chả giò | 95,000 | Khai vị | Chả giò giòn rụm

MÓN CHÍNH:
- Phở bò | 150,000 | Món chính | Phở bò truyền thống với nước dùng đậm đà
- Bún chả | 130,000 | Món chính | Bún chả Hà Nội
- Cơm gà | 140,000 | Món chính | Cơm gà thơm lừng

TRÁNG MIỆNG:
- Chè thập cẩm | 45,000 | Tráng miệng | Chè thập cẩm tươi mát
- Bánh flan | 55,000 | Tráng miệng | Bánh flan ngọt ngào

ĐỒ UỐNG:
- Cà phê phin | 35,000 | Đồ uống | Cà phê đậm đà
- Nước cam | 40,000 | Đồ uống | Nước cam tươi
```

### Tips khi Build Tự động

1. **Chuẩn bị dữ liệu tốt**: Menu rõ ràng, thông tin đầy đủ
2. **Format nhất quán**: Dùng format chuẩn để AI parse dễ hơn
3. **Kiểm tra kỹ**: Review code AI tạo, đặc biệt là data parsing
4. **Test thực tế**: Test với dữ liệu thật trước khi deploy
5. **Tối ưu sau**: Sau khi build xong, tối ưu performance và SEO

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

