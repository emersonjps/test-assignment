import ContentMain from "@/components/ContentMain/ContentMain";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import Steps from "@/components/Steps/Steps";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Header />

      <div className="my_title inline-flex flex-col gap-6 items-center min-w-full">
        <h1 className="text-5xl">Wait ! your order in progress.</h1>
        <h2 className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
        </h2>
      </div>

      <Steps />

      <ContentMain />

      <Footer />
    </main>
  );
}
