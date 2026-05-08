export function RideForm({ formData, onChange, onSubmit, onCancel, isEditing }) {
  return (
    <section style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
      <h3>{isEditing ? 'Editar Minha Carona' : 'Oferecer Nova Carona'}</h3>
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input name="motorista" placeholder="Seu Nome" value={formData.motorista} onChange={onChange} required disabled={isEditing} style={{ padding: '8px' }} />
        <input name="origem" placeholder="Origem" value={formData.origem} onChange={onChange} required disabled={isEditing} style={{ padding: '8px' }} />
        <input name="destino" placeholder="Bairro de Destino" value={formData.destino} onChange={onChange} required disabled={isEditing} style={{ padding: '8px' }} />
        <input name="vagas" type="number" placeholder="Vagas disponíveis" value={formData.vagas} onChange={onChange} required style={{ padding: '8px' }} />
        <input name="horario" type="time" value={formData.horario} onChange={onChange} required style={{ padding: '8px' }} />
        
        <button type="submit" style={{ backgroundColor: isEditing ? '#fb8c00' : '#2e7d32', color: 'white', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {isEditing ? 'Salvar Alterações' : 'Publicar Carona'}
        </button>
        {isEditing && (
          <button type="button" onClick={onCancel} style={{ marginTop: '5px' }}>Cancelar Edição</button>
        )}
      </form>
    </section>
  );
}