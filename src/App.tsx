import { useState, MouseEvent } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@kosmos/ui-components/dist/components/Button/Button";
import { Heading } from "@kosmos/ui-components/dist/components/Heading/Heading";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleOnClick = (event: MouseEvent) => {
    console.log("Button clicked", event);
    const modal = document.getElementById("modal") as HTMLDialogElement;

    modal?.showModal();
  };

  return (
    <div>
      <div className="flex justify-center mb-5">
        <Button variant="primary" onClick={handleOnClick}>
          Button from Kosmos UI
        </Button>
      </div>
      <div className="logo flex justify-center mb-5">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Heading level={1} SEO content="Vite + React" />
      <div className="card">
        <button
          className="button primary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="m-10">Daisy UI example</p>
      <button
        className="btn bg-teal-500 hover:bg-teal-600"
        onClick={handleOnClick}
      >
        open modal
      </button>
      <dialog id="modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-pixxworkers-500 text-slate-50">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default App;
