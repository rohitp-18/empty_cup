import { Info, MoreVertical, Star } from "lucide-react";
import logo from "./assets/logo.png";
import group6 from "./assets/Group 6.png";
import group7 from "./assets/Group 7.png";
import group8 from "./assets/Group 8.png";
import group9 from "./assets/Group 9.png";
import group10 from "./assets/Group 10.png";
import Card from "./components/card";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const tempData = [
    {
      _id: "1",
      name: "Epic Design",
      no_project: "57",
      years: "8",
      ratings: 4.5,
      mobile: ["+91 - 984532853", "+91 - 984532854"],
    },
    {
      _id: "2",
      name: "Studio - D3",
      no_project: "43",
      years: "6",
      ratings: 3.5,
      mobile: ["+91 - 984532853", "+91 - 984532854"],
    },
    {
      _id: "3",
      name: "House of Design",
      no_project: "32",
      years: "5",
      ratings: 4.0,
      mobile: ["+91 - 984532853", "+91 - 984532854"],
    },
  ];

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/agency/list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(tempData); // Fallback to temp data in case of error
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      {loading ? (
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
          <Info className="w-10 h-10 animate-spin text-gray-500" />
          <p className="mt-4 text-gray-500">Loading...</p>
        </div>
      ) : (
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
              <img
                src={group6}
                className="w-[34px] h-[42px]"
                alt="User Avatar"
              />
              <img
                src={group7}
                className="w-[27px] h-[41px]"
                alt="User Avatar"
              />
              <img
                src={group8}
                className="w-[17px] h-[40px]"
                alt="User Avatar"
              />
            </div>
            <div className="flex items-center gap-6">
              <img
                src={group10}
                className="w-[42px] h-[46px]"
                alt="User Avatar"
              />
              <img
                src={group9}
                className="w-[31px] h-[44px]"
                alt="User Avatar"
              />
            </div>
          </div>
          {data &&
            data.map((item, i) => (
              <Card
                key={item.id}
                title={item.name}
                projects={item.no_project}
                years={item.years}
                ratings={item.ratings}
                mobile={item.mobile}
                bg={i % 2 === 0 ? "#F8F4F1" : "white"}
              />
            ))}
        </section>
      )}
    </main>
  );
}

export default App;
