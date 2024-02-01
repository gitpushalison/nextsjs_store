"use client"
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>hi nextjs</h1>
      <Link href="/users">go users</Link>
      <ProductCard />
    </main>
  )
}
