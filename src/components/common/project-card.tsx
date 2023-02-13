import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const ProjectCard = ({ id, name, desc, imgSrc }: any) => {
    return (
        <div className="grid grid-cols md:grid-cols-3 rounded-lg items-center bg-[#ffffff14] gap-10 p-10 mb-10 conic-box border">
            <div className="md:col-span-1">
                <img src={`/images/project/${imgSrc}.png`} alt="" />
            </div>
            <div className="grid grid-cols md:col-span-2">
                <h3 className="mb-4 text-2xl font-bold text-left">{name}</h3>
                <p className="mb-4 text-justify">{desc}</p>
                <Link href={`/project/${id}`} className="block text-left">
                    <button className="text-left btn btn-outline btn-primary">
                        Дэлгэрэнгүй <FaAngleRight className="ml-3" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
