import Footer from "../../components/footer";
import Header from "../../components/header";
import ChatsSidebar from "../../components/chatsSidebar";
// import Scroll from "../../components/scroll";
import "./index.css";

function Home() {
  return (
    <>
      <Header />

      <main className="home_main">
        {/* <Scroll /> */}

        <ChatsSidebar />
      </main>

      <Footer />
    </>
  );
}

export default Home;
