import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { descricao } = await request.json();

    if (!descricao || !descricao.trim()) {
      return Response.json(
        { erro: "Digite as informações do imóvel." },
        { status: 400 }
      );
    }

    const resposta = await openai.responses.create({
      model: "gpt-5.6",
      input: `Crie um anúncio profissional e atraente para venda ou aluguel de um imóvel.

Use somente as informações fornecidas pelo usuário. Não invente características, localização, preço ou benefícios que não foram informados.

Descrição do imóvel:
${descricao}

Escreva em português do Brasil. Crie um título chamativo e depois uma descrição clara, organizada e persuasiva.`,
    });

    return Response.json({
      anuncio: resposta.output_text,
    });
  } catch (erro) {
    console.error(erro);

    return Response.json(
      { erro: "Não foi possível gerar o anúncio. Tente novamente." },
      { status: 500 }
    );
  }
}
