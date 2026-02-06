# Boustras Farm

Ιστοσελίδα για την αγροτική επιχείρηση Boustras Farm.

## Τεχνολογία

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- SEO metadata & Schema.org

## Εγκατάσταση

```bash
npm install
```

## Εκτέλεση

Ανάπτυξη (development):

```bash
npm run dev
```

Ανοίξτε [http://localhost:3000](http://localhost:3000).

Παραγωγή (production):

```bash
npm run build
npm start
```

## Δομή Σελίδων

- `/` - Αρχική
- `/about` - Σχετικά
- `/products` - Προϊόντα
- `/contact` - Επικοινωνία

## Αλλαγή Φωτογραφιών

### Βήμα 1: Προσθήκη φωτογραφιών
Βάλτε τις φωτογραφίες σας στο φάκελο `public/images/`:

```
public/images/
├── hero.jpg          ← Φόντο Hero (αρχική σελίδα)
├── about-farm.jpg    ← Σχετικά με εμάς
├── about-history.jpg ← Ιστορία (About σελίδα)
├── sustainability.jpg
├── logistics.jpg
└── products/         ← Φωτό προϊόντων
    ├── potatoes.jpg
    ├── onions.jpg
    └── ...
```

### Βήμα 2: Ενημέρωση paths
Ανοίξτε το αρχείο `src/lib/images.ts` και αντικαταστήστε τα URLs με τα τοπικά paths:

```ts
// Αντί για: unsplash("...", 1920)
// Χρησιμοποιήστε: "/images/hero.jpg"

export const images = {
  hero: "/images/hero.jpg",
  aboutFarm: "/images/about-farm.jpg",
  // ...
};
```

### Hero background
Για το φόντο του Hero, αλλάξτε το `src/app/globals.css` στη γραμμή με `.parallax-bg`:

```css
.parallax-bg {
  background-image: url('/images/hero.jpg');
  /* ... */
}
```
