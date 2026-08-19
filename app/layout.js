export const metadata = {
  title: "ImobIA",
  description: "Gerador de anúncios de imóveis com inteligência artificial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
