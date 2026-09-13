import foterLogo from "../assets/logo-text.png";

const Footer = () => {

    return (
        <footer className="border-t border-blue-400 bg-white m-20 rounded-4xl shadow-lg pb-1.5 mb-5">

            <div className="flex flex-col md:flex-row justify-between gap-10 max-w-7xl mx-auto px-6 py-14">

                {/* Brand */}
                <div className="flex-1">

                    <img
                        src={foterLogo} alt="Dev Stack" className="w-36 mb-1" />

                    <p className="text-sm text-gray-500 leading-6 max-w-sm mb-5">
                        Curated tools, technologies, and resources for developers
                        building modern software.
                    </p>

                    <div className="flex gap-5">
                        <a
                            href="https://www.facebook.com/mdhojaifa2004"
                            className="text-sm text-gray-500 hover:text-blue-600 transition"
                        >
                            Facebook
                        </a>

                        <a
                            href="https://www.instagram.com/hmsamihasan/"
                            className="text-sm text-gray-500 hover:text-pink-500 transition"
                        >
                            Instagram
                        </a>

                        <a
                            href="https://web.programming-hero.com/web-14/assignment/web-14-assignment-5"
                            className="text-sm text-gray-500 hover:text-orange-500 transition"
                        >
                            Programming Hero
                        </a>
                    </div>

                </div>


                {/* Product-------------------------------------- */}
                <div className="flex-1">

                    <h2 className="text-sm font-bold text-gray-800 mb-5">
                        PRODUCT
                    </h2>

                    <h5 className="text-sm text-gray-500 mb-3 hover:text-gray-900 cursor-pointer transition">
                        Home
                    </h5>

                    <h5 className="text-sm text-gray-500 mb-3 hover:text-gray-900 cursor-pointer transition">
                        Technologies
                    </h5>

                    <h5 className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer transition">
                        Projects
                    </h5>

                </div>


                {/* Company------------------------------- */}



//replacr file
// import foterLogo from "../assets/logo-text.png";

// /const Footer = () => {

// return (
//     <footer className="border-t border-gray-100 bg-white mt-20">
//         <div className="flex col-auto  bg-amber-200" >
//             <div className="justify-center-safe">
//                 <img src={foterLogo} alt="Dev Stack" />
//                 /                     <p>
//                     Curated tools, technologies, and resources for developers
//                     building modern software.
//                 </p>
//                 <a href="https://www.facebook.com/mdhojaifa2004">
//                     Facebook
//                 </a>

//                 <a href="https://www.instagram.com/hmsamihasan/">
//                     Instagram
//                 </a>

//                 <a href="https://web.programming-hero.com/web-14/assignment/web-14-assignment-5">
//                     Programming Hero
//                 </a>
//             </div>


//             <div>
//                 <h2>PRODUCT</h2>
//                 <h5>Home</h5>
//                 <h5>Technologies</h5>
//                 <h5>Projects</h5>
//             </div>


//             <div>
//                 <h2>COMPANY</h2>
//                 <h5>About</h5>
//                 <h5>Contact</h5>
//                 <h5>Careers</h5>
//             </div>


//             <div>
//                 <h2>LEGAL</h2>
//                 <h5>Privacy Policy</h5>
//                 <h5>Terms of Service</h5>
//             </div>

//         </div>
//     </footer>
// );
//  };

// export default Footer;