import { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/router";

const typeA =
  "Profil A. Deinem Bewegungsdrang kommt ein Schlagzeug am besten entgegen. Du hast den Rhythmus im Blut und brauchst nur ein Ventil für deine Energie und deine Gefühle. Du musst allerdings mit ganzem Herzen bei der Sache sein, denn Schlagzeug ist nicht so leicht, wie es aussieht!";
const typeB =
  "Profil B. Da du ein sehr gefühlsbetonter Mensch bist, rate ich dir die Geige oder das Cello. Diese Instrumente kann man nämlich nur mit Gefühl spielen! Außerdem stellen sie eine Herausforderung dar, die es zu meistern gilt: Diese Instrumente zu lernen ist nämlich nicht einfach!";
const typeC =
  "Profil C. Ganz klar: Die Gitarre wäre das ideale Instrument für dich! Mit ihr kannst du moderne und rockige Musik spielen, die du auch gerne selbst hörst. Allzu schwierig ist sie auch nicht zu spielen. In einer Band würdest du dich sicher wohl fühlen!";
const typeD =
  "Profil D. Das Klavier ist das beste Instrument für dich! Damit kannst du deine vielen Gefühle ausdrücken, weil es so vielseitig ist: Mal laut und wütend, dann wieder leise und nachdenklich. Außerdem ist es in der Anfangsphase leicht zu lernen und stillt später deinen Hunger nach Herausforderungen!";
function TestResult({ selectedAnswers }) {
  const router = useRouter();
  const [finalType, setFinalType] = useState({ type: null, perc: null });
  useEffect(() => {
    var A = 0;
    var B = 0;
    var C = 0;
    var D = 0;
    selectedAnswers.map((answer) => {
      switch (answer) {
        case "A":
          A = A + 1;
          break;
        case "B":
          B = B + 1;
          break;
        case "C":
          C = C + 1;
          break;
        case "D":
          D = D + 1;
          break;
      }
    });
    if (A >= B && A >= C && A >= D) {
      return setFinalType({ type: "A", perc: Math.round((A / 12) * 100) });
    } else if (B >= A && B >= C && B >= D) {
      return setFinalType({ type: "B", perc: Math.round((B / 12) * 100) });
    } else if (C >= A && C >= B && C >= D) {
      return setFinalType({ type: "C", perc: Math.round((C / 12) * 100) });
    } else if (D >= A && D >= C && D >= B) {
      return setFinalType({ type: "D", perc: Math.round((D / 12) * 100) });
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="border-4 self-center rounded-3xl border-white  mt-10 lg:w-2/3 xl:w-1/3 ">
        <h2 className="m-5 text-3xl text-white">
          zu {finalType.perc}% bist du:
        </h2>
        <p className="mx-5 mb-5 text-white text-lg text-center">
          {finalType.type === "A" ? typeA : null}
          {finalType.type === "B" ? typeB : null}
          {finalType.type === "C" ? typeC : null}
          {finalType.type === "D" ? typeD : null}
        </p>
      </div>
      <div className="w-96 self-center mt-4">
        <CustomButton
          buttonText="Jetzt dein Instrument finden!"
          buttonFunction={(e) => {
            router.push("/");
            return;
          }}
        />
      </div>
    </div>
  );
}

export default TestResult;
