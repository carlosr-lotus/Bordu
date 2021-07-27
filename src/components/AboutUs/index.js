import './aboutUs.css';

export default function AboutUs() {

    return (
        <div className="aboutUs-global-container">
            
            <h1>Sobre nós</h1>

            <div className="aboutUs-local-container">
                {/* Image 'Scientific Research' */}
                <div className="aboutUs-img-container">
                    <img src={require("../../images/about-us.jpeg").default} alt="scientific research"/>
                </div>

                {/* 'Nossas origens' box container */}
                <div className="aboutUs-text-container">
                    <h2>Nossas origens</h2>
                    <p>Somos uma empresa fundada no Rio de Janeiro, a "cidade maravilhosa". Começamos com o intuito de prover aos nossos clientes, produtos 100% orgânicos e que causem pouco dano ao meio ambiente. E buscamos, claro, inovar utilizando-se de pesquisas para produzirmos produtos respeitando os limites da sustentabilidade.</p>
                    <p>Por muitas décadas, há a crença que cosméticos e beleza pertencem somente ao mundo das mulheres, porém, buscamos quebrar isso, atendendo também o público masculino.</p>
                    <strong>"Inovação está em nosso DNA"</strong>
                </div>
            </div>

        </div>
    )
}