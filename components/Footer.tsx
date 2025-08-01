import Link from "next/link";

export const Footer = () => {
  return (
    <nav className="flex flex-row ml-80 p-4 border-t border-gray-700 bg-gray-900 text-gray-400">
      <div className="w-1/3 p-4 text-center">
        <h2 className="text-md font-bold">NOMBRE DEL DESARROLLADOR</h2>
        <p className="text-base">Alberto Edelmiro Carrizo</p>
      </div>
      <div className="w-1/3 p-4 text-center">
        <img
          src={"/edelbyteLOGO-horizontal.png"}
          width={140}
          className="mx-auto"
          alt="logoedelbyte"
        />
        <p className="text-ms">Desarrollo y diseño</p>
      </div>
      <div className="w-1/3 p-4 text-center">
        <h2 className="text-lg font-bold">MIS REDES</h2>
        <Link className="text-xl text-sky-400 hover:text-sky-300" href={'https://www.linkedin.com/in/alberto-edelmiro-carrizo-7639a186/'} target="blanck">Linkedin</Link>
        <br></br>
        <Link className="text-2xl text-sky-400 hover:text-sky-300" href={'https://github.com/AlbertCarri'} target="blanck">Github</Link>
      </div>
    </nav>
  );
};
