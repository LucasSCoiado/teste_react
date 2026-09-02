import { PencilIcon, TrashIcon } from "lucide-react";
import { Link } from "react-router-dom";

function TabelaFuncionarios({ funcionarios = [], onDeleteClick = () => {} }) {
  return (
    <div className="mt-3 mx-0 sm:mx-9 sm:overflow-x-auto">
      {/* Desktop Table */}
      <table className="hidden sm:table min-w-full border-separate border-spacing-2 bg-slate-500 rounded-2xl text-slate-50 text-lg shadow-lg shadow-slate-900/40">
        <thead className=" text-left text-sm uppercase tracking-wide">
          <tr>
            <th className="px-6 py-4">ID</th>
            <th className="px-6 py-4">Nome</th>
            <th className="px-6 py-4">E-mail</th>
            <th className="px-6 py-4">Telefone</th>
            <th className="px-6 py-4">Área</th>
            <th className="px-6 py-4">Salário</th>
            <th className="px-6 py-4"></th>
            <th className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.length === 0 ? (
            <tr>
              <td
                colSpan={8}
                className="rounded-2xl bg-slate-600 px-6 py-6 text-center text-slate-200"
              >
                Nenhum funcionário cadastrado.
              </td>
            </tr>
          ) : (
            funcionarios.map((funcionario) => (
              <tr key={funcionario.id}>
                <td className="rounded-2xl bg-slate-600 px-6 py-4 text-center text-slate-200">
                  {funcionario.id}
                </td>
                <td className="rounded-2xl bg-slate-600 px-6 py-4 text-center text-slate-200">
                  {funcionario.nome}
                </td>
                <td className="rounded-2xl bg-slate-600 px-6 py-4 text-center text-slate-200">
                  {funcionario.email}
                </td>
                <td className="rounded-2xl bg-slate-600 px-6 py-4 text-center text-slate-200">
                  {funcionario.telefone}
                </td>
                <td className="rounded-2xl bg-slate-600 px-6 py-4 text-center text-slate-200">
                  {funcionario.area}
                </td>
                <td className="rounded-2xl bg-slate-600 px-6 py-4 text-center text-slate-200">
                  R$ 5.000,00
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/funcionarios/editar/${funcionario.id}`}
                    className="inline-flex items-center justify-center rounded-lg px-2 py-2 transition hover:bg-slate-600"
                  >
                    <PencilIcon />
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="inline-flex items-center justify-center rounded-lg px-2 py-2 transition hover:bg-slate-600"
                    onClick={() => onDeleteClick(funcionario.id)}
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
        {funcionarios.length === 0 ? (
          <div className="rounded-2xl bg-slate-600 px-4 py-6 text-center text-slate-200">
            Nenhum funcionário cadastrado.
          </div>
        ) : (
          funcionarios.map((funcionario) => (
            <div
              key={funcionario.id}
              className="rounded-2xl bg-slate-600 px-4 py-4 text-slate-200 space-y-2"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-slate-400">ID</p>
                  <p className="font-semibold">{funcionario.id}</p>
                </div>
                <div className="flex gap-2">
                  <Link
                    to={`/funcionarios/editar/${funcionario.id}`}
                    className="inline-flex items-center justify-center rounded-lg px-2 py-2 transition hover:bg-slate-700"
                  >
                    <PencilIcon size={18} />
                  </Link>
                  <button
                    className="inline-flex items-center justify-center rounded-lg px-2 py-2 transition hover:bg-slate-700"
                    onClick={() => onDeleteClick(funcionario.id)}
                  >
                    <TrashIcon size={18} />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-400">Nome</p>
                <p className="font-semibold">{funcionario.nome}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">E-mail</p>
                <p className="font-semibold break-all text-sm">
                  {funcionario.email}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Telefone</p>
                <p className="font-semibold">{funcionario.telefone}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Área</p>
                <p className="font-semibold">{funcionario.area}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Salário</p>
                <p className="font-semibold">R$ 5.000,00</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TabelaFuncionarios;
