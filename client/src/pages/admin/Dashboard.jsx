import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  })

  const { axios } = useAppContext()

  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get('/api/admin/dashboard')
      data.success
        ? setDashboardData(data.dashboardData)
        : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchDashboard()
  }, [])

  return (
    <div className='flex-1 p-4 md:p-10 bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen'>

      {/* Summary Cards */}
      <div className='flex flex-wrap gap-6 mb-10'>

        {/* Card */}
        <div className='flex items-center gap-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-6 rounded-2xl shadow-lg min-w-56 hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_1} alt="" className='w-10 h-10' />
          <div>
            <p className='text-2xl font-bold'>{dashboardData.blogs}</p>
            <p className='text-sm opacity-90'>Blogs</p>
          </div>
        </div>

        <div className='flex items-center gap-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-6 rounded-2xl shadow-lg min-w-56 hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_2} alt="" className='w-10 h-10' />
          <div>
            <p className='text-2xl font-bold'>{dashboardData.comments}</p>
            <p className='text-sm opacity-90'>Comments</p>
          </div>
        </div>

        <div className='flex items-center gap-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white p-6 rounded-2xl shadow-lg min-w-56 hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_3} alt="" className='w-10 h-10' />
          <div>
            <p className='text-2xl font-bold'>{dashboardData.drafts}</p>
            <p className='text-sm opacity-90'>Drafts</p>
          </div>
        </div>

      </div>

      {/* Latest Blogs */}
      <div>
        <div className='flex items-center gap-3 mb-4 text-gray-700 font-semibold text-lg'>
          <img src={assets.dashboard_icon_4} alt="" className='w-6 h-6' />
          <p>Latest Blogs</p>
        </div>

        <div className='relative max-w-6xl overflow-x-auto shadow-xl rounded-xl bg-white'>
          <table className='w-full text-sm text-gray-600'>
            <thead className='text-xs bg-cyan-50 text-cyan-700 uppercase tracking-wider'>
              <tr>
                <th className='px-4 py-4 text-left'>#</th>
                <th className='px-4 py-4 text-left'>Blog Title</th>
                <th className='px-4 py-4 text-left max-sm:hidden'>Date</th>
                <th className='px-4 py-4 text-left max-sm:hidden'>Status</th>
                <th className='px-4 py-4 text-left'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => (
                <tr key={blog._id} className='hover:bg-blue-50/40 transition'>
                  <BlogTableItem
                    blog={blog}
                    fetchBlogs={fetchDashboard}
                    index={index + 1}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
