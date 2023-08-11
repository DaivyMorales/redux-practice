//Provider global component
import { Provider } from "react-redux";
import { store } from "./store";

interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
