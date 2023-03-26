import { Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

type QuestionRequest = React.DispatchWithoutAction;

function NewQuestionButton({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }) {
  return <Button 
  fontStyle="italic"
  fontWeight="bold"
  color="white"
  fontSize="23px"
  boxShadow='2px 1px 2px steelblue'
  background="#17c0eb"
  display="inline-block"
  borderRadius="12px"
    
    onClick={onClick}> Next</Button>;
}

type AnswerProps = {
  answer: number
  userAnswer: number | null
  questionRequest: QuestionRequest
}
function AnswerPanel(props: AnswerProps) {
  const { answer, userAnswer } = props;

  const isCorrect = (answer === userAnswer);
  return (
    <Container centerContent>
      <VStack>
        <Heading color={ isCorrect ? "green" : "red" } >
          {isCorrect ? "RIGHT!"
            :
            "WRONG!"
          }
        </Heading>
        <Text 
         fontStyle="italic"
         fontWeight="bold"
         color="steelblue"
         fontSize="35px"
       
       > Answer was {answer} </Text>
        <NewQuestionButton onClick={() => props.questionRequest()}/>
      </VStack>
    </Container>
  );
}

export default AnswerPanel;
