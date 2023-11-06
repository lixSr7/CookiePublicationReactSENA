import { useState, useEffect } from "react";

// Style Sheets
import "./App.css";

// Componets
import Navbar from "./Navbar";
import Threads from "./Threads";
import { ScrollShadow } from "@nextui-org/react";
import CreatePublication from "./CreatePublication";


import { Toaster } from "react-hot-toast";

// JSON data

import data from '../assets/Data.json';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "Tema claro" ? "dark" : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Navbar TogleTheme={toggleTheme} />

      <div className="flex w-full items-center flex-col gap-6">

        <CreatePublication />

        <ScrollShadow hideScrollBar className="w-[600px] h-[600px]">
          <div className="flex flex-col gap-5 w-full items-center">
            {
              data.map(user => (
                <Threads
                  key={`${user.name}-${user.hastag}}`}
                  username={user.name}
                  nickname={user.nickname}
                  content={user.content}
                  hastag={user.hastag}
                  likesAmout={user.Likes}
                  followersAmout={user.followersAmout}
                  commentsAmout={user.Comments}
                  imageURL={user.imageURL} />
              ))
            }
          </div>
        </ScrollShadow>
      </div>

      {/* <Toaster 
        toastOptions={
          {
            className:'w-[200px] text-xl dark:bg-zinc-900 dark:text-white'
          }
        }
        position="top-right" /> */}
    </>
  );
}

export default App;
