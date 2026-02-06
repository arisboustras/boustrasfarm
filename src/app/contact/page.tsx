"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
  }

  return (
    <>
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#0d1f0d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Επικοινωνία</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Επικοινωνήστε μαζί μας για ερωτήσεις ή προτάσεις συνεργασίας.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#1a3d1a] mb-6">Φόρμα Επικοινωνίας</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1a3d1a] mb-2">
                      Όνομα *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 min-h-[48px] rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1a3d1a] focus:border-transparent outline-none transition"
                      placeholder="Το όνομά σας"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1a3d1a] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 min-h-[48px] rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1a3d1a] focus:border-transparent outline-none transition"
                      placeholder="email@παράδειγμα.gr"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#1a3d1a] mb-2">
                    Θέμα *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 min-h-[48px] rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1a3d1a] focus:border-transparent outline-none transition"
                    placeholder="Θέμα μηνύματος"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1a3d1a] mb-2">
                    Μήνυμα *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 min-h-[120px] rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1a3d1a] focus:border-transparent outline-none transition resize-none"
                    placeholder="Το μήνυμά σας..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto min-h-[48px] px-8 py-4 bg-[#1a3d1a] hover:bg-[#143014] disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors"
                >
                  {status === "sending" ? "Αποστολή..." : status === "success" ? "Απεστάλη!" : "Αποστολή"}
                </button>
                {status === "success" && (
                  <p className="text-[#1a3d1a] font-medium">Το μήνυμά σας στάλθηκε επιτυχώς. Θα σας απαντήσουμε σύντομα.</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 font-medium">Παρουσιάστηκε σφάλμα. Δοκιμάστε ξανά.</p>
                )}
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1a3d1a] mb-6">Στοιχεία Επικοινωνίας</h2>
              <div className="space-y-6 text-[#5c6b5c]">
                <div>
                  <h3 className="font-semibold text-[#1a3d1a] mb-2">Boustras Farm</h3>
                  <p>Λίμνη Υλίκη</p>
                  <p>Βοιωτία, Ελλάδα</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a3d1a] mb-2">Περιοχή</h3>
                  <p>400+ στρέμματα κοντά στη Λίμνη Υλίκη, σε περιοχή Natura 2000.</p>
                </div>
              </div>
              <div className="mt-8 rounded-xl overflow-hidden border border-gray-200 shadow-sm aspect-video bg-gray-100">
                <iframe
                  src="https://maps.google.com/maps?q=38.4167,23.25&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Boustras Farm - Λίμνη Υλίκη"
                  className="w-full h-full min-h-[250px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
