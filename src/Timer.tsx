import React, { useEffect, useState } from "react";
import { Progress } from "reactstrap";

interface TimerProps {
  onFinish: () => void;
  started: boolean;
}

const duration = 30;

export default function Timer(props: TimerProps) {
  const { onFinish, started } = props;
  const [value, setValue] = useState<number>(100);

  useEffect(() => {
    if (!started) {
      return;
    }

    if (value === 0) {
      onFinish();
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const unit = 100 / (duration * 10);
      setValue(value - unit);
    }, 100);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [onFinish, started, value]);

  return <Progress value={value} />;
}
