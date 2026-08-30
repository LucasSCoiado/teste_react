import { useEffect, useState } from "react";

function PedidosFormulario({
  initialData = {},
  onSubmit = () => {},
  isEditing = false,
}) {
  const [fornecedor, setFornecedor] = useState(initialData.fornecedor || "");
  const [produto, setProduto] = useState(initialData.produto || "");
  const [descricao, setDescricao] = useState(initialData.descricao || "");

  useEffect(() => {
    setFornecedor(initialData.fornecedor || "");
    setProduto(initialData.produto || "");
    setDescricao(initialData.descricao || "");
  }, [initialData]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fornecedor.trim()) return;
    onSubmit(fornecedor.trim(), produto.trim(), descricao.trim());
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col text-slate-200">
          <span>Fornecedor</span>
          <input
            type="text"
            id="fornecedor"
            name="fornecedor"
            value={fornecedor}
            onChange={(e) => setFornecedor(e.target.value)}
            className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-slate-50 outline-none focus:border-amber-400"
            placeholder="Informe o fornecedor"
          />
        </label>
        <label className="flex flex-col text-slate-200">
          <span>Produto</span>
          <input
            type="text"
            id="produto"
            name="produto"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
            className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-slate-50 outline-none focus:border-amber-400"
            placeholder="Informe o produto"
          />
        </label>
      </div>
      <div className="flex flex-col text-slate-200">
        <label className="flex flex-col text-slate-200">
          <span>Descrição</span>

          <textarea
            id="descricao"
            name="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-slate-50 outline-none focus:border-amber-400"
            placeholder="Descreva o pedido"
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
          href="/pedidos"
          className="rounded-lg border border-slate-500 px-4 py-2 font-semibold text-slate-200 transition hover:bg-slate-700"
        >
          Cancelar
        </a>
      </div>
    </form>
  );
}

export default PedidosFormulario;
