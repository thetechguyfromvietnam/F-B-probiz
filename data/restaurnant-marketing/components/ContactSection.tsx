'use client'

import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'

interface ContactSectionProps {
  onContact?: () => void
}

export default function ContactSection({ onContact }: ContactSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Liên hệ với chúng tôi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bạn muốn có website chuyên nghiệp cho quán ăn? Hãy để chúng tôi tư vấn gói dịch vụ phù hợp nhất với giá ưu đãi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Thông tin liên hệ</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Điện thoại</h4>
                    <p className="text-gray-600">0978270038</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">thestoriesguys@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Địa chỉ</h4>
                    <p className="text-gray-600">Nhà B Lô CD Chung Cư Bình Khánh, Quận 2, TP.HCM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Giờ làm việc</h4>
                    <p className="text-gray-600">24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Sẵn sàng bắt đầu?
            </h3>
            <p className="text-primary-100 text-lg mb-8">
              Hãy liên hệ với chúng tôi để nhận được báo giá chi tiết và timeline triển khai trong 1 ngày làm việc
            </p>
            
            <div className="space-y-4">
              <button
                onClick={onContact}
                className="w-full bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition shadow-lg"
              >
                Nhận báo giá miễn phí
              </button>
              <button className="w-full border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition">
                Gọi ngay: 0978270038
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-primary-500">
              <p className="text-primary-100 text-sm">
                ✓ Tư vấn miễn phí<br />
                ✓ Demo hệ thống thực tế<br />
                ✓ Báo giá trong 24h<br />
                ✓ Hỗ trợ bảo hành lâu dài
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

