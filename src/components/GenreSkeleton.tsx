import { Skeleton, VStack } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <VStack paddingY={5} borderRadius={10}>
      <Skeleton height="30px" width="150px" />
      <Skeleton height="10px" width="150px" />
    </VStack>
  );
};

export default GenreSkeleton;
