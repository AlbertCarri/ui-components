import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-row bg-slate-900 h-18 justify-between p-2 border-b border-gray-700">
      <div>
        <Link href={"/"}>
        <img src={'/edelbyteLOGO-horizontal.png'} style={{marginTop:"-5px"}} width={200} alt="isologo edelbyte"/>
        </Link>
      </div>
      <div className="flex flex-row text-xl mr-4 gap-8 bg-gray-900 text-gray-100 justify-center items-center">
        <Link href={"#"}>Documentos</Link>
        <Link href={"#"}>Componentes UI</Link>
        <Link href={"#"}>Métodos</Link>
        <Link href={"#"}>Contacto</Link>
      </div>
    </nav>
  );
};
