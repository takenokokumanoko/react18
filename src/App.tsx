import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/router/Router";
import { ChakraProvider, defaultSystem} from "@chakra-ui/react";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <ChakraProvider value={defaultSystem}>
        <Toaster />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
