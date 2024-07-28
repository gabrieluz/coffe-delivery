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
	shoppingCard: Array<ICoffee>;
	coffeesList: Array<ICoffee>;
};

type Actions = {
	addCoffee: (id: number) => void;
	subtractCoffee: (id: number) => void;
};

export const useCoffees = create<State & Actions>(set => ({
	shoppingCard: [],
	coffeesList: [...coffeesList],
	total: 0,
	addCoffee: id => {
		set(coffeeState => {
			const coffeesList = coffeeState.coffeesList.map(coffee =>
				coffee.id === id
					? { ...coffee, qtd: coffee.qtd < 0 ? 0 : coffee.qtd + 1 }
					: coffee
			);

			const shoppingCard = coffeeState.coffeesList.filter(item => item.qtd > 0);

			const total = coffeesList.reduce(
				(total, item) => (item.qtd > 0 ? total + item.qtd : total),
				0
			);

			return { coffeesList, shoppingCard, total };
		});
	},
	subtractCoffee: id => {
		set(coffeeState => {
			const coffeesList = coffeeState.coffeesList.map(coffee =>
				coffee.id === id
					? { ...coffee, qtd: coffee.qtd <= 0 ? 0 : coffee.qtd - 1 }
					: coffee
			);

			const shoppingCard = coffeeState.coffeesList.filter(item => item.qtd > 0);

			const total = coffeesList.reduce(
				(total, item) => (item.qtd > 0 ? total + item.qtd : total),
				0
			);

			return { coffeesList, shoppingCard, total };
		});
	},
}));
