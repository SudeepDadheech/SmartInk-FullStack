import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {

  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className='w-full rounded-lg overflow-hidden shadow hover:scale-[1.02] hover:shadow-cyan-400/30 duration-300 cursor-pointer bg-white'
    >
      <img src={image} alt="" className='aspect-video' />
      <span className='ml-5 mt-4 px-3 py-1 inline-block bg-cyan-100 rounded-full text-cyan-700 text-xs'>
        {category}
      </span>
      <div className='p-5'>
        <h5 className='mb-2 font-medium text-slate-800'>{title}</h5>
        <p className='mb-3 text-xs text-slate-600' dangerouslySetInnerHTML={{ "__html": description.slice(0, 80) }}></p>
      </div>
    </div>
  )
}

export default BlogCard
