import { useEffect, useState } from "react";

function FuncionarioFormulario({
  initialData = {},
  onSubmit = () => {},
  isEditing = false,
}) {
  const [nome, setNome] = useState(initialData.nome || "");
  const [telefone, setTelefone] = useState(initialData.telefone || "");
  const [email, setEmail] = useState(initialData.email || "");
  const [area, setArea] = useState(initialData.area || "");
  const [salario, setSalario] = useState(initialData.salario || "");

  useEffect(() => {
    setNome(initialData.nome || "");
    setTelefone(initialData.telefone || "");
    setEmail(initialData.email || "");
    setArea(initialData.area || "");
    setSalario(initialData.salario || "");
  }, [initialData]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome.trim()) return;
    onSubmit(
      nome.trim(),
      telefone.trim(),
      email.trim(),
      area.trim(),
      salario.trim(),
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col text-slate-200">
          <span className="mb-2">Nome</span>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-slate-50 outline-none focus:border-amber-400"
            placeholder="Digite o nome"
          />
        </label>
        <label className="flex flex-col text-slate-200">
          <span className="mb-2">Telefone</span>
          <input
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            type="tel"
            className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-slate-50 outline-none focus:border-amber-400"
            placeholder="(11) 99999-9999"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col text-slate-200">
          <span className="mb-2">Área</span>
          <input
            value={area}
            onChange={(e) => setArea(e.target.value)}
            type="text"
            className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-slate-50 outline-none focus:border-amber-400"
            placeholder="Digite a área de serviço"
          />
        </label>
        <label className="flex flex-col text-slate-200">
          <span className="mb-2">Salário</span>
          <input
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
            type="text"
            className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-slate-50 outline-none focus:border-amber-400"
            placeholder="R$ 0,00"
          />
        </label>
      </div>
      <label className="flex flex-col text-slate-200">
        <span className="mb-2">E-mail</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-slate-50 outline-none focus:border-amber-400"
          placeholder="Informe o e-mail"
        />
      </label>

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          className="rounded-lg bg-amber-500 px-4 py-2 font-semibold text-slate-900 transition hover:bg-amber-400"
        >
          {isEditing ? "Atualizar" : "Salvar"}
        </button>
        <a
          href="/funcionarios"
          className="rounded-lg border border-slate-500 px-4 py-2 font-semibold text-slate-200 transition hover:bg-slate-700"
        >
          Cancelar
        </a>
      </div>
    </form>
  );
}

export default FuncionarioFormulario;
