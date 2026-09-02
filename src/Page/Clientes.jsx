import { useState, useMemo, useEffect } from "react";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import TabelaClientes from "./Tabelas/TabelaClientes";
import Link from "../components/Link";

function Clientes() {
  const initial = useMemo(() => {
    const stored = localStorage.getItem("clientes");
    return stored ? JSON.parse(stored) : [];
  }, []);

  const [clientes, setCliente] = useState(initial);
  useEffect(() => {
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }, [clientes]);

  useEffect(() => {
    if (initial.length > 0) return;

    const fetchTasks = async () => {
      const response = await fetch(
        "http://jsonplaceholder.typicode.com/todos",
        {
          method: "GET",
        },
      );
      const data = await response.json();

      setCliente(data);
    };

    fetchTasks();
  }, [initial.length]);
  function onDeleteClick(clienteId) {
    const newCliente = clientes.filter((c) => c.id != clienteId);
    setCliente(newCliente);
    localStorage.setItem("clientes", JSON.stringify(newCliente));
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <TopBar />
      <div className="flex-1">
        <main className="px-4 sm:px-6 py-6 sm:py-8 flex justify-center items-start">
          <div className="text-center text-slate-300">
            <h2 className="text-slate-50 text-2xl sm:text-3xl md:text-4xl font-semibold">
              Clientes
            </h2>
          </div>
        </main>
        <div className="flex justify-center px-4 sm:px-6">
          <img
            src="/images/banner_cliente_software.png"
            alt="Banner Clientes"
            className="h-auto max-h-48 w-full max-w-4xl object-contain"
          />
        </div>
        <div className="flex justify-end px-4 sm:px-6 mt-4 max-w-6xl mx-auto w-full">
          <Link
            to="/cliente/cadastro"
            className="rounded-lg px-4 py-2 font-semibold transition text-sm sm:text-base"
          >
            Cadastrar cliente
          </Link>
        </div>
        <div className="px-4 sm:px-6">
          <TabelaClientes clientes={clientes} onDeleteClick={onDeleteClick} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Clientes;
