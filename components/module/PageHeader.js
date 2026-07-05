"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

function PageHeader({ title }) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between mb-6">

      {/* RIGHT SIDE - TITLE */}
      <h1 className="text-xl md:text-2xl font-bold text-gray-800">
        {title}
      </h1>

      {/* LEFT SIDE - BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-black transition"
      >
        <FaArrowLeft />
        <span className="text-sm">Back</span>
      </button>

    </div>
  );
}

export default PageHeader;