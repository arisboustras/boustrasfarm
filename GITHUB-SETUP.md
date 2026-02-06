# Οδηγίες: Σύνδεση με GitHub

## Βήμα 1: Δημιουργία λογαριασμού GitHub (αν δεν έχετε)

1. Πηγαίνετε στο **https://github.com**
2. Κάντε **Sign up** (Εγγραφή)
3. Συμπληρώστε email, password και username

---

## Βήμα 2: Δημιουργία νέου Repository

1. Συνδεθείτε στο GitHub
2. Κάντε κλικ στο **+** (πάνω δεξιά) → **New repository**
3. Συμπληρώστε:
   - **Repository name:** `boustrasfarm` (ή όποιο όνομα θέλετε)
   - **Description:** (προαιρετικό) "Ιστοσελίδα Boustras Farm"
   - **Public**
   - **ΜΗΝ** επιλέγετε "Add a README" ή άλλα αρχεία
4. Κάντε κλικ **Create repository**

---

## Βήμα 3: Άνοιγμα Terminal στο project σας

Ανοίξτε το **Terminal** (ή **命令提示符** στο Mac/Linux) και πληκτρολογήστε:

```bash
cd /Users/aristidisboustras/Downloads/boustrasfarm
```

---

## Βήμα 4: Εντολές Git (αντιγράψτε και τα τρέξτε ένα-ένα)

**Α) Ρύθμιση Git (μόνο πρώτη φορά – αλλάξτε με τα δικά σας στοιχεία):**
```bash
git config --global user.email "το-email-σας@example.com"
git config --global user.name "Το Όνομά σας"
```

**Β) Αν το project δεν έχει ήδη git, αρχικοποίηση:**
```bash
cd /Users/aristidisboustras/Downloads/boustrasfarm
git init
```

**Γ) Προσθήκη αρχείων:**
```bash
git add .
```

**Δ) Πρώτο commit:**
```bash
git commit -m "Boustras Farm - αρχική έκδοση"
```

**Ε) Σύνδεση με το GitHub (αλλάξτε ΤΟ-USERNAME-ΣΟΥ με το username σας):**
```bash
git remote add origin https://github.com/ΤΟ-USERNAME-ΣΟΥ/boustrasfarm.git
```

**ΣΤ) Authentication:** Αν σας ζητήσει login:
- Username: το GitHub username σας
- Password: δημιουργήστε **Personal Access Token** στο GitHub (Settings → Developer settings → Personal access tokens) και χρησιμοποιήστε το αντί για password

**Ζ) Αποστολή στο GitHub:**
```bash
git branch -M main
git push -u origin main
```

---

## Βήμα 5: Σύνδεση με Vercel

1. Πηγαίνετε στο **https://vercel.com** και συνδεθείτε
2. Κάντε κλικ **Add New** → **Project**
3. Επιλέξτε **Import Git Repository**
4. Κάντε **Connect** δίπλα στο GitHub (αν δεν συνδέσατε ακόμα)
5. Επιλέξτε το repository **boustrasfarm**
6. Κάντε κλικ **Import**
7. **Deploy** – το Vercel θα κάνει build και deploy

---

## Από εδώ και πέρα: Πώς να κάνετε deploy αλλαγές

Κάθε φορά που αλλάζετε κάτι:

```bash
cd /Users/aristidisboustras/Downloads/boustrasfarm
git add .
git commit -m "Περιγραφή των αλλαγών"
git push
```

Το Vercel θα κάνει αυτόματα νέο deploy σε ~1–2 λεπτά.
