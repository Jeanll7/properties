import { Container } from "../../components/container";
import { HeartButton } from "../../components/heartbutton";

export function Home() {

  return (
    <Container>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <input 
          className="w-full border-2 rounded-lg h-9 px-3 outline-none"
          placeholder="Digite o nome do imóvel..." 
          type="text" 
        />
        <button
          className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium"
        >
          Buscar
        </button>
      </section>

      <h1 className="font-bold text-center mt-6 mb-6 text-2xl">
        Imóveis à venda no Brasil
      </h1>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-5">
        <section className="w-full bg-white rounded-lg">
          <img 
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://blog.archtrends.com/wp-content/uploads/2020/03/casa-de-alto-padro-fernando-farinazzo.jpg" 
            alt="Imóvel" 
          />

          <p className="font-bold mt-1 mb-2 px-2">Casa de alto padrão</p>

          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">Bairro Trindade</span>
            <div className="flex justify-between text-center">
              <strong className="text-black font-medium text-xl">R$ 3.500.000</strong>
              <HeartButton />
            </div>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">
              Florianópolis - SC
            </span>
          </div>
        </section>        

        <section className="w-full bg-white rounded-lg">
          <img 
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://images.archtrends.com/unsafe/trim/0x689/https://archtrends.com/data/projects/7/4/6/79746_casa-a-e-1.jpg" 
            alt="Imóvel" 
          />
          <p className="font-bold mt-1 mb-2 px-2">Casa de alto padrão</p>

          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">Bairro Trindade</span>
            <div className="flex justify-between text-center">
              <strong className="text-black font-medium text-xl">R$ 3.500.000</strong>
              <HeartButton />
            </div>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">
              Florianópolis - SC
            </span>
          </div>
        </section>

        <section className="w-full bg-white rounded-lg">
          <img 
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://images.archtrends.com/unsafe/trim/0x689/https://archtrends.com/data/projects/4/8/9/80489_casa-t-boris.jpg" 
            alt="Imóvel" 
          />
          <p className="font-bold mt-1 mb-2 px-2">Casa de alto padrão</p>

          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">Bairro Trindade</span>
            <div className="flex justify-between text-center">
              <strong className="text-black font-medium text-xl">R$ 3.500.000</strong>
              <HeartButton />
            </div>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">
              Florianópolis - SC
            </span>
          </div>
        </section>

        <section className="w-full bg-white rounded-lg">
          <img 
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://images.archtrends.com/unsafe/trim/0x689/https://archtrends.com/data/projects/3/3/3/73333_espar-o-gourmet.jpg" 
            alt="Imóvel" 
          />
          <p className="font-bold mt-1 mb-2 px-2">Casa de alto padrão</p>

          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">Bairro Trindade</span>
            <div className="flex justify-between text-center">
              <strong className="text-black font-medium text-xl">R$ 3.500.000</strong>
              <HeartButton />
            </div>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">
              Florianópolis - SC
            </span>
          </div>
        </section>

        <section className="w-full bg-white rounded-lg">
          <img 
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://images.archtrends.com/unsafe/trim/0x689/https://archtrends.com/data/projects/2/4/1/22241_fachada-casa-do-lago.jpg" 
            alt="Imóvel" 
          />
          <p className="font-bold mt-1 mb-2 px-2">Casa de alto padrão</p>

          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">Bairro Trindade</span>
            <div className="flex justify-between text-center">
              <strong className="text-black font-medium text-xl">R$ 3.500.000</strong>
              <HeartButton />
            </div>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">
              Florianópolis - SC
            </span>
          </div>
        </section>        

        <section className="w-full bg-white rounded-lg">
          <img 
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://images.archtrends.com/unsafe/trim/0x689/https://archtrends.com/data/projects/4/3/5/20435_projeto-fg.jpg" 
            alt="Imóvel" 
          />
          <p className="font-bold mt-1 mb-2 px-2">Casa de alto padrão</p>

          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">Bairro Trindade</span>
            <div className="flex justify-between text-center">
              <strong className="text-black font-medium text-xl">R$ 3.500.000</strong>
              <HeartButton />
            </div>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">
              Florianópolis - SC
            </span>
          </div>
        </section>                
           
      </main>
    </Container>
  );
}
