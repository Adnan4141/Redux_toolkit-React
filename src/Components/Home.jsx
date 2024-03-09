import { FaArrowAltCircleRight } from "react-icons/fa";



const Home = () => {

   
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black 
             to-gray-800"
             >
            <div className="max-w-screen-lg mx-auto flex-col items-center justify-center
            h-full px-4  md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white"> I'm a Full Stack Developer</h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I have 8 year of experience building and designing software.
                        currently, I love to work on web Applicaton using technologies
                    </p>
                    <div>
                        <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                        bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="hover:rotate-90 duration-300">
                                <FaArrowAltCircleRight size={25}
                                className="ml-1" />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                   <img src="https://img.freepik.com/free-vector/creative-nerd-logo-template_23-2149218771.jpg?size=626&ext=jpg&ga=GA1.1.1465397779.1698061224&semt=ais" 
                    className="rounded-2xl mx-auto  md:w-1/3"
                   />
               
                </div>
            </div>

        </div>
    )
}

export default Home


// rafce