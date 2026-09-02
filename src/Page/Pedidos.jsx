import { useMemo, useState, useEffect } from "react";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import TabelaPedido from "../Page/Tabelas/TabelaPedido";
import Link from "../components/Link";

function Pedidos() {
  const initial = useMemo(() => {
    const stored = localStorage.getItem("pedidos");
    return stored ? JSON.parse(stored) : [];
  }, []);

  const [pedidos, setPedidos] = useState(initial);

  useEffect(() => {
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
  }, [pedidos]);

  function onDeleteClick(pedidoId) {
    const newPedidos = pedidos.filter((c) => c.id != pedidoId);
    setPedidos(newPedidos);
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <TopBar />
      <div className="flex-1">
        <main className="px-4 sm:px-6 py-6 sm:py-8 flex justify-center items-start">
          <div className="text-center text-slate-300">
            <h2 className="text-slate-50 text-2xl sm:text-3xl md:text-4xl font-semibold">
              Pedidos
            </h2>
          </div>
        </main>
        <div className="flex justify-center px-4 sm:px-6">
          <img
            src="/images/pedido.png"
            className="h-auto max-h-48 w-full max-w-4xl object-contain"
            alt="Pedidos"
          />
        </div>
        <div className="flex justify-end px-4 sm:px-6 mt-4 max-w-6xl mx-auto w-full">
          <Link
            href="/pedidos/cadastro"
            className="rounded-lg px-4 py-2 font-semibold transition text-sm sm:text-base"
          >
            Novo pedido
          </Link>
        </div>
        <div className="px-4 sm:px-6">
          <TabelaPedido pedidos={pedidos} onDeleteClick={onDeleteClick} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pedidos;
