import { useEffect, useState } from "react";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import Card from "./Card";


const PopularClasses = () => {
    const axiosFetch = useAxiosFetch()
    const [classes,setClasses] =useState([])
    useEffect(()=>{
        const fatchClasses = async()=>{
            const respons = await axiosFetch.get('/classes')
            // console.log(respons.data)
            setClasses(respons.data)
        }
        fatchClasses()

    },[axiosFetch])
    // console.log(classes)
    return (
        <section className="md:w-[80%] mx-auto my-16">
            <div className="w-[45%] mx-auto border-b-8  border-double border-emerald-400 rounded-xl dark:border-pink-500">
                <h2 className="text-5xl  font-bold text-center dark:text-white ">Our <span className="text-orange-500">Popular</span> Classes</h2>
                <p className="md:text-lg text-sm text-gray-600 mt-5 mb-2 px-10 dark:text-white text-center">Explore Our Popular Classes. Here is some popular classes based on How many student enrolled</p>
            </div>
            <div>
                {
                    classes.map((item,index)=><Card key={index} item={item}></Card>)
                }
            </div>
        </section>
    );
};

export default PopularClasses;