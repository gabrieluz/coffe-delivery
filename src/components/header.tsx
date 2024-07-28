import { MapPin, ShoppingCart } from "lucide-react";
import { assets } from "../assets";
import { useCoffees } from "../service/coffees";

export default function Header() {
	const { shoppingCard } = useCoffees();
	return (
		<header className="bg-background w-full py-8 flex justify-center gap-8 items-center">
			<img src={assets.Logo} alt="Logo" />
			<aside className="flex gap-3">
				<div className="bg-purple-light p-2 rounded-md flex gap-1 text">
					<MapPin className="text-purple" />{" "}
					<p className="text-purple-dark">São paulo, SP</p>
				</div>
				<div className="bg-yellow-light text-yellow-dark p-2 h-fit w-fit rounded-md relative">
					<ShoppingCart size={22} />
					<p className="absolute -top-2 -right-1 bg-yellow-dark text-white rounded-full px-1 py-0">
						{shoppingCard.length}
					</p>
				</div>
			</aside>
		</header>
	);
}
