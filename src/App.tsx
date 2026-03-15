import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/router/Router";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ChakraProvider value={defaultSystem}>
        <BrowserRouter>
          <Router />
      </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
