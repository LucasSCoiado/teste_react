import { PencilIcon, TrashIcon } from "lucide-react";

function TabelaPedido({ pedidos = [], onDeleteClick = () => {} }) {
  return (
    <div className="mt-3 m-9 overflow-x-auto">
      <table className="min-w-full border-separate border-spacing-2 bg-slate-500 rounded-2xl text-slate-50 text-lg shadow-lg shadow-slate-900/40">
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
    </div>
  );
}

export default TabelaPedido;
