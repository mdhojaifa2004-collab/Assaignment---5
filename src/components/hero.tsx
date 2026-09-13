import hero from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <div className="container mx-auto flex items-center justify-between px-6 py-20">

            {/* Left Side  */}

            <div className="w-1/2">

                <h1 className="text-5xl font-bold">
                    Build Your Ideal
                    <br />
                    <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="mt-6 max-w-xl text-gray-500">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack
                    that fits your next project.
                </p>

                <div className="mt-8 flex gap-3">

                    <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-3 rounded-lg hover:bg-fuchsia-300bg-red-600">
                        Explore Technologies
                    </button>

                    <button className="rounded-lg border border-gray-300 px-5 py-3 hover:bg-gray-100">
                        Learn More
                    </button>
                </div>

            </div>
            {/* Right Side */}

            <div className="w-1/2 flex justify-center">                 <img src={hero} alt="Development Stack" className="w-80" />
            </div>

        </div>
    );
};

export default Hero;