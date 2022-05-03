import HeadingPreview from "../components/HeadingPreview";
import BodyPreview from "../components/BodyPreview";
import ButtonPreview from "../components/ButtonPreview";


export default function Docs() {
    return (
        <div className="flex flex-col gap-y-10">
            <HeadingPreview />
            <BodyPreview />
            <ButtonPreview />
        </div>
    );
}

