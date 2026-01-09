# Menu và Nội dung Website Quán Ăn

## 📋 Cấu trúc Menu Website

### 1. Phân loại Menu

#### Menu theo Category
```
1. KHAI VỊ (Appetizers)
   - Gỏi cuốn
   - Nem nướng
   - Chả giò
   - Salad

2. MÓN CHÍNH (Main Dishes)
   - Phở bò
   - Bún chả
   - Cơm gà
   - Bánh mì

3. TRÁNG MIỆNG (Desserts)
   - Chè thập cẩm
   - Bánh flan
   - Kem

4. ĐỒ UỐNG (Beverages)
   - Cà phê
   - Nước ép
   - Trà
   - Sinh tố
```

### 2. Thông tin mỗi món

#### Cấu trúc Data
```typescript
{
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  featured: boolean
  available: boolean
  ingredients?: string[]
  allergens?: string[]
  spicy?: boolean
  vegetarian?: boolean
}
```

#### Ví dụ
```json
{
  "id": "1",
  "name": "Phở Bò",
  "description": "Phở bò truyền thống với nước dùng đậm đà, thịt bò tươi ngon",
  "price": 150000,
  "image": "/images/pho-bo.jpg",
  "category": "Món chính",
  "featured": true,
  "available": true,
  "ingredients": ["Bánh phở", "Thịt bò", "Hành lá", "Rau thơm"],
  "spicy": false,
  "vegetarian": false
}
```

## 📝 Nội dung Website

### 1. Trang Chủ (Homepage)

#### Hero Section
```
Tiêu đề: "Website chuyên nghiệp cho quán ăn với giá ưu đãi"
Mô tả: "Thiết kế website hiện đại, responsive cho quán ăn với giá cạnh tranh. 
        Từ 3 triệu, website đầy đủ tính năng: đặt bàn online, menu động, 
        thanh toán online và nhiều hơn nữa."
CTA: "Nhận tư vấn miễn phí"
```

#### Features Section
```
- Website Responsive (Mobile, Tablet, Desktop)
- Đặt bàn online tự động
- Menu động, dễ quản lý
- Tích hợp thanh toán online
- Tối ưu SEO
- Bảo hành lâu dài
```

#### Stats Section
```
- Từ 3M: Giá khởi điểm
- 7-20: Ngày hoàn thành
- 3-12: Tháng bảo hành
```

### 2. Trang Menu

#### Layout
```
- Filter theo category (Khai vị, Món chính, Tráng miệng, Đồ uống)
- Grid layout: 3 cột desktop, 2 cột tablet, 1 cột mobile
- Mỗi card món: Hình ảnh, Tên, Mô tả, Giá, Nút "Thêm vào giỏ"
```

#### Content cho mỗi món
```
Tên món: Ngắn gọn, dễ nhớ
Mô tả: 1-2 câu, hấp dẫn
Giá: Rõ ràng, format VNĐ
Hình ảnh: Chất lượng cao, đẹp mắt
```

### 3. Trang Giới thiệu (About)

#### Nội dung
```
- Lịch sử quán
- Tầm nhìn, sứ mệnh
- Đội ngũ
- Giá trị cốt lõi
- Hình ảnh quán
```

### 4. Trang Liên hệ (Contact)

#### Thông tin
```
- Địa chỉ: [Địa chỉ đầy đủ]
- Số điện thoại: [SĐT]
- Email: [Email]
- Giờ mở cửa: [Giờ]
- Google Maps: [Embed map]
- Form liên hệ
```

### 5. Trang Đặt bàn (Booking)

#### Form đặt bàn
```
- Tên khách hàng
- Số điện thoại
- Email
- Số người
- Ngày đặt
- Giờ đặt
- Ghi chú đặc biệt
```

## 🎨 Storytelling cho Website

### 1. Brand Story

#### Template
```
[Quán Ăn] được thành lập năm [Năm] với tầm nhìn [Tầm nhìn].

Chúng tôi tin rằng [Giá trị cốt lõi].

Mỗi món ăn được chế biến với [Phương châm].

[Thông điệp cảm xúc].
```

