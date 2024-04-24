import Link from "next/link";
import { getSummaries } from "@/data/loaders";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LinkCardProps {
  id: string;
  title: string;
  summary: string;
}

function LinkCard({ id, title, summary }: Readonly<LinkCardProps>) {
  return (
    <Link href={`/dashboard/summaries/${id}`}>
      <Card className="relative">
        <CardHeader>
          <CardTitle className="leading-8 text-pink-500">
            {title || "Video Summary"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="w-full mb-4 leading-7">
            {summary.slice(0, 164) + " [read more]"}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default async function SummariesRoute() {
  const { data } = await getSummaries();
  if (!data) return null;
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item: LinkCardProps) => (
          <LinkCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}