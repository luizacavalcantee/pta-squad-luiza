"use client";

import api from "@/services/api";
import { useEffect, useState } from "react";

import MatchCard from "@/components/MatchCard";
import Topbar from "@/components/topbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Modal from "../Modal/page";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Match {
  gameName: string;
  platform: string;
  date: string;
  time: string;
  status: string;
  maxParticipants: number;
}

const formatDate = (date: string) => {
  return format(new Date(date), "dd/MM/yyyy", { locale: ptBR });
};

const formatTime = (time: string) => {
  return format(new Date(time), "HH:mm");
};

export default function ExploreMatches() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await api.get<Match[]>("/match");
      const data = response.data;
      setMatches(data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen">
      <Topbar backArrow={false} />
      <div className="flex flex-col p-12 h-[calc(100vh-64px)]">
        <h1 className="text-2xl text-black font-barlow font-normal mb-16">
          Próximas partidas
        </h1>
          {matches.length > 0 ? (
            <ScrollArea className="w-full h-full rounded-md border-none p-0 mb-8">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4 p-1">
                {matches.map((match, index) => (
                  <MatchCard
                    key={index}
                    gameName={match.gameName}
                    platform={match.platform}
                    date={formatDate(match.date)}
                    time={formatTime(match.time)}
                    status={match.status}
                    maxParticipants={match.maxParticipants}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          ) : (
            <div className="flex justify-center items-center h-full mb-16">
              <span className="text-center font-barlow text-gray-800 text-2xl font-light">Sem partidas disponíveis</span>
            </div>
          )}
          <Modal />
      </div>
    </div>
  );
}