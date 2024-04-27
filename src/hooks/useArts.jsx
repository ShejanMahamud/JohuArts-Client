import {
    useQuery
} from '@tanstack/react-query';
import useAuth from "./useAuth";
const useArts = () => {

const {user} = useAuth();    

const {data,isLoading,refetch,isPending} = useQuery({
    queryKey: ['myArts'],
    queryFn: async () => {
        const res = await fetch(`https://johuarts-backend.vercel.app/arts/${user.email}`)
        const data = await res.json()
        return data;
    }
});

return {data,isLoading,refetch,isPending}

};

export default useArts;
