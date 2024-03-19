import {GoClockFill, GoHomeFill} from "react-icons/go";
import {RiUser3Fill} from "react-icons/ri";
import {IoChatbox} from "react-icons/io5";
import {FaBlenderPhone} from "react-icons/fa";
import {AiFillSetting} from "react-icons/ai";

export default function SideBar() {
    return (
        <aside id="default-sidebar"
               className="z-40 w-24 h-[100%] bg-white rounded-bl-[40px]"
               aria-label="Sidebar">
            <div className="px-5 py-5 h-full overflow-y-auto dark:bg-gray-800">
                <ul className="space-y-4">
                    <li>
                        <a href="#"
                           className="flex justify-center p-3 text-gray-900 rounded-full dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
                            <GoHomeFill
                                className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex justify-center p-3 text-gray-900 rounded-full dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
                            <RiUser3Fill
                                className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex justify-center p-3 text-gray-900 rounded-full dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
                            <IoChatbox
                                className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex justify-center p-3 text-gray-900 rounded-full dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
                            <FaBlenderPhone
                                className="w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex justify-center p-3 text-gray-900 rounded-full dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
                            <GoClockFill
                                className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex justify-center p-3 text-gray-900 rounded-full dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
                            <AiFillSetting
                                className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}