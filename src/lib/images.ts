/**
 * Εικόνες για το site.
 * Για δικές σας φωτό: βάλτε στο public/images/ και αλλάξτε τα paths.
 * Π.χ. hero: "/images/hero.jpg"
 */
const unsplash = (id: string, w: number, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}`;

export const images = {
  hero: unsplash("1472214103451-9374bd1c798e", 1920), // Olive grove, Mediterranean
  aboutFarm: unsplash("1500382017468-9049fed747ef", 800), // Golden wheat field, Mediterranean
  aboutHistory: unsplash("1558618666-fcd25c85cd64", 800), // Olive trees, Greece
  sustainability: unsplash("1416879595882-3373a0480b5b", 800), // Organic green fields
  logistics: unsplash("1605000797499-95a51c5269ae", 800), // Farm logistics
  vegetables: unsplash("1540420773420-3366772f4999", 800), // Fresh Mediterranean vegetables
} as const;

export const productImages: Record<string, string> = {
  potatoes: unsplash("1518977676601-b53f82aba655", 600),
  onions: unsplash("1615485290382-441e4d049cb5", 600),
  cabbage: unsplash("1540420773420-3366772f4999", 600),
  beetroot: unsplash("1595855759920-86582396756a", 600),
  spinach: unsplash("1576045057995-568f588f82fb", 600),
  broccoli: unsplash("1459411552884-841db9b3cc2a", 600),
  cauliflower: unsplash("1615485925538-7d2e0c429f0a", 600),
  lettuce: unsplash("1540189549336-e6e99c3679fe", 600),
  watermelon: unsplash("1589984662646-e7b2e4962f18", 600),
  melon: unsplash("1628771065518-0d82f1938462", 600),
  cucumber: unsplash("1604977042946-077fd0e1a2b2", 600),
  eggplant: unsplash("1592924357228-91a4daadcfe8", 600),
};

export const homeProductImages = [
  { name: "Πατάτες", img: unsplash("1518977676601-b53f82aba655", 400) },
  { name: "Κρεμμύδια", img: unsplash("1615485290382-441e4d049cb5", 400) },
  { name: "Λάχανο", img: unsplash("1540420773420-3366772f4999", 400) },
  { name: "Μαρούλι", img: unsplash("1540189549336-e6e99c3679fe", 400) },
];
