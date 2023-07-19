"use client"
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = ()=>{

    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find, book, rent a car -- quickly
                an easily!
            </h1>
            <p className='hero__subtitle'>
                We make it easy to find and compare cars at the best prices. 
                Rent or buy your own car effortlessly
            </p>
            <CustomButton 
                title="Explore cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
 
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
               <Image src='/hero.png' alt="hero" fill className='object-contain' />
                <div className="hero__image-overlay" />
            </div>
        </div>
    </div>
  )
}

export default Hero