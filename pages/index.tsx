"use client";
import { useAppDispach, useAppSelector } from "@/redux/hooks";
import { increment, decrement } from "@/redux/features/counterSlice";

export default function HomePage() {
  const count = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useAppDispach();

  return (
    <div>
      <h1>Total: {count}</h1>

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
