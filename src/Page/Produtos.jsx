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
        <main className="px-4 py-8 flex justify-center items-start">
          <div className="text-center text-slate-300">
            <h2 className="text-slate-50 text-2xl font-semibold">Produtos</h2>
          </div>
        </main>
        <div className="justify-items-center px4">
          <img
            src="/images/product-management.png"
            className="h-48 w-106 object-top"
            alt=""
          />
        </div>
        <div className="flex justify-end px-4 mt-4 max-w-5xl mx-auto">
          <Link
            className="rounded-lg px-4 py-2 font-semibold transition"
            to="/produtos/cadastro"
          >
            Cadastro de produtos
          </Link>
        </div>
      </div>
      <TabelaProdutos produtos={produtos} onDeleteClick={deleteOnClick} />
      <Footer />
    </div>
  );
}

export default Produtos;
