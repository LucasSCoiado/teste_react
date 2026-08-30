import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import ClientesForm from "./Formularios/ClientesForm";

function CadastroCliente() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialData, setInitialData] = useState({
    nome: "",
    telefone: "",
    email: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!id) {
      setInitialData({ nome: "", telefone: "", email: "" });
      setIsEditing(false);
      return;
    }

    const stored = JSON.parse(localStorage.getItem("clientes") || "[]");
    const cliente = stored.find((item) => item.id === Number(id));
    if (cliente) {
      setInitialData({
        nome: cliente.nome,
        telefone: cliente.telefone,
        email: cliente.email,
      });
      setIsEditing(true);
    } else {
      setInitialData({ nome: "", telefone: "", email: "" });
      setIsEditing(false);
    }
  }, [id]);

  function handleSubmit(nome, telefone, email) {
    const stored = JSON.parse(localStorage.getItem("clientes") || "[]");
    if (id) {
      const updated = stored.map((cliente) =>
        cliente.id === Number(id)
          ? { ...cliente, nome, telefone, email }
          : cliente,
      );
      localStorage.setItem("clientes", JSON.stringify(updated));
    } else {
      const nextId = stored.length
        ? Math.max(...stored.map((c) => c.id)) + 1
        : 1;
      const newCliente = { id: nextId, nome, telefone, email };
      stored.push(newCliente);
      localStorage.setItem("clientes", JSON.stringify(stored));
    }

    navigate("/cliente");
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <TopBar />
      <main className="flex-1 px-4 py-8">
        <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-slate-50 text-2xl font-semibold">
              {isEditing ? "Editar cliente" : "Cadastro de cliente"}
            </h2>
            <p className="text-slate-300 mt-2">
              {isEditing
                ? "Atualize os dados do cliente e salve as alterações."
                : "Preencha os dados abaixo para cadastrar um novo cliente."}
            </p>
          </div>
          <ClientesForm
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

export default CadastroCliente;
