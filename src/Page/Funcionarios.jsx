import { useState } from "react";

import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import Link from "../components/Link";
import TabelaFuncionarios from "./Tabelas/TabelaFuncionario";

function Funcionario() {
  const [funcionarios, setFuncionarios] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("funcionarios") || "[]");
    return stored || [];
  });

  function onDeleteClick(funcionarioId) {
    const newFuncionario = funcionarios.filter((c) => c.id != funcionarioId);
    setFuncionarios(newFuncionario);
    localStorage.setItem("funcionarios", JSON.stringify(newFuncionario));
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <TopBar />
      <div className="flex-1 ">
        <main className="px-4 py-8 flex justify-center items-start">
          <div className="text-center text-slate-300">
            <h2 className="text-slate-50 text-2xl font-semibold">
              Funcionários
            </h2>
          </div>
        </main>
        <div className="justify-items-center px-4">
          <img
            src="/images/logo_funcionarios.png"
            alt=""
            className="h-48 w-106 object-top"
          />
        </div>
        <div className="flex justify-end px-4 mt-4 max-w-5xl mx-auto">
          <Link
            to="/funcionarios/cadastro"
            className="rounded-lg px-4 py-2 font-semibold transition"
          >
            Novo funcionário
          </Link>
        </div>
        <TabelaFuncionarios
          funcionarios={funcionarios}
          onDeleteClick={onDeleteClick}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Funcionario;
