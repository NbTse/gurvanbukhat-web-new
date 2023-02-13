const CustomCard = ({ name, subname, imgSrc }: any) => {
    return (
        <div className="rounded-xl card duration-300 hover:shadow-[0_0_30px_#2154EC]">
            <figure>
                <img src={imgSrc} alt="Shoes" />
            </figure>
            <div className="rounded-b-xl card-body">
                <h2 className="card-title">{name}</h2>
                <p className="!text-sm">{subname}</p>
            </div>
        </div>
    );
};

export default CustomCard;
