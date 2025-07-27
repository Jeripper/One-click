import Navbar from "../components/Navbar";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function UploadPage() {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    tiktok: false,
    youtube: false,
    instagram: false,
  });

  const handleCheckboxChange = (platform) => {
    setSelectedPlatforms((prev) => ({ ...prev, [platform]: !prev[platform] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ 模拟上传成功！");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-[Poppins]">
      <Navbar />
      <main className="flex-1 flex flex-col items-center p-8">
        <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          🎥 One-click {t("upload")}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-gray-900 p-6 rounded-2xl shadow-xl space-y-6 border border-gray-700"
        >
          {/* 标题 */}
          <div>
            <label className="block mb-2 text-lg font-semibold">{t("title")}</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t("title")}
              className="w-full p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* 描述 */}
          <div>
            <label className="block mb-2 text-lg font-semibold">{t("description")}</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t("description")}
              className="w-full p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* 平台选择 */}
          <div>
            <p className="mb-3 text-lg font-semibold">{t("choosePlatform")}</p>
            {[
              { id: "tiktok", label: "🎵 TikTok" },
              { id: "youtube", label: "▶️ YouTube" },
              { id: "instagram", label: "📸 Instagram" },
            ].map(({ id, label }) => (
              <label
                key={id}
                className="flex items-center gap-2 bg-gray-800 p-3 rounded-lg mb-2 cursor-pointer hover:bg-gray-700 transition"
              >
                <input
                  type="checkbox"
                  checked={selectedPlatforms[id]}
                  onChange={() => handleCheckboxChange(id)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>

          {/* 提交按钮 */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-lg font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:opacity-90 transition shadow-lg"
          >
            🚀 {t("uploadNow")}
          </button>
        </form>
      </main>
    </div>
  );
}
