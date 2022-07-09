import { useUtility } from "./Context";
import Loader from "./Helper Files/Loader";
import HomeMain from "./Home/HomeMain";
function App() {
  const { loader } = useUtility();
  return (
    <>
      {loader.status && <Loader message={loader.message} />}
      <HomeMain />
    </>
  );
}

export default App;
