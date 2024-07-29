import {
	BanknoteIcon,
	CreditCard,
	DollarSign,
	Landmark,
	MapPinned,
} from "lucide-react";
import CoffeeDetails from "../../components/coffeeDetails";

export default function Checkout() {
	return (
		<section className="flex flex-col sm:flex-row gap-8 w-full justify-between">
			<aside className="flex flex-col gap-3 w-full">
				<h5 className="text-subtitle font-bold text-lg">Complete seu pedido</h5>
				<div className="rounded-shoppingCard bg-card p-10 h-fit sm:w-full">
					<div className="flex gap-2">
						<MapPinned className="text-yellow-dark" />
						<div>
							<p className="text-subtitle font-Roboto text-base">
								Endereço de Entrega
							</p>
							<p className="text-text font-Roboto text-xs">
								Informe o endereço onde deseja receber seu pedido
							</p>
						</div>
					</div>
				</div>
				<div className="rounded-shoppingCard bg-card p-10 h-fit sm:min-w-full flex flex-col gap-8">
					<div className="flex gap-2">
						<DollarSign className="text-purple-dark" />
						<div>
							<p className="text-subtitle font-Roboto text-base">
								Endereço de Entrega
							</p>
							<p className="text-text font-Roboto text-xs">
								Informe o endereço onde deseja receber seu pedido
							</p>
						</div>
					</div>
					<div className="flex gap-3 flex-col sm:flex-row ">
						<div className="border border-button peer-checked/card:bg-purple-light peer-checked/card:border-purple-dark rounded-md p-4 flex gap-3 items-center">
							<CreditCard className="text-purple-dark" />
							<p className="text-text font-Roboto font-normal uppercase text-xs text-nowrap">
								Cartão de crédito
							</p>
						</div>
						<div className="border border-button peer-checked/landMark:bg-purple-light peer-checked/landMark:border-purple-dark rounded-md p-4 flex gap-3 items-center">
							<Landmark className="text-purple-dark" />
							<p className="text-text font-Roboto font-normal uppercase text-xs text-nowrap">
								cartão de débito
							</p>
						</div>
						<div className="border border-button peer-checked/money:bg-purple-light peer-checked/money:border-purple-dark rounded-md p-4 flex gap-3 items-center">
							<BanknoteIcon className="text-purple-dark" />
							<p className="text-text font-Roboto font-normal uppercase text-xs text-nowrap">
								dinheiro
							</p>
						</div>
					</div>
				</div>
			</aside>

			<CoffeeDetails />
		</section>
	);
}
