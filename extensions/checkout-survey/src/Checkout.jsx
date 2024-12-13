import React from "react";
import {
  reactExtension,
  useSettings,
  BlockStack,
  ChoiceList,
  Choice,
  Heading,
  Button,
} from "@shopify/ui-extensions-react/checkout";

// Define the extension entry point
export default reactExtension("purchase.thank-you.block.render", () => <SurveyApp />);

function SurveyApp() {
  // Retrieve settings using the useSettings hook
  const { survey_title: surveyTitle, survey_choices: surveyChoices } = useSettings();

  // Use default values if no settings are provided
  const title = surveyTitle || "How did you hear about us?";
  const choices = surveyChoices ? surveyChoices.split("\n") : ["TV", "Podcast", "From a friend or family member", "Tiktok"];

  const [selectedChoice, setSelectedChoice] = React.useState("");

  const handleSubmit = () => {
    console.log("Selected Choice:", selectedChoice);
    // Add any additional submission logic here (e.g., API call)
  };

  return (
    <BlockStack>
      <Heading>{title}</Heading>
      <ChoiceList
        name="survey"
        value={selectedChoice}
        onChange={setSelectedChoice}
      >
        {choices.map((choice, index) => (
          <Choice key={index} id={`choice-${index}`} value={choice}>
            {choice}
          </Choice>
        ))}
      </ChoiceList>
      <Button kind="secondary" onPress={handleSubmit}>
        Submit
      </Button>
    </BlockStack>
  );
}
