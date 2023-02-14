import type { NextPage } from "next";
import { useRouter } from "next/router";

import ProjectDetailHero from "@/components/project-detail/hero";
import ProjectAdvantages from "@/components/project-detail/project-advantages";
import ProjectChoose from "@/components/project-detail/project-choose";
import ProjectCommunityCenter from "@/components/project-detail/project-community-center";
import ProjectContact from "@/components/project-detail/project-contact";
import ProjectContactSales from "@/components/project-detail/project-contact-sales";
import ProjectIntroduction from "@/components/project-detail/project-introduction";
import ProjectKindergarten from "@/components/project-detail/project-kindergarten";
import ProjectLocation from "@/components/project-detail/project-location";
import ProjectRoom from "@/components/project-detail/project-room";

import {
    argabileg,
    florence,
    plusresidence,
    plusapartment,
    lux,
    admiral,
    dalanzadgad,
} from "@/lib/json/projects";

const ProjectDetail: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const project =
        id === "1"
            ? argabileg
            : id === "2"
            ? florence
            : id === "3"
            ? plusresidence
            : id === "4"
            ? plusapartment
            : id === "5"
            ? lux
            : id === "6"
            ? admiral
            : id === "7"
            ? dalanzadgad
            : "";

    return project ? (
        <>
            <ProjectDetailHero project={project} />
            <ProjectIntroduction project={project} />
            {/* <ProjectChoose project={project} /> */}
            {/* <ProjectAdvantages project={project} /> */}
            <ProjectKindergarten project={project} />
            {/* <ProjectCommunityCenter project={project} /> */}
            <ProjectRoom project={project} />
            <ProjectContact project={project} />
            <ProjectLocation />
            <ProjectContactSales project={project} />
        </>
    ) : null;
};

export default ProjectDetail;
