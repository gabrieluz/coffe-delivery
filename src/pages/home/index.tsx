import { useCoffees } from "../../service/coffees";
import CoffeeCard from "../../components/coffeeCard";
import { assets } from "../../assets";
import { Coffee, Package, ShoppingCart, Timer } from "lucide-react";

const benefits = [
	{
		label: "Compra simples e segura",
		icon: <ShoppingCart size={16} />,
		boxColor: "bg-yellow-dark",
	},
	{
		label: "Embalagem mantém o café intacto",
		icon: <Package size={16} />,
		boxColor: "bg-text",
	},
	{
		label: "Entrega rápida e rastreada",
		icon: <Timer size={16} />,
		boxColor: "bg-yellow",
	},
	{
		label: "O café chega fresquinho até você",
		icon: <Coffee size={16} />,
		boxColor: "bg-purple",
	},
];

export default function Home() {
	const { coffeesList } = useCoffees();

	return (
		<section className="w-full flex flex-col gap-4 justify-center items-center">
			<aside className="flex flex-col sm:flex-row gap-14 justify-center items-center sm:py-12 w-full sm:px-10">
				<div className="flex flex-col gap-10">
					<div className="flex flex-col gap-4">
						<h1 className="text-title font-bold text-5xl">
							Encontre o café perfeito <br /> para qualquer hora do dia
						</h1>
						<p className="text-subtitle font-Roboto font-normal text-xl">
							Com o Coffee Delivery você recebe seu café onde estiver, a
							qualquer hora
						</p>
					</div>
					<div className="grid sm:grid-cols-2 gap-5">
						{benefits.map(item => (
							<div key={item.label} className="flex items-center gap-3">
								<div
									className={`${item.boxColor} p-2 rounded-full w-fit h-fit text-background`}
								>
									{item.icon}
								</div>
								<p>{item.label}</p>
							</div>
						))}
					</div>
				</div>
				<div>
					<img src={assets.Banner} alt="" />
				</div>
			</aside>
			<h3 className="text-subtitle text-3xl font-bold">Nossos cafés</h3>
			<aside className="grid sm:grid-cols-4 gap-4 items-center justify-center">
				{coffeesList.map(item => (
					<CoffeeCard coffee={item} key={item.name} />
				))}
			</aside>
		</section>
	);
}
