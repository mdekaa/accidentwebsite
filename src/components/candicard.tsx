import Image from "next/image"

export default function CandiCard({imagesrc} : {imagesrc: string}) {
    return (
        <div className="w-full flex border-none items-center justify-center rounded-xl">
            <Image 
                alt="Poster for Candidate"
                src={imagesrc}
                width={100}
                height={100}
                className="w-full rounded-xl"
            />
        </div>
    )
}