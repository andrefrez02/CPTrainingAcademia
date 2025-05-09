export const BannerTopo = () => {
  return (
    <>
      <div className="banner-topo">
        <div className="banner-topo__mensagem">
          <img
            className="banner-topo__mensagem-imagem"
            src="../src/assets/Imagens/preco.png"
            alt="Valor promocional"
          />
        </div>

        <img
          className="banner-topo__fundo"
          src="../src/assets/Imagens/banner-top.png"
          alt="Banner topo"
        />
      </div>
    </>
  );
};
