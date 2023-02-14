import type { NextPage } from "next";
import { useRouter } from "next/router";

import CustomMotion from "@/components/common/custom-motion";
import ProjectDetailHero from "@/components/project-detail/hero";
import ProjectMobileHero from "@/components/project-detail/mobile-hero";
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
            <div className="hidden lg:block">
                <ProjectDetailHero project={project} />
            </div>
            <ProjectMobileHero project={project} />
            <CustomMotion>
                <ProjectIntroduction project={project} />
            </CustomMotion>
            <ProjectChoose project={project} />
            <CustomMotion>
                <ProjectAdvantages project={project} />
            </CustomMotion>
            <CustomMotion>
                <ProjectKindergarten project={project} />
            </CustomMotion>
            <CustomMotion>
                <ProjectCommunityCenter project={project} />
            </CustomMotion>
            <CustomMotion>
                <ProjectRoom project={project} />
            </CustomMotion>
            <CustomMotion>
                <ProjectContact project={project} />
            </CustomMotion>
            <CustomMotion>
                <ProjectLocation />
            </CustomMotion>
            <CustomMotion>
                <ProjectContactSales project={project} />
            </CustomMotion>
        </>
    ) : null;
};

export default ProjectDetail;
