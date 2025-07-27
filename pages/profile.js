import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

export default function ProfilePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl">{t("profile")}</h1>
        <p>👤 用户信息展示区域</p>
      </main>
    </div>
  );
}


