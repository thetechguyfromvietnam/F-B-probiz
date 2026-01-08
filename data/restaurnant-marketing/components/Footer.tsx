import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Probiz</h3>
            <p className="text-gray-400">
              Chuyên thiết kế website chuyên nghiệp cho quán ăn với giá ưu đãi. Giúp F&B có website đẹp, hiện đại với giá rẻ hơn thị trường 30-40%.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>0978270038</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>thestoriesguys@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Nhà B Lô CD Chung Cư Bình Khánh, Q.2, TP.HCM</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Giờ làm việc</h4>
            <div className="space-y-2 text-gray-400">
              <p>24/7</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Probiz - Thiết kế website chuyên nghiệp cho quán ăn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

