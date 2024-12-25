import React from 'react'

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
  <div className="text-white-500 flex gap-2">
    <a href="#terms" className="hover:underline">Terms & Conditions</a>
    <span>|</span>
    <a href="#privacy" className="hover:underline">Privacy Policy</a>
  </div>
  <div className="flex gap-3">
    <a href='https://github.com/Andamlaka' target='_blank' className="social-icon">
      <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
    </a>
    <a href='https://www.linkedin.com/in/andargachew-ewaway-847b2b315/' target='_blank' className="social-icon">
      <img src="/assets/linkedin.jpg" alt="linkedin" className="w-1/2 h-1/" />
    </a>
    <div className="social-icon">
      <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
    </div>
  </div>
  <p className='text-white-500'>&copy; 2024 Andargachew. All right reserved.  </p>
</section>
    
  )
}

export default Footer