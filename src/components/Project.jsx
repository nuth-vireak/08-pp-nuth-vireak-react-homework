import Card from "./Card.jsx";
import {FaCalendarCheck, FaListUl} from "react-icons/fa";
import {FaDownload} from "react-icons/fa6";
import {TbProgress} from "react-icons/tb";

export default function Project() {
    return (
        <div className="bg-gray-200 w-full h-[100%] flex flex-col p-8 rounded-tl-[40px]">
            <div className="flex justify-between mb-4">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">Projects</h1>
                <button type="button"
                        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ADD
                    NEW PRODUCT
                </button>
            </div>
            <div className="flex gap-x-5">
                <div
                    className="flex items-center w-full max-w-xs p-3 mb-4 text-gray-600 bg-purple-600 rounded-xl">
                    <div
                        className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-black bg-purple-300 rounded-lg">
                        <FaCalendarCheck className="text-xl"/>
                    </div>
                    <div className="flex flex-col text-white">
                        <div className="ms-3 text-sm font-medium">Finish Project</div>
                        <div className="ms-3 text-lg font-medium">13</div>
                    </div>
                </div>
                <div
                    className="flex items-center w-full max-w-xs p-3 mb-4 text-gray-500 bg-purple-400 rounded-xl">
                    <div
                        className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-black bg-purple-200 rounded-lg">
                        <FaDownload className="text-xl"/>
                    </div>
                    <div className="flex flex-col text-white">
                        <div className="ms-3 text-sm font-medium">Upcoming</div>
                        <div className="ms-3 text-lg font-medium">13</div>
                    </div>
                </div>
                <div
                    className="flex items-center w-full max-w-xs p-3 mb-4 text-gray-500 bg-pink-600 rounded-xl">
                    <div
                        className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-black bg-pink-300 rounded-lg">
                        <FaListUl className="text-xl"/>
                    </div>
                    <div className="flex flex-col text-white">
                        <div className="ms-3 text-sm font-medium">Total Project</div>
                        <div className="ms-3 text-lg font-medium">13</div>
                    </div>
                </div>
                <div
                    className="flex items-center w-full max-w-xs p-3 mb-4 text-gray-500 bg-red-600 rounded-xl">
                    <div
                        className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-black bg-red-200 rounded-lg">
                        <TbProgress className="text-xl"/>
                    </div>
                    <div className="flex flex-col text-white">
                        <div className="ms-3 text-sm font-medium">In Progress</div>
                        <div className="ms-3 text-lg font-medium">4</div>
                    </div>
                </div>
            </div>
            <div>
                <Card/>
            </div>
        </div>
    )
}