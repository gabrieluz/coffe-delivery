import { useCoffees } from "../../service/coffees";

export default function Checkout() {
	const { shoppingCard } = useCoffees();
	return (
		<div>
			{shoppingCard.map((item, index) => (
				<div key={index}>
					<p>{item.name} </p>
				</div>
			))}
		</div>
	);
}
