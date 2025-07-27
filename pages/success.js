import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function SuccessPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const { title, description, platforms } = router.query;

  const [copied, setCopied] = useState(false);

  // 假装生成一个视频链接
  const videoLink = `https://oneclick.app/video/${encodeURIComponent(title || "demo")}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(videoLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-bold mb-4">✅ {t("uploadSuccess")}</h1>
        <p className="mb-2">📄 {t("title")}: {title}</p>
        <p className="mb-2">📝 {t("descriptionField")}: {description}</p>
        <p className="mb-4">🚀 平台: {platforms}</p>

        <div className="bg-gray-800 p-3 rounded-lg w-full max-w-lg mb-4">
          <p className="break-all">{videoLink}</p>
          <button
            onClick={handleCopy}
            className="mt-2 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
          >
            📋 {copied ? "✅ 已复制" : "复制链接"}
          </button>
        </div>

        <button
          onClick={() => router.push("/upload")}
          className="mt-4 px-4 py-2 bg-purple-500 rounded hover:bg-purple-600"
        >
          🔄 再传一个
        </button>
      </main>
    </div>
  );
}
