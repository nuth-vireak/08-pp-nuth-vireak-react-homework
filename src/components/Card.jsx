import { IoMdMore } from "react-icons/io";

export default function Card() {
    return (
        <div className="bg-white w-72 rounded-3xl h-[250px] mt-5">
            <div className="flex">
                <p>12-12-2022</p>
                <IoMdMore/>
            </div>
            <div>
                <p>ABA</p>
                <p>Web Design</p>
            </div>
            <div>3</div>
        </div>
    )
}