import { useEffect, useState } from "react";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import img from "../../../assets/home/girl.jpg"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const PopularTeacher = () => {
    const [instructors,setInstructors] = useState([])
    const axiosFetches = useAxiosFetch()
    useEffect(()=>{
        axiosFetches.get('/popular-instructors').then((data)=>{
            setInstructors(data.data)
        }).catch((err)=>{console.log(err)})
    },[axiosFetches])
    // console.log(instructors)
    return (
        <section className="md:w-[80%] mx-auto my-16">
            <div className="w-[45%] mx-auto border-b-8  border-double border-emerald-400 rounded-xl dark:border-pink-500 mb-10">
                <h2 className="text-5xl  font-bold text-center dark:text-white ">Our <span className="text-blue-500">Best</span> Instructors</h2>
                <p className="md:text-lg text-sm text-gray-600 mt-5 mb-2 px-10 dark:text-white text-center">Explore Our Best Teacher. Here is some Best Teacher based on their category</p>
            </div>
            
                
            {
                instructors ? <>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 mb-20 w-[90%] mx-auto gap-4">
                {
                    instructors?.slice(0,4).map((instructor,i)=>(
                        <div className="flex flex-col dark:text-white hover:-translate-y-2 duration-200 cursor-pointer shadow-lg py-4 px-10 md:px-8 mx-auto"  key={i}>
                            <div className="flex flex-col gap-8">
                                <img className="rounded-full border-4 h-24 w-24" src={instructor?.instructor?.photoUrl  || `${img}`} alt="" />
                                <div className="flex flex-col text-center">
                                    <p className="font-medium dark:text-white text-gray-800">{instructor?.instructor?.name}</p>
                                    <p className="text-gray-600 whitespace-nowrap">Instructor</p>
                                    <p className="text-gray-600 whitespace-nowrap">Total Student: {instructor?.totalEnrolled}</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3 text-blue-600 justify-center items-center text-xl mt-3 ">
                                <FaLinkedin />
                                <FaFacebook/>
                                <FaInstagram />
                            
                            
                            
                            </div>
                        </div>
                    ))
                }
                </div>
                
                </> : <></>
            }
            
        </section>
    );
};

export default PopularTeacher;