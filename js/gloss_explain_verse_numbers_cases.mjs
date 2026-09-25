import { arguments_assert } from "./arguments_assert.mjs";
export function gloss_explain_verse_numbers_cases() {
  "One word explanation, the verse numbers the chapter it sits in actually has, and which of those the sentence names - written in both the languages the stores are authored in.";
  "★ THE WHOLE POINT OF THIS CORPUS IS THAT A READING WHICH FINDS NOTHING SAYS NOTHING. Every case here is checked by what comes back, and the answer for a sentence naming no verse is the same empty answer a reading blind to the language gives for every sentence in the store. So an English-only reading passed this corpus for years by never being shown an Urdu sentence, and a reading that steps one word at a time passed it by never being shown a verse past ninety-nine. Both of those were real and both are written down here now.";
  "★ THE OTHER HALF OF THE SAME BLINDNESS IS A READING THAT FINDS SOMETHING NOBODY SAID. A sentence that ended at a full stop and began again with a number was read as one sentence naming a verse, and a case list holding no punctuation at all could never have caught it. Measured on 2026-09-25 that was most of what the original-language store was being accused of, so the marks are now written into the cases as carefully as the words are.";
  "★ THE WORD FOR AND IS THE OTHER WAY A SENTENCE IS MADE TO SAY SOMETHING IT DID NOT. It carries a list on past itself, so verses thirteen and sixteen names two; but before the first number there is no list, and it is said twice in this one verse and three more times names none. Every case here that turns on the joining word says on which side of it the number stood, because that is the only thing separating the two.";
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
      explain:
        "it is the only one in the whole verse. two doing words are tied by it",
      verses: ["1", "2"],
      names: "",
      why: "★ the sentence ended and another began - this one wording, met three hundred times over, was most of what one store was accused of",
    },
    {
      explain: "two verses, two pairs of describing words",
      verses: ["2"],
      names: "",
      why: "a comma straight after the word for verse is a sentence carrying on, not a list beginning",
    },
    {
      explain: "in verse three, and then again",
      verses: ["3"],
      names: "3",
      why: "the same comma once a verse has been named is a list, and the difference is only which side of it the number stands",
    },
    {
      explain:
        "it is said twice in this one verse and three more times before the sun is up",
      verses: ["1", "3"],
      names: "",
      why: "★ the joining word straight after the word for verse - it joins one thing to another and there is no first thing yet for it to join",
    },
    {
      explain: "there are two reasons, one in this verse and one in the next",
      verses: ["1", "2"],
      names: "",
      why: "the same fault worded the other way round, and the shape three real explanations took",
    },
    {
      explain: "آیت اَور ۱۳ میں",
      verses: ["13"],
      names: "",
      why: "the joining word before any number names nothing in the other language either",
    },
    {
      explain: "the word in verse three; verse four has it too",
      verses: ["3", "4"],
      names: "3,4",
      why: "every mark but a comma ends the run, and the word for verse then opens a fresh one",
    },
    {
      explain: "verse three - four men stood there",
      verses: ["3", "4"],
      names: "3",
      why: "a dash standing on its own between two words ends the run, though a dash inside a word does not",
    },
    {
      explain:
        "it stood twice in the verse two back, once elided and once whole",
      verses: ["2", "9"],
      names: "",
      why: "★ a number saying how far back is not a number saying which - the same five words in the same order as a sentence that names verse two",
    },
    {
      explain: "the same two words opened the verse three ago",
      verses: ["3"],
      names: "",
      why: "the other word English uses for counting backwards from here",
    },
    {
      explain: "it stands again in verse two, back where the list began",
      verses: ["2"],
      names: "2",
      why: "the word of distance has to answer the number directly - a mark between them means it is answering something else",
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
      explain: "آیت ۱۳، ۱۶ میں",
      verses: ["13", "16"],
      names: "13,16",
      why: "Arabic script writes its comma the other way up, and a list written with it has to carry on exactly as the English one does",
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
