import { Minus, Plus, Trash2 } from "lucide-react";
import { useCoffees } from "../service/coffees";
import { Link } from "react-router-dom";
import { useAddress } from "../service/address";

export default function CoffeeDetails() {
	const { shoppingCard, totalPrice, shippingValue, updateCoffee } =
		useCoffees();

	const { address, paymentMethod } = useAddress();

	return (
		<aside className="flex flex-col gap-3 w-full">
			<h5 className="text-subtitle font-bold text-lg">Cafés selecionados</h5>
			<div className="flex flex-col gap-6 bg-card p-5 w-full h-fit sm:p-10 sm:min-w-[448px] sm:max-w-[640px] rounded-shoppingCard">
				<div className="flex flex-col overflow-y-auto">
					{shoppingCard.map(item => (
						<div key={item.name}>
							<div className="flex py-4 divide-y">
								<div className="flex w-full justify-between flex-row">
									<div className="flex gap-2 sm:gap-5  w-full">
										<img className="w-16 h-16" src={item.img} alt="" />
										<div className="flex flex-col gap-2  w-full">
											<div className="flex justify-between w-full gap-2">
												<p className="text-subtitle text-base font-Roboto font-normal">
													{item.name}
												</p>
												<p className="text-subtitle font-bold font-Roboto min-w-fit h-fit">
													R$ {item.price}
												</p>
											</div>
											<div className="flex gap-2">
												<div className="bg-button rounded-md p-2  w-fit h-fit flex gap-1 text-purple">
													<button
														disabled={item.qtd <= 0}
														onClick={() => updateCoffee(item.id, false)}
													>
														<Minus size={14} />
													</button>
													<p className="text-title font-Roboto text-base leading-4">
														{item.qtd}
													</p>
													<button
														disabled={item.qtd >= 99}
														onClick={() => updateCoffee(item.id, true)}
													>
														<Plus size={14} />
													</button>
												</div>
												<div className="bg-button rounded-md p-2 w-fit h-fit flex gap-1 text-purple ">
													<button
														disabled={item.qtd <= 0}
														onClick={() => updateCoffee(item.id, false, true)}
													>
														<div className="flex items-center gap-1">
															<Trash2 size={14} />
															<p className="uppercase text-xs text-text">
																Remover
															</p>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<hr className="w-full border-button" />
						</div>
					))}
				</div>
				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-3">
						<div className="flex justify-between">
							<p className="text-text text-sm font-normal font-Roboto">
								Total de itens
							</p>
							<p className="text-text text-base font-normal font-Roboto">
								R$ {totalPrice.toFixed(2)}
							</p>
						</div>
						<div className="flex justify-between">
							<p className="text-text text-sm font-normal font-Roboto">
								Entrega
							</p>
							<p className="text-text text-base font-normal font-Roboto">
								R$ {shippingValue.toFixed(2)}
							</p>
						</div>
						<div className="flex justify-between">
							<p className="text-subtitle text-xl font-bold font-Roboto">
								Total
							</p>
							<p className="text-subtitle text-xl font-bold font-Roboto">
								R$ {(totalPrice + 3.5).toFixed(2)}
							</p>
						</div>
					</div>

					<Link to="/success">
						<button
							disabled={
								shoppingCard.length <= 0 || !address.cep || !paymentMethod
							}
							className="bg-yellow w-full rounded-md py-3 disabled:cursor-no-drop"
						>
							<p className="text-white uppercase font-Roboto text-sm">
								confirmar pedido
							</p>
						</button>
					</Link>
				</div>
			</div>
		</aside>
	);
}
