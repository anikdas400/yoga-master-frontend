import { useEffect, useState } from "react";
import useAxiosFetch from "../../hooks/useAxiosFetch";


const Classes = () => {
    const [classes, setClasses] = useState([])
    const [hoverCard, setHoverCard] = useState()
    const axiosFetch = useAxiosFetch()
    const handleHover = (index) => {
        setHoverCard(index)
    }
    useEffect(() => {
        axiosFetch.get("/classes").then(res => setClasses(res.data)).catch(err => console.log(err)
        )
    }, [])
    console.log(classes)
    return (
        <div>
            <div className="w-[45%] mx-auto border-b-8  border-double border-emerald-400 rounded-xl dark:border-pink-500 mb-10 mt-32">
                <h2 className="text-5xl  font-bold text-center dark:text-white ">Our Classes</h2>
            </div>
            <div className="my-16 w-[90%] mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    classes.map((cls, index) => (
                        <div
                            key={index}
                            className={`relative hover:-translate-y-2 duration-150 hover:ring-[2px] w-64 h-[350px] mx-auto ${cls.availableSeats < 1 ? 'bg-red-300' : 'bg-white'} dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer`}
                            onMouseEnter={()=>handleHover(index)}
                            onMouseLeave={()=>handleHover(null)}
                            >
                            <div className="relative h-48">
                                <div className={`absolute inset-0 opacity-0 transition-opacity bg-black duration-300 ${hoverCard === index ? "opacity-60" : ""}`} />
                                <img src={cls.image} alt="" className="object-cover w-full h-full" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Classes;