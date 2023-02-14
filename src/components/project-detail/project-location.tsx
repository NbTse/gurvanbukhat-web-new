import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("@/components/common/map"), {
    ssr: false,
});

export default function ProjectLocation() {
    return (
        <>
            <section className="container">
                <h4 className="section-heading">Төслийн байршил</h4>
                <MapWithNoSSR />
            </section>
        </>
    );
}
