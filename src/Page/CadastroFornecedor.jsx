import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import FormularioFornecedor from "./Formularios/FormularioFornecedor";

function CadastroFornecedor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialData, setInitialData] = useState({
    nome: "",
    telefone: "",
    email: "",
    localizacao: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!id) {
      setInitialData({ nome: "", telefone: "", email: "", localizacao: "" });
      setIsEditing(false);
      return;
    }

    const stored = JSON.parse(localStorage.getItem("fornecedores") || "[]");
    const fornecedor = stored.find((item) => item.id === Number(id));
    if (fornecedor) {
      setInitialData({
        nome: fornecedor.nome,
        telefone: fornecedor.telefone,
        email: fornecedor.email,
        localizacao: fornecedor.localizacao,
      });
      setIsEditing(true);
    } else {
      setInitialData({
        nome: "",
        telefone: "",
        email: "",
        localizacao: "",
      });
      setIsEditing(false);
    }
  }, [id]);

  function handleSubmit(nome, telefone, email, localizacao) {
    const stored = JSON.parse(localStorage.getItem("fornecedores") || "[]");
    if (id) {
      const updated = stored.map((fornecedor) =>
        fornecedor.id === Number(id)
          ? { ...fornecedor, nome, telefone, email, localizacao }
          : fornecedor,
      );
      localStorage.setItem("fornecedores", JSON.stringify(updated));
    } else {
      const nextId = stored.length
        ? Math.max(...stored.map((c) => c.id)) + 1
        : 1;
      const newFornecedor = { id: nextId, nome, telefone, email, localizacao };
      stored.push(newFornecedor);
      localStorage.setItem("fornecedores", JSON.stringify(stored));
    }

    navigate("/fornecedores");
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <TopBar />
      <main className="flex-1 px-4 py-8">
        <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-slate-50 text-2xl font-semibold">
              {isEditing ? "Editar fornecedor" : "Cadastro de fornecedor"}
            </h2>
            <p className="text-slate-300 mt-2">
              {isEditing
                ? "Atualize os dados do fornecedor e salve as alterações."
                : "Preencha os dados abaixo para cadastrar um novo fornecedor."}
            </p>
          </div>
          <FormularioFornecedor
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

export default CadastroFornecedor;
