import { DollarSign, MapPin, Timer } from "lucide-react";
import { assets } from "../../assets";
import { payments, useAddress } from "../../service/address";

export default function Success() {
	const { address, paymentMethod } = useAddress();

	const paymentMethodMap: Record<payments, string> = {
		credit: "Cartão de Crédito",
		debit: "Cartão de Débito",
		money: "Dinheiro",
	};

	return (
		<div className="flex flex-col gap-10 w-full items-center">
			<div>
				<h1 className="text-yellow-dark font-extrabold text-3xl">
					Uhu! Pedido confirmado
				</h1>
				<p className="text-subtitle font-normal font-Roboto text-xl">
					Agora é só aguardar que logo o café chegará até você
				</p>
			</div>
			<div className="flex gap-10">
				<div className="bg-gradient-to-br from-yellow to-purple p-[2px] rounded-coffeeCard ">
					<div className="p-10 bg-background h-full w-full flex flex-col gap-8 rounded-coffeeCard">
						<div className="flex gap-3 items-center">
							<div className="bg-purple text-background p-2 rounded-full h-fit w-fit">
								<MapPin size={16} />
							</div>
							<div className="min-w-fit">
								<p className="text-text font-Roboto">
									Entrega em{" "}
									<span className="font-bold whitespace-nowrap">
										{address.logradouro}, {address.ibge}
									</span>
								</p>
								<p className="text-text font-Roboto">
									{address.bairro} - {address.localidade}, {address.uf}
								</p>
							</div>
						</div>
						<div className="flex gap-3 items-center">
							<div className="bg-yellow text-background p-2 rounded-full h-fit w-fit">
								<Timer size={16} />
							</div>
							<div>
								<p className="text-text font-normal font-Roboto">
									Previsão de entrega
								</p>
								<span className="text-text font-bold font-Roboto">
									20 min - 30 min
								</span>
							</div>
						</div>
						<div className="flex gap-3 items-center">
							<div className="bg-yellow-dark text-background p-2 rounded-full h-fit w-fit">
								<DollarSign size={16} />
							</div>
							<div>
								<p>Pagamento na entrega</p>
								<span className="text-text font-bold font-Roboto">
									{paymentMethodMap[paymentMethod as payments]}
								</span>
							</div>
						</div>
					</div>
				</div>
				<img
					className="hidden sm:block"
					src={assets.SuccessBanner}
					alt="Success Banner"
				/>
			</div>
		</div>
	);
}
