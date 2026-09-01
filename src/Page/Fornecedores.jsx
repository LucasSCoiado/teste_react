import { useState } from "react";

import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import TabelaFornecedores from "./Tabelas/TabelaFornecedores";
import Link from "../components/Link";

function Fornecedores() {
  const [fornecedores, setFornecedores] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("fornecedores") || "null");
    return stored || [];
  });

  function onDeleteClick(fornecedorId) {
    const newFornecedor = fornecedores.filter((c) => c.id != fornecedorId);
    setFornecedores(newFornecedor);
    localStorage.setItem("fornecedores", JSON.stringify(newFornecedor));
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <TopBar />
      <div className="flex-1 ">
        <main className="px-4 sm:px-6 py-6 sm:py-8 flex justify-center items-start">
          <div className="text-center text-slate-300">
            <h2 className="text-slate-50 text-2xl sm:text-3xl md:text-4xl font-semibold">
              Fornecedores
            </h2>
          </div>
        </main>
        <div className="flex justify-center px-4 sm:px-6">
          <img
            src="/images/logo_fornecedor.png"
            alt="Fornecedores"
            className="h-auto max-h-48 w-full max-w-4xl object-contain"
          />
        </div>
        <div className="flex justify-end px-4 sm:px-6 mt-4 max-w-6xl mx-auto w-full">
          <Link
            to="/fornecedores/cadastro"
            className="rounded-lg px-4 py-2 font-semibold transition text-sm sm:text-base"
          >
            Novo fornecedor
          </Link>
        </div>
        <div className="px-4 sm:px-6">
          <TabelaFornecedores
            fornecedores={fornecedores}
            onDeleteClick={onDeleteClick}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Fornecedores;
