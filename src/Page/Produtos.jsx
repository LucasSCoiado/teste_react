import { useState, useEffect, useMemo } from "react";

import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import Link from "../components/Link";
import TabelaProdutos from "./Tabelas/TabelaProdutos";

function Produtos() {
  const initial = useMemo(() => {
    const stored = localStorage.getItem("produtos");
    return stored ? JSON.parse(stored) : [];
  }, []);

  const [produtos, setProdutos] = useState(initial);

  useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }, [produtos]);

  function deleteOnClick(produtosId) {
    const newProdutos = produtos.filter((c) => c.id != produtosId);
    setProdutos(newProdutos);
    localStorage.setItem("produtos", JSON.stringify(newProdutos));
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <TopBar />

      <div className="flex-1">
        <main className="px-4 sm:px-6 py-6 sm:py-8 flex justify-center items-start">
          <div className="text-center text-slate-300">
            <h2 className="text-slate-50 text-2xl sm:text-3xl md:text-4xl font-semibold">
              Produtos
            </h2>
          </div>
        </main>
        <div className="flex justify-center px-4 sm:px-6">
          <img
            src="/images/product-management.png"
            className="h-auto max-h-48 w-full max-w-4xl object-contain"
            alt="Produtos"
          />
        </div>
        <div className="flex justify-end px-4 sm:px-6 mt-4 max-w-6xl mx-auto w-full">
          <Link
            className="rounded-lg px-4 py-2 font-semibold transition text-sm sm:text-base"
            to="/produtos/cadastro"
          >
            Cadastro de produtos
          </Link>
        </div>
        <div className="px-4 sm:px-6">
          <TabelaProdutos produtos={produtos} onDeleteClick={deleteOnClick} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Produtos;
