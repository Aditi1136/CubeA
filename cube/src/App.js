import { Provider } from "react-redux";
import CustomerInformation from "./components/CustomerInformation";
import appStore from "./utils/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
      <CustomerInformation />
      </Provider>
    </div>
  );
}

export default App;
