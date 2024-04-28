import {
    useQuery
} from '@tanstack/react-query';

const useCategories = () => {

const {data,isLoading,refetch,isPending} = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
        const res = await fetch(`https://johuarts-backend.vercel.app/categories`)
        const data = await res.json()
        return data;
    }
});

return {data,isLoading,refetch,isPending}

};

export default useCategories;
