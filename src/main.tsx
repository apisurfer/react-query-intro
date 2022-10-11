import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./queryClient";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // strict mode disabled beacuse it forces double rendering in develop mode
  // so we can debug more easily
  // <React.StrictMode>
  <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ChakraProvider>
  // </React.StrictMode>
);
