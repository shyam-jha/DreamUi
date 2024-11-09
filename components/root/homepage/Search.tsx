import { useState, useEffect } from "react";
import { FaSearch, FaWindows } from "react-icons/fa"; // Import Windows icon
import SearchModal from "./SearchModal";

const Search = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.metaKey && event.key === 'k') { // For Mac, use metaKey, for Windows, you may use ctrlKey
            event.preventDefault();
            handleModalToggle();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <>
            <div className="flex items-center h-full w-[14rem] lg:w-[20rem] p-1 rounded-lg bg-black border border-gray-600 shadow-lg cursor-pointer relative" onClick={handleModalToggle}>
                <FaSearch className="text-gray-400 ml-2" />
                <p className="ml-4 bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none">Search...</p>

                <div className="absolute right-2 flex items-center px-2 bg-zinc-600 rounded-sm space-x-1 text-xs text-white">
                    <FaWindows className="text-white" />
                    <span>+ K</span>
                </div>
            </div>

            {isModalOpen && <SearchModal onClose={handleModalToggle} />}
        </>
    );
};

export default Search;
