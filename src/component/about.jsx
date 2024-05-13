import React from 'react'
import aboutBG from "../assets/aboutBg.png"
import aboutBgTrans from "../assets/aboutBgTrans.png"

const AboutSection = () => {
  const InsightsData = [
    {title: "Real-Time data", subTitle: "Leverage live market data and trade information to make informed decisions."},
    {title: "Predective Analysis", subTitle: "Uncover emerging trends and opportunities with advanced AI models."},
    {title: "Customized Reporting", subTitle: "Receive personalized insights tailored to your business and goals."},
    {title: "Product Insights", subTitle: "Refine searches with diverse filters and access market trend analysis tailored to your product. Explore geographical trends for deeper understanding and strategic decision-making."},
    {title: `“THE” Marketplace`, subTitle: "Seamlessly search, make AI-driven decisions, and engage in buying or selling—all in one platform. Simplify your journey with no need to look elsewhere."}
  ]
  return (
    <div class="w-screen flex h-screen relative">
      <img src={aboutBG} className='absolute h-auto w-screen object-fill z-[0]' />
      <img src={aboutBgTrans} className='absolute h-auto w-screen object-fill z-[1] ' />
      <div className='flex flex-col justify-center items-center z-10 pt-14'>
        <div className='w-[65%]'>
          <h3 className='text-[28px] text-[#FDCBCB] text-center'>Global Gate Services is a place where businesses come alive with the pulse of AI-driven insights, where every click sparks new possibilities, and where learning is as delightful as it is enlightening. That's the vision behind Globalgate – a vision fueled by passion, powered by technology, and dedicated to empowering businesses like yours to thrive in the global marketplace</h3>
        </div>
        <div>
          <h1 className='text-[60px] font-bold text-white pt-8'>Ai-Powered Market Insights</h1>
        </div>
        <div className='flex w-[90%] flex-wrap justify-center gap-10 mt-10'>
          {InsightsData.map((item, index) => (
            <div key={index} className='w-[28%]'>
              <div className='flex flex-row'>
                <div className='mr-5 flex flex-col'>
                  <div className='w-[50px] h-[50px] bg-[#8FD5FC] rounded-[10px] border-[#DED72B] border-2 text-center text-black text-[32px] font-semibold'>
                    {index + 1}
                  </div>
                </div>
                <div className='flex-col flex-grow'>
                  <p className='text-[32px] text-[#FDCBCB] font-bold'>{item.title}</p>
                  <p className='text-[18px] text-white font-medium'>{item.subTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutSection