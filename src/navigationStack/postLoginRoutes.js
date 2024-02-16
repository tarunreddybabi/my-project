import { Route, Routes } from "react-router-dom";
import InvalidScreen from "../screens/invalidScreen";
import AboutScreen from "../screens/postLoginScreens/aboutScreen";
import HomeScreen from "../screens/postLoginScreens/homeScreen";

const PostLogin = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomeScreen} />
        <Route path="/about" Component={AboutScreen} />
        <Route path="*" Component={InvalidScreen} />
      </Routes>
    </>
  );
};
export default PostLogin;
