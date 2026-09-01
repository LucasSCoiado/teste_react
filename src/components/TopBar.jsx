import {
  User,
  Truck,
  Users,
  ShoppingCart,
  Package,
  Menu,
  X,
} from "lucide-react";
import Link from "./Link";
import { useState } from "react";

function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "/cliente", icon: User, label: "Clientes" },
    { href: "/fornecedores", icon: Truck, label: "Fornecedores" },
    { href: "/funcionarios", icon: Users, label: "Funcionários" },
    { href: "/pedidos", icon: ShoppingCart, label: "Pedidos" },
    { href: "/produtos", icon: Package, label: "Produtos" },
    { href: "/", icon: Menu, label: "Menu" },
  ];

  return (
    <>
      <div>
        <div className="pt-4 px-4 sm:pt-6 sm:px-6 flex justify-between items-center">
          <div className="inline-block border-2 border-amber-50 rounded-lg">
            <h1 className="text-slate-900 bg-slate-100 text-xl sm:text-2xl md:text-3xl font-semibold px-4 sm:px-6 py-3 sm:py-4 text-center">
              Empresa Alpha
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-2">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <item.icon size={18} />
                <span className="hidden lg:inline">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-slate-700 rounded-lg transition"
          >
            {isMenuOpen ? (
              <X size={24} className="text-slate-50" />
            ) : (
              <Menu size={24} className="text-slate-50" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-2 bg-slate-800 px-4 py-4 mt-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center gap-2 text-slate-50 bg-amber-500 rounded-md px-3 py-2 text-xs sm:text-sm m-1 hover:bg-amber-400 transition hover:animate-bounce w-full justify-center"
              >
                <item.icon size={18} />
                <span className="break-words">{item.label}</span>
              </a>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}

export default TopBar;
