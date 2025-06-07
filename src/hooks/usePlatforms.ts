// import useData from "./useData";
import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import apiclient from '@/services/api-client'

export interface Platform{
  id: number;
  name: string;
  slug: string
}

const usePlatforms =() => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiclient.get<Platform[]>('/platforms/lists/parents').then(res => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: platforms
})
export default usePlatforms