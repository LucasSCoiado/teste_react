import { PencilIcon, TrashIcon } from "lucide-react";

function TabelaPedido({ pedidos = [], onDeleteClick = () => {} }) {
  return (
    <div className="mt-3 mx-4 sm:mx-9 overflow-x-auto">
      {/* Desktop Table */}
      <table className="hidden sm:table min-w-full border-separate border-spacing-2 bg-slate-500 rounded-2xl text-slate-50 text-lg shadow-lg shadow-slate-900/40">
        <thead className="text-left text-sm uppercase tracking-wide">
          <tr>
            <th className="px-6 py-4">ID</th>
            <th className="px-6 py-4">Fornecedor</th>
            <th className="px-6 py-4">Produto</th>
            <th className="px-6 py-4">Descrição</th>
            <th className="px-6 py-4"></th>
            <th className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody>
          {pedidos.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="rounded-2xl bg-slate-600 px-6 py-6 text-center"
              >
                Nenhum pedido cadastrado.
              </td>
            </tr>
          ) : (
            pedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td className="rounded-2xl bg-slate-600 px-6 py-6 text-center text-slate-200">
                  {pedido.id}
                </td>
                <td className="rounded-2xl bg-slate-600 px-6 py-6 text-center text-slate-200">
                  {pedido.fornecedor}
                </td>
                <td className="rounded-2xl bg-slate-600 px-6 py-6 text-center text-slate-200">
                  {pedido.produto}
                </td>
                <td className="rounded-2xl bg-slate-600 px-6 py-6 text-center text-slate-200">
                  {pedido.descricao}
                </td>
                <td className="px-6 py-4">
                  <a
                    href={`/pedidos/editar/${pedido.id}`}
                    className="inline-flex items-center justify-center rounded-lg px-2 py-2 transition hover:bg-slate-600"
                  >
                    <PencilIcon />
                  </a>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="inline-flex items-center justify-center rounded-lg px-2 py-2 transition hover:bg-slate-600"
                    onClick={() => {
                      onDeleteClick(pedido.id);
                    }}
                  >
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Mobile Cards */}
      <div className="sm:hidden space-y-4">
        {pedidos.length === 0 ? (
          <div className="rounded-2xl bg-slate-600 px-4 py-6 text-center text-slate-200">
            Nenhum pedido cadastrado.
          </div>
        ) : (
          pedidos.map((pedido) => (
            <div
              key={pedido.id}
              className="rounded-2xl bg-slate-600 px-4 py-4 text-slate-200 space-y-2"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-slate-400">ID</p>
                  <p className="font-semibold">{pedido.id}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`/pedidos/editar/${pedido.id}`}
                    className="inline-flex items-center justify-center rounded-lg px-2 py-2 transition hover:bg-slate-700"
                  >
                    <PencilIcon size={18} />
                  </a>
                  <button
                    className="inline-flex items-center justify-center rounded-lg px-2 py-2 transition hover:bg-slate-700"
                    onClick={() => {
                      onDeleteClick(pedido.id);
                    }}
                  >
                    <TrashIcon size={18} />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-400">Fornecedor</p>
                <p className="font-semibold">{pedido.fornecedor}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Produto</p>
                <p className="font-semibold">{pedido.produto}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Descrição</p>
                <p className="font-semibold text-sm">{pedido.descricao}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TabelaPedido;
