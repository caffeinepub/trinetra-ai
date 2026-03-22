import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useHasDemoRequest() {
  const { actor, isFetching } = useActor();
  return useQuery<boolean>({
    queryKey: ["hasDemoRequest"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.hasDemoRequest();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitDemoRequest() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: {
      name: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitDemoRequest(name, email, message);
    },
  });
}
