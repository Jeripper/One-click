import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

export default function SettingsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl">{t("settings")}</h1>
        <p>⚙️ 设置内容区域</p>
      </main>
    </div>
  );
}
