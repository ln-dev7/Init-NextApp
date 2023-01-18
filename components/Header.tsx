import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
export default function Header() {
  const router = useRouter();
  return (
    <header className="header">
      <ul>
        <Link
          href="/"
          className={`${router.pathname == "/" ? "active" : ""}`}
        >
          <li>Home</li>
        </Link>
      </ul>
    </header>
  );
}
