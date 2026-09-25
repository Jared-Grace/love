import { arguments_assert } from "./arguments_assert.mjs";
export function gloss_explain_verse_numbers_cases() {
  "One word explanation, the verse numbers the chapter it sits in actually has, and which of those the sentence names - written in both the languages the stores are authored in.";
  "★ THE WHOLE POINT OF THIS CORPUS IS THAT A READING WHICH FINDS NOTHING SAYS NOTHING. Every case here is checked by what comes back, and the answer for a sentence naming no verse is the same empty answer a reading blind to the language gives for every sentence in the store. So an English-only reading passed this corpus for years by never being shown an Urdu sentence, and a reading that steps one word at a time passed it by never being shown a verse past ninety-nine. Both of those were real and both are written down here now.";
  "★ THE OTHER HALF OF THE SAME BLINDNESS IS A READING THAT FINDS SOMETHING NOBODY SAID. A sentence that ended at a full stop and began again with a number was read as one sentence naming a verse, and a case list holding no punctuation at all could never have caught it. Measured on 2026-09-25 that was most of what the original-language store was being accused of, so the marks are now written into the cases as carefully as the words are.";
  "★ THE WORD FOR AND IS THE OTHER WAY A SENTENCE IS MADE TO SAY SOMETHING IT DID NOT. It carries a list on past itself, so verses thirteen and sixteen names two; but before the first number there is no list, and it is said twice in this one verse and three more times names none. Every case here that turns on the joining word says on which side of it the number stood, because that is the only thing separating the two.";
  "★ THE THIRD WAY IS A SENTENCE TALKING ABOUT THE VERSE IT IS ALREADY IN RATHER THAN NAMING ANOTHER, AND WHAT TELLS THEM APART STANDS IN FRONT OF THE WORD FOR VERSE. The verse three times and in verse three are the same two words with one word put on the front, and only that front word says which was meant. The cases here come in pairs on purpose - a shutting word and a naming word with the same number behind the marker - because a reading that only ever saw one of the pair would look right either way. The two pairs deliberately left unread are written down here too: that verse one told us is a real claim wearing a pointing word, and both verses eight and eleven is a real claim wearing a count word. Both are read as claims, and these cases are what keeps either word from quietly being added to the shutting list.";
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
      explain: "the same word runs through the verse three times",
      verses: ["3"],
      names: "",
      why: "★ the definite article in front of the marker - the sentence is counting how often, inside the verse being explained",
    },
    {
      explain: "the word runs through verse three and comes back",
      verses: ["3"],
      names: "3",
      why: "the other half of that pair: the same number behind the marker, a word of place in front of it instead of the article",
    },
    {
      explain: "that softer one has already been in this verse three times",
      verses: ["3"],
      names: "",
      why: "the pointing word does the same work as the article, and this was one of the rows the store stood accused of",
    },
    {
      explain: "it opened the verse two sentences ago too",
      verses: ["2"],
      names: "",
      why: "the article reaches this one before the word of distance can, because the distance word is two words behind the number rather than one",
    },
    {
      explain: "the land that verse one told us the famine lay heavy on",
      verses: ["1"],
      names: "1",
      why: "★ the pointing word that is NOT shut - all five of these in the store were real claims, and this case is what keeps it off the list",
    },
    {
      explain: "within a few verses two hands will take hold of this man",
      verses: ["2", "5"],
      names: "",
      why: "★ a word of count in front of the word for verse - the sentence is counting verses and then starting a fresh phrase",
    },
    {
      explain: "in verses six the word stands again",
      verses: ["5", "6"],
      names: "6",
      why: "the other half of that pair: the same words behind the marker, a word of place in front of it instead of a count",
    },
    {
      explain: "these two verses one after the other say it",
      verses: ["1", "2"],
      names: "1",
      why: "★ a stated count left unread on purpose - the two verses three and four is sayable, so shutting on it would drop real claims in silence",
    },
    {
      explain:
        "the opposite of the making-holy word of both verses eight and eleven",
      verses: ["8", "11"],
      names: "8,11",
      why: "the claim that forbids listing both - a real reference this store makes, standing in exactly the place a count word would stand",
    },
    {
      explain: "that verb is the one that ended the tenth verse two lines back",
      verses: ["2", "10"],
      names: "2",
      why: "★ the shape left uncovered - the article is there but an ordinal stands between it and the marker, and only one word back is looked at",
    },
    {
      explain: "کچھ آیتوں ۲ کے بعد",
      verses: ["2"],
      names: "2",
      why: "the other language shuts on nothing, so a sentence shaped like a count is still read as a naming there",
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
      explain: "quoting verse two back at him, word for word",
      verses: ["2", "9"],
      names: "",
      why: "★ a number saying how far back is not a number saying which, and here nothing shuts the marker so the distance word is what decides",
    },
    {
      explain:
        "it stood twice in the verse two back, once elided and once whole",
      verses: ["2", "9"],
      names: "",
      why: "the wording the store actually uses, where the article and the word of distance both say nothing was named",
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
