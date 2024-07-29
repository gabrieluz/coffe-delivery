/* eslint-disable no-mixed-spaces-and-tabs */
import { create } from "zustand";
import { coffeesList } from "../mocks/coffeesList";

export interface ICoffee {
	id: number;

	name: string;
	description: string;
	price: number;
	tags: Array<string>;

	img: string;

	qtd: number;
}

type State = {
	total: number;
	totalPrice: number;
	shippingValue: number;
	shoppingCard: Array<ICoffee>;
	coffeesList: Array<ICoffee>;
};

type Actions = {
	updateCoffee: (id: number, add: boolean, removeAll?: boolean) => void;
};

export const useCoffees = create<State & Actions>(set => ({
	shoppingCard: [
		{
			id: 1,
			name: "Expresso Tradicional",
			description: "O tradicional café feito com água quente e grãos moídos",
			img: "/src/assets/coffee/Expresso.png",
			price: 9.99,
			tags: ["Tradicional"],
			qtd: 4,
		},
		{
			id: 2,
			name: "Expresso Americano",
			description: "Expresso diluído, menos intenso que o tradicional",
			img: "/src/assets/coffee/Americano.png",
			price: 9.99,
			tags: ["Tradicional"],
			qtd: 4,
		},
		{
			id: 3,
			name: "Expresso Cremoso",
			description: "Café expresso tradicional com espuma cremosa",
			img: "/src/assets/coffee/Expresso%20Cremoso.png",
			price: 9.99,
			tags: ["Tradicional"],
			qtd: 4,
		},
		{
			id: 7,
			name: "Capuccino",
			description:
				"Bebida com canela feita de doses iguais de café, leite e espuma",
			img: "/src/assets/coffee/Capuccino.png",
			price: 9.99,
			tags: ["Tradicional", "com leite"],
			qtd: 5,
		},
		{
			id: 11,
			name: "Cubano",
			description:
				"Drink gelado de café expresso com rum, creme de leite e hortelã",
			img: "/src/assets/coffee/Cubano.png",
			price: 9.99,
			tags: ["especial", "alcoólico", "gelado"],
			qtd: 3,
		},
		{
			id: 14,
			name: "Irlandês",
			description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
			img: "/src/assets/coffee/Irland%C3%AAs.png",
			price: 9.99,
			tags: ["especial", "alcoólico"],
			qtd: 4,
		},
	],
	coffeesList: [...coffeesList],
	total: 0,
	totalPrice: 0,
	shippingValue: 3.5,

	updateCoffee: (id, add, removeAll) => {
		set(coffeeState => {
			const coffeesList = coffeeState.coffeesList.map(coffee =>
				coffee.id === id
					? {
							...coffee,
							qtd: add
								? coffee.qtd + 1
								: removeAll
								? coffee.qtd - coffee.qtd
								: coffee.qtd - 1,
					  }
					: coffee
			);

			const shoppingCard = coffeesList.filter(item => item.qtd > 0);

			const total = coffeesList.reduce(
				(total, item) => (item.qtd > 0 ? total + item.qtd : total),
				0
			);

			const shippingValue = shoppingCard.length > 50 ? 0 : 3.5;

			const totalPrice = shoppingCard.reduce(
				(sum, item) => sum + item.qtd * item.price + shippingValue,
				0
			);

			return { coffeesList, shoppingCard, total, totalPrice, shippingValue };
		});
	},
}));
