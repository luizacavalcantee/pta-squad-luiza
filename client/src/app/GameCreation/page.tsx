'use client';
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GameCreation() {
    const router = useRouter();
    return (
        <div className=" h-screen">
            <div className="items-center flex gap-1 pt-20 pl-16">
                <ChevronLeft className=" h-6 stroke-black w-8"/>
                <h1 className=" text-2xl text-black font-barlow font-semibold ">
                Criar partida
                </h1>
            </div>
            <form className="flex flex-col px-16 font-barlow pt-12">
                <fieldset className="flex flex-row space-x-14">
                    <div className="space-y-1 flex flex-col w-full">
                        <label className="font-medium text-base">Nome do jogo</label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Jogo"
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base"/>
                    </div>

                    <div className="space-y-1 flex flex-col w-full">
                        <label className="font-medium text-base">Plataforma de reunião da partida</label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Plataforma"
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base"/>
                    </div>
                </fieldset>
                
                <fieldset className="flex flex-row space-x-14 pt-4">
                <div className="space-y-1 flex flex-col w-full pb-2">
                        <label className="font-medium text-base">Data da partida</label>
                        <input
                            id="Data"
                            type="date"
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base"/>
                    </div>
                    <div className="space-y-1 flex flex-col w-full">
                        <label className="font-medium text-base">Horário da partida</label>
                        <input
                            id="Horário"
                            type="time"
                            placeholder=""
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base"/>
                    </div>
                    <div className="space-y-1 flex flex-col w-full">
                        <label className="font-medium text-base">Quantidade de pessoas na partida</label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Capacidade"
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base"/>
                    </div>
                </fieldset>

                    <div className="space-y-1 flex flex-col w-full pt-4">
                        <label className="font-medium text-base">Link da partida</label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Link"
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base"/>
                    </div>

                    <div className="space-y-1 flex flex-col w-full pt-4">
                        <label className="font-medium text-base">Descrição da partida</label>
                        <textarea
                            id="title"
                            placeholder="Descrição"
                            className="placeholder:text-black px-3 h-36 py-2 border border-gray-300 rounded-xl font-normal text-base"/>
                    </div>
            </form>
            <div className="flex pt-44 px-16 pb-10 justify-end ">
                <button className="rounded-xl bg-greenButton border radius w-80 h-12">
                <span className="text-white font-bold text-xl font-barlow">Criar Partida</span>
                </button>
            </div>
        </div>
    );
}

