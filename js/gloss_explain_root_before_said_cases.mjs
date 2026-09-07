export function gloss_explain_root_before_said_cases() {
  "Explanation sentences set beside the quoted word standing in front of the words is the root in each, and why that sentence is one worth pinning.";
  "★ THE TWO SHAPES DIFFER BY WORD ORDER ALONE AND MEAN OPPOSITE THINGS. It is built from the root ‘tunay’ puts the root behind the phrase; ‘awit’ is the root ‘to sing’ puts it in front and puts the English meaning behind. Both are written with the words the root, both are ordinary English, and only the order says which quoted piece is the Cebuano word. A reading that answered the second shape as well as the first would take an English gloss for a root, which is exactly what the readers beside this one do.";
  "The refusals are the larger half on purpose. This shape has to answer nothing far more often than it answers something, because almost every explanation in the store writes the root the other way round, and a reading that fired on those would rewrite thirty six thousand correct sightings to catch three wrong ones.";
  let cases = [
    {
      explain:
        "‘Moawit’ is a verb meaning ‘will sing’. The prefix ‘mo-’ indicates future or intent, and ‘awit’ is the root ‘to sing’.",
      said: "awit",
      why: "the sighting that showed the shape exists - the reader hands back to sing and the root is the word in front",
    },
    {
      explain:
        "‘Naghatag’ is a verb meaning ‘gives’ or ‘is giving’. The prefix ‘nag-’ indicates present or continuous action, and ‘hatag’ is the root ‘to give’.",
      said: "hatag",
      why: "a second of the same shape, so one sentence is not the whole evidence that the order carries the meaning",
    },
    {
      explain:
        "‘Kanunay’ means always, constantly. It is built from the root ‘tunay’ with ‘ka-’ before it, the root’s ‘t’ becoming ‘n’.",
      said: null,
      why: "the ordinary shape, where the root follows the phrase and nothing is quoted in front of it - answering anything here would break the store's commonest sentence",
    },
    {
      explain:
        "‘Gugma’ means love. It comes from the root ‘gugma’, which stands on its own.",
      said: null,
      why: "the root behind the phrase again with a comma after it, since a reading keyed on what follows must not be fooled by punctuation into reading backwards",
    },
    {
      explain:
        "‘Pagtuo’ is a noun meaning faith. The root ‘tuo’ carries the sense of believing.",
      said: null,
      why: "the phrase opening the sentence with nothing at all in front of it, which has to answer nothing rather than reach back into the previous sentence",
    },
    {
      explain:
        "‘Mahigugmaon’ is loving. Here ‘higugma’ is the root ‘to love’, wearing ‘ma-’ and ‘-on’.",
      said: "higugma",
      why: "the shape standing mid sentence rather than at its end, because the words after the quoted meaning must not stop it being recognised",
    },
    {
      explain: "‘Kusgan’ is the root’s strong form, built on ‘kusog’.",
      said: null,
      why: "the mark closing a quotation and the mark making a possessive are one character, so a reading that only asked for the phrase would answer Kusgan here from a sentence that names no root at all - this line is why a quoted piece has to follow the phrase too",
    },
  ];
  return cases;
}
