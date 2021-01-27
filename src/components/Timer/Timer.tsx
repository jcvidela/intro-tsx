import React from "react";
import { ChildTimer } from "../index";

const Timer = () => {
  const [miliSeconds, setMiliSeconds] = React.useState(1000);

  return (
    <div>
      <h3>Hello timer: useEffect - useRef</h3>
      <span>Miliseconds: {miliSeconds}</span>
      <div>
        <button
          className="btn btn-success"
          onClick={() => setMiliSeconds(1000)}
        >
          1000
        </button>
        <button
          className="btn btn-success"
          onClick={() => setMiliSeconds(2000)}
        >
          2000
        </button>
      </div>
      <ChildTimer miliSeconds={miliSeconds} />
    </div>
  );
};

export default Timer;
