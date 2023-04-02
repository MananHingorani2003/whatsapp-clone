//Components:
import Messenger from "./components/Messenger";
import {GoogleOAuthProvider} from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId = '1001164610515-baln17efa2tansup75tvt46ss1bboapo.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
