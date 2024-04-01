import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jokenav from "./components/Jokenav";

function App() {
  const [story, setStory] = useState(
    `A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."`
  );

  const handleFunnyClick = () => {
    setStory(
      "Two atoms are walking down the street, one suddenly stops and says, 'Oh no, I lost an electron!' The other asks, 'Are you sure?' The first replies, 'Yes, I'm positive!'"
    );
  };

  const handleNotFunnyClick = () => {
    setStory(
      "Why don't scientists trust atoms? Because they make up everything!"
    );
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0 z-50">
        <Header />
        <Jokenav />
      </div>
      <div className="flex-grow flex flex-col justify-center items-center mt-[-150px]">
        <h3 className="mb-8 max-w-[800px] text-gray-500">{story}</h3>
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
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
