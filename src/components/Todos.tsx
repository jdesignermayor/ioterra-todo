import React, { useEffect, useState } from 'react'
import { useSupabase } from '../hooks/useSupabase';
import { Task } from '../interfaces/supabase.interface';
import { FilterField } from './FilterField';
import { TaskCard } from './TaskCard';

export const Todos = () => {
    const { tasksList, getTasksByQuery } = useSupabase();
    const [customTask, setCustomTask] = useState([]);

    const handleSearch = async (event: any) => {
        const value = event.target.value.toLowerCase();
        if (value) {
            const result = customTask?.filter((newData: any) => {
                return Object.values(newData).join('').toLowerCase().includes(value.toLowerCase())
            });
            setCustomTask(result);
        } else {
            setCustomTask(tasksList);
        }
    }

    const clearSearch = () => {
        setCustomTask(tasksList);
    }

    useEffect(() => {
        setCustomTask(tasksList);
    }, [tasksList]);

    return (
        <div className="grid justify-center w-full pt-12 px-6 gap-4">
            <p className="font-bold text-3xl">👋 Welcome to ioterra Todo </p>
            <FilterField parentCallback={handleSearch} parentCallbackClear={clearSearch} />
            <div className="grid gap-2 ">
                <p>Lastest tasks</p>
                {customTask?.length > 0 ? <>
                    {customTask?.map((props: Task) => {
                        return <TaskCard key={props.id} {...props} />
                    })}
                </> : <p>You dot have a taks</p>}
            </div>
        </div>
    )
}
