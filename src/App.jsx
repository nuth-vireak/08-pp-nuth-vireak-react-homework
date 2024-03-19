import Header from "./components/Header.jsx";
import SideBar from "./components/SideBar.jsx";
import Project from "./components/Project.jsx";
import ClientMessage from "./components/ClientMessage.jsx";

export default function App() {
    return (
        <div className="w-full h-screen bg-gray-300 pt-28">
            <div className="mx-auto w-[85%] bg-gray-200 h-[78%] rounded-tl-[40px] rounded-tr-[40px]">
                <Header/>
                <div className="h-[100%] flex justify-between bg-red-500 rounded-full">
                    <SideBar/>
                    <Project/>
                    <ClientMessage/>
                </div>
            </div>
        </div>
    )
}