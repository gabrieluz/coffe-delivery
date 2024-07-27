import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Success from "./pages/success";
import Checkout from "./pages/checkout";

const Pages = () => {
	return (
		<>
			<Header />
			<div>
				<Outlet />
			</div>
		</>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Pages />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/checkout",
				element: <Checkout />,
			},
			{
				path: "/success",
				element: <Success />,
			},
		],
	},
]);

export default function Router() {
	return <RouterProvider router={router} />;
}
