import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import PedidosFormulario from "./Formularios/PedidosFormulario";

function CadastroPedidos() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialData, setInitialData] = useState({
    fornecedor: "",
    produto: "",
    descricao: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    if (!id) {
      setInitialData({
        fornecedor: "",
        produto: "",
        descricao: "",
      });
      setIsEditing(false);
      return;
    }
    const stored = JSON.parse(localStorage.getItem("pedidos") || "[]");
    const pedido = stored.find((item) => item.id === Number(id));
    if (pedido) {
      setInitialData({
        fornecedor: pedido.fornecedor,
        produto: pedido.produto,
        descricao: pedido.descricao,
      });
      setIsEditing(true);
    } else {
      setInitialData({
        fornecedor: "",
        produto: "",
        descricao: "",
      });
    }
  }, [id]);

  function handleSubmit(fornecedor, produto, descricao) {
    const stored = JSON.parse(localStorage.getItem("pedidos") || "[]");
    if (id) {
      const updated = stored.map((pedido) =>
        pedido.id == Number(id)
          ? { ...pedido, fornecedor, produto, descricao }
          : pedido,
      );
      localStorage.setItem("pedidos", JSON.stringify(updated));
    } else {
      const nextId = stored.length
        ? Math.max(...stored.map((c) => c.id)) + 1
        : 1;
      const newPedido = {
        id: nextId,
        fornecedor,
        produto,
        descricao,
      };
      stored.push(newPedido);
      localStorage.setItem("pedidos", JSON.stringify(stored));
    }
    navigate("/pedidos");
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <TopBar />
      <main className="flex-1 px-4 py-8">
        <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-slate-50 text-2xl font-semibold">
              {isEditing ? "Editar pedido" : "Cadastro de pedido"}
            </h2>
            <p className="text-slate-300 mt-2">
              {isEditing
                ? "Atualize os dados do produto e salve as alterações"
                : "Preencha os dados abaixo para cadastrar um novo pedido."}
            </p>
          </div>
          <PedidosFormulario
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

export default CadastroPedidos;
