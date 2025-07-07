import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative bg-[url(/background.jpg)] bg-no-repeat bg-cover h-[80vh] bg-center">
        {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent from-0% to-maroon-500"></div> */}
        <div className="absolute inset-0 custom-gradient"></div>
      </div>
      <div className="bg-maroon-500"></div>
    </div>
  );
}
