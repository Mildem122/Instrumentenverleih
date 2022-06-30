import { useState } from "react";
import ThreeRadioButton from "./ThreeRadioButtons";

/* answer = {
    text: "Antwort"
    value: "A/B/C"
}
*/
function Question({ question, answers, setSelectedValue }) {
  return (
    <div className="border-4 rounded-3xl border-white self-center mt-10">
      <h2 className="text-white text-2xl my-5 mx-5">{question}</h2>
      <div className="ml-5 mb-5 ">
        <ThreeRadioButton
          valueOne={answers[0].value}
          valueTwo={answers[1].value}
          valueThree={answers[2].value}
          textOne={answers[0].text}
          textTwo={answers[1].text}
          textThree={answers[2].text}
          setSelectedValue={setSelectedValue}
          flexDirection="col"
          fourthButton={true}
          valueFour={answers[3].value}
          textFour={answers[3].text}
        />
      </div>
    </div>
  );
}

export default Question;
