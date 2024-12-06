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
  import { CreateButton } from "@/components/CreateButton";
  import { useForm } from "react-hook-form";
  import React, { useState  } from "react";
  import { useRouter } from "next/navigation";

  interface LoginData {
    username: string;
    email: string;
  }

  export default function Modal() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({ mode: "onChange" });
    const [ loginData, setLoginData] = useState<LoginData>({
        username: "",
        email: "",
    });
  
    const onSubmit = (data: LoginData ) => {
      setLoginData(data)
      console.log("Dados enviados:", loginData)
      router.push("/GameCreation");
  };
    return (
      <Dialog>
        <DialogTrigger className="flex justify-end">
          <CreateButton/>
        </DialogTrigger>
        <DialogContent className="w-full max-w-fit gap-0 bg-background p-16 flex rounded-2xl flex-col justify-center items-center">
          <DialogHeader className="gap-8">
            <DialogTitle> 
              <Image src={logoCITiBlue} alt="Logo" className="w-80 h-auto" />
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input  
                  id="username"
                  type="text"

                  {...register("username", { required: "Este campo é obrigatório" })}
                  className="font-barlow text-gray-400 flex bg-white rounded border border-gray-200 w-80 h-12 mb-8  px-3 py-3 focus:outline-none focus:border-backgroundSidebar focus:bg-backgroundSidebar/20"placeholder="username"required/>
                
                <input
                  id="email"
                  type="text"
                  {...register("email", { required: "Este campo é obrigatório" })}
                  className="font-barlow text-gray-400 flex bg-white rounded border border-gray-200 w-80 h-12 mb-8 px-3 py-3 focus:outline-none focus:border-backgroundSidebar focus:bg-backgroundSidebar/20"placeholder="e-mail" required/>
                  <button type="submit">
                    <MatchButton/>
                  </button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    
    );
}
