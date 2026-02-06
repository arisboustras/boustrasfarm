import type { Metadata } from "next";
import Image from "next/image";
import { products, monthNames } from "@/lib/products";
import { productImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Προϊόντα",
  description:
    "Φρέσκα λαχανικά και προϊόντα από τη Boustras Farm: πατάτες, κρεμμύδια, λάχανο, παντζάρια, σπανάκι, μπρόκολο και πολλά άλλα.",
  openGraph: {
    title: "Προϊόντα | Boustras Farm",
    description: "Φρέσκα λαχανικά από 400+ στρέμματα κοντά στη Λίμνη Υλίκη.",
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#0d1f0d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Τα Προϊόντα μας</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Φρέσκα λαχανικά και προϊόντα από τη γόνιμη γη μας κοντά στη Λίμνη Υλίκη.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
            {products.map((product) => (
              <article
                key={product.id}
                className="group bg-[#f5f9f5] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-smooth"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={productImages[product.id]}
                    alt={product.nameEl}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h2 className="text-xl font-bold text-[#1a3d1a] mb-2">{product.nameEl}</h2>
                  <p className="text-[#5c6b5c] text-sm mb-4">{product.descriptionEl}</p>
                  <div className="flex flex-wrap gap-1">
                    {product.months.map((m) => (
                      <span
                        key={m}
                        className="px-2 py-0.5 bg-[#1a3d1a]/10 text-[#1a3d1a] text-xs rounded"
                      >
                        {monthNames[m]}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#f5f9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3d1a] mb-8">Πίνακας Εποχικότητας</h2>
          <p className="text-[#5c6b5c] mb-8 max-w-2xl">
            Ο πίνακας παρακάτω δείχνει τις μήνες κατά τους οποίους διατίθενται τα προϊόντα μας. Οι εποχές μπορεί να
            διαφέρουν ελαφρώς ανάλογα με τις καιρικές συνθήκες.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-[#1a3d1a] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Προϊόν</th>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => (
                    <th key={m} className="px-2 py-3 text-center text-sm font-medium">
                      {monthNames[m]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => (
                  <tr
                    key={product.id}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#f5f9f5]"}
                  >
                    <td className="px-4 py-3 font-medium text-[#1a3d1a]">{product.nameEl}</td>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => (
                      <td key={m} className="px-2 py-3 text-center">
                        {product.months.includes(m) ? (
                          <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-[#8bc34a] text-white text-sm">
                            ✓
                          </span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
