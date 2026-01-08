'use client'

import { useState, useMemo, memo } from 'react'
import { Plus, Minus } from 'lucide-react'

const categories = [
  { id: 'appetizers', name: 'Khai vị' },
  { id: 'main', name: 'Món chính' },
  { id: 'dessert', name: 'Tráng miệng' },
  { id: 'drinks', name: 'Đồ uống' },
]

const dishes = {
  appetizers: [
    { id: 1, name: 'Nem nướng', price: 120000, image: '/dish-1.jpg', description: 'Nem nướng thơm ngon' },
    { id: 2, name: 'Gỏi cuốn', price: 80000, image: '/dish-2.jpg', description: 'Gỏi cuốn tươi ngon' },
    { id: 3, name: 'Chả giò', price: 95000, image: '/dish-3.jpg', description: 'Chả giò giòn rụm' },
  ],
  main: [
    { id: 4, name: 'Phở bò', price: 150000, image: '/dish-4.jpg', description: 'Phở bò truyền thống' },
    { id: 5, name: 'Cơm gà', price: 140000, image: '/dish-5.jpg', description: 'Cơm gà thơm lừng' },
    { id: 6, name: 'Bún chả', price: 130000, image: '/dish-6.jpg', description: 'Bún chả Hà Nội' },
  ],
  dessert: [
    { id: 7, name: 'Chè thập cẩm', price: 45000, image: '/dish-7.jpg', description: 'Chè thập cẩm tươi mát' },
    { id: 8, name: 'Bánh flan', price: 55000, image: '/dish-8.jpg', description: 'Bánh flan ngọt ngào' },
  ],
  drinks: [
    { id: 9, name: 'Nước cam', price: 40000, image: '/dish-9.jpg', description: 'Nước cam tươi' },
    { id: 10, name: 'Cà phê phin', price: 35000, image: '/dish-10.jpg', description: 'Cà phê đậm đà' },
  ],
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price)
}

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('appetizers')

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Thực đơn</h2>
          <p className="text-xl text-gray-600">Khám phá hương vị đặc biệt của chúng tôi</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Dishes grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {dishes[activeCategory as keyof typeof dishes].map((dish) => (
            <div key={dish.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
              <div className="aspect-video bg-gradient-to-br from-primary-200 to-primary-400 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white font-semibold">{dish.name}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary-600">
                    {formatPrice(dish.price)}
                  </span>
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(MenuSection)

