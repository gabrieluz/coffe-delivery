import { assets } from "../assets";
import { ICoffees } from "../service/coffees";

export const coffeesList: Array<ICoffees> = [
	{
		id: 1,
		name: "Expresso Tradicional",
		description: "O tradicional café feito com água quente e grãos moídos",
		img: assets.coffees.Expresso,
		price: 9.99,
		tags: ["Tradicional"],
	},
	{
		id: 2,
		name: "Expresso Americano",
		description: "Expresso diluído, menos intenso que o tradicional",
		img: assets.coffees.Americano,
		price: 9.99,
		tags: ["Tradicional"],
	},
	{
		id: 3,
		name: "Expresso Cremoso",
		description: "Café expresso tradicional com espuma cremosa",
		img: assets.coffees.ExpressoCremoso,
		price: 9.99,
		tags: ["Tradicional"],
	},
	{
		id: 4,
		name: "Expresso Gelado",
		description: "Bebida preparada com café expresso e cubos de gelo",
		img: assets.coffees.CafeGelado,
		price: 9.99,
		tags: ["Tradicional", "gelado"],
	},
	{
		id: 5,
		name: "Café com Leite",
		description: "Meio a meio de expresso tradicional com leite vaporizado",
		img: assets.coffees.CafeComLeite,
		price: 9.99,
		tags: ["Tradicional", "com leite"],
	},
	{
		id: 6,
		name: "Latte",
		description:
			"Uma dose de café expresso com o dobro de leite e espuma cremosa",
		img: assets.coffees.Latte,
		price: 9.99,
		tags: ["Tradicional", "com leite"],
	},
	{
		id: 7,
		name: "Capuccino",
		description:
			"Bebida com canela feita de doses iguais de café, leite e espuma",
		img: assets.coffees.Capuccino,
		price: 9.99,
		tags: ["Tradicional", "com leite"],
	},
	{
		id: 8,
		name: "Macchiato",
		description:
			"Café expresso misturado com um pouco de leite quente e espuma",
		img: assets.coffees.Macchiato,
		price: 9.99,
		tags: ["Tradicional", "com leite"],
	},
	{
		id: 9,
		name: "Mocaccino",
		description: "Café expresso com calda de chocolate, pouco leite e espuma",
		img: assets.coffees.Mochaccino,
		price: 9.99,
		tags: ["Tradicional", "com leite"],
	},
	{
		id: 10,
		name: "Chocolate Quente",
		description: "Bebida feita com chocolate dissolvido no leite quente e café",
		img: assets.coffees.ChocolateQuente,
		price: 9.99,
		tags: ["especial", "com leite"],
	},
	{
		id: 11,
		name: "Cubano",
		description:
			"Drink gelado de café expresso com rum, creme de leite e hortelã",
		img: assets.coffees.Cubano,
		price: 9.99,
		tags: ["especial", "alcoólico", "gelado"],
	},
	{
		id: 12,
		name: "Havaiano",
		description: "Bebida adocicada preparada com café e leite de coco",
		img: assets.coffees.Havaiano,
		price: 9.99,
		tags: ["especial"],
	},
	{
		id: 13,
		name: "Árabe",
		description: "Bebida preparada com grãos de café árabe e especiarias",
		img: assets.coffees.Arabe,
		price: 9.99,
		tags: ["especial"],
	},
	{
		id: 14,
		name: "Irlandês",
		description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
		img: assets.coffees.Irlandês,
		price: 9.99,
		tags: ["especial", "alcoólico"],
	},
];
