import { User, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function TopBar(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <div className="flex justify-between items-center p-5 shadow-sm border-b mx-auto">
                <div className="flex">
                    <h1 className="font-bold">Reserva de Horarios</h1>
                </div>
                {/* Esto es cuando el usuario esta logeado*/}
                {
                    isLoggedIn 
                    ?
                    <div className="flex justify-between gap-3">
                        <User/>
                        <div>
                            <span>Usuario</span>
                        </div>
                        <ChevronDown/>
                    </div>
                    :
                    <div className="flex items-center space-x-2">
                    {/* <Button variant="ghost" onClick={() => setIsLoggedIn(true)}>
                        Iniciar Sesión
                    </Button>
                    <Button onClick={() => setIsLoggedIn(true)}>Registrarse</Button> */}
                    <button className="hover:bg-gray-200 hover:cursor-pointer rounded-sm transition ease-in-out duration-400 p-1" onClick={() => setIsLoggedIn(true)}>Iniciar Sesión</button>
                    </div>
                }
                
            </div>
        </>
    )
}