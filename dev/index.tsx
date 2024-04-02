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
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
      >
        primary
      </Button>
      <Button
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
        secondary
      >
        secondary
      </Button>
      <Button
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
        tertiary
      >
        tertiary
      </Button>
      <Button
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
        quaternary
      >
        quaternary
      </Button>
      <Button
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
        link
      >
        link
      </Button>
      <Button
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
        success
      >
        success
      </Button>
      <Button
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
        warning
      >
        warning
      </Button>
      <Button
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
        danger
      >
        danger
      </Button>
      <Button
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
        corner="circular"
      >
        circular
      </Button>
      <Button
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
        secondary
        corner="circular"
      >
        circular secondary
      </Button>
      <Button
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
        tertiary
        corner="circular"
      >
        circular tertiary
      </Button>
      <Button
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
        quaternary
        corner="circular"
      >
        circular quaternary
      </Button>
      <Button
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
        success
        corner="circular"
      >
        circular success
      </Button>
      <Button
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
        warning
        corner="circular"
      >
        circular warning
      </Button>
      <Button
        onClick={() => alert("oke")}
        iconLeft={<CustomIcon />}
        iconRight={<CustomIcon />}
        danger
        corner="circular"
      >
        circular danger
      </Button>
    </div>
  </>
);

ReactDOM.createRoot(document.getElementById("app")!).render(<App />);
