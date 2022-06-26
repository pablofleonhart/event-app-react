import { ApolloProvider } from "@apollo/client";
import { Router } from "./components/Router";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;