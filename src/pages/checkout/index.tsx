import { Minus, Plus, Trash2 } from "lucide-react";
import { useCoffees } from "../../service/coffees";

export default function Checkout() {
	const { shoppingCard, updateCoffee } = useCoffees();
	return (
		<section className="flex gap-8">
			<aside className="flex flex-col gap-3">
				<h5 className="text-subtitle font-bold text-lg">Complete seu pedido</h5>
				<div className="rounded-shoppingCard bg-card p-10 h-fit w-[448px]"></div>
				<div className="rounded-shoppingCard bg-card p-10 h-fit w-[448px]"></div>
			</aside>
			<aside className="flex flex-col gap-3">
				<h5 className="text-subtitle font-bold text-lg">Cafés selecionados</h5>
				<div className="rounded-shoppingCard flex flex-col gap-6 bg-card p-10 h-fit w-[448px] ">
					{shoppingCard.map((item, index) => (
						<>
							<div key={index} className="flex py-2">
								<div className="flex w-full justify-between">
									<div className="flex gap-5">
										<img className="w-16 h-16" src={item.img} alt="" />
										<div className="flex flex-col gap-2">
											<p className="text-subtitle text-base font-Roboto font-normal">
												{item.name}
											</p>
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
														onClick={() => updateCoffee(item.id, false)}
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
									<p className="text-subtitle font-bold font-Roboto">
										R$ {item.price}
									</p>
								</div>
							</div>
							<hr className="w-full border-button" />
						</>
					))}
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-3">
							<div className="flex justify-between">
								<p className="text-text text-sm font-normal font-Roboto">
									Total de itens
								</p>
								<p className="text-text text-base font-normal font-Roboto">
									R$ 29,70
								</p>
							</div>
							<div className="flex justify-between">
								<p className="text-text text-sm font-normal font-Roboto">
									Entrega
								</p>
								<p className="text-text text-base font-normal font-Roboto">
									R$ 3.50
								</p>
							</div>
							<div className="flex justify-between">
								<p className="text-subtitle text-xl font-bold font-Roboto">
									Total
								</p>
								<p className="text-subtitle text-xl font-bold font-Roboto">
									R$ 33,20
								</p>
							</div>
						</div>

						<button className="bg-yellow w-full rounded-md py-3">
							<p className="text-white uppercase font-Roboto text-sm">
								confirmar pedido
							</p>
						</button>
					</div>
				</div>
			</aside>
		</section>
	);
}
