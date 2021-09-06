import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.nytimes.com';

const useArticles = () => {
    const [response, setResponse] = useState();
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios
            .get('/svc/mostpopular/v2/viewed/7.json?api-key=mZyo79k1gf2yAywWQd0yOT6ckHs8RYSk')
            .then((res) => {
                setResponse(res.data.results);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { response, error, loading };
};

export default useArticles;
