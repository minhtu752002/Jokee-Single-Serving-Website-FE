import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jokenav from "./components/Jokenav";
import { getJokeAPI } from "./api/joke";

function App() {
  const [jokes, setJokes] = useState([]);
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const newJokes = await getJokeAPI();
    setJokes(newJokes);
    setCurrentJokeIndex(0);
  };

  const handleFunnyClick = () => {
    if (currentJokeIndex < jokes.length - 1) {
      setCurrentJokeIndex(currentJokeIndex + 1);
    } else {
      alert("That's all the jokes for today! Come back another day!");
    }
    localStorage.setItem("voted", "funny"); // Lưu trạng thái bình chọn vào localStorage
  };

  const handleNotFunnyClick = () => {
    if (currentJokeIndex < jokes.length - 1) {
      setCurrentJokeIndex(currentJokeIndex + 1);
    } else {
      alert("That's all the jokes for today! Come back another day!");
    }
    localStorage.setItem("voted", "not funny"); // Lưu trạng thái bình chọn vào localStorage
  };

  useEffect(() => {
    const voted = localStorage.getItem("voted");
    if (voted) {
      // Nếu đã bình chọn trước đó, xử lý nó tương ứng
      if (voted === "funny") {
        handleFunnyClick();
      } else if (voted === "not funny") {
        handleNotFunnyClick();
      }
    }
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0 z-50">
        <Header />
        <Jokenav />
      </div>
      {jokes.length > 0 && currentJokeIndex < jokes.length && (
        <div className="flex-grow flex flex-col justify-center items-center mt-[-150px]">
          <h3 className="mb-8 max-w-[800px] text-gray-500">
            {jokes[currentJokeIndex].contentstory}
          </h3>
          <hr className="w-[650px] border-t border-gray-200 mb-8" />
          <div className="flex">
            <button
              onClick={handleFunnyClick}
              className="m-2 py-2 px-4 bg-blue-500 text-white rounded-none w-[200px]"
            >
              This is Funny!
            </button>
            <button
              onClick={handleNotFunnyClick}
              className="m-2 py-2 px-4 bg-green-500 text-white rounded-none w-[200px]"
            >
              This is not funny.
            </button>
          </div>
        </div>
      )}
      {jokes.length === 0 && (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-gray-500">Loading jokes...</p>
        </div>
      )}
      {currentJokeIndex >= jokes.length && (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-gray-500">
            That's all the jokes for today! Come back another day!
          </p>
        </div>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
