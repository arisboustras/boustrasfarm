export interface Product {
  id: string;
  name: string;
  nameEl: string;
  description: string;
  descriptionEl: string;
  image: string;
  months: number[];
}

export const products: Product[] = [
  {
    id: "potatoes",
    name: "Potatoes",
    nameEl: "Πατάτες",
    description: "Premium quality potatoes from our fertile soil.",
    descriptionEl: "Πατάτες υψηλής ποιότητας από το γόνιμο έδαφός μας.",
    image: "/images/products/potatoes.jpg",
    months: [4, 5, 6, 7, 8, 9, 10, 11],
  },
  {
    id: "onions",
    name: "Onions",
    nameEl: "Κρεμμύδια",
    description: "Fresh onions with strong flavor and long shelf life.",
    descriptionEl: "Φρέσκα κρεμμύδια με έντονη γεύση και μεγάλη διάρκεια ζωής.",
    image: "/images/products/onions.jpg",
    months: [5, 6, 7, 8, 9],
  },
  {
    id: "cabbage",
    name: "Cabbage",
    nameEl: "Λάχανο",
    description: "Crisp, nutritious cabbage perfect for any dish.",
    descriptionEl: "Τραγανό, θρεπτικό λάχανο ιδανικό για κάθε πιάτο.",
    image: "/images/products/cabbage.jpg",
    months: [10, 11, 12, 1, 2, 3],
  },
  {
    id: "beetroot",
    name: "Beetroot",
    nameEl: "Παντζάρια",
    description: "Sweet, earthy beetroot rich in nutrients.",
    descriptionEl: "Γλυκά, γήινα παντζάρια πλούσια σε θρεπτικά συστατικά.",
    image: "/images/products/beetroot.jpg",
    months: [6, 7, 8, 9, 10, 11],
  },
  {
    id: "spinach",
    name: "Spinach",
    nameEl: "Σπανάκι",
    description: "Tender spinach leaves packed with vitamins.",
    descriptionEl: "Απαλά φύλλα σπανακιού γεμάτα βιταμίνες.",
    image: "/images/products/spinach.jpg",
    months: [10, 11, 12, 1, 2, 3, 4],
  },
  {
    id: "broccoli",
    name: "Broccoli",
    nameEl: "Μπρόκολο",
    description: "Fresh broccoli with vibrant green florets.",
    descriptionEl: "Φρέσκο μπρόκολο με ζωντανά πράσινα λουλούδια.",
    image: "/images/products/broccoli.jpg",
    months: [10, 11, 12, 1, 2, 3],
  },
  {
    id: "cauliflower",
    name: "Cauliflower",
    nameEl: "Κουνουπίδι",
    description: "Creamy white cauliflower, versatile and delicious.",
    descriptionEl: "Κρεμώδες λευκό κουνουπίδι, πολύπλευρο και νόστιμο.",
    image: "/images/products/cauliflower.jpg",
    months: [10, 11, 12, 1, 2, 3],
  },
  {
    id: "lettuce",
    name: "Lettuce",
    nameEl: "Μαρούλι",
    description: "Crisp lettuce for fresh salads.",
    descriptionEl: "Τραγανό μαρούλι για φρέσκες σαλάτες.",
    image: "/images/products/lettuce.jpg",
    months: [4, 5, 6, 7, 8, 9, 10, 11],
  },
  {
    id: "watermelon",
    name: "Watermelon",
    nameEl: "Καρπούζι",
    description: "Sweet, juicy watermelons for summer refreshment.",
    descriptionEl: "Γλυκά, ζουμερά καρπούζια για καλοκαιρινή αναζωογόνηση.",
    image: "/images/products/watermelon.jpg",
    months: [6, 7, 8, 9],
  },
  {
    id: "melon",
    name: "Melon",
    nameEl: "Πεπόνι",
    description: "Aromatic melons with perfect sweetness.",
    descriptionEl: "Αρωματικά πεπόνια με τέλεια γλυκιά.",
    image: "/images/products/melon.jpg",
    months: [6, 7, 8, 9],
  },
  {
    id: "cucumber",
    name: "Cucumber",
    nameEl: "Αγγούρι",
    description: "Cool, refreshing cucumbers for salads.",
    descriptionEl: "Δροσερά, αναζωογονητικά αγγούρια για σαλάτες.",
    image: "/images/products/cucumber.jpg",
    months: [5, 6, 7, 8, 9, 10],
  },
  {
    id: "eggplant",
    name: "Eggplant",
    nameEl: "Μελιτζάνα",
    description: "Rich, meaty eggplants for Mediterranean cuisine.",
    descriptionEl: "Πλούσιες, σαρκώδεις μελιτζάνες για μεσογειακή κουζίνα.",
    image: "/images/products/eggplant.jpg",
    months: [6, 7, 8, 9, 10],
  },
];

export const monthNames: Record<number, string> = {
  1: "Ιαν", 2: "Φεβ", 3: "Μαρ", 4: "Απρ", 5: "Μαϊ", 6: "Ιουν",
  7: "Ιουλ", 8: "Αυγ", 9: "Σεπ", 10: "Οκτ", 11: "Νοε", 12: "Δεκ",
};
