import "./globals.css";

export const metadata = {
  title: "Marc Fanantenana — Développeur Web Full-Stack",
  description:
    "Portfolio de Marc Fanantenana Andrianirina, développeur web Full-Stack spécialisé WordPress, PrestaShop, PHP et JavaScript.",
  keywords: [
    "Marc Fanantenana",
    "Développeur web Madagascar",
    "Full-Stack",
    "WordPress",
    "PrestaShop",
    "PHP",
    "JavaScript"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
