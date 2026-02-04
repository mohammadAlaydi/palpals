import { SWRConfiguration } from "swr";
import axios from "axios";

export const swrConfig: SWRConfiguration = {
    fetcher: (url: string) => axios.get(url).then((res) => res.data),
    revalidateOnFocus: false,
    shouldRetryOnError: false,
};
