import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Αρχική" },
  { href: "/about", label: "Σχετικά" },
  { href: "/products", label: "Προϊόντα" },
  { href: "/contact", label: "Επικοινωνία" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1f0d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logos/Boustras-Farm-Primary-Logo-White.png"
                alt="Boustras Farm"
                width={160}
                height={44}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed prose-el">
              Οικογενειακή επιχείρηση από το 1952. 400+ στρέμματα κοντά στη Λίμνη Υλίκη, περιοχή Natura.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#8bc34a] mb-4">Σύνδεσμοι</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#8bc34a] transition-colors py-2 block min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#8bc34a] mb-4">Επικοινωνία</h4>
            <address className="text-gray-300 text-sm not-italic space-y-2 prose-el">
              <p>Λίμνη Υλίκη, Βοιωτία</p>
              <p>Ελλάδα</p>
            </address>
          </div>
        </div>
        <div className="mt-10 sm:mt-12 pt-8 border-t border-[#1a3d1a]/40 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Boustras Farm. Με επιφύλαξη παντός δικαιώματος.
        </div>
      </div>
    </footer>
  );
}
