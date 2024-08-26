import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getRecommendations } from '../api';
import { toast } from '../components';
import errorParser from '../utils/errorParser';

function useGetRecommendations() {
    const navigate = useNavigate()
    const { isLoading, isError, data, error } = useQuery({ queryKey: ['recommendations'], queryFn: getRecommendations })
    if (isError) {
        const parsedError = errorParser(error)
        if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
        else {
            if (error.response.status === 401) {
                toast.error('You are not authorized to access this page.', { autoClose: 5000 })
                navigate('/auth')
            }
            parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
            toast.error('Errors while fetching recommendations data. Please check and try again.', { autoClose: 5000 })
        }
    }

    return { isLoading, data }
}

export {
    useGetRecommendations,
}