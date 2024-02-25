import { Cake, Weight, FileDigit, Thermometer } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <main className="flex h-[calc(100vh-64px)] flex-col items-center text-foreground">
      <section className="grid w-full max-w-96 grid-cols-3 grid-rows-2 gap-4 py-8">
        <Link
          href="/modes/age"
          className="flex flex-col items-center gap-2 rounded-md py-4 text-center hover:bg-zinc-200"
        >
          <Cake />
          <p>Age</p>
        </Link>
        <Link
          href="/modes/bmi"
          className="flex flex-col items-center gap-2 rounded-md py-4 text-center hover:bg-zinc-200"
        >
          <Weight />
          <p>BMI</p>
        </Link>
        <Link
          href="/modes/numeral-system"
          className="flex flex-col items-center gap-2 rounded-md py-4 text-center hover:bg-zinc-200"
        >
          <FileDigit />
          <p>Numeral</p>
        </Link>
        <Link
          href="/modes/temperature"
          className="flex flex-col items-center gap-2 rounded-md py-4 text-center hover:bg-zinc-200"
        >
          <Thermometer />
          <p>Temperature</p>
        </Link>
      </section>
    </main>
  );
}

export default page;
