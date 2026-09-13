import logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        
        <nav className="sticky top-0 z-50 flex justify-between container mx-auto bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-3">
            <div>
            <img src={logo} alt="" />
            </div>
            <div className="display flex flex gap-3">
                <h4 className="text-pink-500 font-medium
                ">Home</h4>
                <h4>tecnologi</h4>
                <h4>project</h4>
                <h4>about</h4>
                <h4>contact</h4>
            </div>
            <div className="flex gap-2 b bg-blend-color-burn">
                <button >Login</button>
                <button className="bg-pink-500 text-amber-50 rounded-full p-1.5">Log out</button>
            </div>
        </nav>
        
    );
};

export default Nav; 