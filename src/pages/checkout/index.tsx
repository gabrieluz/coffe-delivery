import {
	BanknoteIcon,
	CreditCard,
	DollarSign,
	Landmark,
	MapPinned,
} from "lucide-react";
import CoffeeDetails from "../../components/coffeeDetails";
import { payments, useAddress } from "../../service/address";
import { InputHTMLAttributes, useState } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	isLoading?: boolean;
}

function Input({ isLoading, ...rest }: IInput) {
	return (
		<input
			disabled={isLoading}
			className="p-3 w-full text-text rounded-[4px] border disabled:hover:cursor-not-allowed placeholder-label border-button focus:border-yellow-dark"
			{...rest}
		/>
	);
}

export default function Checkout() {
	const { address, setAddress, paymentMethod, setPaymentMethod, clearAll } =
		useAddress();
	const [cep, setCep] = useState(address.cep || "");

	const handlePaymentMethod = (payment: payments) => setPaymentMethod(payment);

	return (
		<section className="flex flex-col sm:flex-row gap-8 h-fit w-full justify-between">
			<aside className="flex flex-col gap-3 w-full h-fit">
				<h5 className="text-subtitle font-bold text-lg">Complete seu pedido</h5>
				<div className="rounded-shoppingCard flex flex-col gap-8 bg-card p-10 h-fit sm:w-full">
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
					<div className="flex flex-col gap-4">
						<div className="sm:w-52">
							<Input
								id="cep"
								name="cep"
								placeholder="Cep"
								onChange={e => {
									const cep = e.target.value;
									setCep(cep);

									if (cep.length > 7) setAddress(cep);
									else clearAll();
								}}
								value={cep}
								maxLength={8}
								type="text"
							/>
						</div>
						<Input
							placeholder="Logradouro"
							value={address.logradouro}
							disabled
						/>

						<div className="flex flex-col sm:flex-row gap-4">
							<div className="w-1/4">
								<Input placeholder="Número" value={address.ibge} disabled />
							</div>
							<Input
								placeholder="Complemento"
								value={address.complemento}
								disabled
							/>
						</div>
						<div className="flex flex-col sm:flex-row gap-4">
							<Input placeholder="Bairro" value={address.bairro} disabled />
							<Input placeholder="Cidade" value={address.localidade} disabled />
							<div className="sm:w-32">
								<Input placeholder="UF" value={address.uf} disabled />
							</div>
						</div>
					</div>
				</div>
				<div className="rounded-shoppingCard bg-card p-10 h-fit sm:min-w-full flex flex-col gap-8">
					<div className="flex gap-2">
						<DollarSign className="text-purple-dark" />
						<div>
							<p className="text-subtitle font-Roboto text-base">Pagamento</p>
							<p className="text-text font-Roboto text-xs">
								O pagamento é feito na entrega. Escolha a forma que deseja pagar
							</p>
						</div>
					</div>
					<div className="flex gap-3 flex-col sm:flex-row ">
						<button onClick={() => handlePaymentMethod("credit")}>
							<div
								className={`border border-button  rounded-md p-4 flex gap-3 items-center ${
									paymentMethod === "credit" &&
									"bg-purple-light border-purple-dark"
								}`}
							>
								<CreditCard className="text-purple-dark" />
								<p className="text-text font-Roboto font-normal uppercase text-xs text-nowrap">
									Cartão de crédito
								</p>
							</div>
						</button>
						<button onClick={() => handlePaymentMethod("debit")}>
							<div
								className={`border border-button rounded-md p-4 flex gap-3 items-center ${
									paymentMethod === "debit" &&
									"bg-purple-light border-purple-dark"
								}`}
							>
								<Landmark className="text-purple-dark" />
								<p className="text-text font-Roboto font-normal uppercase text-xs text-nowrap">
									cartão de débito
								</p>
							</div>
						</button>
						<button onClick={() => handlePaymentMethod("money")}>
							<div
								className={`border border-button rounded-md p-4 flex gap-3 items-center ${
									paymentMethod === "money" &&
									"bg-purple-light border-purple-dark"
								}`}
							>
								<BanknoteIcon className="text-purple-dark" />
								<p className="text-text font-Roboto font-normal uppercase text-xs text-nowrap">
									dinheiro
								</p>
							</div>
						</button>
					</div>
				</div>
			</aside>

			<CoffeeDetails />
		</section>
	);
}
