import Link from "next/link";
import styles from "./layout.module.css";

function MainLayout({ children }) {
  return (
    <>
      <header className="w-full border-b border-gray-200 bg-white  px-1 xl:px-5">
        <div className="container  mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            AmirFood
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              href="/menu"
              className="font-medium text-gray-700 transition hover:text-orange-500"
            >
              Menu
            </Link>

            <Link
              href="/categories"
              className="font-medium text-gray-700 transition hover:text-orange-500"
            >
              Categories
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4">
        {children}
      </main>

      <footer className="border-t border-gray-200">
        <div className="container mx-auto flex h-16 items-center justify-center px-4 text-sm text-gray-500">
          طراحی و توسعه توسط سایت مارک
        </div>
      </footer>
    </>
  );
}

export default MainLayout;