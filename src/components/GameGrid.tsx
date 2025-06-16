import useGames from "@/hooks/useGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
// import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  // const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  if (isLoading) return <Spinner />;

  const fetchedGamesCount = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount || 0}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<Text>Loading...</Text>}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          spacing={5}
          paddingY={3}
          overflow="visible"
          justifyItems="center"
          mx="auto"
        >
          {/* {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))} */}

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
        {/* Load More Button */}
        {/* {hasNextPage && 
              <Button onClick={() => fetchNextPage()} marginY={5}>
                {isFetchingNextPage ? 'Loading...' : 'Load More'}
              </Button>} */}
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
