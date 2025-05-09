interface Props {
  titulo: string;
}

export const HeaderSecao = ({ titulo }: Props) => {
  return (
    <>
      <header className="header-secao">
        <div>
          <div className="wrapper">
            <h1>{titulo}</h1>
          </div>
        </div>
      </header>
    </>
  );
};
