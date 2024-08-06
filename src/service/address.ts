/* eslint-disable no-mixed-spaces-and-tabs */
import axios from "axios";
import { create } from "zustand";

export interface IAddress {
	cep: string;
	logradouro: string;
	complemento: string;
	unidade: string;
	bairro: string;
	localidade: string;
	uf: string;
	ibge: string;
	gia: string;
	ddd: string;
	siafi: string;
}

export type payments = "credit" | "debit" | "money";

type State = {
	address: IAddress;
	paymentMethod: payments | null;
};

type Actions = {
	setAddress: (cep: string) => void;
	setPaymentMethod: (payment: payments) => void;
	clearAll: () => void;
};

const initialValues: State = {
	address: {
		cep: "",
		logradouro: "",
		complemento: "",
		unidade: "",
		bairro: "",
		localidade: "",
		uf: "",
		ibge: "",
		gia: "",
		ddd: "",
		siafi: "",
	},
	paymentMethod: null,
};

export const useAddress = create<State & Actions>(set => ({
	...initialValues,

	clearAll: () => {
		set({
			...initialValues,
		});
	},
	setPaymentMethod: paymentMethod => {
		set({
			paymentMethod,
		});
	},
	setAddress: async cep => {
		const address: IAddress = await axios
			.get(`https://viacep.com.br/ws/${cep}/json/`)
			.then(res => res.data);

		set({ address });
	},
}));
