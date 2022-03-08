import React from 'react'
import { useSupabase } from '../hooks/useSupabase';
import { Task } from '../interfaces/supabase.interface';
import { FilterField } from './FilterField';
import { TaskCard } from './TaskCard';

export const Todos = () => {
    const { tasksList } = useSupabase();

    return (
        <div className="grid justify-center w-full pt-12 px-6 gap-4">
            <p className="font-bold text-3xl">👋 Welcome to ioterra Todo </p>
            <FilterField />
            <div className="w-full grid gap-2 ">
                <p>Lastest tasks</p>
                {tasksList?.length > 0 ? <>
                    {tasksList?.map((props: Task) => {
                        return <TaskCard key={props.id} {...props} />
                    })}
                </> : <p>You dot have a taks</p>}
            </div>
        </div>
    )
}
