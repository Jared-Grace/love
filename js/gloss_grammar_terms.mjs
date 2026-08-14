export function gloss_grammar_terms() {
  "Every grammatical word an explanation is allowed to use of the word it is explaining, each one paired with the word the interlinear's own spelled-out parsing has to carry for the claim to hold.";
  "The rubric lets an author leave a part of the parsing out and never lets one be stated that the parsing does not make. That is the only claim in a word explanation a machine can settle on its own, because the parsing was handed to the author rather than worked out by them - so a term used here against a parsing that does not carry it is either the wrong word or a word about some other word, and both are worth a look.";
  "The two sides are written out as pairs rather than read off the parsing's own wording, because they are deliberately not the same language. The table is written in grammarians' shortened English and an explanation is written for a reader who has never met the word 'case'. This is the only place the two are laid against each other.";
  "Left off on purpose: present, active, indicative, singular, plural, middle and passive. Every one of them is also an ordinary English word these explanations use of something that is not a form - a word can be present in a clause, a phrase can stand in the middle of a sentence - so asking about them would name sentences that are perfectly right. The two voices are the real loss. What is owed a form the table itself refuses to decide between is a different question from this one and wants a check of its own.";
  let terms = [
    { term: "aorist", parsing: "Aorist" },
    { term: "imperfect", parsing: "Imperfect" },
    { term: "pluperfect", parsing: "Pluperfect" },
    { term: "perfect", parsing: "Perfect" },
    { term: "future", parsing: "Future" },
    { term: "participle", parsing: "Participle" },
    { term: "imperative", parsing: "Imperative" },
    { term: "subjunctive", parsing: "Subjunctive" },
    { term: "infinitive", parsing: "Infinitive" },
    { term: "optative", parsing: "Optative" },
    { term: "nominative", parsing: "Nominative" },
    { term: "genitive", parsing: "Genitive" },
    { term: "dative", parsing: "Dative" },
    { term: "accusative", parsing: "Accusative" },
    { term: "vocative", parsing: "Vocative" },
  ];
  return terms;
}
