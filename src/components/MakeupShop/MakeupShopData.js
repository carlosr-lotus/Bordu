// This object will be accessible in the following components:
// "MakeupShop/index.js" and "MakeupShop/MakeupProduct/index.js"

const makeupShopData = [
    {
        id: 5,
        img: require("../../images/lipstick-bordu.jpeg").default,
        title: "Batom Bordu - Linha Bronze",
        price:  79.00,
        reviewCount: 2,
        desc: "Inspirado na cor do fruto morango, buscamos trazer além da beleza e fluidez labial, conforto e brilho à sua imagem com duração fixa de 12 horas e lábios hidratados por 24 horas.",
        reviews: [{
            id: 1,
            person: "Ana Carolina",
            city: "Rio de Janeiro, RJ",
            review: "Estou apaixonada pela maciez e cor desse batom! Amo seu design rosa! Meu crush ama me ver com ele."
        }, 
        {
            id: 2,
            person: "Helena Santiago",
            city: "Rio Grande do Sul, RS",
            review: "Aquele batom para arrasar no look!"
        }]
    },
    {
        id: 6,
        img: require("../../images/base-bordu.png").default,
        title: "Base Bordu - Linha Bronze",
        price: 99.00,
        reviewCount: 3,
        desc: "Seu rosto belo e hidratado com um acabamento natural! Sabemos o efeito da maquiagem à longo prazo, por isso desenvolvemos essa base com produtos naturais que além de embelezar, hidratar.",
        attention: "*Para todos os tipos de pele",
        reviews: [{
            id: 1,
            person: "Stefanie Miranda",
            city: "São Paulo, SP",
            review: "Me acompanha em todas as minhas saídas! Impossível não gostar."
        }, 
        {
            id: 2,
            person: "Ricardo Aguilar",
            city: "Rio de Janeiro, RJ",
            review: "Bordu melhorando nossa auto estima como sempre! S2"
        }, 
        {
            id: 3,
            person: "Maria Eduarda",
            city: "São Paulo, SP",
            review: "Incrível como é capaz de melhorar a nossa pele! Super recomendado!"
        }]
    },
    {
        id: 7,
        img: require("../../images/bordu-delineador.jpeg").default,
        title: "Delineador Bordu - Linha Bronze",
        price: 49.00,
        reviewCount: 2,
        desc: "O delineador Bordu confere o máximo efeito a aplicaãao precisa e suave. Sua cor intensa e acabamento matte fazem com que seu olhar fique ainda mais marcante e poderoso.",
        reviews: [{
            id: 1,
            person: "Charlotte Nina",
            city: "Curitiba, PR",
            review: "Estou apaixonada por todos esses produtos!"
        }, 
        {
            id: 2,
            person: "Bruna Silva",
            city: "Recife, PE",
            review: "Confortável de usar e amiga da auto estima!"
        }]
    },
    {
        id: 8,
        img: require("../../images/bordu-lingua-gato.jpeg").default,
        title: "Pincel lingua de gato - Linha Bronze",
        price: 79.00,
        reviewCount: 2,
        desc: "Pincel para aplicação de base. Lingua de gato Bordu proporciona uma distribuição uniforme e sem desperdício de bases líquidas e cremosas.",
        reviews: [{
            id: 1,
            person: "Mirian Machado",
            city: "Rio de Janeiro, RJ",
            review: "Além de lindo, é ótimo pincel! Recomendado!"
        }, 
        {
            id: 2,
            person: "Glaubio dos Santos",
            city: "Cuiabá, MT",
            review: "Amei! Recomendado para as amigas!"
        }]
    }
];

export default makeupShopData;