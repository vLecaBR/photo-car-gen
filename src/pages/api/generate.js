import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Erro no form:', err);
      return res.status(500).json({ error: 'Erro ao processar formulário' });
    }

    const { brand, model, year, color } = fields;
    console.log('Dados do carro:', { brand, model, year, color });
    console.log('Imagens recebidas:', files);

    // Aqui futuramente você vai chamar sua IA

    // Mock de retorno
    return res.status(200).json({
      image: 'https://via.placeholder.com/600x400?text=Imagem+Gerada+IA',
    });
  });
}
