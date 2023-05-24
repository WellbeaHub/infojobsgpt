import React from "react";
import Link from "next/link";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col h-screen">
      {/* Bottom Navbar */}
      <nav className="flex justify-around items-center h-16 bg-gray-100 border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <Link href="/dashboard/search">
          <div className="flex flex-col items-center justify-center">
            <span>Buscar</span>
          </div>
        </Link>
        <Link href="/dashboard/profile">
          <div className="flex flex-col items-center justify-center">
            <span>Perfil</span>
          </div>
        </Link>
      </nav>
      {children}
    </section>
  );
}
