"use client";
import Image from "next/image";
import { Text } from "@/app/Components/Text/text";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getMesas } from "./utils/getMesas";
import { useEffect,useState } from "react";

export default function Home() {


  const [tables, setTables] = useState<any>([]);

  useEffect(() => {
    getMesas().then((mesas) => {
      console.log(mesas);
      setTables(mesas);
    });
  }, []);




  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24 gap-8">
      <Text className="text-4xl font-bold text-gray-900">
        Welcome to the Restaurant App
      </Text>
      <div className="flex flex-wrap gap-4">
        {tables?.map((table) => (
          <Card key={table.id} className={`cursor-pointer`}>
            <CardHeader>
              <CardTitle>{table.name}</CardTitle>
              <CardDescription>{table.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">
                  Capacity: {table.capacity} people
                </div>
                <Badge className="text-xs">
                  {table.available ? "Available" : "Unavailable"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
