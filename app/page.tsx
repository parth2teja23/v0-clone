import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-rose-500">Hi</h1>
      <Button variant="outline">Click Me</Button>
    </div>
  );
}
