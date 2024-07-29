import CoffeeDetails from "../../components/coffeeDetails";

export default function Checkout() {
	return (
		<section className="flex flex-col sm:flex-row gap-8 w-full">
			<aside className="flex flex-col gap-3">
				<h5 className="text-subtitle font-bold text-lg">Complete seu pedido</h5>
				<div className="rounded-shoppingCard bg-card p-10 h-fit sm:w-[448px]"></div>
				<div className="rounded-shoppingCard bg-card p-10 h-fit sm:w-[448px]"></div>
			</aside>
			<CoffeeDetails />
		</section>
	);
}