#### Ví dụ
```
Simple Place được thành lập năm 2020 với tầm nhìn mang đến 
không gian ấm cúng, thân thiện cho mọi người.

Chúng tôi tin rằng thức ăn ngon không chỉ ở hương vị mà còn 
ở trải nghiệm.

Mỗi món ăn được chế biến với tình yêu và sự tận tâm.

Hãy đến và cảm nhận sự khác biệt.
```

### 2. Menu Story

#### Mỗi món có story
```
Phở Bò - Món ăn truyền thống
"Phở bò của chúng tôi được nấu từ nước dùng ninh 12 giờ, 
thịt bò tươi ngon, bánh phở mềm mại. Một bát phở ấm nóng 
sẽ làm ấm lòng bạn trong những ngày mưa."
```

### 3. Chef Story

```
Đầu bếp [Tên] với [X] năm kinh nghiệm trong nghề.
Chuyên về [Chuyên môn].
Đã từng làm việc tại [Nơi làm việc trước].
```

## 📸 Hình ảnh

### 1. Yêu cầu hình ảnh

#### Menu Items
- Kích thước: 800x600px hoặc 1200x900px
- Format: JPG hoặc WebP
- Chất lượng: Cao, rõ nét
- Style: Consistent, professional

#### Quán ăn
- Không gian quán
- Món ăn đẹp mắt
- Đội ngũ nhân viên
- Khách hàng đang thưởng thức

### 2. Nguồn hình ảnh

#### Free Resources
- Unsplash (https://unsplash.com)
- Pexels (https://pexels.com)
- Pixabay (https://pixabay.com)

#### Custom
- Thuê photographer
- Tự chụp (cần đảm bảo chất lượng)

## ✍️ Copywriting Tips

### 1. Headlines
```
✅ Good: "Website chuyên nghiệp cho quán ăn với giá ưu đãi"
❌ Bad: "Website"

✅ Good: "Tăng doanh thu 30% nhờ website"
❌ Bad: "Website tốt"
```

### 2. Descriptions
```
✅ Good: "Phở bò truyền thống với nước dùng đậm đà, 
         thịt bò tươi ngon, bánh phở mềm mại"
❌ Bad: "Phở bò ngon"
```

### 3. CTAs
```
✅ Good: "Nhận tư vấn miễn phí"
❌ Bad: "Click here"

✅ Good: "Đặt bàn ngay"
❌ Bad: "Submit"
```

## 📱 Content cho Mobile

### 1. Short & Sweet
- Tiêu đề ngắn gọn
- Mô tả 1-2 câu
- CTAs rõ ràng
- Hình ảnh tối ưu

### 2. Touch-friendly
- Buttons đủ lớn (min 44x44px)
- Text dễ đọc (min 16px)
- Spacing hợp lý

## 🎯 SEO Content

### 1. Meta Tags
```
Title: "[Tên Quán] - [Địa điểm] | [Mô tả ngắn]"
Description: "[Mô tả 150-160 ký tự]"
Keywords: "[keyword1], [keyword2], [keyword3]"
```

### 2. Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "[Tên Quán]",
  "address": "[Địa chỉ]",
  "telephone": "[SĐT]",
  "servesCuisine": "[Loại ẩm thực]",
  "priceRange": "[Khoảng giá]"
}
```

## 📋 Checklist Nội dung

### Trước khi launch
- [ ] Tất cả menu items có đầy đủ thông tin
- [ ] Hình ảnh chất lượng cao
- [ ] Copywriting hấp dẫn
- [ ] SEO optimized
- [ ] Mobile-friendly
- [ ] Contact info chính xác
- [ ] Social media links
- [ ] Google Maps embedded
- [ ] Terms & Privacy policy (nếu cần)
- [ ] FAQ section (nếu cần)

## 💡 Best Practices

1. **Consistency**: Giữ tone of voice nhất quán
2. **Authenticity**: Nội dung chân thật, không phóng đại
3. **Clarity**: Rõ ràng, dễ hiểu
4. **Emotional**: Kết nối cảm xúc với khách hàng
5. **Action-oriented**: Có CTA rõ ràng

