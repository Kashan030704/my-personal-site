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
      <Welcome/>
    </>
  );
}
