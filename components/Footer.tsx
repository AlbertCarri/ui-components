import Link from "next/link";

export const Footer = () => {
  return (
    <nav className="flex flex-row bg-gray-900 text-gray-400">
      <div className="w-1/3">NOMBRE</div>
      <div className="w-1/3">EMPRESA</div>
      <div className="w-1/3">COPYRIGHT</div>
    </nav>
  );
};
