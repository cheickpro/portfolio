import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl font-extrabold tracking-tight"
    >
      <span className="text-blue-600">R</span>
      achid
      <span className="text-cyan-500">.</span>
    </Link>
  );
}