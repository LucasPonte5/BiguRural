const supabase = require('../config/supabase');

const rideController = {
  // GET - Listar todas as caronas
  async listar(req, res) {
    const { data, error } = await supabase
      .from('caronas')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  },

  // POST - Criar nova carona
  async oferecer(req, res) {
    const { motorista, origem, destino, vagas, horario } = req.body;
    
    if (!origem || !destino || !vagas) {
      return res.status(400).json({ error: 'Campos obrigatórios faltando.' });
    }

    const { data, error } = await supabase
      .from('caronas')
      .insert([{ 
        motorista, 
        origem, 
        destino, 
        vagas: parseInt(vagas), 
        horario 
      }])
      .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data[0]);
  },

  // PUT - Editar carona (Apenas vagas e horário)
  async editar(req, res) {
    const { id } = req.params;
    const { vagas, horario } = req.body; // Proteção: ignoramos origem/destino aqui

    const { data, error } = await supabase
      .from('caronas')
      .update({ 
        vagas: parseInt(vagas), 
        horario 
      })
      .eq('id', id)
      .select();

    if (error) return res.status(400).json({ error: error.message });
    res.json(data[0]);
  },

  // DELETE - Remover carona
  async deletar(req, res) {
    const { id } = req.params;
    const { error } = await supabase
      .from('caronas')
      .delete()
      .eq('id', id);

    if (error) return res.status(400).json({ error: "Erro ao excluir carona." });
    res.json({ message: "Carona removida!" });
  },

  // PATCH - Reservar vaga (Lógica de Negócio)
  async reservar(req, res) {
    const { id } = req.params;

    const { data: carona, error: searchError } = await supabase
      .from('caronas')
      .select('vagas')
      .eq('id', id)
      .single();

    if (searchError || !carona) return res.status(404).json({ error: "Não encontrada" });
    if (carona.vagas <= 0) return res.status(400).json({ error: "Esgotado!" });

    const { data, error } = await supabase
      .from('caronas')
      .update({ vagas: carona.vagas - 1 })
      .eq('id', id)
      .select();

    if (error) return res.status(400).json({ error: error.message });
    res.json(data[0]);
  }
};

module.exports = rideController;