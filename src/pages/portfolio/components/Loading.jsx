import React from "react";
import { Center, Ring, Text } from "../styles/LoadingElements";

const Loading = () => {
  return (
    <Center>
      <Ring />
      <Text>Building the app...</Text>
    </Center>
  );
};

export default Loading;