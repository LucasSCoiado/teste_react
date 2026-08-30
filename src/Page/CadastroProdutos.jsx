import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import ProdutosFormulario from "./Formularios/ProdutosFormulario";

function CadastroProdutos() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState({
    nome: "",
    descricao: "",
    sku: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    if (!id) {
      setInitialData({
        nome: "",
        descricao: "",
        sku: "",
      });
      setIsEditing(false);
      return;
    }
    const stored = JSON.parse(localStorage.getItem("produtos") || "[]");
    const produto = stored.find((item) => item.id === Number(id));
    if (produto) {
      setInitialData({
        nome: produto.nome,
        descricao: produto.descricao,
        sku: produto.sku,
      });
      setIsEditing(true);
    } else {
      setInitialData({
        nome: "",
        descricao: "",
        sku: "",
      });
    }
  }, [id]);

  function handleSubmit(nome, descricao, sku) {
    const stored = JSON.parse(localStorage.getItem("produtos") || "[]");
    if (id) {
      const updated = stored.map((produto) =>
        produto.id === Number(id)
          ? { ...produto, nome, descricao, sku }
          : produto,
      );
      localStorage.setItem("produtos", JSON.stringify(updated));
    } else {
      const nextId = stored.length
        ? Math.max(...stored.map((c) => c.id)) + 1
        : 1;

      const newProduto = {
        id: nextId,
        nome,
        descricao,
        sku,
      };
      stored.push(newProduto);
      localStorage.setItem("produtos", JSON.stringify(stored));
    }
    navigate("/produtos");
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <TopBar />
      <main className="flex-1 px-4 py-8">
        <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-slate-50 text-2xl font-semibold">
              {isEditing ? "Editar produto" : "Cadastre produtos"}
            </h2>
            <p className="text-slate-300 mt-2">
              {isEditing
                ? "Preencha os dados abaixo para editar o produto"
                : "Preencha os dados abaixo para cadastro de produtos"}
            </p>
          </div>
          <ProdutosFormulario
            initialData={initialData}
            onSubmit={handleSubmit}
            isEditing={isEditing}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CadastroProdutos;
