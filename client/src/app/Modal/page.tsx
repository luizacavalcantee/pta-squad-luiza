"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import MatchButton from "@/components/MatchButton";
  import Image from "next/image";
  import { logoCITiBlue } from "@/assets";

  

  export default function Modal() {
    
    return (
      <div className=" w-screen h-screen border-4  flex items-center justify-center">
      <Dialog>

          <div className="py-16 px-16 flex border border-gray-300 gap-8 rounded-2xl bg-grayModal w-1/3 h-4/6 flex-col justify-center items-center">
            <div className="">
            <Image src={logoCITiBlue} alt="Logo" className="w-80 h-auto" />
            <DialogTrigger className="font-barlow text-gray-400 flex bg-white rounded border border-gray-200 w-80 h-12 mb-8 mt-8 px-3 py-3">username</DialogTrigger>
            <DialogTrigger className="font-barlow text-gray-400 flex bg-white rounded border border-gray-200 w-80 h-12 mb-8 px-3 py-3">e-mail</DialogTrigger>
            <MatchButton/>
            </div>
          </div>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Falta escrever?</DialogTitle>
              <DialogDescription>
                Falta escrever
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        </div>
    );
}
