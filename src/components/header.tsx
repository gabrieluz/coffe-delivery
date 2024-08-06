import { MapPin, ShoppingCart } from "lucide-react";
import { assets } from "../assets";
import { useCoffees } from "../service/coffees";
import { Link } from "react-router-dom";
import { useAddress } from "../service/address";

export default function Header() {
	const { total } = useCoffees();
	const { address } = useAddress();

	return (
		<header className="bg-background w-full py-8 flex flex-wrap justify-between gap-8 items-center px-8 sm:px-40">
			<Link to="/">
				<img src={assets.Logo} alt="Logo" />
			</Link>
			<aside className="flex flex-wrap gap-3">
				<Link to="/checkout">
					<div className="bg-purple-light p-2 rounded-md flex gap-1 text">
						<MapPin className="text-purple" />
						<p className="text-purple-dark">
							{address.cep
								? `${address.localidade}, ${address.uf}`
								: "Sem endereço"}
						</p>
					</div>
				</Link>
				<Link
					to="/checkout"
					className="bg-yellow-light text-yellow-dark p-2 h-fit w-fit rounded-md relative"
				>
					<ShoppingCart size={22} />
					<p className="absolute -top-2 -right-2 text-sm leading-[0.5rem] bg-yellow-dark text-white rounded-full p-1">
						{total}
					</p>
				</Link>
			</aside>
		</header>
	);
}
