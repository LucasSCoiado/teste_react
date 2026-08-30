import { PencilIcon, TrashIcon } from "lucide-react";

function TabelaClientes({ clientes = [], onDeleteClick = () => {} }) {
  return (
    <div className="mt-3 m-9 overflow-x-auto">
      <table className="min-w-full border-separate border-spacing-2 bg-slate-500 rounded-2xl text-slate-50 text-lg shadow-lg shadow-slate-900/40">
        <thead className="text-left text-sm uppercase tracking-wide">
          <tr>
            <th className="px-6 py-4">ID</th>
            <th className="px-6 py-4">Nome</th>
            <th className="px-6 py-4">Telefone</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4"></th>
            <th className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody>
          {clientes.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="rounded-2xl bg-slate-600 px-6 py-6 text-center"
              >
                Nenhum cliente cadastrado.
              </td>
            </tr>
          ) : (
            clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td className="rounded-2xl bg-slate-600 px-6 py-4 text-center text-slate-200">
                  {cliente.id}
                </td>
                <td className="rounded-2xl bg-slate-600 px-6 py-4 text-center text-slate-200">
                  {cliente.nome}
                </td>
                <td className="rounded-2xl bg-slate-600 px-6 py-4 text-center text-slate-200">
                  {cliente.telefone}
                </td>
                <td className="rounded-2xl bg-slate-600 px-6 py-4 text-center text-slate-200">
                  {cliente.email}
                </td>
                <td className="px-6 py-4">
                  <a
                    href={`/cliente/editar/${cliente.id}`}
                    className="inline-flex items-center justify-center rounded-lg  px-2 py-2 transition hover:bg-slate-600"
                  >
                    <PencilIcon />
                  </a>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="inline-flex items-center justify-center rounded-lg px-2 py-2 transition hover:bg-slate-600"
                    onClick={() => {
                      onDeleteClick(cliente.id);
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

export default TabelaClientes;
