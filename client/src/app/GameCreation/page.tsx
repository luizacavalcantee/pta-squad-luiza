'use client';
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { CircleAlert } from 'lucide-react';

export default function GameCreation() {
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log("Dados enviados:", FormData);
      };
      
    return (
        <div className=" h-screen">
            <div className="items-center flex gap-1 pt-20 pl-16">
                <ChevronLeft className=" h-6 stroke-black w-8"/>
                <h1 className=" text-2xl text-black font-barlow font-semibold ">
                Criar partida
                </h1>
            </div>
            <form onSubmit={handleSubmit} 
            className="flex flex-col px-16 font-barlow pt-12">
                <fieldset className="flex flex-row space-x-14">
                    <div className="space-y-1 flex flex-col w-full">
                        <label className="font-medium text-base">Nome do jogo</label>
                        <input
                            {errors.gameName && <span className="">
                            {errors.gameName.message}
                            <CircleAlert />
                            </span>}

                            id="gameName"
                            type="text"
                            {...register("gameName", { required: "Este campo é obrigatório" })}
                            placeholder="Jogo"
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base"/>
                    </div>

                    <div className="space-y-1 flex flex-col w-full">
                        <label className="font-medium text-base">Plataforma de reunião da partida</label>
                        <input
                            {errors.platform && <span className="">
                            {errors.platform.message}
                            <CircleAlert />
                            </span>}
                            
                            id="platform"
                            type="text"
                            {...register("platform", { required: "Este campo é obrigatório" })}
                            placeholder="Plataforma"
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base"/>
                    </div>
                </fieldset>
                
                <fieldset className="flex flex-row space-x-14 pt-4">
                <div className="space-y-1 flex flex-col w-full pb-2">
                        <label className="font-medium text-base">Data da partida</label>
                        <input
                            {errors.date && <span className="">
                            {errors.date.message}
                            <CircleAlert />
                            </span>}

                            id="date"
                            type="date"
                            {...register("date", { required: "Este campo é obrigatório" })}
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base"/>
                    </div>
                    <div className="space-y-1 flex flex-col w-full">
                        <label className="font-medium text-base">Horário da partida</label>
                        <input
                            {errors.time && <span className="">
                            {errors.time.message}
                            <CircleAlert />
                            </span>}

                            id="time"
                            type="time"
                            {...register("time", { required: "Este campo é obrigatório" })}
                            placeholder=""
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base"/>
                    </div>
                    <div className="space-y-1 flex flex-col w-full">
                        <label className="font-medium text-base">Quantidade de pessoas na partida</label>
                        <input
                            {errors.maxParticipants && <span className="">
                            {errors.maxParticipants.message}
                            <CircleAlert />
                            </span>}

                            id="maxParticipants"
                            type="text"
                            {...register("maxParticipants", { required: "Este campo é obrigatório" })}
                            placeholder="Capacidade"
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base"/>
                    </div>
                </fieldset>

                    <div className="space-y-1 flex flex-col w-full pt-4">
                        <label className="font-medium text-base">Link da partida</label>
                        <input
                            {errors.link && <span className="">
                            {errors.link.message}
                            <CircleAlert />
                            </span>}

                            id="link"
                            type="text"
                            {...register("link", { required: "Este campo é obrigatório" })}
                            placeholder="Link"
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base"/>
                    </div>

                    <div className="space-y-1 flex flex-col w-full pt-4">
                        <label className="font-medium text-base">Descrição da partida</label>
                        <textarea
                            {errors.description && <span className="">
                            {errors.description.message}
                            <CircleAlert />
                            </span>}

                            id="description"
                            {...register("description", { required: "Este campo é obrigatório" })}
                            placeholder="Descrição"
                            className="placeholder:text-black px-3 h-36 py-2 border border-gray-300 rounded-xl font-normal text-base"/>
                    </div>
            </form>
            <div className="flex pt-44 px-16 pb-10 justify-end ">
                <button 
                type="submit"
                className="rounded-xl bg-greenButton border radius w-80 h-12">
                    
                <span className="text-white font-bold text-xl font-barlow">Criar Partida</span>
                </button>
            </div>
        </div>
    );
}

