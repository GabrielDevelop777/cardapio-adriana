import {
  batataP,
  linguicaAcebolada,
  toscanaImg,
  sukitaUva,
  pratoPrincipal,
  milanesaImg,
  omeleteImg,
  fileParmegiana,
  frangoGrelhado,
  carreImg,
  batataMaluca,
  kuatImg,
  bifeAcebolado,
  sukitaImg
} from '../assets/images';


export const mockData = {
	dishOfTheDay: {
		id: 101,
		name: "Picanho de Carne",
		description: "Arroz e carne com batata",
		price: 15.9,
		image: pratoPrincipal
	},
	products: [
		{
			id: 1,
			category: "Quentinhas",
			name: "Bife acebolado com Fritas",
			description: "Arroz, Feijão, Macarrão, Farofa, Salada Verde.",
			price: 23,
			image: bifeAcebolado
		},
		{
			id: 2,
			category: "Quentinhas",
			name: "Frango Grelhado",
			description: "Arroz, Feijão, Macarrão, Farofa, Salada Verde.",
			price: 12,
			image: frangoGrelhado
		},
		{
			id: 3,
			category: "Quentinhas",
			name: "Frango a Parmegiana",
			description: "Arroz, Feijão, Macarrão, Farofa, Salada Verde.",
			price: 16,
			image: fileParmegiana
		},
		{
			id: 7,
			category: "Quentinhas",
			name: "Frango a Milanesa",
			description: "Arroz, Feijão, Macarrão, Farofa, Salada Verde.",
			price: 16,
			image: milanesaImg
		},
		{
			id: 8,
			category: "Quentinhas",
			name: "Linguiça Acebolada",
			description: "Arroz, Feijão, Macarrão, Farofa, Salada Verde.",
			price: 16,
			image: linguicaAcebolada
		},
		{
			id: 9,
			category: "Quentinhas",
			name: "Carré",
			description: "Arroz, Feijão, Macarrão, Farofa, Salada Verde.",
			price: 16,
			image: carreImg
		},
		{
			id: 10,
			category: "Quentinhas",
			name: "Omelete",
			description: "Arroz, Feijão, Macarrão, Farofa, Salada Verde.",
			price: 12,
			image: omeleteImg
		},
		{
			id: 11,
			category: "Quentinhas",
			name: "Linguiça Toscana",
			description: "Arroz, Feijão, Macarrão, Farofa, Salada Verde.",
			price: 12,
			image: toscanaImg,
		},
		{
			id: 12,
			category: "Batatas",
			name: "Batata Maluca G",
			description: "Batata, Calabresa, Queijo Ralado...",
			price: 22,
			image: batataMaluca
		},
		{
			id: 13,
			category: "Batatas",
			name: "Batata Maluca M",
			description: "Batata, Calabresa e Bacon.",
			price: 18,
			image: batataP
		},
		{
			id: 4,
			category: "Bebidas",
			name: "Sukita",
			description: "2L",
			price: 6.0,
			image: sukitaImg
		},
		{
			id: 5,
			category: "Bebidas",
			name: "Sukita Uva",
			description: "@l",
			price: 6.0,
			image: sukitaUva
		},
		{
			id: 6,
			category: "Bebidas",
			name: "Kuat",
			description: "2L",
			price: 4.0,
			image: kuatImg
		},
	],
};
