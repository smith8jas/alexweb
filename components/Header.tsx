"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand-mark" href="/" aria-label="Alexander Coffee inicio">
        <img src="/design/logo.png" alt="Alexander Coffee" />
      </Link>

      <nav className="nav-scroll" aria-label="Navegación principal">
        {navItems.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link className={active ? "active" : ""} key={item.href} href={item.href}>
              {item.label}
            </Link>
          );
        })}
        <Link className="order-link" href="/contacto">
          Pedidos
        </Link>
      </nav>
    </header>
  );
}
