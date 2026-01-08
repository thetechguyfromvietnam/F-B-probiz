'use client'

import { Check } from 'lucide-react'

export default function PackagesSection() {
  const packages = [
    {
      name: 'GÓI STARTER',
      tagline: 'Website cơ bản cho quán ăn',
      price: '3',
      priceRange: 'triệu',
      originalPrice: '4',
      description: 'Phù hợp cho: Quán cà phê nhỏ, tiệm ăn, quán take-away mới bắt đầu',
      features: [
        'Thiết kế responsive (mobile, tablet, desktop)',
        'Tối đa 5 trang (Trang chủ, Giới thiệu, Menu, Liên hệ, Gallery)',
        'Tích hợp Google Maps',
        'Form liên hệ cơ bản',
        'Tích hợp Facebook, Instagram',
        'Tối ưu SEO cơ bản',
        'Bảo hành 3 tháng',
        'Hỗ trợ cập nhật nội dung 1 lần/tháng (3 tháng đầu)',
      ],
      highlighted: false,
      time: '7-10 ngày',
    },
    {
      name: 'GÓI PROFESSIONAL',
      tagline: 'Website đầy đủ tính năng',
      price: '7',
      priceRange: 'triệu',
      originalPrice: '8.5',
      description: 'Phù hợp cho: Nhà hàng, quán ăn trẻ trung, cần đặt bàn online',
      features: [
        'Tất cả tính năng gói Starter',
        'Tối đa 10 trang',
        'Hệ thống đặt bàn online',
        'Tích hợp thanh toán online (Momo, ZaloPay, VNPay)',
        'Quản lý menu động (thêm/sửa/xóa món)',
        'Gallery ảnh không giới hạn',
        'Tích hợp Google Reviews',
        'Chatbot Facebook Messenger',
        'Bảo hành 6 tháng',
        'Hỗ trợ cập nhật nội dung 2 lần/tháng (6 tháng đầu)',
        'Training sử dụng hệ thống',
      ],
      highlighted: true,
      time: '10-15 ngày',
    },
    {
      name: 'GÓI PREMIUM',
      tagline: 'Website cao cấp toàn diện',
      price: '15',
      priceRange: 'triệu',
      originalPrice: '18',
      description: 'Phù hợp cho: Nhà hàng cao cấp, chuỗi quán ăn, cần đặt món online',
      features: [
        'Tất cả tính năng gói Professional',
        'Không giới hạn số trang',
        'Thiết kế UI/UX chuyên nghiệp, độc quyền',
        'Hệ thống đặt bàn nâng cao (chọn bàn, thời gian)',
        'Tích hợp đặt món online (food ordering)',
        'Hệ thống quản lý khách hàng (CRM)',
        'Tích hợp Google Analytics nâng cao',
        'Email marketing tích hợp',
        'Multi-language (Tiếng Việt + Tiếng Anh)',
        'Bảo hành 12 tháng',
        'Hỗ trợ cập nhật nội dung không giới hạn (12 tháng đầu)',
        'Training và tư vấn marketing online',
      ],
      highlighted: false,
      time: '15-20 ngày',
    },
  ]

  return (
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gói dịch vụ</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chọn gói phù hợp với nhu cầu của nhà hàng bạn
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg overflow-hidden transition transform hover:scale-105 ${
                pkg.highlighted
                  ? 'ring-4 ring-primary-500 border-2 border-primary-500'
                  : 'border border-gray-200'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-2 rounded-bl-2xl font-semibold">
                  Khuyến mãi
                </div>
              )}
              
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-primary-600 font-semibold text-sm">{pkg.tagline}</p>
                  <p className="text-gray-600 mt-2 text-sm">{pkg.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    {pkg.priceRange && (
                      <span className="text-gray-600 ml-2">{pkg.priceRange} VNĐ</span>
                    )}
                    {!pkg.priceRange && (
                      <span className="text-gray-600 ml-2">VNĐ</span>
                    )}
                  </div>
                  {pkg.originalPrice && (
                    <div className="mt-2">
                      <span className="text-sm text-gray-400 line-through">{pkg.originalPrice} triệu VNĐ</span>
                      <span className="ml-2 text-sm text-red-600 font-semibold">Giảm {(parseFloat(pkg.originalPrice) - parseFloat(pkg.price)).toFixed(1)} triệu</span>
                    </div>
                  )}
                  {pkg.time && (
                    <div className="mt-2 text-sm text-gray-600">
                      ⏱️ Thời gian: {pkg.time}
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8 max-h-96 overflow-y-auto">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition ${
                    pkg.highlighted
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Liên hệ ngay
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits section */}
        <div className="mt-20 bg-gradient-to-br from-primary-50 to-white rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            💬 Lợi ích nổi bật
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800 mb-2">📈 Tăng doanh thu</p>
              <p className="text-gray-700">Nhờ quy trình đặt bàn – order – báo cáo được số hóa</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800 mb-2">💰 Giảm chi phí quản lý</p>
              <p className="text-gray-700">Giảm thất thoát nhờ dashboard theo thời gian thực</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800 mb-2">🎨 Giao diện thân thiện</p>
              <p className="text-gray-700">Phù hợp văn hóa F&B, dễ vận hành</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800 mb-2">🤖 Tự động hóa marketing</p>
              <p className="text-gray-700">Qua Zalo / Facebook Pixel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

