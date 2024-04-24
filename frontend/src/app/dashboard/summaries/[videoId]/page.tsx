import { SummaryCardForm } from "@/components/forms/SummaryCardForm";
import { getSummaryById } from "@/data/loaders";


interface ParamsProps {
  params: {
    videoId: string;
  };
}

export default async function SummaryCardRoute({
  params,
}: Readonly<ParamsProps>) {
  const data = await getSummaryById(params.videoId);
  return <SummaryCardForm item={data} />;
}