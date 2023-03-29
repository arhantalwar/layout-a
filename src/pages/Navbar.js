import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
        <div className="flex justify-between items-center h-16 w-full bg-black text-white px-20">
            <h1>RentMYLinux</h1>
            <ul className="flex gap-16">
                <Link href='/'>
                    Home
                </Link>
                <Link href='/events'>
                    Events
                </Link>
                <Link href='/aboutus'>
                    About Us
                </Link>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar;
