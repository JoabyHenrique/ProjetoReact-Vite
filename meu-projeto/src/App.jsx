import { useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);

  const cardapio = [
    { id: 1, nome: "X-Salada", preco: 25.00 },
    { id: 2, nome: "X-Burguer", preco: 22.00 },
    { id: 3, nome: "Batata Frita", preco: 15.00 },
    { id: 4, nome: "Refrigerante", preco: 8.00 },
    { id: 5, nome: "Suco Natural", preco: 10.00 },
  ];

  const adicionarAoTotal = (preco) => {
    setTotal(total + preco);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px' }}>
      <h1 style={{ color: '#d35400' }}>Lanchonete</h1>
      
      {cardapio.map((item) => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span>{item.nome} (R$ {item.preco.toFixed(2)})</span>
          <button onClick={() => adicionarAoTotal(item.preco)}>Adicionar</button>
        </div>
      ))}

      <hr />
      <h3>Total do Pedido: R$ {total.toFixed(2)}</h3>
      <button onClick={() => setTotal(0)} style={{ background: '#e74c3c', color: 'white' }}>Limpar Pedido</button>
    </div>
  );
}

export default App;