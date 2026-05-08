export function Navigation({ modo, setModo, setEditandoId }) {
  const btnBaseStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontWeight: 'bold',
    transition: '0.3s'
  };

  const activeStyle = {
    backgroundColor: '#2e7d32',
    color: 'white'
  };

  const inactiveStyle = {
    backgroundColor: '#eee',
    color: 'black'
  };

  return (
    <nav style={{ 
      marginBottom: '30px', 
      display: 'flex', 
      justifyContent: 'center', 
      gap: '10px' 
    }}>
      <button 
        onClick={() => { 
          setModo('passageiro'); 
          setEditandoId(null); 
        }} 
        style={{ 
          ...btnBaseStyle, 
          ...(modo === 'passageiro' ? activeStyle : inactiveStyle) 
        }}
      >
        Sou Passageiro
      </button>

      <button 
        onClick={() => setModo('motorista')} 
        style={{ 
          ...btnBaseStyle, 
          ...(modo === 'motorista' ? activeStyle : inactiveStyle) 
        }}
      >
        Sou Motorista
      </button>
    </nav>
  );
}