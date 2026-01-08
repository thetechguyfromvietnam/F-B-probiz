import { ExternalLink } from 'lucide-react'
import { memo } from 'react'
import Image from 'next/image'

const projects = [
  {
    name: 'Healthy Juice - Lolibub',
    description: 'Website chuyên nghiệp cho quán nước ép healthy, thiết kế hiện đại, menu đẹp mắt',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&h=600&fit=crop',
    features: ['Website responsive', 'Menu đẹp mắt', 'Thiết kế hiện đại', 'Tối ưu mobile'],
    url: 'https://www.healthyjuice-lolibub.com/',
    status: 'Hoàn thành',
  },
  {
    name: 'Simple Place',
    description: 'Website đơn giản, tinh tế cho quán ăn với giao diện clean và dễ sử dụng',
    image: '/simpleplace.jpg',
    features: ['Thiết kế minimal', 'Giao diện clean', 'Tối ưu tốc độ', 'Responsive'],
    url: 'https://simple-place-website.vercel.app/',
    status: 'Hoàn thành',
  },
  {
    name: 'Yến Sào Bùi Tuyền',
    description: 'Website chuyên nghiệp cho cửa hàng yến sào, thiết kế sang trọng, showcase sản phẩm đẹp mắt',
    image: '/yensaobuituyen.jpg',
    features: ['Thiết kế sang trọng', 'Showcase sản phẩm', 'Tối ưu SEO', 'Responsive'],
    url: 'https://www.yensaobuituyen.com/',
    status: 'Hoàn thành',
  },
]

function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Dự án đã hoàn thành</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Xem các dự án thực tế chúng tôi đã triển khai cho khách hàng
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform hover:scale-105 group"
            >
              {/* Food Image */}
              <div className="h-64 relative overflow-hidden bg-gray-100 group cursor-pointer" onClick={() => window.open(project.url, '_blank')}>
                <Image
                  src={project.image}
                  alt={`${project.name} - Món ăn`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                />
                
                {/* Fallback gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center hidden"
                  style={{ display: 'none' }}
                >
                  <div className="text-4xl font-bold text-primary-300 opacity-50 text-center px-4">
                    {project.name.split(' ').map(word => word.charAt(0)).join('')}
                  </div>
                </div>
                
                {/* Overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none">
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-primary-600 shadow-lg">
                    {project.status}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Live Website
                  </div>
                  <div className="absolute bottom-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    Click để xem →
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Tính năng:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={project.url}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition group-hover:gap-2 gap-1"
                >
                  Xem chi tiết
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Bạn muốn dự án của bạn xuất hiện ở đây?
          </p>
          <p className="text-primary-600 font-semibold">
            Hãy liên hệ với chúng tôi để bắt đầu!
          </p>
        </div>
      </div>
    </section>
  )
}

export default memo(ProjectsSection)

