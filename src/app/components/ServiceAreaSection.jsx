import services from "../../../public/services.json";
import HeaderTitle from "../shared/HeaderTitle";

export default function ServiceAreaSection() {
    const data = services;
    return (
        <div className="my-4">
            <HeaderTitle name={"Service"} title={"Our Service Area"} desc1={"the majority have suffered alteration in some form, by injected humour, or randomised"} desc2={"words which don't look even slightly believable."} />
        </div>
    )
}