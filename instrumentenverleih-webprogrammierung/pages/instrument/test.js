import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Question from "../../components/Question";
import CustomButton from "../../components/CustomButton";
import TestResult from "../../components/TestResult";
const answersQuestionOne = [
  { text: "Gitarre! DAS Rockinstrument überhaupt!", value: "B" },
  {
    text: "Klavier - weil es so angenehm klingt und so facettenreich ist!",
    value: "A",
  },
  {
    text: "Geige oder Cello - diese Instrumente sind so gefühlvoll!",
    value: "C",
  },
  { text: "Ich höre lieber elektronische Musik!", value: "D" },
];
const answersQuestionTwo = [
  { text: "Alles quer Beet, ich kann mich schwer festlegen!", value: "A" },
  {
    text: "Rock, aber auch mal was anderes!",
    value: "B",
  },
  {
    text: "Techno, Trance, oder Electronic!",
    value: "D",
  },
  {
    text: "Klassik oder Softrock, auf jeden Fall anspruchsvolles!",
    value: "C",
  },
];
const answersQuestionThree = [
  {
    text: "Einen Film ausleihen und mit meinem besten Freund auf dem Sofa lümmeln!",
    value: "C",
  },
  {
    text: "Auf ein Konzert oder eine Party gehen - mit oder ohne meine Freunde!",
    value: "B",
  },
  {
    text: "In einer Disco tanzen gehen!",
    value: "D",
  },
  {
    text: "Mit meinen Freunden eine Party schmeißen oder was trinken gehen!",
    value: "A",
  },
];
const answersQuestionFour = [
  { text: "Ja, hin und wieder schon!", value: "A" },
  {
    text: "Ja, auf jeden Fall - so kann ich mich austoben!",
    value: "D",
  },
  {
    text: "Nein, eher nicht...",
    value: "C",
  },
  {
    text: "Klar, aber nur, wenn sie mit einer Spielart zu tun haben!",
    value: "B",
  },
];
const answersQuestionFive = [
  { text: "Nachdenklich, gefühlsbetont, offenherzig, freundlich", value: "A" },
  {
    text: "Schüchtern, zurückhaltend, nett, leidenschaftlich",
    value: "C",
  },
  {
    text: "Aktiv, freundlich, experimentierfreudig, spontan",
    value: "B",
  },
  { text: "Energievoll, dickköpfig, ehrlich, voller Tatendrang", value: "D" },
];
const answersQuestionSix = [
  {
    text: "Naja, wenn es sein muss schon. Aber dann lese ich oder höre Musik.",
    value: "A",
  },
  {
    text: "No way! Ich bin immer in Bewegung!",
    value: "D",
  },
  {
    text: "Ungern. Dann unterhalte ich mich mit Jemanden, der auch wartet!",
    value: "B",
  },
  {
    text: "Ich kann lange warten, ohne eine Ablenkung zu brauchen.",
    value: "C",
  },
];
const answersQuestionSeven = [
  {
    text: "Nur, wenn es nicht anders geht. Ich kaufe mir lieber die CD oder frage Freunde danach.",
    value: "A",
  },
  {
    text: "Klar, das ist doch bequemer!",
    value: "D",
  },
  {
    text: "Nein. Ich frage Freunde oder kaufe die CD.",
    value: "C",
  },
  {
    text: "Klar! Es sei denn, es ist meine Lieblings-Band, dann muss ich die CD haben!",
    value: "B",
  },
];
const answersQuestionEight = [
  { text: "Geht so. Es gibt ein, zwei Dinge, die mir liegen.", value: "B" },
  {
    text: "Ja. Es fällt mir leicht, Dinge zu lernen (bin ein kleiner Perfektionist)",
    value: "C",
  },
  {
    text: "Für feine Arbeiten bin ich nicht zu haben. Gröberes liegt mir mehr.",
    value: "D",
  },
  { text: "Ja, es geht schon. Ich bin aber nicht perfekt.", value: "A" },
];
const answersQuestionNine = [
  { text: "Das ist gar kein Problem!", value: "C" },
  {
    text: "Klar, zwei bis drei Dinge schaffe ich schon!",
    value: "A",
  },
  {
    text: "Das geht schon, wenn ich wirklich will.",
    value: "B",
  },
  {
    text: "Fällt mir schwer. Ich konzentriere mich lieber auf eine Sache.",
    value: "D",
  },
];
const answersQuestionTen = [
  { text: "Walk the Line", value: "C" },
  {
    text: "Date Movie",
    value: "B",
  },
  {
    text: "Crank",
    value: "D",
  },
  { text: "Das Haus am See", value: "A" },
];
const answersQuestionEleven = [
  { text: "Ich bin untrennbar mit ihr verbunden!", value: "D" },
  {
    text: "Sie ist mein liebstes Hobby!",
    value: "B",
  },
  {
    text: "Sie ist ein sehr wichtiger Teil meines Lebens!",
    value: "A",
  },
  { text: "Mit ihr drücke ich meine Gefühle aus!", value: "C" },
];
const answersQuestionTwelve = [
  { text: "Kann ich mir gut vorstellen!", value: "D" },
  {
    text: "Ja, vielleicht...",
    value: "C",
  },
  {
    text: "Klar, ich würde gern eine Band gründen!",
    value: "B",
  },
  {
    text: "Eher weniger - Musik ist für mich der Rückzug vom Alltag.",
    value: "A",
  },
];
function test() {
  const [question, setQuestion] = useState(1);
  const [allAnswers, setAllAnswers] = useState([]);
  const [selectedAnswerQuestionOne, setSelectedAnswerQuestionOne] =
    useState(null);
  const [selectedAnswerQuestionTwo, setSelectedAnswerQuestionTwo] =
    useState(null);
  const [selectedAnswerQuestionThree, setSelectedAnswerQuestionThree] =
    useState(null);
  const [selectedAnswerQuestionFour, setSelectedAnswerQuestionFour] =
    useState(null);
  const [selectedAnswerQuestionFive, setSelectedAnswerQuestionFive] =
    useState(null);
  const [selectedAnswerQuestionSix, setSelectedAnswerQuestionSix] =
    useState(null);
  const [selectedAnswerQuestionSeven, setSelectedAnswerQuestionSeven] =
    useState(null);
  const [selectedAnswerQuestionEight, setSelectedAnswerQuestionEight] =
    useState(null);
  const [selectedAnswerQuestionNine, setSelectedAnswerQuestionNine] =
    useState(null);
  const [selectedAnswerQuestionTen, setSelectedAnswerQuestionTen] =
    useState(null);
  const [selectedAnswerQuestionEleven, setSelectedAnswerQuestionEleven] =
    useState(null);
  const [selectedAnswerQuestionTwelve, setSelectedAnswerQuestionTwelve] =
    useState(null);
  useEffect(() => {
    setAllAnswers([
      selectedAnswerQuestionOne,
      selectedAnswerQuestionTwo,
      selectedAnswerQuestionThree,
      selectedAnswerQuestionFour,
      selectedAnswerQuestionFive,
      selectedAnswerQuestionSix,
      selectedAnswerQuestionSeven,
      selectedAnswerQuestionEight,
      selectedAnswerQuestionNine,
      selectedAnswerQuestionTen,
      selectedAnswerQuestionEleven,
      selectedAnswerQuestionTwelve,
    ]);
  }, [
    selectedAnswerQuestionOne,
    selectedAnswerQuestionTwo,
    selectedAnswerQuestionThree,
    selectedAnswerQuestionFour,
    selectedAnswerQuestionFive,
    selectedAnswerQuestionSix,
    selectedAnswerQuestionSeven,
    selectedAnswerQuestionEight,
    selectedAnswerQuestionNine,
    selectedAnswerQuestionTen,
    selectedAnswerQuestionEleven,
    selectedAnswerQuestionTwelve,
  ]);
  return (
    <div className="mx-10 flex flex-col">
      <Header />
      <h2 className="text-white text-2xl text-center mb-8">
        <p>Welches Instrument passt zu dir? </p>
        <p>Teste dich jetzt!</p>
      </h2>
      <div className="flex flex-col">
        {question === 1 ? (
          <Question
            question="Welches dieser Instrumente hörst du am liebsten? (Du musst es nicht spielen wollen)"
            answers={answersQuestionOne}
            setSelectedValue={setSelectedAnswerQuestionOne}
          />
        ) : null}
        {question === 2 ? (
          <Question
            question="Welche Musik hörst du allgemein gerne?"
            answers={answersQuestionTwo}
            setSelectedValue={setSelectedAnswerQuestionTwo}
          />
        ) : null}
        {question === 3 ? (
          <Question
            question="Was würdest du am Samstagabend am liebsten tun?"
            answers={answersQuestionThree}
            setSelectedValue={setSelectedAnswerQuestionThree}
          />
        ) : null}
        {question === 4 ? (
          <Question
            question="Magst du sportliche Herausforderungen?"
            answers={answersQuestionFour}
            setSelectedValue={setSelectedAnswerQuestionFour}
          />
        ) : null}
        {question === 5 ? (
          <Question
            question="Welche dieser Eigenschaften treffen am ehesten auf dich zu?"
            answers={answersQuestionFive}
            setSelectedValue={setSelectedAnswerQuestionFive}
          />
        ) : null}
        {question === 6 ? (
          <Question
            question="Kannst du in einem Wartezimmer beim Arzt lange still sitzen?"
            answers={answersQuestionSix}
            setSelectedValue={setSelectedAnswerQuestionSix}
          />
        ) : null}
        {question === 7 ? (
          <Question
            question="Du willst unbedingt einen Song haben. Würdest du ihn auch übers Internet illegal runterladen?"
            answers={answersQuestionSeven}
            setSelectedValue={setSelectedAnswerQuestionSeven}
          />
        ) : null}
        {question === 8 ? (
          <Question
            question="Würdest du dich als geschickt bezeichnen?"
            answers={answersQuestionEight}
            setSelectedValue={setSelectedAnswerQuestionEight}
          />
        ) : null}
        {question === 9 ? (
          <Question
            question="Kannst du leicht mehrere Dinge gleichzeitig machen?"
            answers={answersQuestionNine}
            setSelectedValue={setSelectedAnswerQuestionNine}
          />
        ) : null}
        {question === 10 ? (
          <Question
            question="Welchen dieser Filme würdest du dir aus der Videothek ausleihen?"
            answers={answersQuestionTen}
            setSelectedValue={setSelectedAnswerQuestionTen}
          />
        ) : null}
        {question === 11 ? (
          <Question
            question="Was bedeutet Musik für dich?"
            answers={answersQuestionEleven}
            setSelectedValue={setSelectedAnswerQuestionEleven}
          />
        ) : null}
        {question === 12 ? (
          <Question
            question="Könntest du dir vorstellen, später einmal Musiker zu werden?"
            answers={answersQuestionTwelve}
            setSelectedValue={setSelectedAnswerQuestionTwelve}
          />
        ) : null}
      </div>
      <div className="flex flex-row self-center w-96 mt-4">
        {allAnswers[question - 1] && question < 13 ? (
          <CustomButton
            buttonText="Weiter"
            buttonFunction={(e) => setQuestion((prev) => prev + 1)}
          />
        ) : null}
      </div>
      {question === 13 ? <TestResult selectedAnswers={allAnswers} /> : null}
    </div>
  );
}

export default test;
