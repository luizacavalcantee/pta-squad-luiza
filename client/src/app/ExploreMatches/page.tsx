"use client";

import api from "@/services/api";
import { useEffect, useState } from "react";

import MatchCard from "@/components/MatchCard";
import Topbar from "@/components/topbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Modal from "../Modal/page";


interface Match {
  gameName: string;
  description: string;
  date: string;
  time: string;
  status: string;
  maxParticipants: number;
}
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

  const formatDate = (dateString: string) => {
    const dateObj = new Date(dateString);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    
    return `${day}/${month}/${year}`;
  };

  const formatTime = (timeString: string) => {
    const timeObj = new Date(timeString);
    const hour = String(timeObj.getHours()).padStart(2, '0');
    
    return `${hour}h`;
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
                    description={match.description}
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