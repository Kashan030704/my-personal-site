import Image from "next/image";
import Header from "./components/Header";
import HeaderButtons from "./components/HeaderButtons";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <>
      <Header>
        <HeaderButtons page_number="1"/>
      </Header>
      <div className="flex gap-90">
        <Welcome/>
        <Image
        src="/GOJO.webp" // path relative to public/
        alt="Kashan Khan"
        width={400}
        height={80}
        className="rounded-full shadow-lg mt-3 mr-8 border border-3 border-white"
      />
      </div>
    </>
  );
}
