import { ReactSVG } from "react-svg";
import { BannerTopo } from "./BannerTopo";
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
  return (
    <>
      <header className="site-header">
        <div>
          <div className="wrapper">
            <div className="header-logo">
              <ReactSVG src="../src/assets/Logos/logo-limpo.svg" />
              <ReactSVG src="../src/assets/Logos/texto-logo.svg" />
            </div>
            <HeaderMenu />
          </div>
        </div>

        <div className="header-decor">
          <ReactSVG src="../src/assets/Imagens/decoracao-fundo.svg" />
        </div>
      </header>

      <BannerTopo />
    </>
  );
};
