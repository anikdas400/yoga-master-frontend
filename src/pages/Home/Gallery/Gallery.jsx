import image1 from '../../../assets/gallary/image1.png'
import image2 from '../../../assets/gallary/image2.png'

const Gallery = () => {
    return (
        <div>
            <div className='w-[35%] mx-auto my-16'>
            <h2 className=' text-5xl font-bold text-center dark:text-white border-b-8  border-double border-emerald-400 rounded-xl dark:border-pink-500'>Gallery section</h2>
            </div>
          

            {/* image container */}

            <div className='md:grid grid-cols-2 items-center justify-center gap-4 m-4'>
                <div className='mb-4 md:mb-0'>
                    <img src={image1} alt="" className='h-[720px] w-full rounded-md' />
                </div>

                <div className='md:grid grid-cols-2 items-start justify-center gap-4  '>
                    <div>
                        <img src={image2} alt="" className='md:h-[350px] w-full rounded-md mt-2' />
                    </div>
                    <div>
                        <img src={image2} alt="" className='md:h-[350px] w-full rounded-md mt-2' />
                    </div>
                    <div>
                        <img src={image2} alt="" className='md:h-[350px] w-full rounded-md mt-2 ' />
                    </div>
                    <div>
                        <img src={image2} alt="" className='md:h-[350px] w-full rounded-md mt-2 ' />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Gallery;