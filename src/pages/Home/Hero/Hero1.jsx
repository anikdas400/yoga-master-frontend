import bgImg from '../../../assets/home/banner-1.jpg'

const Hero1 = () => {
    return (
        <div className="min-h-screen bg-cover " style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='min-h-screen flex justify-start pl-11 items-center text-white bg-black opacity-60'>
                <div>
                    <div className='space-y-4 '>
                        <p className='md:text-4xl text-2xl'>
                            We <span className='text-green-600 font-semibold italic'>Provide</span>
                        </p>
                        <h2 className='md:text-7xl text-4xl font-bold'>Best <span className='text-sky-400/100'>Yoga </span>Online Course</h2>
                        <div className='md:w-1/2'>
                        An online yoga class is a virtual yoga session conducted through video conferencing platforms. Participants can join from the comfort of their own homes and follow along with a certified yoga instructor.
                        </div>
                        <div className='flex flex-wrap items-center gap-5'>
                            <button className='px-5 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold uppercase rounded-xl'>Join Today</button>
                            <button className='px-5 py-3 outline-double font-bold uppercase rounded-xl hover:bg-secondary'>View Course</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero1;