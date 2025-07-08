"use client"
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import TabBt from "./tab_button";
import {Tabs, Tab} from "@heroui/react";
import CardDesign from "./card";
import {Button, ButtonGroup} from "@heroui/button";
import NewTabBut from "./new_tab_button";
import TabsRadius from "./new_tab_button";
import NewTabBt from "./new_tab_button";
import AccordionShadowVariant from "./dropdown";
import Footer from "./footer";




export default function Home() {
  return (
    <section className="mx-5 relative max-w-[1639px] ">
    
    <div className="flex flex-col-reverse lg:flex-row justify-around items-center bg-[url('/leaf_logo.png')] bg-no-repeat bg-[right_100px_bottom_30px] sm:bg-[right_200px_bottom_30px] lg:bg-[right_470px_bottom_30px] py-5 gap-8 px-4 sm:px-6">

  {/* text */}
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-full sm:max-w-[500px]">
    <div className="text-[28px] sm:text-[36px] lg:text-[45px] font-medium tracking-none font-futura leading-tight">
      Best Islamic <br />Insurance Company In Qatar!
    </div>
    <div className="text-[14px] font-medium font-inter mt-5 lg:mt-2 leading-8">
      we provide <span className="text-primaryGreen border border-primaryGreen bg-primaryGreen/10 p-2 rounded-full">Insurance solution</span> that turn vision into visions into secure future
    </div>
  </div>

  {/* border image */}
  <div className="relative w-[320px] sm:w-[400px] lg:w-[447px] h-[200px] sm:h-[220px] lg:h-[240px] p-[2.5px] rounded-3xl bg-gradient-to-r from-cyanBlue to-leafGreen">
    <div className="w-full h-full bg-white rounded-3xl relative overflow-hidden">
      <img
        className="w-[360px] sm:w-[420px] lg:w-[482px] h-[180px] sm:h-[190px] lg:h-[200px] absolute transform -translate-x-6 translate-y-4"
        src="/mask_group.png"
        alt=""
      />
    </div>
  </div>

</div>

    <div className="flex justify-center">
      <TabBt/>
    </div>
    
    <div className="mt-9">
      <CardDesign cards={[]}/>
    </div>

{/* count */}
<div className="flex items-center justify-center px-4">
  <div className="flex justify-center items-center w-full max-w-[1481px] h-full md:h-[179px] bg-white shadow-[0px_20px_66px_0px_#292D880F] rounded-[32px] mt-9">
    <div className="py-9 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 w-full px-6 md:px-12">

      {/* Block 1 */}
      <div className="flex flex-row items-center gap-5 justify-center">
        <div className="bg-[url('/profile.png')] bg-cover bg-center w-[60px] aspect-square"></div>
        <div className="flex flex-col items-center md:items-start">
          <div className="font-futura font-bold text-[22px]">1M+</div>
          <div className="text-smalltext font-opensans font-normal text-[14px]">Happy Insureds</div>
        </div>
      </div>

      {/* Block 2 */}
      <div className="flex flex-row items-center gap-5 justify-center">
        <div className="bg-[url('/hand.png')] bg-cover bg-center w-[60px] aspect-square"></div>
        <div className="flex flex-col items-center md:items-start">
          <div className="font-futura font-bold text-[22px]">100K+</div>
          <div className="text-smalltext font-opensans font-normal text-[14px]">Claims Settled</div>
        </div>
      </div>

      {/* Block 3 */}
      <div className="flex flex-row items-center gap-5 justify-center">
        <div className="bg-[url('/bag.png')] bg-cover bg-center w-[60px] aspect-square"></div>
        <div className="flex flex-col items-center md:items-start">
          <div className="font-futura font-bold text-[22px]">10+</div>
          <div className="text-smalltext font-opensans font-normal text-[14px]">Years Experience</div>
        </div>
      </div>

      {/* Block 4 */}
      <div className="flex flex-row items-center gap-5 justify-center">
        <div className="bg-[url('/grp.png')] bg-cover bg-center w-[60px] aspect-square"></div>
        <div className="flex flex-col items-center md:items-start">
          <div className="font-futura font-bold text-[22px]">4.9/5</div>
          <div className="text-smalltext font-opensans font-normal text-[14px]">Customers Rating</div>
        </div>
      </div>

    </div>
  </div>
</div>






{/* robo image */}
<div className="fixed right-4 bottom-4 z-50">
  <div className="bg-[url('/robo.png')] w-[115.97px] h-[85.11px] bg-no-repeat bg-contain"></div>
</div>

 {/*About us  */}

<div className="flex justify-center py-10 px-4 sm:px-6">
  <div className="flex flex-col lg:flex-row w-full max-w-[1481px] items-center lg:items-start justify-between gap-10 lg:gap-12">
    
    {/* Image */}
    <div className="w-full max-w-[650px] h-[400px] sm:h-[450px] lg:h-[545px] bg-[url('/aboutus.png')] bg-no-repeat bg-center bg-contain lg:rounded-xl">
    </div>

    {/* Right Side: Text Content */}
    <div className="flex flex-col gap-4 text-center lg:text-left">
      
      {/* Title */}
      <div className="text-leafGreen font-futura font-bold text-[36px] sm:text-[45px] lg:text-[60px] leading-[46px] sm:leading-[60px] lg:leading-[86px] tracking-none text-center md:text-left">
        About <span className="text-leafGreen/50">Us</span>
      </div>

      {/* Subtitle */}
      <div className="mt-5 text-black font-futura font-bold text-[20px] sm:text-[24px] lg:text-[30px] leading-[28px] sm:leading-[32px] lg:leading-[34px] tracking-none text-center md:text-left">
        We Provide Effective Insurance Services and Solutions
      </div>

      {/* Point 01 */}
      <div className="text-black font-futura font-medium text-[15px] sm:text-[16px] leading-[28px] sm:leading-[34px] flex gap-2 justify-center lg:justify-start">
        <span className="font-bold">01.</span>
        A versatile application for all your insurance needs with Beema.
      </div>

      <div className="w-full max-w-[633px] h-[0.5px] bg-line mx-auto lg:mx-0"></div>

      {/* Point 02 */}
      <div className="text-black font-futura font-medium text-[15px] sm:text-[16px] leading-[28px] sm:leading-[34px] flex gap-2 justify-center lg:justify-start">
        <span className="font-bold">02.</span>
        Damaan Islamic Insurance Company - Beema is licensed to operate by Qatar Central Bank 13/2009. The Company’s commercial registration number with the State of Qatar is 43652
      </div>

      <div className="w-full max-w-[633px] h-[0.5px] bg-line mx-auto lg:mx-0"></div>

      {/* Point 03 */}
      <div className="text-black font-futura font-medium text-[15px] sm:text-[16px] leading-[28px] sm:leading-[34px] flex gap-2 justify-center lg:justify-start">
        <span className="font-bold">03.</span>
        Moreover, it offers a wide range of takaful insurance solutions to protect its clients from various risks.
      </div>

      {/* Button */}
      <div className="flex justify-center lg:justify-start">
        <button className="flex items-center justify-center gap-2 max-w-[155px] h-[47px] mt-4 rounded-[75px] border border-primaryGreen text-primaryGreen px-4">
          View more
          <img src="/next.png" />
        </button>
      </div>
    </div>
  </div>
</div>


{/* why insure with us */}
    <div className="flex flex-col items-center">
      {/* topic */}
      <div className="text-leafGreen font-futura font-bold text-[36px] sm:text-[45px] lg:text-[60px] leading-[46px] sm:leading-[60px] lg:leading-[86px] tracking-none text-center md:text-left">
        Why Insure <span className="text-leafGreen/50">With Us</span>
      </div>
      
      {/* Subtitle */}
      <div className="mt-5 text-black font-futura font-bold text-[20px] sm:text-[24px] lg:text-[30px] leading-[28px] sm:leading-[32px] lg:leading-[34px] tracking-none text-center md:text-left">
        Stress-Free Insurance, Simplified.
      </div>

      {/* subtext */}
      <div className="text-black font-futura font-medium text-[15px] sm:text-[16px] leading-[28px] sm:leading-[34px] tracking-none flex gap-2 text-center lg:text-start">
        On a mission to make insurance processes stress-free and straightforward.
      </div>

      {/* Button */}
      <button className=" flex items-center justify-center gap-2 max-w-[155px] h-[47px] mt-4 rounded-[75px] border border-primaryGreen text-primaryGreen px-4">
        More into
        <img src="/next.png"  />
      </button>

    </div>

    {/* laptop image */}
    <div className="bg-red-30 flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-0">
  <div className="w-full max-w-[1009px] aspect-[1009/600] bg-[url('/laptop.svg')] bg-no-repeat bg-center bg-contain "></div>
</div>
    

    {/* Top Rated Insurance App */}
   
    
        <div className=" flex flex-col sm:flex-row lg:flex-rox items-start justify-center w-full gap-16">
          {/* text */}
          <div className="max-w-[750px] mt-9">
              {/* topic */}
              <div className=" text-leafGreen font-futura font-bold text-[36px] sm:text-[45px] lg:text-[60px] leading-[46px] sm:leading-[60px] lg:leading-[86px] tracking-none text-center md:text-left">
                Top Rated <span className="text-leafGreen/50 "> Insurance App</span> 
              </div>

              {/* Subtitle */}
              <div className="mt-5 text-black font-futura font-bold text-[20px] sm:text-[24px] lg:text-[30px] leading-[28px] sm:leading-[32px] lg:leading-[34px] tracking-none text-center md:text-left">
                Get Covered with Beema
              </div>

              {/* subtext */}
              <div className=" text-black font-opensans font-medium   text-[12px] sm:text-[14px] lg:text-[16px] leading-[20px] sm:leading-[22px]  lg:leading-[24px] text-center md:text-left tracking-none flex gap-2 w- whitespace-wrap ">
                Simplify your insurance journey with the top-rated app, offering 
                instant policies, comprehensive coverage, quick claims, 24/7 support.
              </div>

              <div className="bg-[url('/logo.png')] bg-no-repeat bg-contain bg-center w-[250px] sm:w-[300px] lg:w-[348px] h-[40px] sm:h-[44px] lg:h-[46px] mt-10 sm:mt-12 lg:mt-14 mx-auto lg:mx-0"></div>

          </div>

          {/* image gif */}

          <div className="bg-[url('/Top-Rated-Insurance-App.gif')] bg-no-repeat bg-contain bg-center w-[500px] sm:w-[600px] md:w-[700px] lg:w-[900px] h-[300px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
          </div>

        </div>

{/* They Trusted Us */}

        <div className="flex flex-col items-center">

          <div className="text-leafGreen font-futura font-bold text-[36px] sm:text-[45px] lg:text-[60px] leading-[46px] sm:leading-[60px] lg:leading-[86px] tracking-none text-center md:text-left">
            They <span className="text-leafGreen/50">Trusted Us</span>
          </div>
          
          {/* Subtitle */}
          <div className="mt-5 text-black font-futura font-bold text-[20px] sm:text-[24px] lg:text-[30px] leading-[28px] sm:leading-[32px] lg:leading-[34px] tracking-none text-center md:text-left">
            Customer loyalty is priceless, and we win loyalty.
          </div>

          <div className="mt-2 text-black font-futura font-medium text-[15px] sm:text-[16px] leading-[28px] sm:leading-[34px] tracking-none flex gap-2">
            We earn customer loyalty through trust and exceptional service.
          </div>
          

        </div>

        {/* command */}

        <div className="mt-10 flex flex-col items-center w-full px-4">
  <div className="w-full max-w-[767px] rounded-[16px] border border-tabtextcol/10 pb-12">
    
    {/* Card */}
    <div className="mb-8 w-full bg-white rounded-[16px] shadow-[0px_16px_22px_0px_#292D8826] p-6 sm:p-8 text-center relative">
      
      {/* Top quote image */}
      <img 
        src="/comma_up.png" 
        alt="Opening Quote" 
        className="w-8 h-8 sm:w-10 sm:h-10 absolute top-4 sm:top-8 left-4 sm:left-16"
      />

      {/* Testimonial Text */}
      <p className="my-5 text-tabtextcol text-[14px] leading-[26px] font-medium font-opensans max-w-[404px] mx-auto">
        Beema offers various coverage options for Insurance, allowing me to customise my policy to suit my requirements.
        The premiums are competitive, and the level of coverage provided is exceptional. 
        Their user-friendly application and the outstanding customer service team make it easy to understand and select the right policy for my needs.
      </p>

      {/* Bottom quote image */}
      <img 
        src="/comma_down.png" 
        alt="Closing Quote" 
        className="w-8 h-8 sm:w-10 sm:h-10 absolute bottom-4 sm:bottom-8 right-4 sm:right-16"
      />

      {/* Profile image */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        <img 
          src="/guys.jpg"
          alt="User" 
          className="w-16 h-16 rounded-full border-4 border-white shadow-md ring-2 ring-green-500"
        />
      </div>
    </div>

    {/* Star & Arrows */}
    <div className="mt-14 flex flex-row items-center justify-center gap-8 sm:gap-16">
      
      {/* Left Arrow */}
      <button>
        <img src="/arrow-left-s-fill.svg" alt="left" className="w-[26px] h-[26px]" />
      </button>

      {/* Star and User Info */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex justify-center space-x-[6px] mb-[12px]">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src="/star.png" 
              alt="star"
              className="w-[18px] h-[18px]"
            />
          ))}
        </div>

        <h3 className="text-[18px] font-opensans font-bold leading-[26px] text-[#555555]">Rahman</h3>
        <p className="text-[16px] font-futura font-light leading-[26px] text-[#555555]">Qatar, Doha</p>
      </div>

      {/* Right Arrow */}
      <button>
        <img src="/arrow-right-s-fill.svg" alt="right" className="w-[26px] h-[26px]" />
      </button>
    </div>

    {/* Dots */}
    <div className="flex justify-center items-center mt-[10px] space-x-[6px]">
      <div className="w-[16px] h-[6px] bg-[#CDEAB1] rounded-full"></div>
      <div className="w-[6px] h-[6px] bg-[#D9D9D9] rounded-full"></div>
      <div className="w-[6px] h-[6px] bg-[#D9D9D9] rounded-full"></div>
    </div>

  </div>
</div>




         
            <div className="bg-[url('/bgbg.png')]  h-[1200px] bg-no-repeat bg-center bg-contain  w-full">

            <div className="  mt-40 flex flex-col items-center gap-9 ">
              {/* topic */}
              <div className=" text-leafGreen font-futura font-bold text-[36px] sm:text-[45px] lg:text-[60px] leading-[46px] sm:leading-[60px] lg:leading-[86px] tracking-none text-center md:text-left">
                Frequently<span className="text-leafGreen/50 "> Asked Questions</span> 
              </div>

              {/* Subtitle */}
              <div className=" mt-5 text-black font-futura font-bold text-[20px] sm:text-[24px] lg:text-[30px] leading-[28px] sm:leading-[32px] lg:leading-[34px] tracking-none text-center md:text-left">
                Please choose the category to list the relevant FAQs.
              </div>
              
              

              {/* search */}

              <div
                className="w-[406px] h-[46px] rounded-full px-[20px] py-[16px] flex items-center gap-[20px]"
                style={{
                  boxShadow: "inset 7px 6px 6px 0px #0000000A",
                  backgroundColor: "#F5F6FC"
                }}
              >
                <img src="/search.png" alt="Search" className="w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, plans..."
                  className="w-full focus:outline-none text-[14px] text-gray-700 placeholder-gray-400 bg-[#F5F6FC]"
                />
              </div>



            <div><NewTabBt/></div>

            <div className="mt-5"><AccordionShadowVariant /></div>
          {/* Button */}
          <button className=" flex items-center justify-center gap-2 max-w-[155px] h-[47px] mt-1 rounded-[75px] border border-primaryGreen text-primaryGreen px-4">
            Load more
            <img src="/next.png"  />
          </button>


          </div>
          </div>

          <div className="-mt-5 w-full relative bg-[url('/bg_color.png')] bg-no-repeat bg-[length:1000px_1000px] bg-[right_-100px_bottom_-200px]">
            <div className=" flex flex-col items-center">
            <Footer />
            </div>
          </div>
          





    </section>

   


  );
}
