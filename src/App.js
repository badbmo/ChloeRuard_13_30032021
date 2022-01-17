import './style/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-in" element={<Login />} />
				<Route path="/user" element={<User />} />
				<Route path="/*" element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;
