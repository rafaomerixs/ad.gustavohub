import { useState } from 'react'
import './App.css'

export default function App() {

  const CATEGORIAS = [
    { nome: "Quartos", emoji: "🛏️" },
    { nome: "Ofertas", emoji: "💸" }
  ];

  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState(CATEGORIAS[0]);
  const [reservado, setReservado] = useState(false);
  const [diarias, setDiarias] = useState(1);

  return (
    <main>
      <h1 className="Titulo">IBIS HOTÉIS</h1>

      <div id="icon">
        {reservado ? "✅" : categoria.emoji}
      </div>

      <input
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <div id="status">
        <h2>Status da Reserva</h2>
        <p>{reservado ? "CONFIRMADA" : "NÃO RESERVADO"}</p>
      </div>

      <p id="pontos">Diárias: <span>{diarias}</span></p>

      <button className="acao" onClick={() => setDiarias(diarias + 1)}>
        ➕ Mais dias
      </button>

      <button className="acao" onClick={() => setDiarias(diarias - 1)}>
        ➖ Menos dias
      </button>

      <button className="heroi" onClick={() => setCategoria(CATEGORIAS[0])}>
        🛏️ Quartos
      </button>

      <button className="heroi" onClick={() => setCategoria(CATEGORIAS[1])}>
        💸 Ofertas
      </button>

      <div id="status">
        <h2>{categoria.nome}</h2>
        <p>
          {categoria.nome === "Quartos"
            ? "Quarto confortável com Wi-Fi"
            : "Desconto especial hoje!"}
        </p>
      </div>

      <button className="acao" onClick={() => setReservado(true)}>
        🏨 Reservar
      </button>

      <button className="acao" onClick={() => setReservado(false)}>
        ❌ Cancelar
      </button>
    </main>
  )
}