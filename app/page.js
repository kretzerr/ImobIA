export default function Home() {
  return (
    <main>
      <h1>ImobIA 🏠</h1>
      <h2>Crie anúncios de imóveis com Inteligência Artificial</h2>

      <p>
        Descreva seu imóvel e deixe a IA transformar as informações
        em um anúncio profissional.
      </p>

      <textarea
        placeholder="Ex: Apartamento com 2 quartos, garagem, sacada, localizado no centro..."
        rows="8"
        cols="60"
      />

      <br />
      <br />

      <button>Gerar anúncio com IA</button>
    </main>
  );
}
