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
import LanguageSelector from "./LanguageSelector";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

import ptBR from "../locales/pt-BR";
import en from "../locales/en";
import es from "../locales/es";

function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { language } = useLanguage();

  const translations = {
    "pt-BR": ptBR,
    en: en,
    es: es,
  };

  const t = translations[language];

  const menuItems = [
    {
      href: "/cliente",
      icon: User,
      label: t.clientes,
    },
    {
      href: "/fornecedores",
      icon: Truck,
      label: t.fornecedores,
    },
    {
      href: "/funcionarios",
      icon: Users,
      label: t.funcionarios,
    },
    {
      href: "/pedidos",
      icon: ShoppingCart,
      label: t.pedidos,
    },
    {
      href: "/produtos",
      icon: Package,
      label: t.produtos,
    },
  ];

  return (
    <header className="w-full overflow-hidden">
      <div className="pt-4 px-4 sm:pt-6 sm:px-6 flex justify-between items-center gap-2">
        {/* Logo */}
        <div className="flex-shrink-0 border-2 border-amber-50 rounded-lg">
          <h1 className="text-slate-900 bg-slate-100 text-sm sm:text-xl md:text-3xl font-semibold px-2 sm:px-6 py-2 sm:py-4 text-center whitespace-nowrap">
            {t.empresa}
          </h1>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-2 items-center">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <item.icon size={18} />

              <span className="hidden lg:inline">{item.label}</span>
            </Link>
          ))}

          {/* Idioma */}
          <LanguageSelector />
        </nav>

        {/* Menu Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-slate-700 rounded-lg transition flex-shrink-0"
        >
          {isMenuOpen ? (
            <X size={24} className="text-slate-50" />
          ) : (
            <Menu size={24} className="text-slate-50" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col gap-2 bg-slate-800 px-4 py-4 mt-2 w-full">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon size={18} />

              <span>{item.label}</span>
            </Link>
          ))}

          <LanguageSelector />
        </nav>
      )}
    </header>
  );
}

export default TopBar;
