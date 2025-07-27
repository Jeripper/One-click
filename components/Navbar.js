import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const { i18n, t } = useTranslation();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/auth");
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "zh" : "en");
  };

  return (
    <nav className="bg-black p-4 flex justify-between items-center shadow-md">
      <h1 className="text-white text-2xl font-bold">One-click</h1>

      <div className="flex gap-4 items-center">
        {[
          { href: "/", label: t("home") },
          { href: "/upload", label: t("upload") },
          { href: "/profile", label: t("profile") },
          { href: "/settings", label: t("settings") },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-white px-3 py-1 rounded hover:bg-gray-700 transition"
          >
            {item.label}
          </Link>
        ))}

        {user ? (
          <button
            onClick={handleLogout}
            className="text-white border border-white px-3 py-1 rounded hover:bg-gray-700 transition"
          >
            {t("logout")}
          </button>
        ) : (
          <Link
            href="/auth"
            className="text-white border border-white px-3 py-1 rounded hover:bg-gray-700 transition"
          >
            {t("login")}
          </Link>
        )}

        {/* 🌍 语言切换按钮 */}
        <button
          onClick={toggleLanguage}
          className="text-white border border-white px-3 py-1 rounded hover:bg-gray-700 transition"
        >
          {i18n.language === "en" ? "中文" : "EN"}
        </button>
      </div>
    </nav>
  );
}




