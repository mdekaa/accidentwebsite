import { format } from "date-fns";
import { unstable_noStore } from "next/cache";
import Markdown from "react-markdown";

type Roadmap = {
  id: string;
  title: string;
  description: string;
  releaseDate: string;
  version?: string;
};

export default async function RoadmapPage() {
  

  return (
    <div className="container max-w-5xl mx-auto">
      <div className="flex flex-row justify-between mb-8">
        <h1 className="my-12 text-[28px] leading-[34px] tracking-[-0.416px] text-neutral-12 font-bold">
          Candidate Agendas
        </h1>
      </div>

      

    </div>
  );
}
