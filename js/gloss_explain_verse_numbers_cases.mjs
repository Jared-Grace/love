import { arguments_assert } from "./arguments_assert.mjs";
export function gloss_explain_verse_numbers_cases() {
  "One word explanation, the verse numbers the chapter it sits in actually has, and which of those the sentence names - written in both the languages the stores are authored in.";
  "★ THE WHOLE POINT OF THIS CORPUS IS THAT A READING WHICH FINDS NOTHING SAYS NOTHING. Every case here is checked by what comes back, and the answer for a sentence naming no verse is the same empty answer a reading blind to the language gives for every sentence in the store. So an English-only reading passed this corpus for years by never being shown an Urdu sentence, and a reading that steps one word at a time passed it by never being shown a verse past ninety-nine. Both of those were real and both are written down here now.";
  "The chapter's verses are spelled out on each case rather than a chapter being named. What decides the answer is which verses the chapter has - the same words name one verse in a chapter of a hundred and two and two verses in a chapter of a hundred - so the thing that decides has to stand where a reader can see it.";
  "What is expected is written as one line with commas rather than as a list, so a case that fails says what it got and what it wanted in words rather than in two shapes to be lined up by eye.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      explain: "it stands again in verse fifteen",
      verses: ["14", "15"],
      names: "15",
      why: "the plain case: one word for the verse, one word for the number",
    },
    {
      explain: "as in verses thirteen, sixteen, nineteen and twenty",
      verses: ["13", "16", "19", "20"],
      names: "13,16,19,20",
      why: "a list carries on past its joining word rather than stopping at it",
    },
    {
      explain: "verse ninety-nine says it too",
      verses: ["98", "99"],
      names: "99",
      why: "the last verse English writes in a single word, and the dash inside it has to survive the cutting",
    },
    {
      explain: "in verse in a manner of speaking",
      verses: ["1"],
      names: "",
      why: "the word for verse with no number after it names nothing",
    },
    {
      explain: "the chapter has no such verse fifty",
      verses: ["1", "2"],
      names: "",
      why: "a verse the chapter does not have is never named, which is what writing the numbers forward buys",
    },
    {
      explain: "there were four of them",
      verses: ["4"],
      names: "",
      why: "prose is full of small numbers that are not verses, so a number counts only where it follows the word",
    },
    {
      explain: "it comes back in verse one hundred seven",
      verses: ["1", "107"],
      names: "107",
      why: "★ the whole class that was silent - English writes this verse in three words and the reading looked at one at a time",
    },
    {
      explain: "see verses one hundred five and one hundred seven",
      verses: ["105", "107"],
      names: "105,107",
      why: "two long ones either side of the joining word",
    },
    {
      explain: "verse one hundred seventy-six closes it",
      verses: ["176"],
      names: "176",
      why: "the last verse of Psalm one hundred and nineteen, which is the only chapter in the Bible with that many",
    },
    {
      explain: "verse one hundred two",
      verses: ["2", "100", "102"],
      names: "102",
      why: "the longest writing that fits is the one taken, and this chapter has all three of the verses those words could mean",
    },
    {
      explain: "verses one hundred two",
      verses: ["2", "100"],
      names: "100,2",
      why: "the same words in a chapter without a hundred and second verse name two verses instead of one",
    },
    {
      explain: "verse one hundred seven and one",
      verses: ["1", "107"],
      names: "107,1",
      why: "a word already swallowed by a number is not read again as the start of a fresh one",
    },
    {
      explain: "the word stands in verse one",
      verses: ["1", "107"],
      names: "1",
      why: "a run asking for more words than the sentence has left is not a run",
    },
    {
      explain: "it is in verse one hundred",
      verses: ["107"],
      names: "",
      why: "neither the long writing nor the short one is a verse of this chapter",
    },
    {
      explain: "یہ لفظ آیت ۲۱ میں بھی ہے",
      verses: ["20", "21"],
      names: "21",
      why: "★ Urdu says this and never verse twenty-one, and the two share not one character - the reading found nothing here and called the store clean",
    },
    {
      explain: "آیت ۱۳ اَور ۱۶ اَور ۱۹ میں",
      verses: ["13", "16", "19"],
      names: "13,16,19",
      why: "the joining word is spelled with the mark above it, as this store spells it",
    },
    {
      explain: "آیت ۱۰۷ میں",
      verses: ["107"],
      names: "107",
      why: "Urdu writes a hundred and seven in one word, so the length that blinded the English reading never touched this one",
    },
    {
      explain: "آیت میں کچھ نہیں",
      verses: ["1"],
      names: "",
      why: "the word for verse with no number after it, in the other language",
    },
    {
      explain: "۲۱ یہاں آیت کے بغیر",
      verses: ["21"],
      names: "",
      why: "a number standing before the word rather than after it names nothing",
    },
  ];
  return cases;
}
