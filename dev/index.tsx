import React, {SVGProps} from "react";
import {Button} from "../src";
import ReactDOM from "react-dom/client";

const CustomIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    // <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //   <path
    //     d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-10h2v6h-2zm0 8h2v2h-2zm1-6h2v6h-2zm0 8h2v2h-2z"
    //     fill="currentColor"
    //   />
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <path
        d="M3.83337 9.99998h37.1667M10.5 3.33331V16.6666"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const App = () => (
  <>
    <div
      style={{
        padding: "50px",
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      <div style={{flex: "1"}}>
        <h3>ACTIVE BUTTON</h3>
      </div>

      <Button
        onClick={() => alert("oke")}
        // IconLeft={<CustomIcon />}
        // IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
    </div>
    {/* <div
      style={{
        padding: "50px",
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      <div style={{flex: "1"}}>
        <h3>CIRCULAR BUTTON</h3>
      </div>
      <Button
        Corner="Circular"
        onClick={() => alert("oke")}
        IconLeft={<CustomIcon />}
        IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
      <Button
        Corner="Circular"
        onClick={() => alert("oke")}
        Secondary
        IconLeft={<CustomIcon />}
        IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
      <Button
        Corner="Circular"
        onClick={() => alert("oke")}
        Tertiary
        IconLeft={<CustomIcon />}
        IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
      <Button
        Corner="Circular"
        onClick={() => alert("oke")}
        Quaternary
        IconLeft={<CustomIcon />}
        IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
      <Button
        Corner="Circular"
        onClick={() => alert("oke")}
        Link
        IconLeft={<CustomIcon />}
        IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
      <Button
        Corner="Circular"
        onClick={() => alert("oke")}
        Success
        IconLeft={<CustomIcon />}
        IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
      <Button
        Corner="Circular"
        onClick={() => alert("oke")}
        Danger
        IconLeft={<CustomIcon />}
        IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
      <Button
        Corner="Circular"
        onClick={() => alert("oke")}
        Warning
        IconLeft={<CustomIcon />}
        IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
    </div> */}
    {/* <div
      style={{
        padding: "50px",
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      <div style={{flex: "1"}}>
        <h3>DISABLE BUTTON</h3>
      </div>
      <Button
        disabled
        onClick={() => alert("oke")}
        IconLeft={<CustomIcon />}
        IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
      <Button
        disabled
        onClick={() => alert("oke")}
        Secondary
        IconLeft={<CustomIcon />}
        IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
      <Button
        disabled
        onClick={() => alert("oke")}
        Tertiary
        IconLeft={<CustomIcon />}
        IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
      <Button
        disabled
        onClick={() => alert("oke")}
        Quaternary
        IconLeft={<CustomIcon />}
        IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
      <Button
        disabled
        onClick={() => alert("oke")}
        Link
        IconLeft={<CustomIcon />}
        IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
      <Button
        disabled
        onClick={() => alert("oke")}
        Success
        IconLeft={<CustomIcon />}
        IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
      <Button
        disabled
        onClick={() => alert("oke")}
        Danger
        IconLeft={<CustomIcon />}
        IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
      <Button
        disabled
        onClick={() => alert("oke")}
        Warning
        IconLeft={<CustomIcon />}
        IconRight={<CustomIcon />}
      >
        Dani Ganteng
      </Button>
    </div> */}
  </>
);

ReactDOM.createRoot(document.getElementById("app")!).render(<App />);
