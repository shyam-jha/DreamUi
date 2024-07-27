import Link from "next/link";
import { FaSearch } from "react-icons/fa"; // You need to install react-icons: npm install react-icons

const Search = () => {
    return (
        <div className="flex items-center h-full w-[20rem] max-sm:w-[14rem] p-1 rounded-lg bg-black border border-gray-600 shadow-lg cursor-pointer">
            <FaSearch className="text-gray-400 ml-2" />
            <p className="ml-4 bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none">Search Components</p>
        </div>
    );
};

export default Search;
