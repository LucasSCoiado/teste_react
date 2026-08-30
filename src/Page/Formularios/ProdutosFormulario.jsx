import { useEffect, useState } from "react";

function ProdutosFormulario({
  initialData = {},
  onSubmit = () => {},
  isEditing = false,
}) {
  const [nome, setNome] = useState(initialData.nome || "");
  const [descricao, setDescricao] = useState(initialData.descricao || "");
  const [sku, setSku] = useState(initialData.sku || "");

  useEffect(() => {
    setNome(initialData.nome || "");
    setDescricao(initialData.descricao || "");
    setSku(initialData.sku || "");
  }, [initialData]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome.trim()) return;
    onSubmit(nome.trim(), descricao.trim(), sku.trim());
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col text-slate-200" htmlFor="">
          <span>Nome</span>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            name="nome"
            placeholder="Informe o nome do produto"
            className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-slate-50 outline-none focus:border-amber-400"
          />
        </label>
        <label className="flex flex-col text-slate-200" htmlFor="">
          <span>SKU</span>
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            id="sku"
            name="sku"
            placeholder="Informe o sku do produto"
            className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-slate-50 outline-none focus:border-amber-400"
          />
        </label>
      </div>
      <div className="flex flex-col text-slate-200">
        <label className="flex flex-col text-slate-200" htmlFor="">
          <span>Descrição</span>
          <textarea
            id="descricao"
            name="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descreva o produto"
            className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-slate-50 outline-none focus:border-amber-400"
          ></textarea>
        </label>
      </div>
      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          className="rounded-lg bg-amber-500 px-4 py-2 font-semibold text-slate-900 transition hover:bg-amber-400"
        >
          {isEditing ? "Atualizar" : "Salvar"}
        </button>
        <a
          href="/produtos"
          className="rounded-lg border border-slate-500 px-4 py-2 font-semibold text-slate-200 transition hover:bg-slate-700"
        >
          Cancelar
        </a>
      </div>
    </form>
  );
}

export default ProdutosFormulario;
