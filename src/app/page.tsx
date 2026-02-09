import Image from "next/image";
import Header from "./components/Header";
import HeaderButtons from "./components/HeaderButtons";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <>
      <Header>
        <HeaderButtons/>
      </Header>
      <div className="flex gap-95">
        <Welcome/>
        <Image
        src="/GOJO.webp" // path relative to public/
        alt="Kashan Khan"
        width={300}
        height={80}
        className="rounded-full shadow-lg"
      />
      </div>
    </>
  );
}
