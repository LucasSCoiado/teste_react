import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Cliente from "./Page/Clientes.jsx";
import CadastroCliente from "./Page/CadastroCliente.jsx";
import Fornecedores from "./Page/Fornecedores.jsx";
import CadastroFornecedor from "./Page/CadastroFornecedor.jsx";
import Funcionarios from "./Page/Funcionarios.jsx";
import CadastroFuncionario from "./Page/CadastroFuncionario.jsx";
import Pedidos from "./Page/Pedidos.jsx";
import CadastroPedidos from "./Page/CadastroPedidos.jsx";
import Produtos from "./Page/Produtos.jsx";
import CadastroProdutos from "./Page/CadastroProdutos.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// IMPORTANTE: adicionar este import
import { LanguageProvider } from "./context/LanguageContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  // CLIENTES
  {
    path: "/cliente",
    element: <Cliente />,
  },
  {
    path: "/cliente/cadastro",
    element: <CadastroCliente />,
  },
  {
    path: "/cliente/editar/:id",
    element: <CadastroCliente />,
  },

  // FORNECEDORES
  {
    path: "/fornecedores",
    element: <Fornecedores />,
  },
  {
    path: "/fornecedores/cadastro",
    element: <CadastroFornecedor />,
  },
  {
    path: "/fornecedores/editar/:id",
    element: <CadastroFornecedor />,
  },

  // FUNCIONÁRIOS
  {
    path: "/funcionarios",
    element: <Funcionarios />,
  },
  {
    path: "/funcionarios/cadastro",
    element: <CadastroFuncionario />,
  },
  {
    path: "/funcionarios/editar/:id",
    element: <CadastroFuncionario />,
  },

  // PEDIDOS
  {
    path: "/pedidos",
    element: <Pedidos />,
  },
  {
    path: "/pedidos/cadastro",
    element: <CadastroPedidos />,
  },

  // PRODUTOS
  {
    path: "/produtos",
    element: <Produtos />,
  },
  {
    path: "/produtos/cadastro",
    element: <CadastroProdutos />,
  },
  {
    path: "/produtos/editar/:id",
    element: <CadastroProdutos />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>,
);
