import { Text } from "@chakra-ui/react";

type QuestionProps = {
  multiplier: number
  multiplicand: number
}
function QuestionPrompter(props: QuestionProps) {
  return (
    <Text
      fontSize="95"
      fontWeight="bold"
      color="white"
      boxShadow="10px 10px 5px steelblue"
      background=" skyblue"
      fontStyle="italic"
      fontFamily="amiri"
      w="35rem"
      h="13rem"
      borderRadius="20px"
      textAlign="center"
      padding="30px">{props.multiplier} * {props.multiplicand} = ?</Text>
  );
}

export default QuestionPrompter;
