// This object will be accessible in the following components:
// "MakeupShop/index.js" and "MakeupShop/MakeupProduct/index.js"

const makeupShopData = [
    {
        id: 1,
        img: require("../../images/lipstick-bordu.jpeg").default,
        title: "Batom Bordu - Linha Bronze",
        price:  "79,00",
        reviewCount: 2,
        desc: "Inspirado na cor do fruto morango, buscamos trazer além da beleza e fluidez labial, conforto e brilho à sua imagem com duração fixa de 12 horas e lábios hidratados por 24 horas."
    },
    {
        id: 2,
        img: require("../../images/base-bordu.png").default,
        title: "Base Bordu - Linha Bronze",
        price: "99,00",
        reviewCount: 3,
        desc: "Seu rosto belo e hidratado com um acabamento natural! Sabemos o efeito da maquiagem à longo prazo, por isso desenvolvemos essa base com produtos naturais que além de embelezar, hidratar.",
        attention: "*Para todos os tipos de pele"
    },
    {
        id: 3,
        img: require("../../images/bordu-delineador.jpeg").default,
        title: "Delineador Bordu - Linha Bronze",
        price: "49,00",
        reviewCount: 2,
        desc: "O delineador Bordu confere o máximo efeito a aplicaãao precisa e suave. Sua cor intensa e acabamento matte fazem com que seu olhar fique ainda mais marcante e poderoso."
    },
    {
        id: 4,
        img: require("../../images/bordu-lingua-gato.jpeg").default,
        title: "Pincel lingua de gato - Linha Bronze",
        price: "79,00",
        reviewCount: 2,
        desc: "Pincel para aplicação de base. Lingua de gato Bordu proporciona uma distribuição uniforme e sem desperdício de bases líquidas e cremosas."
    }
];

export default makeupShopData;