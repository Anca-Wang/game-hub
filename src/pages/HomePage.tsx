import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <GameHeading />
        <Flex marginBottom={2}>
          <Box marginRight={5}>
            <PlatformSelector />
          </Box>
          <SortSelector></SortSelector>
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
