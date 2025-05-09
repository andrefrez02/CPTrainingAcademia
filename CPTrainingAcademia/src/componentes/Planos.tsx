import { ReactSVG } from "react-svg";
import { HeaderSecao } from "./HeaderSecao";

export const Planos = () => {
  return (
    <>
      <div className="secao-planos">
        <HeaderSecao titulo="Planos" />

        <div className="wrapper">
          <div className="planos-conteudo">
            <div className="planos-conteudo__texto">
              <h2>
                <span>Treine na</span>
                <ReactSVG src="../src/assets/Logos/logo-limpo.svg" />
                <span>
                  a <span className="outline-gradient">melhor</span> academia do
                  seu <span className="outline-gradient">bairro</span>
                </span>
              </h2>
              <p>
                <span>
                  Escolha o
                  <span className="outline-gradient">melhor plano</span>
                  para você e tenha acesso a
                  <span className="outline-gradient">todas as modalidades</span>
                  disponíveis.
                </span>
              </p>
            </div>

            <div className="planos-conteudo__tabela">
              <div className="planos-conteudo__tabela-grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="planos-conteudo__tabela-beneficios">
                <span>&nbsp;</span>
                <span>Acesso a todas modalidades</span>
                <span>Acesso a todas modalidades</span>
                <span>Acesso a todas modalidades</span>
                <span>Acesso a todas modalidades</span>
              </div>
              <div className="planos-conteudo__tabela-item selecionado">
                <h2>
                  Plano <span className="outline-gradient">Anual</span>
                </h2>
                <span>
                  <ReactSVG src="../src/assets/Icones/check.svg" />
                </span>
                <span>
                  <ReactSVG src="../src/assets/Icones/check.svg" />
                </span>
                <span>
                  <ReactSVG src="../src/assets/Icones/check.svg" />
                </span>
                <span>
                  <ReactSVG src="../src/assets/Icones/check.svg" />
                </span>
                <div className="preco">
                  <div>
                    <span>A PARTIR DE</span>
                    <span className="bold">R$ 80,00*</span>
                  </div>
                  <span>
                    <span className="bold">no 1° mês</span>, depois <br /> R$
                    90,00 por mês
                  </span>
                </div>
              </div>
              <div className="planos-conteudo__tabela-item">
                <h2>
                  Plano <span className="outline-gradient">Semestral</span>
                </h2>
                <span>
                  <ReactSVG src="../src/assets/Icones/check.svg" />
                </span>
                <span>
                  <ReactSVG src="../src/assets/Icones/check.svg" />
                </span>
                <span>
                  <ReactSVG src="../src/assets/Icones/check.svg" />
                </span>
                <span>
                  <ReactSVG src="../src/assets/Icones/check.svg" />
                </span>
                <div className="preco">
                  <div>
                    <span>A PARTIR DE</span>
                    <span className="bold">R$ 80,00*</span>
                  </div>
                  <span>
                    <span className="bold">no 1° mês</span>, depois <br /> R$
                    90,00 por mês
                  </span>
                </div>
              </div>
              <div className="planos-conteudo__tabela-item">
                <h2>
                  Plano <span className="outline-gradient">Trimestral</span>
                </h2>
                <span>
                  <ReactSVG src="../src/assets/Icones/check.svg" />
                </span>
                <span>
                  <ReactSVG src="../src/assets/Icones/check.svg" />
                </span>
                <span>
                  <ReactSVG src="../src/assets/Icones/check.svg" />
                </span>
                <span>
                  <ReactSVG src="../src/assets/Icones/check.svg" />
                </span>
                <div className="preco">
                  <div>
                    <span>A PARTIR DE</span>
                    <span className="bold">R$ 80,00*</span>
                  </div>
                  <span>
                    <span className="bold">no 1° mês</span>, depois <br /> R$
                    90,00 por mês
                  </span>
                </div>
              </div>
              <div className="planos-conteudo__tabela-item">
                <h2>
                  Plano <span className="outline-gradient">Mensal</span>
                </h2>
                <span>
                  <ReactSVG src="../src/assets/Icones/check.svg" />
                </span>
                <span>
                  <ReactSVG src="../src/assets/Icones/check.svg" />
                </span>
                <span>
                  <ReactSVG src="../src/assets/Icones/check.svg" />
                </span>
                <span>
                  <ReactSVG src="../src/assets/Icones/check.svg" />
                </span>
                <div className="preco">
                  <div>
                    <span>A PARTIR DE</span>
                    <span className="bold">R$ 80,00*</span>
                  </div>
                  <span>
                    <span className="bold">no 1° mês</span>, depois <br /> R$
                    90,00 por mês
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
