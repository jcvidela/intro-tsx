import React from "react";

type ChildTimerProps = {
  miliSeconds: number;
};

const ChildTimer = ({ miliSeconds }: ChildTimerProps) => {
  const [seconds, setSeconds] = React.useState(0);
  const ref = React.useRef<NodeJS.Timeout>();

  React.useEffect(function updateSeconds() {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(function () {
      setSeconds((seconds) => seconds + 1);
    }, miliSeconds);
  }, [miliSeconds]);

  return (
    <div>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </div>
  );
};

export default ChildTimer;
