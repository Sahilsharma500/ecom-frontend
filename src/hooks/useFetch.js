import { useEffect, useState } from "react";
import { FetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (endpoint) {
            const fetchData = async () => {
                try {
                    const response = await FetchDataFromApi(endpoint);
                    setData(response);
                } catch (err) {
                    setError(err);
                }
            };

            fetchData();
        }
    }, [endpoint]);

    return { data, error };
};

export default useFetch;
