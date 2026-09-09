import { useLanguage } from "../context/LanguageContext";

function LanguageSelector() {
  const { language, changeLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => changeLanguage(e.target.value)}
      className="bg-slate-700 text-slate-50 border border-slate-500 rounded-lg px-2 py-2 text-sm cursor-pointer"
      translate="no"
    >
      <option value="pt-BR">🇧🇷 Português</option>
      <option value="en">🇺🇸 English</option>
      <option value="es">🇪🇸 Español</option>
    </select>
  );
}

export default LanguageSelector;
