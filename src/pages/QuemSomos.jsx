import Header from "../components/Header";
import Contato from "../components/Contato";
import { H1, H2, H2_btn, P } from '../components/Texto';


export function QuemSomos() {
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div className="h-[52px] md:h-[120px]" />
            <div className="bg-verdefechado dark:bg-darkverdeescuro w-full h-100vh p-9  dark:text-white">
                <section className="text-white flex flex-col justify-center px-4 md:px-50 p-5 md:p-10">
                    <H1>Quem Somos?</H1><br/>
                    <H2>Conheça os criadores do TrashTrack e o que cada um contribuiu para tornar este projeto realidade.</H2>
                </section>
                
                <div className="flex flex-wrap justify-center gap-8">
                    <section className="bg-verdinho dark:bg-darkverdinho w-[340px] md:h-[541px] rounded-[10px] flex flex-col items-center justify-center p-3">
                        <img src="./src/assets/emerson.png" alt="Foto Emerson Reis" className="mb-4 h-[192px] md:h-[264px]"/>
                        <H2>Emerson Reis</H2>
                            
                        <section className="mt-3 md:mt-10 px-10">
                            <H2_btn>Hardware e programação</H2_btn>
                            <P><link rel="stylesheet" href="" className=" hover:underline cursor-pointer"/>@froid_ss</P>
                        </section> 
                    </section>    

                    <section className="bg-verdinho dark:bg-darkverdinho w-[340px] md:h-[541px] rounded-[10px] flex flex-col items-center justify-center p-3">
                        <img src="./src/assets/joao.png" alt="Foto João Montalvão" className="mb-4 h-[192px] md:h-[264px]" />
                        <H2>João Montalvão</H2>
                            
                        <section className="mt-3 md:mt-10 px-10">
                            <H2_btn>Design visual e identidade visual</H2_btn>
                            <P><link rel="stylesheet" href="" className=" hover:underline cursor-pointer"/>@_cdmvitor</P>
                        </section>    
                    </section>
                    <section className="bg-verdinho dark:bg-darkverdinho w-[340px] md:h-[541px] rounded-[10px] flex flex-col items-center justify-center p-3">
                        <img src="./src/assets/julio.png" alt="Foto Julio Cesar" className="mb-4 h-[192px] md:h-[264px]" />
                        <H2>Julio Cesar</H2>
                        
                        <section className="mt-3 md:mt-10 px-10">
                            <H2_btn>Criação do game e desenvolvimento do site</H2_btn>
                            <P><link rel="stylesheet" href="" className=" hover:underline cursor-pointer" />@julio.cesrr_</P>
                        </section>    
                    </section>
                    <section className="bg-verdinho dark:bg-darkverdinho w-[340px] md:h-[541px] rounded-[10px] flex flex-col items-center justify-center p-3">
                        <img src="./src/assets/rebecca.png" alt="Foto Rebecca Anjos" className="mb-4 h-[192px] md:h-[264px]"/>
                        <H2>Rebecca Anjos</H2>
                        
                        <section className="mt-3 md:mt-10 px-10">
                            <H2_btn>Desenvolvimento do site e programação</H2_btn>
                            <P><link rel="stylesheet" href="" className=" hover:underline cursor-pointer"/>@rebecca_anjoss</P>
                        </section>    
                    </section>
                </div>               
            </div>

            <div>
                <Contato/>
            </div>
        </div> 
    )
}