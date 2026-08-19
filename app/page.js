"use client";

import { useState } from "react";

export default function Home() {
  const [descricao, setDescricao] = useState("");
  const [anuncio, setAnuncio] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  async function gerarAnuncio() {
    if (!descricao.trim()) {
      setErro("Digite as informações do imóvel.");
      return;
    }

    setCarregando(true);
    setErro("");
    setAnuncio("");

    try {
      const resposta = await fetch("/api/gerar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ descricao }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.erro || "Erro ao gerar anúncio.");
      }

      setAnuncio(dados.anuncio);
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main>
      <h1>ImobIA 🏠</h1>

      <h2>Crie anúncios de imóveis com Inteligência Artificial</h2>

      <p>
        Descreva seu imóvel e deixe a IA transformar as informações
        em um anúncio profissional.
      </p>

      <textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Ex: Apartamento com 2 quartos, garagem, sacada, localizado no centro..."
        rows="8"
        cols="60"
      />

      <br />
      <br />

      <button onClick={gerarAnuncio} disabled={carregando}>
        {carregando ? "Gerando anúncio..." : "Gerar anúncio com IA"}
      </button>

      {erro && <p>{erro}</p>}

      {anuncio && (
        <div>
          <h2>Anúncio gerado</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{anuncio}</p>
        </div>
      )}
    </main>
  );
}
