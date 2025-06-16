import useScreenshots from "@/hooks/useScreenshots";
import { SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  console.log(data);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data?.results.map((result) => (
          <img key={result.id} src={result.image} alt="Game screenshot" />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshot;
