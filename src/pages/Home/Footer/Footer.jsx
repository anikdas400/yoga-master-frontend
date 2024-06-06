import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="mb-5">
            <div>
                <div className="text-center mt-20">
                    <h2 className="text-2xl font-semibold dark:text-white">Want us to email you with the <br /> latest blockbuster news ?</h2>
                    <div className="mt-5">
                        <input className="p-2 rounded-3xl" placeholder="example@company.com" type="email" /> <span><button className="btn bg-secondary p-2 rounded-3xl text-white">Subscribe</button></span>
                    </div>
                </div>
            </div>
            {/* footer part */}
            {/* flex flex-col md:flex-row */}
            <div className="mt-10 grid md:grid-cols-2  p-5 md:p-0">
                {/* left side */}
                <div className="">
                    <p className="pl-4 pr-4 dark:text-white text-xl">Our experienced instructors will guide you through  structured lessons, helping you develop a solid foundation  while nurturing  your creativity and musical expression.
                    </p>
                    <div className="flex flex-row gap-3 pl-4 text-blue-600 justify-start items-center text-2xl mt-4 ">
                                <FaLinkedin />
                                <FaFacebook/>
                                <FaInstagram />
                                <FaGithub />
                                <FaTwitter />
                            </div>
                </div>
                {/* right side */}
                <div className="grid grid-cols-3 gap-8 mt-8  pl-4 md:ml-32 md:mt-0 text-center dark:text-white">
                    <div>
                        <h2 className="text-xl font-semibold text-start">Services</h2>
                        <ul className="list-none text-start text-blue-400 mt-2 space-y-1">
                            <li>Rock & Yoga</li>
                            <li>Healthy Diet</li>
                            <li>Fit to health</li>
                            <li>exercise</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-start">About</h2>
                        <ul className="list-none text-start text-blue-400 mt-2 space-y-1">
                            <li>About</li>
                            <li>Careers</li>
                            <li>History</li>
                            <li>Our Team</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-start">Support</h2>
                        <ul className="list-none text-start text-blue-400 mt-2 space-y-1">
                            <li>FAQs</li>
                            <li>Contact</li>
                            <li>Live Chat</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            {/* reserb */}
            <div className="text-center mt-10 bg-slate-200 p-5 dark:text-gray-500 text-sm">
                <p>&copy; Company 2024. All Rights Reserved </p>
                <p>Created With <span className="text-blue-600 text-base">Yoga Master</span></p>
            </div>
        </div>
    );
};

export default Footer;