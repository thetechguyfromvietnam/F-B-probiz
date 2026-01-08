'use client'

import { TrendingUp, Clock, Shield, Smartphone, Users, Zap } from 'lucide-react'
import { memo } from 'react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: 'Quản lý đặt bàn thông minh',
      description: 'Hệ thống quản lý bàn ăn thời gian thực, giảm thời gian chờ và tăng trải nghiệm khách hàng',
    },
    {
      icon: Smartphone,
      title: 'Menu động & Đặt món online',
      description: 'Khách hàng có thể xem menu và đặt món trực tiếp qua điện thoại, không cần gọi phục vụ',
    },
    {
      icon: TrendingUp,
      title: 'Dashboard theo dõi doanh thu',
      description: 'Báo cáo doanh thu theo thời gian thực, phân tích xu hướng và tối ưu hiệu quả kinh doanh',
    },
    {
      icon: Zap,
      title: 'Tự động hóa marketing',
      description: 'Tích hợp Zalo, Facebook Pixel để tự động quảng cáo và tăng khách hàng mới',
    },
    {
      icon: Shield,
      title: 'Giảm thất thoát & tăng hiệu quả',
      description: 'Quản lý tồn kho, theo dõi chi phí và giảm thiểu thất thoát trong vận hành',
    },
    {
      icon: Clock,
      title: 'Giao diện dễ sử dụng',
      description: 'Thiết kế phù hợp văn hóa F&B Việt Nam, nhân viên có thể sử dụng ngay không cần training',
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tính năng nổi bật</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Giải pháp toàn diện cho nhà hàng hiện đại
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

