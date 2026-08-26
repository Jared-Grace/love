import { arguments_assert } from "./arguments_assert.mjs";
export function bible_glyph_negation_doubled_cases() {
  "Which picture Bible verses negate the same thing twice and which only look as though they might, written down as the words a person types.";
  "THE FIRST THREE ARE REAL LINES THAT SHIPPED. Two are the John ten verses that put two prohibition marks side by side, and one is the thirteenth of Ezekiel thirty three, which said that none of a man's righteous works will not be remembered. All three parsed, drew, and passed every gate this Bible had at the time; a reader found them. Keeping the exact words here is what turns the reader next door from a claim about what it would have caught into a thing that is checked on every run.";
  "THE REST ARE THE SHAPES A LAZIER READER WOULD REPORT WRONGLY, and they carry as much weight as the faults. Two negations in one verse is ordinary here - whoever does not love Me does not keep My word has two and is perfectly written - so a corpus of faults alone would pass a reader that answered a fault every time it saw two marks. The clause boundary in that line has no punctuation at all, which is the whole reason the reader refuses to guess at clause boundaries.";
  "AND ONE CASE IS A VERSE AFTER ITS REPAIR. Ezekiel eighteen says the Ezekiel thirty three sentence again and says it correctly, which is how the fault was proved in the first place. It is here so that the fix cannot be undone without the corpus noticing.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      words: ["they", "will", "$no_entry", "$no_entry", "perish"],
      reason: "adjacent",
      why: "the twenty eighth of John ten as it shipped: Greek says never with two negatives, drawn mark for word they cancel, and the strongest assurance verse in the chapter read as its own inverse",
    },
    {
      words: [
        "But",
        "a",
        "stranger",
        "they",
        "will",
        "$no_entry",
        "$no_entry",
        "$walking+walking;",
      ],
      reason: "adjacent",
      why: "the fifth verse of the same chapter, doubled the same way on the same day - the pair is why this is a shape and not one slip",
    },
    {
      words: [
        "then",
        "none",
        "of",
        "his",
        "righteous",
        "works",
        "will",
        "$no_entry",
        "be",
        "remembered;",
      ],
      reason: "quantifier",
      why: "the thirteenth of Ezekiel thirty three as it shipped: the quantifier had already negated the works, so the mark negated them a second time and the verse promised the opposite of what Ezekiel says",
    },
    {
      words: [
        "None",
        "of",
        "the",
        "transgressions",
        "he",
        "has",
        "$hammer",
        "will",
        "be",
        "held",
        "against",
        "him.",
      ],
      reason: "",
      why: "the twenty second of Ezekiel eighteen, which is the same sentence drawn correctly and is what proved the other one wrong - a twin passage is the cheapest check this Bible has, and this case is what stops the repair being undone",
    },
    {
      words: [
        "Whoever",
        "does",
        "$no_entry",
        "$heart_red",
        "Me",
        "does",
        "$no_entry",
        "keep",
        "My",
        "$speech.",
      ],
      reason: "",
      why: "two marks two words apart, both correct, with no punctuation between the clauses - the case that refuses any rule built on how far apart the two negations sit",
    },
    {
      words: [
        "you",
        "must",
        "$no_entry",
        "$hammer",
        "any",
        "$tools",
        "-",
        "neither",
        "you,",
        "nor",
        "your",
        "$son",
      ],
      reason: "",
      why: "a quantifier after the mark rather than before it, which is a list of who the one prohibition covers and never a second prohibition - order is part of the shape",
    },
    {
      words: [
        "He",
        "has",
        "nothing",
        "to",
        "hide.",
        "He",
        "does",
        "$no_entry",
        "fear.",
      ],
      reason: "",
      why: "a quantifier and a mark in two different sentences, which is what the full stop is read for - without that the reader would carry a quantifier to the end of a verse and report every mark after it",
    },
    {
      words: ["I", "will", "$no_entry", "perish", "for", "$hourglass"],
      reason: "",
      why: "one mark and nothing else, the ordinary case, which a reader that answered a fault whenever it saw the mark at all would fail",
    },
  ];
  return cases;
}
