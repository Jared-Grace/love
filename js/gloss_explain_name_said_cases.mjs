import { arguments_assert } from "./arguments_assert.mjs";
export function gloss_explain_name_said_cases() {
  "Explanations taken as they stand out of the Cebuano corpus, each with the word it explains and whether it says that word is somebody's or somewhere's name.";
  "The one that matters most is ginganlan. Its explanation opens 'Ngalan is a name', which is a true sentence about a different word, and ginganlan is an ordinary Cebuano word that belongs in the queue. Reading that as a declaration would quietly take it out.";
  "Two of these are wanted false for the opposite reason - the explanation is about a name and never uses the word. Efeso is Ephesus, a large port city says everything a reader needs and says none of it in the phrasing this reads, so it stands here as the blind spot rather than as a case to widen the reading for.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      word: "Moises",
      explain: "‘Moises’ is the name of the man who led Israel out of Egypt.",
      said: true,
    },
    {
      word: "ginganlan",
      explain:
        "‘Ngalan’ is a name. ‘Gi-’ tells the naming as done and points it at the one named.",
      said: false,
    },
    {
      word: "Solomon",
      explain:
        "Solomon is a proper noun, the name of the king. It is a direct borrowing from the English or biblical name.",
      said: true,
    },
    {
      word: "Canaan",
      explain: "A proper noun, the name of a place. No further breakdown.",
      said: true,
    },
    {
      word: "Efeso",
      explain:
        "‘Efeso’ is Ephesus, a large port city on the coast of Asia Minor, where Paul was when he wrote this letter.",
      said: false,
    },
    {
      word: "Cefas",
      explain:
        "‘Cefas’ is the name Jesus gave Simon — Cephas, the rock, in the language he spoke, which comes into Greek as Peter.",
      said: true,
    },
    {
      word: "Itiel",
      explain:
        "‘Itiel’ is a proper noun, a personal name. It refers to the person Ithiel.",
      said: true,
    },
    {
      word: "panulundon",
      explain:
        "‘Panulundon’ is a noun meaning ‘inheritance’ or ‘heritage.’ The root is ‘tulundon’ (inherit), with the prefix ‘pa-’.",
      said: false,
    },
  ];
  return cases;
}
