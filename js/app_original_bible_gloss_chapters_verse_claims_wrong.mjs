import { arguments_assert } from "./arguments_assert.mjs";
import { app_original_bible_gloss_chapters_claims_generic } from "./app_original_bible_gloss_chapters_claims_generic.mjs";
import { gloss_passages_verse_claims_wrong_quoted } from "./gloss_passages_verse_claims_wrong_quoted.mjs";
export async function app_original_bible_gloss_chapters_verse_claims_wrong() {
  "Every authored chapter of the original-language store holding a word explanation that names a verse carrying no word from the same dictionary entry.";
  "This is the reading that settles a claim outright. A sentence naming a verse can be checked against that verse, so what comes back here is worth opening rather than merely worth counting.";
  "The words are met by their dictionary entry and not by their spelling, which is what Hebrew and Greek need, since those languages change a word's ending with almost every use. That is settled next door, where the dictionary is opened; this reading only asks the question.";
  "A claim that comes back here is a report and not a verdict, and the largest reason by far is that an explanation names a verse for what happens there rather than for where the word stands. Read the hundred and fifty-two rows of 2026-09-25 one by one, and two were wrong claims. The rest were true sentences of another kind - this verse is where the brothers spoke, this one is the same root rather than the same word, this one says the word was absent there - and a machine cannot tell those from a mistake. The wording that made the row travels with it so a reader can.";
  "★ ONLY A SENTENCE THAT QUOTES THE WORD IT IS CLAIMING ABOUT IS ASKED HERE, WHICH IS THIS STORE'S ANSWER AND NOT THE OTHER STORES'. The prose here is an essay about a whole verse and it names neighbouring verses constantly for literary reasons - look back at verse thirteen, the same root as verse twenty-eight, this word was not in verse one. None of those says where a word stands, and none of them quotes anything, so the shared reading falls back to the word the entry happens to explain and accuses a sentence that said something else. Measured 2026-09-28: Deuteronomy and Joshua added two hundred and twenty-nine rows, two hundred and twenty-seven of them quoting nothing, and reading every one by hand found not a single fault.";
  "That filter is refused to the Urdu store for the same measurement read the other way, so it is chosen here rather than shared: there, seventy-one of seventy-three wrong rows also quoted nothing, and all three hand-confirmed faults were among them. What differs is what the writers do, and a reading that ignores that reports on itself.";
  "A FIX THAT READS THE SENTENCE BETTER CAN PUT A ROW IN RATHER THAN TAKE ONE OUT, and that is not a step backwards. She drinks here in verse twenty four, and then in verse twenty six was read as naming verses twenty, four and six while the dash was missing from the reading; three rows, none of them a claim anybody made. Reading it properly left one row, on verse twenty-six, which is a real claim about what happens there. Three wrong rows became one right one.";
  arguments_assert(arguments, 0);
  let r = await app_original_bible_gloss_chapters_claims_generic(
    gloss_passages_verse_claims_wrong_quoted,
  );
  return r;
}
