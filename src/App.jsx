import { Info, MoreVertical, Star } from "lucide-react";
import logo from "./assets/logo.png";
import group6 from "./assets/Group 6.png";
import group7 from "./assets/Group 7.png";
import group8 from "./assets/Group 8.png";
import group9 from "./assets/Group 9.png";
import group10 from "./assets/Group 10.png";
import Card from "./components/card";

function App() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <section className="w-[360px] max-w-full min-h-screen bg-white rounded-lg shadow-md">
        <header className="py-6 px-5 flex justify-between items-center pb-5">
          <img src={logo} className="w-7 h-7" />
          <h1 className="text-[24px] font-bold h-[35px] text-[#716966]">
            EmptyCup
          </h1>
          <MoreVertical className="w-7 h-7 text-[#716966] cursor-pointer" />
        </header>
        <hr className="border-t border-[#E0DCD9] opacity-60" />
        <div className="flex justify-between items-center px-4 py-5">
          <div className="flex items-center gap-6">
            <img src={group6} className="w-[34px] h-[42px]" alt="User Avatar" />
            <img src={group7} className="w-[27px] h-[41px]" alt="User Avatar" />
            <img src={group8} className="w-[17px] h-[40px]" alt="User Avatar" />
          </div>
          <div className="flex items-center gap-6">
            <img
              src={group10}
              className="w-[42px] h-[46px]"
              alt="User Avatar"
            />
            <img src={group9} className="w-[31px] h-[44px]" alt="User Avatar" />
          </div>
        </div>
        <Card title="Epic Design" projects="57" years="8" ratings={4.5} />
        <Card
          title="Studio - D3"
          bg="white"
          projects="43"
          years="6"
          ratings={3.5}
        />
        <Card title="House of Design" projects="32" years="5" ratings={4.0} />
      </section>
    </main>
  );
}

export default App;
