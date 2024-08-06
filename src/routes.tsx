import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Success from "./pages/success";
import Checkout from "./pages/checkout";

const Pages = () => {
	return (
		<>
			<Header />
			<main className="w-full min-h-screen max-h-full flex bg-background pb-10 px-8 sm:px-80">
				<Outlet />
			</main>
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
