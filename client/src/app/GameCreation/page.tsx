'use client';

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { CircleAlert } from 'lucide-react';
import { useForm } from "react-hook-form";
import React, { useState  } from "react";

interface MatchData {
    username: string;
    email: string;
    gameName: string;
    platform: string;
    date: string;
    time: string;
    maxParticipants: number;
    description: string;
    link: string; 
}

export default function GameCreation() {
    const { register, handleSubmit, formState: { errors } } = useForm<MatchData>({ mode: "onChange" });
    const [ matchData, setMatchData] = useState<MatchData>({
        username: "",
        email: "",
        gameName: "",
        date: "",
        time: "",
        platform: "",
        maxParticipants: 0,
        description: "",
        link: "",
    });
    const router = useRouter();

    const onSubmit = (data: MatchData ) => {
        const formattedDate = data.date.split('-').reverse().join('/')
        const updatedData = {...data, date:formattedDate}
        setMatchData(updatedData)
        console.log("Dados enviados:", matchData)
        router.push("/ExploreMatches");
    };
    
    const handleReturn = () => {
        router.back();
    }

      
    return (
        <div className=" h-screen overflow-y-scroll">
            <div className="items-center flex gap-1 pt-20 pl-16">
                <button onClick={handleReturn}>
                <ChevronLeft className=" h-6 stroke-black w-8"/>
                </button>
                <h1 className=" text-2xl text-black font-barlow font-semibold ">
                Criar partida
                </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col px-16 font-barlow pt-12">
                <fieldset className="flex flex-row space-x-14">
                    <div className="space-y-1 flex flex-col w-full">
                        <label className="font-medium text-base">Nome do jogo</label>
                        <input
                            id="gameName"
                            type="text"
                                {...register("gameName", { required: "Este campo é obrigatório" })}
                                placeholder="Jogo"
                                className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base focus:outline-none focus:border-backgroundSidebar focus:bg-backgroundSidebar/20"/>
                        
                                {errors.gameName && <span className="text-redError flex flex-row gap-1 ml-1 items-center text-sm font-base">
                                <CircleAlert className="w-4"/>
                                {errors.gameName.message}
                                </span>}
                    </div>

                    <div className="space-y-1 flex flex-col w-full">
                        <label className="font-medium text-base">Plataforma de reunião da partida</label>
                        <input
                            
                            id="platform"
                            type="text"
                            {...register("platform", { required: "Este campo é obrigatório" })}
                            placeholder="Plataforma"
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base focus:outline-none focus:border-backgroundSidebar focus:bg-backgroundSidebar/20"/>

                            {errors.platform && <span className="text-redError flex flex-row gap-1 ml-1 items-center text-sm font-base">
                            <CircleAlert className="w-4"/>
                            {errors.platform.message}
                            </span>}
                    </div>
                </fieldset>
                
                <fieldset className="flex flex-row space-x-14 pt-4">
                <div className="space-y-1 flex flex-col w-full pb-2">
                        <label className="font-medium text-base">Data da partida</label>
                        <input

                            id="date"
                            type="date"
                            {...register("date", { required: "Este campo é obrigatório" })}
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base focus:outline-none focus:border-backgroundSidebar focus:bg-backgroundSidebar/20"/>

                            {errors.date && <span className="text-redError flex flex-row gap-1 ml-1 items-center text-sm font-base">
                            <CircleAlert className="w-4"/>
                            {errors.date.message}
                            </span>}
                    </div>
                    <div className="space-y-1 flex flex-col w-full">
                        <label className="font-medium text-base">Horário da partida</label>
                        <input

                            id="time"
                            type="time"
                            {...register("time", { required: "Este campo é obrigatório" })}
                            placeholder=""
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base focus:outline-none focus:border-backgroundSidebar focus:bg-backgroundSidebar/20"/>

                            {errors.time && <span className="text-redError flex flex-row gap-1 ml-1 items-center text-sm font-base">
                            <CircleAlert className="w-4"/>
                            {errors.time.message}
                            </span>}
                    </div>
                    <div className="space-y-1 flex flex-col w-full">
                        <label className="font-medium text-base">Quantidade de pessoas na partida</label>
                        <input

                            id="maxParticipants"
                            type="text"
                            {...register("maxParticipants", { required: "Este campo é obrigatório" })}
                            placeholder="Capacidade"
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base focus:outline-none focus:border-backgroundSidebar focus:bg-backgroundSidebar/20"/>

                            {errors.maxParticipants && <span className="text-redError flex flex-row gap-1 ml-1 items-center text-sm font-base">
                            <CircleAlert className="w-4"/>
                            {errors.maxParticipants.message}
                            </span>}
                    </div>
                </fieldset>

                    <div className="space-y-1 flex flex-col w-full pt-4">
                        <label className="font-medium text-base">Link da partida</label>
                        <input

                            id="link"
                            type="text"
                            {...register("link", { required: "Este campo é obrigatório" })}
                            placeholder="Link"
                            className="placeholder:text-black px-3 py-2 border border-gray-300 rounded-xl font-normal text-base focus:outline-none focus:border-backgroundSidebar focus:bg-backgroundSidebar/20"/>

                            {errors.link && <span className="text-redError flex flex-row gap-1 ml-1 items-center text-sm font-base">
                            <CircleAlert className="w-4"/>
                            {errors.link.message}
                            </span>}
                    </div>

                    <div className="space-y-1 flex flex-col w-full pt-4">
                        <label className="font-medium text-base">Descrição da partida</label>
                        <textarea

                            id="description"
                            {...register("description", { required: "Este campo é obrigatório" })}
                            placeholder="Descrição"
                            className="placeholder:text-black px-3 h-36 py-2 border border-gray-300 rounded-xl font-normal text-base focus:outline-none focus:border-backgroundSidebar focus:bg-backgroundSidebar/20"/>
                            
                            {errors.description && <span className="text-redError flex flex-row gap-1 ml-1 items-center text-sm font-base">
                            <CircleAlert className="w-4"/>
                            {errors.description.message}
                            </span>}
                    </div>
            <div className="flex pt-20 pb-10 justify-end">
                <button 
                type="submit"
                className="rounded-xl bg-greenButton border radius w-80 h-12">
                    
                <span className="text-white font-bold text-xl font-barlow ">Criar Partida</span>
                </button>
            </div>
            </form>
        </div>
    );
}

