"use client";

import { useSearchParams } from "next/navigation";

export default function MenuClient() {
  const searchParams = useSearchParams();

  return (
    <div>
      Menu Page
    </div>
  );
}