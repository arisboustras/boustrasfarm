import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description:
    "Επικοινωνήστε με τη Boustras Farm για ερωτήσεις, προτάσεις συνεργασίας ή πληροφορίες για τα προϊόντα μας.",
  openGraph: {
    title: "Επικοινωνία | Boustras Farm",
    description: "Φόρμα επικοινωνίας και στοιχεία της Boustras Farm.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
