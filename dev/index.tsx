import React, {SVGProps} from "react";
import {Button} from "../src";
import ReactDOM from "react-dom/client";

const CustomIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-10h2v6h-2zm0 8h2v2h-2zm1-6h2v6h-2zm0 8h2v2h-2z"
        fill="currentColor"
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
      <Button
        size="xs"
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
      >
        primary
      </Button>
      <Button
        size="sm"
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
      >
        primary
      </Button>
      <Button
        size="md"
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
      >
        primary
      </Button>
      <Button
        size="lg"
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
      >
        primary
      </Button>
    </div>
  </>
);

ReactDOM.createRoot(document.getElementById("app")!).render(<App />);
