"use client";
import { useAppDispach, useAppSelector } from "@/redux/hooks";
import { increment, decrement } from "@/redux/features/counterSlice";
import { useState } from "react";

export default function HomePage() {
  const count = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useAppDispach();

  const [name, setName] = useState("Daivy");

  return (
    <div>
      <h1>Total: {count}</h1>
      <h2>{name}</h2>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
}
