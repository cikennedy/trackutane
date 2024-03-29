import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import { NativeModules } from "react-native";
NativeModules.DevSettings.setIsDebuggingRemotely(false);

const client = new ApolloClient({
  uri: "http://localhost:5001/api/erstwhile-nightingale",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // only time to do ts-ignore!
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
