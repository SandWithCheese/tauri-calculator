import { Calculator, PlusSquare } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-center gap-12 p-4 text-primary lg:gap-24">
        <div>
          <Link href="/">
            <Calculator size={32} />
          </Link>
        </div>
        <div>
          <Link href="/modes">
            <PlusSquare size={32} />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
