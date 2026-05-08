import { useEffect, useState } from 'react';
import { rideService } from './services/api';
import { RideCard } from './components/RideCard';
import { RideForm } from './components/RideForm';
import { Navigation } from './components/Navigation';

function App() {
  const [caronas, setCaronas] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [modo, setModo] = useState('passageiro');
  const [buscaBairro, setBuscaBairro] = useState('');
  const [formData, setFormData] = useState({
    motorista: '', origem: '', destino: '', vagas: '', horario: ''
  });

  // Buscar dados do backend
  const carregarDados = async () => {
    try {
      const res = await rideService.buscarTodas();
      setCaronas(res.data);
    } catch (err) {
      console.error("Erro ao carregar dados", err);
    }
  };

  useEffect(() => { carregarDados(); }, []);

  // Lógicas de Ação
  const handleReserve = async (id) => {
    try {
      await rideService.reservar(id);
      carregarDados();
      alert("Vaga reservada!");
    } catch (err) {
      alert(err.response?.data?.error || "Erro ao reservar");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Deseja excluir?")) {
      await rideService.deletar(id);
      carregarDados();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editandoId) {
      await rideService.atualizar(editandoId, formData);
      setEditandoId(null);
    } else {
      await rideService.oferecer(formData);
    }
    setFormData({ motorista: '', origem: '', destino: '', vagas: '', horario: '' });
    carregarDados();
  };

  // Filtro
  const caronasFiltradas = caronas.filter(c => 
    c.destino.toLowerCase().includes(buscaBairro.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#2e7d32', textAlign: 'center' }}>🌳 Bigu Rural 🚗</h1>
      
      {/* Componente de Navegação */}
      <Navigation 
        modo={modo} 
        setModo={setModo} 
        setEditandoId={setEditandoId} 
      />

      {/* Componente de Formulário */}
      {modo === 'motorista' && (
        <RideForm 
          formData={formData}
          isEditing={!!editandoId}
          onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
          onSubmit={handleSubmit}
          onCancel={() => { setEditandoId(null); setFormData({motorista:'', origem:'', destino:'', vagas:'', horario:''}); }}
        />
      )}

      {/* Filtro de Busca */}
      {modo === 'passageiro' && (
        <input 
          placeholder="Para qual bairro você vai?" 
          value={buscaBairro}
          onChange={(e) => setBuscaBairro(e.target.value)}
          style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '2px solid #2e7d32' }}
        />
      )}

      {/* Lista de Caronas */}
      <section>
        {caronasFiltradas.map(carona => (
          <RideCard 
            key={carona.id} 
            carona={carona} 
            modo={modo} 
            onReserve={handleReserve}
            onEdit={(c) => { setEditandoId(c.id); setFormData(c); window.scrollTo(0,0); }}
            onDelete={handleDelete}
          />
        ))}
      </section>
    </div>
  );
}

export default App;