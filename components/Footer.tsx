import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
export default function Footer() {
  const router = useRouter();
  return (
    <footer className="footer">
      <ul>
        <Link
          href="/"
          className={`${router.pathname == "/" ? "active" : ""}`}
        >
          <li>Home</li>
        </Link>
      </ul>
    </footer>
  );
}
