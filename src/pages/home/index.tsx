import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useCoffees } from "../../service/coffees";

export default function Home() {
	const { coffeesList } = useCoffees();

	return (
		<section className="w-full flex justify-center items-center">
			<aside className="grid sm:grid-cols-4 gap-4 items-center justify-center">
				{coffeesList.map((item, index) => (
					<div
						className="rounded-coffeeCard bg-card w-64 h-full p-6 flex flex-col gap-8 items-center justify-between"
						key={index}
					>
						<div className="flex flex-col gap-3 items-center">
							<div className="bottom-4">
								<img src={item.img} alt={item.name} />
							</div>
							<div className="flex gap-1 flex-wrap justify-center ">
								{item.tags.map((item, index) => (
									<div
										className="bg-yellow-light rounded-full px-2 py-1"
										key={index}
									>
										<p className="text-yellow-dark font-bold text-[10px] uppercase font-Roboto">
											{item}
										</p>
									</div>
								))}
							</div>
							<div className="text-center flex gap-2 flex-col">
								<p className="text-subtitle font-bold text-xl">{item.name}</p>
								<p className="text-label font-Roboto text-sm">
									{item.description}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex text-text items-center gap-1">
								<p className="text-sm">R$</p>{" "}
								<strong className="text-2xl ">{item.price}</strong>
							</div>
							<div className="flex gap-2">
								<div className="bg-button rounded-md p-2 flex gap-1 text-purple">
									<button>
										<Minus size={14} />
									</button>
									<p className="text-title">0</p>
									<button>
										<Plus size={14} />
									</button>
								</div>
								<div className="bg-purple-dark text-card p-2 rounded-md flex justify-center items-center">
									<ShoppingCart size={22} />
								</div>
							</div>
						</div>
					</div>
				))}
			</aside>
		</section>
	);
}
