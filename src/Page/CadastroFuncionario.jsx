import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import FormularioFuncionario from "../Page/Formularios/FuncionarioFormulario";

function CadastroFuncionario() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialData, setInitialData] = useState({
    nome: "",
    telefone: "",
    email: "",
    area: "",
    salario: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    if (!id) {
      setInitialData({
        nome: "",
        telefone: "",
        email: "",
        area: "",
        salario: "",
      });
      setIsEditing(false);
      return;
    }

    const stored = JSON.parse(localStorage.getItem("funcionarios") || "[]");
    const funcionario = stored.find((item) => item.id === Number(id));
    if (funcionario) {
      setInitialData({
        nome: funcionario.nome,
        telefone: funcionario.telefone,
        email: funcionario.email,
        area: funcionario.area,
        salario: funcionario.salario,
      });
      setIsEditing(true);
    } else {
      setInitialData({
        nome: "",
        telefone: "",
        email: "",
        area: "",
        salario: "",
      });
    }
  }, [id]);

  function handleSubmit(nome, telefone, email, area, salario) {
    const stored = JSON.parse(localStorage.getItem("funcionarios") || "[]");
    if (id) {
      const updated = stored.map((funcionario) =>
        funcionario.id === Number(id)
          ? { ...funcionario, nome, telefone, email, area, salario }
          : funcionario,
      );
      localStorage.setItem("funcionarios", JSON.stringify(updated));
    } else {
      const nextId = stored.length
        ? Math.max(...stored.map((c) => c.id)) + 1
        : 1;
      const newFuncionario = {
        id: nextId,
        nome,
        telefone,
        email,
        area,
        salario,
      };
      stored.push(newFuncionario);
      localStorage.setItem("funcionarios", JSON.stringify(stored));
    }

    navigate("/funcionarios");
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <TopBar />
      <main className="flex-1 px-4 py-8">
        <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-slate-50 text-2xl font-semibold">
              {isEditing ? "Editar funcionário" : "Cadastro de funcionário"}
            </h2>
            <p className="text-slate-300 mt-2">
              {isEditing
                ? "Atualize os dados do funcionário e salve as alterações."
                : "Preencha os dados abaixo para cadastrar um novo funcionário."}
            </p>
          </div>
          <FormularioFuncionario
            initialData={initialData}
            onSubmit={handleSubmit}
            isEditing={isEditing}
          />
        </div>
      </main>
      <Footer
        initialData={initialData}
        onSubmit={handleSubmit}
        isEditing={isEditing}
      />
    </div>
  );
}

export default CadastroFuncionario;
