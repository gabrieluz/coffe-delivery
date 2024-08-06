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
	clearAll: () => void;
};

const initialValues = {
	shoppingCard: [],
	coffeesList: [...coffeesList],
	total: 0,
	totalPrice: 0,
	shippingValue: 3.5,
};

export const useCoffees = create<State & Actions>(set => ({
	...initialValues,

	clearAll: () => {
		set({ ...initialValues });
	},
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
				(sum, item) => sum + item.qtd * item.price,
				0
			);

			return { coffeesList, shoppingCard, total, totalPrice, shippingValue };
		});
	},
}));
