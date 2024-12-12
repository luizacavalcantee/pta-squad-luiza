"use client";

import api from "@/services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import Topbar from "@/components/topbar";
import MatchButton from "@/components/MatchButton";
import { CircleUserRound } from "lucide-react";

interface Match {
  id: string;
  gameName: string;
  description: string;
  date: string;
  time: string;
  status: string;
  maxParticipants: number;
  link?: string;
}

export default function GameDetails() {
  const { id } = useParams(); 
  const [matches, setMatches] = useState<Match | null>(null);
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    if (id) {
      fetchMatch(id); 
    }
  }, [id]);

  const fetchMatch = async (id: string) => {
    try {
      const response = await api.get<Match>(`/match/${id}`);
      setMatches(response.data); 
      setLoading(false); 
    } catch (error) {
      console.error("Erro ao buscar a partida:", error);
      setLoading(false); 
    }
  };

  if (loading) {
    return <div>Carregando detalhes da partida...</div>;
  }

  if (!matches) {
    return <div>Partida não encontrada.</div>;
  }

  return (
    <div className="h-screen font-barlow">
      <Topbar backArrow={true} />
      <div className="flex flex-row justify-center p-16 gap-16 h-[calc(100vh-64px)] overflow-y-scroll">
        <div className="flex flex-col gap-3 p-6 h-fit w-full">
          {/* Cabeçalho */}
          <div className="flex flex-col gap-1">
            <span className="text-purple-500 text-sm font-normal">Partidas</span>
            <span className="text-2xl font-medium text-gray-800">{matches.gameName}</span>
          </div>

          {/* Detalhes */}
          <div className="flex flex-col justify-between text-gray-500 text-sm font-normal">
            <span>{matches.date} | {matches.time}</span>
            <span>Discord</span>
          </div>

          {/* Descrição */}
          <div className="mt-4">
            <h3 className="text-base font-medium text-gray-800 mb-3">Descrição:</h3>
            <div className="bg-white p-2 rounded-md">
              <p className="text-sm mt-1 px-3 py-2">{matches.description}</p>
            </div>
          </div>

          {/* Link */}
          <div className="mt-4">
            <h3 className="text-base font-medium text-gray-800 mb-3">Link:</h3>
            <div className="bg-white p-2 rounded-md">
              <span className="text-sm underline px-3 py-2">
                {matches.link}
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center mt-20">
            <MatchButton />
          </div>
        </div>

        <div className="flex flex-col w-fit rounded-2xl p-7 gap-4 bg-white max-h-max shadow-lg">
          <div className="flex flex-row justify-around gap-28">
            <span className="text-2xl text-gray-800 ml-6 font-medium">Participantes</span>
            <span className="text-2xl text-gray-800 font-medium">{matches.maxParticipants}</span>
          </div>

          <div className="flex flex-col bg-blueCard rounded-2xl p-6 gap-2 h-full">
            <div className="flex flex-row items-center gap-2">
              <CircleUserRound className="w-8" strokeWidth={1.5} />
              <span>Nome do jogador</span>
            </div>

            <div className="flex flex-row items-center gap-2">
              <CircleUserRound className="w-8" strokeWidth={1.5} />
              <span>Nome do jogador</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
