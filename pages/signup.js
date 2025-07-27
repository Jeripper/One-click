import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

export default function SignupPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: nickname });
      router.push("/"); // ✅ 注册成功跳转主页
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError(t("errorEmailUsed"));
      } else if (err.code === "auth/weak-password") {
        setError(t("errorWeakPassword"));
      } else {
        setError(t("errorSignupFailed"));
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">🆕 {t("registerTitle")}</h1>
        <form
          onSubmit={handleSignup}
          className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-sm space-y-4"
        >
          <input
            type="text"
            placeholder={t("placeholderNickname")}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full p-2 rounded text-black"
            required
          />
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
            className="w-full py-2 bg-green-500 rounded hover:bg-green-600"
          >
            {t("registerButton")}
          </button>
        </form>
      </main>
    </div>
  );
}

