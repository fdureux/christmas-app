import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-center pt-8 text-red-700 text-2xl font-bold"> Oh oh oh !</h1>
      <Link href="/gift-list/me"> Gérer ma liste </Link>
      <Link href="/gift-list/all"> Voir les listes </Link>
    </main>
  )
}
