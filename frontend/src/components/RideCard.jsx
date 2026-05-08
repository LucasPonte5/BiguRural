export function RideCard({ carona, modo, onEdit, onDelete, onReserve }) {
  const isEsgotado = carona.vagas <= 0;

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '10px', backgroundColor: isEsgotado ? '#f9f9f9' : 'white' }}>
      <p><strong>Motorista:</strong> {carona.motorista}</p>
      <p><strong>Rota:</strong> {carona.origem} ➡️ {carona.destino}</p>
      <p><strong>Horário:</strong> {carona.horario} | <strong>Vagas:</strong> {carona.vagas}</p>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        {modo === 'passageiro' ? (
          <button 
            onClick={() => onReserve(carona.id)} 
            disabled={isEsgotado}
            style={{ backgroundColor: isEsgotado ? '#ccc' : '#1976d2', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', cursor: isEsgotado ? 'not-allowed' : 'pointer', width: '100%', fontWeight: 'bold' }}
          >
            {isEsgotado ? 'Esgotado' : 'Quero Carona'}
          </button>
        ) : (
          <>
            <button onClick={() => onEdit(carona)} style={{ backgroundColor: '#fb8c00', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer', flex: 1 }}>Editar</button>
            <button onClick={() => onDelete(carona.id)} style={{ backgroundColor: '#ff5252', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer', flex: 1 }}>Excluir</button>
          </>
        )}
      </div>
    </div>
  );
}