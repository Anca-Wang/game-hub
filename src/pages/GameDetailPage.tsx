import ExpandableText from "@/components/ExpandableText";
import useGame from "@/hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { id } = useParams();
  const gameId = Number(id);
  const { data: game, isLoading, error } = useGame(gameId);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  console.log(id, gameId);

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
