import {IoIosNotificationsOutline} from "react-icons/io";

export default function Header() {
    return (
        <nav className="w-full bg-white border-gray-200 dark:bg-gray-900 rounded-tl-[40px] rounded-tr-[40px]">
            <div className="w-[89%] flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portfolio
                        </span>
                </a>
                <div className="gap-3 flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <IoIosNotificationsOutline className="text-3xl text-gray-800 dark:text-gray-300"/>
                    <button type="button"
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                            data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="../../public/pf.jpg"
                             alt="user photo"/>
                    </button>
                    <p className="font-medium">Jong Suk</p>
                </div>
            </div>
        </nav>
    )
}