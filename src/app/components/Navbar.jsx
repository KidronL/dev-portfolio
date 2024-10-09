import Link from "next/link";
import react from "react";

const Navbar = () => {
    return (
        <nav>
            <div classname="flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href={"/"} className="text-5xl text-white font-semibold" >LOGO</Link>
                <div classname="menu"></div>
            </div>
        </nav>
    );
};

export default Navbar;