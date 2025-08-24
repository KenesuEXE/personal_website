"use client";
import { useState } from "react";

export default function Home() {
  const [history, setHistory] = useState<Array<"prompt" | "about" | "portfolio" | "help" | "contacts">>(["prompt"]);
  const [input, setInput] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-start justify-end p-8">
      <div className="text-start font-light">


        {history.map((section, idx) => (
          <div key={idx}>

            { section === "prompt" && (
              <p className="text-xl">
                Initializing... <br />
                Welcome! <br />
                What would you like to do? <br />
                <br />
              </p>
            )}

            { section === "about" && (
              <p className="text-xl">
                -------- <br />
                About Me <br />
                -------- <br />
                Oh hi :{'>'} I am Ken. I'm a metallurgical engineer and I code for fun. <br />
                I make AI things, I like anime and VTubers, I read Murakami books, and I do all sorts of other stuff as well. <br />
                <br />
              </p>
            )}

            { section === "help" && (
              <p className="text-xl">
                ---- <br />
                Help <br />
                ---- <br />
                about - show About Me section <br />
                portfolio - show Portfolio section <br />
                contacts - show Contacts section <br />
                <br />
              </p>
            )}

            { section === "portfolio" && (
              <p className="text-xl">
                --------- <br />
                Portfolio <br />
                --------- <br />
                Check out my Github at github.com/kenesuexe <br />
                Check out my LinkedIn at linked.in/knnthcristobal <br />
                And check out my CV at {'<insert link here>'} <br />
                <br />
              </p>
            )}

            { section === "contacts" && (
              <p className="text-xl">
                -------- <br />
                Contacts <br />
                -------- <br />
                Email me at kenesuexe@gmail.com <br />
                Message me on Discord: kenesuexe <br />
                I don't use most social media sites anymore. Sorry. <br />
                <br />
              </p>
            )}

          </div>
        ))}

        <input
          className="bg-transparent border-b outline-none text-xl mt-4"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") {
              if (["about", "portfolio", "contacts", "help"].includes(input)) {
                setHistory([...history, input as any]);
              }
              setInput("");
            }
          }}
        />
        
      </div>
    </main>
  );
}
