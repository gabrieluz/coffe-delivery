import { useCoffees } from "../../service/coffees";
import CoffeeCard from "../../components/coffeeCard";

export default function Home() {
	const { coffeesList } = useCoffees();

	return (
		<section className="w-full flex flex-col gap-4 justify-center items-center">
			<h3 className="text-subtitle text-3xl font-bold">Nossos cafés</h3>
			<aside className="grid sm:grid-cols-4 gap-4 items-center justify-center">
				{coffeesList.map((item, index) => (
					<CoffeeCard coffee={item} key={index} />
				))}
			</aside>
		</section>
	);
}
