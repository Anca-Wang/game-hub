import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api-client";
import Platform from "@/entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
export default usePlatforms;
