"use client";

import { useAuth } from "@clerk/nextjs";
import { api } from "@/lib/api/axios";

export function useAuthedApi() {
    const { getToken } = useAuth();

    const authedGet = async (url: string) => {
        const token = await getToken();

        return api.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    };

    return { authedGet };
}
