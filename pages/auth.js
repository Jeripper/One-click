import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

export default function AuthPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // 登录成功后跳转主页
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError(t("errorUserNotFound"));
      } else if (err.code === "auth/wrong-password") {
        setError(t("errorWrongPassword"));
      } else {
        setError(t("errorLoginFailed"));
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">🔑 {t("loginTitle")}</h1>
        <form
          onSubmit={handleLogin}
          className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-sm space-y-4"
        >
          <input
            type="email"
            placeholder={t("placeholderEmail")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded text-black"
            required
          />
          <input
            type="password"
            placeholder={t("placeholderPassword")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded text-black"
            required
          />
          {error && <p className="text-red-400">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-purple-500 rounded hover:bg-purple-600"
          >
            {t("loginButton")}
          </button>
        </form>
      </main>
    </div>
  );
}



