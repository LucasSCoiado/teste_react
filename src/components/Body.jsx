function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToElement = (elementId) => {
    const elemento = document.getElementById(elementId);
    if (elemento) {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const sections = [
    { name: "Clientes", id: "cliente" },
    { name: "Fornecedores", id: "fornecedor" },
    { name: "Funcionários", id: "funcionario" },
    { name: "Pedidos", id: "pedido" },
    { name: "Produtos", id: "produto" },
  ];

  return (
    <section className="px-4 py-6 sm:py-10 bg-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-slate-200 text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 text-center">
          Seja bem-vindo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 w-full">
          {sections.map((item) => (
            <div
              key={item.id}
              onClick={() => scrollToElement(item.id)}
              className="min-h-20 sm:min-h-24 bg-slate-700 rounded-2xl flex items-center justify-center shadow-lg hover:bg-slate-600 transition cursor-pointer p-3 sm:p-4 hover:animate-bounce"
            >
              <h3 className="text-base sm:text-lg font-semibold text-white text-center">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
        <div className="bg-slate-500 my-4 text-slate-50 text-sm sm:text-base rounded-md w-full md:max-w-4xl">
          <h3 id="cliente" className="text-end text-xl sm:text-2xl m-2">
            Clientes
          </h3>
          <div className="flex flex-col md:flex-row gap-4 p-2 md:items-center">
            <p className="flex-1 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              eum. Facere aliquid eius tenetur corporis voluptatibus, fugit nam
              molestiae exercitationem, soluta quaerat totam expedita quis dicta
              dolorem! Tempore, fugit asperiores. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Optio perspiciatis perferendis, sint
              ipsa, suscipit explicabo eos non ratione aliquid quaerat assumenda
              quibusdam dicta facilis enim, molestiae recusandae eligendi ullam
              harum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quasi esse voluptates expedita tenetur illum nobis consequatur
              suscipit fuga modi vel ab beatae magnam eos, commodi labore
              corrupti accusantium omnis illo!
            </p>
            <img
              src="images/clientes.png"
              alt="Clientes"
              className="w-full sm:w-[12em] md:w-[15em] h-auto md:h-[12em] flex-shrink-0 rounded-md object-cover"
            />
          </div>
          <p className="px-2 pb-2 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            ratione, expedita ut eius dignissimos veniam impedit voluptas,
            ipsum, possimus exercitationem nobis. Corporis mollitia error
            reiciendis laborum cumque iure minima ab.
          </p>
          <div className="flex justify-start ">
            <button
              onClick={scrollToTop}
              className="bg-white text-slate-600 p-3 rounded-lg m-4 text-sm sm:text-base hover:bg-slate-900 hover:text-slate-100 duration-500"
            >
              Voltar
            </button>
          </div>

          <h3 id="fornecedor" className="text-start text-xl sm:text-2xl m-2">
            Fornecedores
          </h3>
          <div className="flex flex-col-reverse md:flex-row gap-4 p-2 md:items-center">
            <p className="flex-1 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              eum. Facere aliquid eius tenetur corporis voluptatibus, fugit nam
              molestiae exercitationem, soluta quaerat totam expedita quis dicta
              dolorem! Tempore, fugit asperiores. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Optio perspiciatis perferendis, sint
              ipsa, suscipit explicabo eos non ratione aliquid quaerat assumenda
              quibusdam dicta facilis enim, molestiae recusandae eligendi ullam
              harum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quasi esse voluptates expedita tenetur illum nobis consequatur
              suscipit fuga modi vel ab beatae magnam eos, commodi labore
              corrupti accusantium omnis illo!
            </p>
            <img
              src="images/fornecedor.png"
              alt="Fornecedores"
              className="w-full sm:w-[12em] md:w-[15em] h-auto md:h-[12em] flex-shrink-0 rounded-md object-cover"
            />
          </div>
          <p className="px-2 pb-2 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            ratione, expedita ut eius dignissimos veniam impedit voluptas,
            ipsum, possimus exercitationem nobis. Corporis mollitia error
            reiciendis laborum cumque iure minima ab.
          </p>
          <div className="flex justify-end">
            <button
              onClick={scrollToTop}
              className="bg-white text-slate-600 p-3 rounded-lg m-4 text-sm sm:text-base hover:bg-slate-900 hover:text-slate-100 duration-500"
            >
              Voltar
            </button>
          </div>

          <h3 id="funcionario" className="text-end text-xl sm:text-2xl m-2">
            Funcionários
          </h3>
          <div className="flex flex-col md:flex-row gap-4 p-2 md:items-center">
            <p className="flex-1 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              eum. Facere aliquid eius tenetur corporis voluptatibus, fugit nam
              molestiae exercitationem, soluta quaerat totam expedita quis dicta
              dolorem! Tempore, fugit asperiores. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Optio perspiciatis perferendis, sint
              ipsa, suscipit explicabo eos non ratione aliquid quaerat assumenda
              quibusdam dicta facilis enim, molestiae recusandae eligendi ullam
              harum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quasi esse voluptates expedita tenetur illum nobis consequatur
              suscipit fuga modi vel ab beatae magnam eos, commodi labore
              corrupti accusantium omnis illo!
            </p>
            <img
              src="images/funcionarios.png"
              alt="Funcionarios"
              className="w-full sm:w-[12em] md:w-[15em] h-auto md:h-[12em] flex-shrink-0 rounded-md object-cover"
            />
          </div>
          <p className="px-2 pb-2 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            ratione, expedita ut eius dignissimos veniam impedit voluptas,
            ipsum, possimus exercitationem nobis. Corporis mollitia error
            reiciendis laborum cumque iure minima ab.
          </p>
          <div className="flex justify-start ">
            <button
              onClick={scrollToTop}
              className="bg-white text-slate-600 p-3 rounded-lg m-4 text-sm sm:text-base hover:bg-slate-900 hover:text-slate-100 duration-500"
            >
              Voltar
            </button>
          </div>
          <h3 id="pedido" className="text-start text-xl sm:text-2xl m-2">
            Pedidos
          </h3>
          <div className="flex flex-col-reverse md:flex-row gap-4 p-2 md:items-center">
            <p className="flex-1 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              eum. Facere aliquid eius tenetur corporis voluptatibus, fugit nam
              molestiae exercitationem, soluta quaerat totam expedita quis dicta
              dolorem! Tempore, fugit asperiores. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Optio perspiciatis perferendis, sint
              ipsa, suscipit explicabo eos non ratione aliquid quaerat assumenda
              quibusdam dicta facilis enim, molestiae recusandae eligendi ullam
              harum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quasi esse voluptates expedita tenetur illum nobis consequatur
              suscipit fuga modi vel ab beatae magnam eos, commodi labore
              corrupti accusantium omnis illo!
            </p>
            <img
              src="images/pedido.png"
              alt="Pedidos"
              className="w-full sm:w-[12em] md:w-[15em] h-auto md:h-[12em] flex-shrink-0 rounded-md object-cover"
            />
          </div>
          <p className="px-2 pb-2 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            ratione, expedita ut eius dignissimos veniam impedit voluptas,
            ipsum, possimus exercitationem nobis. Corporis mollitia error
            reiciendis laborum cumque iure minima ab.
          </p>
          <div className="flex justify-end">
            <button
              onClick={scrollToTop}
              className="bg-white text-slate-600 p-3 rounded-lg m-4 text-sm sm:text-base hover:bg-slate-900 hover:text-slate-100 duration-500"
            >
              Voltar
            </button>
          </div>

          <h3 id="produto" className="text-end text-xl sm:text-2xl m-2">
            Produtos
          </h3>
          <div className="flex flex-col md:flex-row gap-4 p-2 md:items-center">
            <p className="flex-1 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              eum. Facere aliquid eius tenetur corporis voluptatibus, fugit nam
              molestiae exercitationem, soluta quaerat totam expedita quis dicta
              dolorem! Tempore, fugit asperiores. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Optio perspiciatis perferendis, sint
              ipsa, suscipit explicabo eos non ratione aliquid quaerat assumenda
              quibusdam dicta facilis enim, molestiae recusandae eligendi ullam
              harum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quasi esse voluptates expedita tenetur illum nobis consequatur
              suscipit fuga modi vel ab beatae magnam eos, commodi labore
              corrupti accusantium omnis illo!
            </p>
            <img
              src="images/produtos.png"
              alt="Produtos"
              className="w-full sm:w-[12em] md:w-[15em] h-auto md:h-[12em] flex-shrink-0 rounded-md object-cover"
            />
          </div>
          <p className="px-2 pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            ratione, expedita ut eius dignissimos veniam impedit voluptas,
            ipsum, possimus exercitationem nobis. Corporis mollitia error
            reiciendis laborum cumque iure minima ab.
          </p>
          <div className="flex justify-start ">
            <button
              onClick={scrollToTop}
              className="bg-white text-slate-600 p-3 rounded-lg m-4 hover:bg-slate-900 hover:text-slate-100 duration-500"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
