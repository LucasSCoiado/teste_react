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
      <div className="w-full overflow-hidden">
        <div className="pt-4 px-4 sm:pt-6 sm:px-6 flex justify-between items-center gap-2">
          <div className="flex-shrink-0 border-2 border-amber-50 rounded-lg">
            <h1 className="text-slate-900 bg-slate-100 text-sm sm:text-xl sm:text-2xl md:text-3xl font-semibold px-2 sm:px-6 py-2 sm:py-4 text-center whitespace-nowrap">
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
            className="md:hidden p-2 hover:bg-slate-700 rounded-lg transition flex-shrink-0"
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
          <nav className="md:hidden flex flex-col gap-2 bg-slate-800 px-4 py-4 mt-2 w-full">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}

export default TopBar;
