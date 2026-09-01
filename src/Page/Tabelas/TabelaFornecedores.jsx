import { PencilIcon, TrashIcon } from "lucide-react";

function TabelaFornecedores({ fornecedores = [], onDeleteClick = () => {} }) {
  return (
    <div className="mt-3 mx-0 sm:mx-9 sm:overflow-x-auto">
      {/* Desktop Table */}
      <table className="hidden sm:table min-w-full border-separate border-spacing-2 bg-slate-500 rounded-2xl text-slate-50 text-lg shadow-lg shadow-slate-900/40">
        <thead className="text-left text-sm uppercase tracking-wide">
          <tr>
            <th className="px-6 py-4">ID</th>
            <th className="px-6 py-4">Nome</th>
            <th className="px-6 py-4">Telefone</th>
            <th className="px-6 py-4">Localização</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4"></th>
            <th className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody>
          {fornecedores.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="rounded-2xl bg-slate-600 px-6 py-6 text-center"
              >
                Nenhum fornecedor cadastrado.
              </td>
            </tr>
          ) : (
            fornecedores.map((fornecedor) => (
              <tr key={fornecedor.id}>
                <td className="rounded-2xl bg-slate-600 px-6 py-4 text-center text-slate-200">
                  {fornecedor.id}
                </td>
                <td className="rounded-2xl bg-slate-600 px-6 py-4 text-center text-slate-200">
                  {fornecedor.nome}
                </td>
                <td className="rounded-2xl bg-slate-600 px-6 py-4 text-center text-slate-200">
                  {fornecedor.telefone}
                </td>
                <td className="rounded-2xl bg-slate-600 px-6 py-4 text-center text-slate-200">
                  {fornecedor.localizacao}
                </td>
                <td className="rounded-2xl bg-slate-600 px-6 py-4 text-center text-slate-200">
                  {fornecedor.email}
                </td>
                <td className="px-6 py-4">
                  <a
                    href={`/fornecedores/editar/${fornecedor.id}`}
                    className="inline-flex items-center justify-center rounded-lg px-2 py-2 transition hover:bg-slate-600"
                  >
                    <PencilIcon />
                  </a>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="inline-flex items-center justify-center rounded-lg px-2 py-2 transition hover:bg-slate-600"
                    onClick={() => {
                      onDeleteClick(fornecedor.id);
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
        {fornecedores.length === 0 ? (
          <div className="rounded-2xl bg-slate-600 px-4 py-6 text-center text-slate-200">
            Nenhum fornecedor cadastrado.
          </div>
        ) : (
          fornecedores.map((fornecedor) => (
            <div
              key={fornecedor.id}
              className="rounded-2xl bg-slate-600 px-4 py-4 text-slate-200 space-y-2"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-slate-400">ID</p>
                  <p className="font-semibold">{fornecedor.id}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`/fornecedores/editar/${fornecedor.id}`}
                    className="inline-flex items-center justify-center rounded-lg px-2 py-2 transition hover:bg-slate-700"
                  >
                    <PencilIcon size={18} />
                  </a>
                  <button
                    className="inline-flex items-center justify-center rounded-lg px-2 py-2 transition hover:bg-slate-700"
                    onClick={() => {
                      onDeleteClick(fornecedor.id);
                    }}
                  >
                    <TrashIcon size={18} />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-400">Nome</p>
                <p className="font-semibold">{fornecedor.nome}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Telefone</p>
                <p className="font-semibold">{fornecedor.telefone}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Localização</p>
                <p className="font-semibold">{fornecedor.localizacao}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Email</p>
                <p className="font-semibold break-all text-sm">
                  {fornecedor.email}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TabelaFornecedores;
