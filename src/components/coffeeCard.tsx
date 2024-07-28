import { Minus, Plus, ShoppingCart } from "lucide-react";
import { ICoffee, useCoffees } from "../service/coffees";

interface coffee {
	coffee: ICoffee;
}

export default function CoffeeCard({ coffee }: coffee) {
	const { addCoffee, subtractCoffee } = useCoffees();

	const { id, name, description, img, tags, price, qtd } = coffee;

	return (
		<div className="rounded-coffeeCard bg-card w-64 h-full p-6 flex flex-col gap-8 items-center justify-between">
			<div className="flex flex-col gap-3 items-center">
				<div className="bottom-4">
					<img src={img} alt={name} />
				</div>
				<div className="flex gap-1 flex-wrap justify-center ">
					{tags.map((item, index) => (
						<div className="bg-yellow-light rounded-full px-2 py-1" key={index}>
							<p className="text-yellow-dark font-bold text-[10px] uppercase font-Roboto">
								{item}
							</p>
						</div>
					))}
				</div>
				<div className="text-center flex gap-2 flex-col">
					<p className="text-subtitle font-bold text-xl">{name}</p>
					<p className="text-label font-Roboto text-sm">{description}</p>
				</div>
			</div>
			<div className="flex items-center gap-6">
				<div className="flex text-text items-center gap-1">
					<p className="text-sm">R$</p>{" "}
					<strong className="text-2xl ">{price}</strong>
				</div>
				<div className="flex gap-2">
					<div className="bg-button rounded-md p-2 flex gap-1 text-purple">
						<button onClick={() => subtractCoffee(id)}>
							<Minus size={14} />
						</button>
						<p className="text-title">{qtd}</p>
						<button onClick={() => addCoffee(id)}>
							<Plus size={14} />
						</button>
					</div>
					<div className="bg-purple-dark text-card p-2 rounded-md flex justify-center items-center">
						<ShoppingCart size={22} />
					</div>
				</div>
			</div>
		</div>
	);
}
