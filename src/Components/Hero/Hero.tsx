import Cards from "../SubComponents/Cards";

export default function Hero() {
  return (
    <div className=" bg-[url('/images/Background.png')] bg-cover bg-center h-[150vh] xl:h-[270vh] 2xl:h-screen w-full">
      <div className="logo grid justify-items-center py-5">
        <img src="/images/Logo.png" alt="" />

        <div className="my-12">
          <Cards></Cards>
        </div>
      </div>
    </div>
  );
}
