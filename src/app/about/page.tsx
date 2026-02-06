import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Σχετικά με εμάς",
  description:
    "Οικογενειακή αγροτική επιχείρηση Boustras Farm από το 1952. Ιστορία, αξίες, βιωσιμότητα και γεωργικές πρακτικές κοντά στη Λίμνη Υλίκη.",
  openGraph: {
    title: "Σχετικά με εμάς | Boustras Farm",
    description:
      "Οικογενειακή αγροτική επιχείρηση από το 1952. 400+ στρέμματα κοντά στη Λίμνη Υλίκη, περιοχή Natura.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#0d1f0d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Σχετικά με εμάς</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Οικογενειακή επιχείρηση από το 1952. Από τη φάρμα, στο πιάτο σας.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up"><h2 className="text-3xl font-bold text-[#1a3d1a] mb-12">Ιστορία</h2></ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal variant="slide-right">
              <div>
                <p className="text-[#5c6b5c] leading-relaxed mb-4">
                  Η Boustras Farm ξεκίνησε το 1952 ως μικρή οικογενειακή καλλιέργεια στις όχθες της Λίμνης Υλίκη. Τρεις
                  γενιές αργότερα, συνεχίζουμε την παράδοση με την ίδια αγάπη για τη γη και τα προϊόντα μας.
                </p>
                <p className="text-[#5c6b5c] leading-relaxed mb-4">
                  Από τα πρώτα χρόνια μέχρι σήμερα, επεκτείναμε τις καλλιέργειές μας σε πάνω από 400 στρέμματα, πάντα με
                  σεβασμό στο περιβάλλον και την τοπική κοινότητα.
                </p>
                <p className="text-[#5c6b5c] leading-relaxed">
                  Η περιοχή μας ανήκει στο δίκτυο Natura 2000, γεγονός που μας επιβάλλει ακόμη μεγαλύτερη προσοχή στη
                  βιωσιμότητα και την προστασία της βιοποικιλότητας.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="slide-left" delay={100}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={images.aboutHistory}
                  alt="Ιστορία Boustras Farm - Ελαιόδεντρα Μεσογείου"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#f5f9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3d1a] mb-12">Οι Αξίες μας</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Ποιότητα",
                desc: "Ελέγχος ποιότητας σε κάθε στάδιο. Από τη σπορά μέχρι τη συγκομιδή, διασφαλίζουμε τα καλύτερα αποτελέσματα.",
              },
              {
                title: "Βιωσιμότητα",
                desc: "Φιλικές προς το περιβάλλον πρακτικές, διατήρηση της βιοποικιλότητας και μείωση της περιβαλλοντικής μας επίδρασης.",
              },
              {
                title: "Οικογένεια",
                desc: "Οικογενειακή εμπειρία και αξίες που περνούν από γενιά σε γενιά. Προσέχουμε τους ανθρώπους και τη γη.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-smooth">
                <h3 className="text-xl font-bold text-[#1a3d1a] mb-4">{item.title}</h3>
                <p className="text-[#5c6b5c] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3d1a] mb-12">Βιωσιμότητα</h2>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src={images.sustainability}
                alt="Βιώσιμη γεωργία - Πράσινα χωράφια"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-[#5c6b5c] leading-relaxed mb-4">
                Η βιωσιμότητα δεν είναι επιλογή για εμάς—είναι υποχρέωση. Σε περιοχή Natura 2000, χρησιμοποιούμε μεθόδους
                που προστατεύουν το οικοσύστημα της Λίμνης Υλίκη.
              </p>
              <ul className="space-y-2 text-[#5c6b5c]">
                <li className="flex items-start gap-2">
                  <span className="text-[#8bc34a] mt-1">✓</span>
                  Ανανεώσιμη ενέργεια όπου είναι δυνατόν
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8bc34a] mt-1">✓</span>
                  Ορθολογική διαχείριση υδάτων
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8bc34a] mt-1">✓</span>
                  Μείωση χρήσης φυτοφαρμάκων
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8bc34a] mt-1">✓</span>
                  Προστασία της τοπικής βιοποικιλότητας
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#f5f9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3d1a] mb-12">Γεωργικές Πρακτικές</h2>
          <p className="text-[#5c6b5c] leading-relaxed max-w-3xl mb-8">
            Χρησιμοποιούμε σύγχρονες γεωργικές μεθόδους που συνδυάζουν την παραδοσιακή εμπειρία με την επιστημονική
            γνώση. Οι καλλιέργειές μας ακολουθούν το φυσικό κύκλο των εποχών και τις τοπικές συνθήκες.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Στροφή καλλιεργειών για υγιές έδαφος",
              "Ενσωμάτωση οργανικής ύλης",
              "Έλεγχος εντόμων με φυσικές μεθόδους",
              "Προτιμήση τοπικών σπόρων",
              "Αποφυγή υπερβολικής άρδευσης",
              "Συνεργασία με αγρονόμους",
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
                <span className="text-[#8bc34a] font-bold">•</span>
                <span className="text-[#1a3d1a]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3d1a] mb-12">Λογιστική</h2>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#5c6b5c] leading-relaxed mb-4">
                Η γρήγορη και αξιόπιστη παράδοση είναι προτεραιότητα για εμάς. Διαθέτουμε σύγχρονη υποδομή για τη
                μεταφορά και αποθήκευση των προϊόντων μας σε βέλτιστες συνθήκες.
              </p>
              <p className="text-[#5c6b5c] leading-relaxed mb-4">
                Συνεργαζόμαστε με λιανοπωλητές, εστιατόρια, ξενοδοχεία και μεγάλες αλυσίδες τροφίμων σε όλη την Ελλάδα.
                Η κεντρική μας θέση κοντά στη Λίμνη Υλίκη επιτρέπει γρήγορη πρόσβαση σε μεγάλα αστικά κέντρα.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center min-h-[44px] text-[#1a3d1a] font-semibold hover:text-[#8bc34a] transition-colors"
              >
                Επικοινωνήστε για συνεργασία
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src={images.logistics}
                alt="Λογιστική Boustras Farm"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
