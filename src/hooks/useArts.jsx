import {
    useQuery
} from '@tanstack/react-query';

const useArts = () => {

const {data,isLoading,refetch,isPending} = useQuery({
    queryKey: ['arts'],
    queryFn: async () => {
        const res = await fetch(`https://johuarts-backend.vercel.app/arts`)
        const data = await res.json()
        return data;
    }
});

return {data,isLoading,refetch,isPending}

};

export default useArts;
