import react from "react"
import Link from "next/link"

export default function register() {
  return (
    <div className={"flex h-full w-full"}>
      <div className="flex flex-col bg-purple-cube h-screen w-full md:w-1/2 lg:w-1/3 justify-center px-10">
        <div>
          <p className={"text-white text-4xl text-center my-4"}>Bienvenue chez AirCube</p>
        </div>
          <hr className={"w-auto mb-5"} />
        <div className="flex flex-col my-5 ">
            <input className="py-6 mb-4 px-2 text-white h-10 bg-transparent rounded-md border border-2 border-gray-200 " type={"text"} placeholder="Nom"/>
            <input className="py-6 mb-4 px-2 text-white h-10 bg-transparent rounded-md border border-2 border-gray-200 " type={"text"} placeholder="Prenom"/>
            <input className="py-6 mb-4 px-2 text-white h-10 bg-transparent rounded-md border border-2 border-gray-200 " type={"text"} placeholder="Email"/>
            <input className="py-6 mb-4 px-2 text-white h-10 bg-transparent rounded-md border border-2 border-gray-200" type={"text"} placeholder="Mot de passe"/>
            <label className="text-white ml-4 w-fit">
                <input type="checkbox" className="mr-5"/>
                J'accepte les termes du contrat d'utilisation.
            </label>
          <Link href={"/"}>
            <div className=" py-3 my-4 bg-white font-bold rounded-full hover:bg-gray-100 cursor-pointer transition">
              <p className={"m-auto text-center w-full "}>Inscription</p>
            </div>
          </Link>
          
        </div>
      </div>
      <img src="../img/background-login.jpg" className="w-0 md:w-1/2 lg:w-2/3 object-cover"/>
    </div>
  );
}
