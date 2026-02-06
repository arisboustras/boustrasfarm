import Link from "next/link";
import Image from "next/image";
import ParallaxHero from "@/components/ParallaxHero";
import ScrollReveal from "@/components/ScrollReveal";
import { images, homeProductImages } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <ParallaxHero>
        <h1 className="sr-only">Boustras Farm - Από τη φάρμα, στο πιάτο σας</h1>
        <div className="mb-8 animate-fade-in-up">
          <Image
            src="/logos/Boustras-Farm-Primary-Logo-White.png"
            alt="Boustras Farm - Από τη φάρμα, στο πιάτο σας"
            width={320}
            height={100}
            className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain drop-shadow-lg mx-auto"
            priority
            fetchPriority="high"
          />
        </div>
        <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-1">
          Οικογενειακή αγροτική παραγωγή από το 1952. Φρέσκα προϊόντα από 400+ στρέμματα κοντά στη Λίμνη Υλίκη.
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-8 text-gray-300 text-sm sm:text-base animate-fade-in-up animate-delay-2">
          <span className="flex items-center gap-2">
            <strong className="text-[#8bc34a]">1952</strong> Έτος ίδρυσης
          </span>
          <span className="flex items-center gap-2">
            <strong className="text-[#8bc34a]">400+</strong> Στρέμματα
          </span>
          <span className="flex items-center gap-2">
            <strong className="text-[#8bc34a]">3</strong> Γενιές εμπειρίας
          </span>
          <span className="flex items-center gap-2">
            <strong className="text-[#8bc34a]">Natura</strong> 2000
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-3">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 min-h-[48px] bg-[#8bc34a] hover:bg-[#7cb342] text-[#0d1f0d] font-semibold rounded-lg shadow-lg transition-smooth"
          >
            Δείτε τα Προϊόντα
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 min-h-[48px] bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border-2 border-white/40 transition-smooth"
          >
            Επικοινωνία
          </Link>
        </div>
      </ParallaxHero>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal variant="slide-right" duration={700}>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3d1a] mb-6">Σχετικά με εμάς</h2>
                <p className="text-[#5c6b5c] leading-relaxed mb-4">
                  Η <strong>Boustras Farm</strong> είναι οικογενειακή επιχείρηση που λειτουργεί από το 1952. Στις όχθες της Λίμνης Υλίκη,
                  σε περιοχή Natura 2000, καλλιεργούμε με σεβασμό στο περιβάλλον και αγάπη για την ποιότητα.
                </p>
                <p className="text-[#5c6b5c] leading-relaxed mb-4">
                  400+ στρέμματα γόνιμης γης, σύγχρονες μεθόδους και εμπειρία τριών γενεών για να φέρουμε στα τραπέζια σας
                  τα καλύτερα φρέσκα λαχανικά.
                </p>
                <p className="text-[#5c6b5c] leading-relaxed mb-6">
                  Συνεργαζόμαστε με λιανοπωλητές, εστιατόρια και αλυσίδες τροφίμων σε όλη την Ελλάδα. Η κεντρική μας θέση κοντά στη Λίμνη Υλίκη επιτρέπει γρήγορη παράδοση.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center min-h-[44px] py-2 text-[#1a3d1a] font-semibold hover:text-[#8bc34a] transition-smooth"
                >
                  Μάθετε περισσότερα
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="slide-left" duration={700} delay={100}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={images.aboutFarm}
                  alt="Boustras Farm - Χρυσό σιτηρά"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  unoptimized
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#f5f9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#1a3d1a] mb-12 sm:mb-16">Γιατί να μας επιλέξετε</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: "Βιωσιμότητα",
                desc: "Πρακτικές φιλικές προς το περιβάλλον σε περιοχή Natura.",
              },
              {
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Ποιότητα",
                desc: "Ελέγχος ποιότητας σε κάθε στάδιο παραγωγής.",
              },
              {
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
                title: "Logistics",
                desc: "Αξιόπιστη παράδοση και διαχείριση αλυσίδας εφοδιασμού.",
              },
              {
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Παράδοση",
                desc: "Φρέσκα προϊόντα εγκαίρως στο τραπέζι σας.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} variant="scale" delay={i * 80} duration={600}>
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-smooth text-[#1a3d1a]">
                  <div className="mb-4 text-[#8bc34a]">{item.icon}</div>
                  <h3 className="font-bold text-lg text-[#1a3d1a] mb-2">{item.title}</h3>
                  <p className="text-[#5c6b5c] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#1a3d1a] mb-12 sm:mb-16">Τα Προϊόντα μας</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {homeProductImages.map(({ name, img }, i) => (
              <ScrollReveal key={name} variant="fade-up" delay={i * 60} duration={550}>
                <Link
                  href="/products"
                  className="group block bg-[#f5f9f5] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-smooth active:scale-[0.98]"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={img}
                      alt={name}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                      unoptimized
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-semibold text-[#1a3d1a]">{name}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal variant="fade-in" delay={300}>
            <div className="text-center mt-8 sm:mt-10">
              <Link
                href="/products"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 bg-[#1a3d1a] hover:bg-[#143014] text-white font-semibold rounded-lg transition-smooth"
              >
                Όλα τα Προϊόντα
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#0d1f0d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal variant="slide-right" duration={700}>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#8bc34a]">Βιωσιμότητα</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Η γεωργία μας στηρίζεται σε βιώσιμες πρακτικές. Σε περιοχή Natura 2000, προστατεύουμε την τοπική
                  βιοποικιλότητα και χρησιμοποιούμε μεθόδους που μειώνουν την περιβαλλοντική μας επίδραση.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Ανανεώσιμη ενέργεια, διαχείριση υδάτων και οργανική καλλιέργεια όπου είναι δυνατόν.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="slide-left" duration={700} delay={120}>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={images.sustainability}
                  alt="Βιώσιμη γεωργία - Πράσινα χωράφια"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  unoptimized
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal variant="slide-left" duration={700} className="order-2 lg:order-1">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
<Image
                src={images.logistics}
                alt="Logistics Boustras Farm"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                unoptimized
              />
              </div>
            </ScrollReveal>
            <ScrollReveal variant="slide-right" duration={700} delay={100} className="order-1 lg:order-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3d1a] mb-6">Logistics & Παράδοση</h2>
                <p className="text-[#5c6b5c] leading-relaxed mb-4">
                  Διαθέτουμε σύγχρονη υποδομή για τη γρήγορη και αξιόπιστη μεταφορά των προϊόντων μας. Από τη συγκομιδή
                  μέχρι την παράδοση, διασφαλίζουμε τη φρεσκάδα και την ποιότητα.
                </p>
                <p className="text-[#5c6b5c] leading-relaxed">
                  Συνεργαζόμαστε με λιανοπωλητές, εστιατόρια και μεγάλες αλυσίδες τροφίμων σε όλη την Ελλάδα.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#f5f9f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="fade-up" duration={600}>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3d1a] mb-6">Επικοινωνήστε μαζί μας</h2>
            <p className="text-[#5c6b5c] mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Ενδιαφέρεστε για συνεργασία ή έχετε ερωτήσεις; Θα χαρούμε να σας απαντήσουμε.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[48px] px-8 py-4 bg-[#1a3d1a] hover:bg-[#143014] text-white font-semibold rounded-lg shadow-lg transition-smooth"
            >
              Φόρμα Επικοινωνίας
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
