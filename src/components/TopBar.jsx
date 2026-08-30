import { User, Truck, Users, ShoppingCart, Package, Menu } from "lucide-react";
import Link from "./Link";

function TopBar() {
  return (
    <>
      <div>
        <div className="pt-6 px-6 flex ">
          <div className="inline-block border-2 border-amber-50 rounded-lg">
            <h1 className="text-slate-900 bg-slate-100 text-2xl font-semibold sm:text-3xl px-6 py-4 text-center">
              Empresa Alpha
            </h1>
          </div>
        </div>
        <nav className="absolute top-1 right-2 pt-6 pr-6 flex gap-2">
          <Link href="/cliente">
            <User size={18} />
            Clientes
          </Link>

          <Link href="/fornecedores">
            <Truck size={18} />
            Fornecedores
          </Link>

          <Link href="/funcionarios">
            <Users size={18} />
            Funcionários
          </Link>

          <Link href="/pedidos">
            <ShoppingCart size={18} />
            Pedidos
          </Link>

          <Link href="/produtos">
            <Package size={18} />
            Produtos
          </Link>

          <Link href="/">
            <Menu size={18} />
            Menu
          </Link>
        </nav>
      </div>
    </>
  );
}

export default TopBar;
