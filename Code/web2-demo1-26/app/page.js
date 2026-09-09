import Link from "next/link";
import Title from "./week2/title";

export default function Page(){
  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-800">Web 2 Demos</h1>
      <p>Click one of the following links</p>
      <Link href="/week2" className= "text-underline text-blue-400">Go to week 2</Link>
    </main>
  )
}