import React from 'react'
import { useSupabase } from "../hooks/useSupabase";

import { Role } from '../interfaces/supabase.interface';
import { ButtonRole } from './ButtonRole';

export const Login = () => {
    const { roleList } = useSupabase();

    return (
        <div className="flex flex-col items-center justify-center pt-5 px-6 w-full ">
            <div className="grid w-full gap-2 items-center pt-10 md: w-7/12">
                <p className="text-4xl font bold">Sign in</p>
                <p>Select your prefered role</p>
                {roleList?.map((role: Role) => {
                    return <ButtonRole key={role.id} {...role} />
                })}
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joseacevedodev/">Created with ❤️ by <span className=" text-violet-500">JoseAcevedo</span></a>
            </div>

        </div>
    )
}
