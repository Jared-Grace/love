import { arguments_assert } from "./arguments_assert.mjs";
import { song_god_our_savior_references } from "./song_god_our_savior_references.mjs";
import { song_wordings_echoed } from "./song_wordings_echoed.mjs";
import { song_god_our_savior_reference_lines } from "./song_god_our_savior_reference_lines.mjs";
export async function song_god_our_savior_wordings_echoed() {
  arguments_assert(arguments, 0);
  ("Every passage this song rests on, each against the wordings really on offer for it, and each wording against how much of the sung lines resting there it says the same way - loudest first.");
  ("THIS IS THE READING THAT CHOSE WHICH TRANSLATION EACH PASSAGE IS QUOTED FROM, AND FOR A WHILE IT WAS NOT WRITTEN DOWN ANYWHERE. Twenty five of the hundred and one passages are quoted from something other than the translation the page otherwise uses, and those twenty five draw on seven translations between them - sixteen from the King James, three from the Byzantine American Standard, two from the American Standard, and one each from Darby, the Literal Standard, the Free Bible and the unfoldingWord Literal. Twenty five is a count of passages and not of translations; the reading that chose them weighed twenty two, which is every English translation these two shelves carry that may lawfully be shipped. The passages and the wordings were gathered next door and committed; the counting that ranked them lived in a throwaway script, so the page recorded a hundred and one decisions the repo could not reproduce. Somebody asking later why Malachi three seventeen is quoted from the King James had the answer and no way to check it.");
  ("THE COUNTING ITSELF IS NO LONGER HERE AND THAT IS ON PURPOSE. Every line of it was general - it sees words and not editions, and nothing in it knew which song it was reading - but it was written inside this one song, so the hymn beside it could only have copied the whole reading to get the same answer. It stands next door now taking a song's passages and a way of asking which lines rest where, and what is left here is this song's two answers to those and its own record of what was chosen.");
  ("SORTING BY THE PLAIN RUN AFTER THE FOLDED ONE WAS TRIED AND IS WRONG, AND THE PASSAGE THAT SHOWED IT IS REVELATION ONE FIVE. Ranked by the plain reading as the tie-break, the Bible in Basic English and Young's Literal stood above the King James there - which is the translation actually quoted, and the one the line was written from. The reason turned out to be a fault in the folding rather than in the record: stripping ed took the e with it, so loved folded to lov while love stayed love, and the two words the ear hears as one were filed to two different shapes. Taking a final e off both sides closed that, and the King James now stands alone at the top of that passage on the folded reading. The lesson is the one worth keeping: where a count disagrees with a reading somebody made by ear, suspect the count first.");
  let references = song_god_our_savior_references();
  let echoed = await song_wordings_echoed(
    references,
    song_god_our_savior_reference_lines,
  );
  return echoed;
}
