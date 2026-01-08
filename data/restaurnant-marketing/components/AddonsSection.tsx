'use client'

import { Check, Plus } from 'lucide-react'

export default function AddonsSection() {
  const addons = [
    {
      category: 'Tính năng nâng cao',
      items: [
        { name: 'Tích hợp đặt món online (food ordering)', price: '2.200.000 VNĐ' },
        { name: 'Hệ thống đặt bàn nâng cao (chọn bàn, thời gian)', price: '1.300.000 VNĐ' },
        { name: 'Tích hợp thanh toán online (Momo, ZaloPay, VNPay)', price: '1.800.000 VNĐ' },
        { name: 'Chatbot Facebook Messenger tự động', price: '1.200.000 VNĐ' },
        { name: 'Hệ thống quản lý khách hàng (CRM)', price: '2.500.000 VNĐ' },
      ]
    },
    {
      category: 'Marketing & SEO',
      items: [
        { name: 'Tích hợp Google Reviews', price: '600.000 VNĐ' },
        { name: 'Email marketing tích hợp', price: '1.800.000 VNĐ' },
        { name: 'Tích hợp Google Analytics nâng cao', price: '900.000 VNĐ' },
        { name: 'Tối ưu SEO nâng cao', price: '1.800.000 VNĐ' },
        { name: 'Tích hợp Live Chat (Zalo, Facebook)', price: '1.000.000 VNĐ' },
      ]
    },
    {
      category: 'Thiết kế & Nội dung',
      items: [
        { name: 'Thiết kế logo chuyên nghiệp', price: '1.200.000 VNĐ' },
        { name: 'Thiết kế menu PDF in ấn', price: '900.000 VNĐ' },
        { name: 'Video giới thiệu quán (30 giây)', price: '2.200.000 VNĐ' },
        { name: 'Multi-language (thêm ngôn ngữ)', price: '1.200.000 VNĐ' },
      ]
    },
    {
      category: 'Hệ thống & Dịch vụ',
      items: [
        { name: 'Hệ thống tích điểm, voucher online', price: '2.200.000 VNĐ' },
        { name: 'App mobile (iOS/Android) cơ bản', price: '6.500.000 VNĐ' },
        { name: 'Tích hợp POS system', price: '3.000.000 VNĐ' },
        { name: 'Dịch vụ quản lý nội dung hàng tháng', price: '1.200.000 VNĐ/tháng' },
        { name: 'Dịch vụ marketing online (SEO, Google Ads)', price: '2.500.000 VNĐ/tháng' },
        { name: 'Hosting & Domain (1 năm)', price: '1.000.000 VNĐ/năm' },
      ]
    },
  ]

  return (
    <section id="addons" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tính năng bổ sung (Add-ons)</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bạn có thể thêm bất kỳ tính năng nào vào gói cơ bản. Tất cả tính năng đều có thể tích hợp vào bất kỳ gói nào.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {addons.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Plus className="w-6 h-6 text-primary-600 mr-2" />
                {category.category}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex justify-between items-start bg-white p-4 rounded-xl">
                    <div className="flex-1">
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mr-2 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item.name}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className="text-primary-600 font-bold text-sm whitespace-nowrap">{item.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            💡 Lưu ý quan trọng
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            <div>
              <p className="text-gray-700 mb-2">
                <strong>✓</strong> Tất cả tính năng add-on có thể được thêm vào bất kỳ gói nào
              </p>
              <p className="text-gray-700 mb-2">
                <strong>✓</strong> Giá có thể thay đổi tùy theo yêu cầu cụ thể
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-2">
                <strong>✓</strong> Hỗ trợ tư vấn miễn phí về tính năng phù hợp
              </p>
              <p className="text-gray-700 mb-2">
                <strong>✓</strong> Có thể thêm tính năng sau khi website đã hoàn thành
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

