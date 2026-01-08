'use client'

import { Code, Database, Smartphone, TrendingUp } from 'lucide-react'

interface HeroProps {
  onContact?: () => void
}

export default function Hero({ onContact }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              Giải pháp số hóa cho F&B
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Website chuyên nghiệp
              <span className="block text-primary-600">cho quán ăn với giá ưu đãi</span>
            </h1>
            <p className="text-xl text-gray-600">
              Thiết kế website hiện đại, responsive cho quán ăn với giá cạnh tranh. 
              Từ 3 triệu, website đầy đủ tính năng: đặt bàn online, menu động, thanh toán online và nhiều hơn nữa.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-4">
              <div>
                <div className="text-3xl font-bold text-primary-600">Từ 3M</div>
                <div className="text-sm text-gray-600">Giá khởi điểm</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">7-20</div>
                <div className="text-sm text-gray-600">Ngày hoàn thành</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">3-12</div>
                <div className="text-sm text-gray-600">Tháng bảo hành</div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://zalo.me/0978270038"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 transition transform hover:scale-105 shadow-lg text-center"
              >
                Nhận tư vấn miễn phí
              </a>
              <button 
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition"
              >
                Xem gói dịch vụ
              </button>
            </div>
          </div>

          {/* Services Icons */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <Code className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Website Chuyên Nghiệp</h3>
                <p className="text-gray-600 text-sm">Thiết kế hiện đại, responsive, tối ưu tốc độ</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mt-8">
                <Database className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Quản Lý Dữ Liệu</h3>
                <p className="text-gray-600 text-sm">Dashboard theo dõi real-time, báo cáo chi tiết</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <Smartphone className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Mobile App</h3>
                <p className="text-gray-600 text-sm">App đặt món, thanh toán tiện lợi</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mt-8">
                <TrendingUp className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Marketing Tự Động</h3>
                <p className="text-gray-600 text-sm">Tích hợp Zalo, Facebook Pixel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

