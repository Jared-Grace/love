import { song_god_our_savior_wording_echo } from "./song_god_our_savior_wording_echo.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { song_god_our_savior_wordings } from "./song_god_our_savior_wordings.mjs";
import { property_get } from "./property_get.mjs";
import { song_god_our_savior_reference_lines } from "./song_god_our_savior_reference_lines.mjs";
import { list_map } from "./list_map.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
export async function song_god_our_savior_wordings_echoed() {
  arguments_assert(arguments, 0);
  ("Every passage this song rests on, each against the wordings really on offer for it, and each wording against how much of the sung lines resting there it says the same way - counted twice, once with the endings of words left on and once with them folded off, loudest first.");
  ("THIS IS THE READING THAT CHOSE THE TWENTY FIVE TRANSLATIONS THE PAGE QUOTES, AND UNTIL NOW IT WAS NOT WRITTEN DOWN ANYWHERE. The passages and the wordings were gathered next door and committed; the counting that ranked them lived in a throwaway script, so the page recorded a hundred and one decisions the repo could not reproduce. Somebody asking later why Malachi three seventeen is quoted from the King James had the answer and no way to check it.");
  ("BOTH READINGS ARE REPORTED AND NEITHER IS COLLAPSED INTO THE OTHER. Leaving the endings on asks whether the line and the verse use the same word; folding them off asks whether they say the same thing, and the two disagree - a line singing wash all my sin scores nothing at all against a verse saying he washed us from our sins. Two of the twenty five were found only on the second reading, and a single number would have hidden which reading found them.");
  ("THE FOLDED RUN ORDERS THE LIST AND THE WORDS SHARED ANYWHERE BREAK THE TIE, WHICH IS THE ORDER THE CHOOSING ACTUALLY USED. Folding endings can only join words that were already going to join, never separate them, so the folded run is never the smaller of the two readings and sorting by it puts the strongest hearing on top whichever reading found it.");
  ("SORTING BY THE PLAIN RUN AFTER THAT WAS TRIED AND IS WRONG, AND THE PASSAGE THAT SHOWED IT IS REVELATION ONE FIVE. Ranked by the plain reading as the tie-break, the Bible in Basic English and Young's Literal stood above the King James there - which is the translation actually quoted, and the one the line was written from. The reason turned out to be a fault in the folding rather than in the record: stripping ed took the e with it, so loved folded to lov while love stayed love, and the two words the ear hears as one were filed to two different shapes. Taking a final e off both sides closed that, and the King James now stands alone at the top of that passage on the folded reading. The lesson is the one worth keeping: where a count disagrees with a reading somebody made by ear, suspect the count first.");
  ("SO IT RANKS AND DOES NOT CHOOSE, AND A TIE IS LEFT LOOKING LIKE A TIE. Where several wordings are heard equally the order they were read in is kept, and which of them is quoted is settled by reading - the older sounding one first, and the plainer one where that still does not separate them. Those are judgements a person makes, which is why they are made next door and written down one passage at a time rather than made here in silence.");
  let passages = await song_god_our_savior_wordings();
  function scored(passage) {
    let reference = property_get(passage, "reference");
    let distinct = property_get(passage, "distinct");
    let lines = song_god_our_savior_reference_lines(reference);
    function heard(wording) {
      let wording_scored = song_god_our_savior_wording_echo(wording, lines);
      return wording_scored;
    }
    let wordings = list_map(distinct, heard);
    function ordered(one, other) {
      let other_run = property_get(other, "folded_run");
      let one_run = property_get(one, "folded_run");
      let runs = subtract(other_run, one_run);
      let tied = equal(runs, 0);
      if (tied) {
        let other_shared = property_get(other, "folded_shared");
        let one_shared = property_get(one, "folded_shared");
        let shares = subtract(other_shared, one_shared);
        return shares;
      }
      return runs;
    }
    wordings.sort(ordered);
    let v = {
      reference,
      lines,
      wordings,
    };
    return v;
  }
  let echoed = list_map(passages, scored);
  return echoed;
}
