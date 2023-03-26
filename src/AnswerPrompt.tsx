import { Button, HStack, NumberInput, NumberInputField } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

type SetAnswer = React.Dispatch<React.SetStateAction<number | null>>;

function AnswerPrompt(props: { submitAnswer: SetAnswer }) {
  const [answer, setAnswer] = useState(0);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    props.submitAnswer(answer);
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack p="5">
        <NumberInput p-left="5">
          <NumberInputField
            boxShadow='2px 1px 2px  steelblue'
            p="5"
            w="24rem"
            h="3rem"
            borderRadius="12px"
            marginTop="50px"
            fontStyle="italic"
          fontWeight="bold"
          color="steelblue"
          fontSize="35px"

            onChange={(e) => setAnswer(Number.parseInt(e.target.value))} />
        </NumberInput>
        
        <Button
         
          w="10rem"
          h="3rem"
          type="submit"
          value="submit"
          fontStyle="italic"
          fontWeight="bold"
          color="white"
          fontSize="23px"
          boxShadow='2px 1px 2px steelblue'
          background="#17c0eb"
          display="inline-block"
          borderRadius="12px"
          marginTop="50px !important"
         
          > Submit </Button>
         
      </HStack>
    </form>
  );
}


export default AnswerPrompt;
