import { create } from "zustand";
import { coffeesList } from "../mocks/coffeesList";

export interface ICoffees {
	id: number;

	name: string;
	description: string;
	price: number;
	tags: Array<string>;

	img: string;
}

type State = {
	shoppingCard: Array<ICoffees>;
	coffeesList: Array<ICoffees>;
};

type Actions = {
	addCoffee: (id: number) => void;
};

export const useCoffees = create<State & Actions>((set, get) => ({
	shoppingCard: [],
	coffeesList: [...coffeesList],
	addCoffee: id => {
		const coffees = get().shoppingCard;

		const newCoffee = coffeesList.find(e => e.id === id) as ICoffees;

		set({ shoppingCard: [...coffees, newCoffee] });
	},
}));
