import { arguments_assert } from "./arguments_assert.mjs";
import { song_wordings } from "./song_wordings.mjs";
import { property_get } from "./property_get.mjs";
import { song_wording_echo } from "./song_wording_echo.mjs";
import { list_map } from "./list_map.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
export async function song_wordings_echoed(references, reference_lines) {
  arguments_assert(arguments, 2);
  ("$plain references");
  ("Every passage a song rests on, each against the wordings really on offer for it, and each wording against how much of the sung lines resting there it says the same way - counted twice, once with the endings of words left on and once with them folded off, loudest first.");
  ("THIS IS THE READING THAT CHOOSES WHICH TRANSLATION A PASSAGE IS QUOTED FROM. A song is not written against one translation, it is written against a wording, so the question at every passage is which of the English bibles on offer says the most of the sung line the same way. Answered by eye it is an impression nobody can check; answered here it is counted words, and it can be run again.");
  ("IT IS TOLD WHICH LINES REST WHERE RATHER THAN KNOWING, WHICH IS WHAT LETS A SECOND SONG USE IT. Songs are unalike underneath - one is sung in sections of lines and the next in couplets with a picture behind each - so there is no one way to walk a song and find the lines listening at a passage. Each song knows how to answer that about itself in one small function, and handing that function over is the whole of what this needs from it.");
  ("BOTH READINGS ARE REPORTED AND NEITHER IS COLLAPSED INTO THE OTHER. Leaving the endings on asks whether the line and the verse use the same word; folding them off asks whether they say the same thing, and the two disagree - a line singing wash all my sin scores nothing at all against a verse saying he washed us from our sins. A single number would hide which reading did the hearing.");
  ("THE FOLDED RUN ORDERS THE LIST AND THE WORDS SHARED ANYWHERE BREAK THE TIE. Folding endings can only join words that were already going to join, never separate them, so the folded run is never the smaller of the two readings and sorting by it puts the strongest hearing on top whichever reading found it.");
  ("SO IT RANKS AND DOES NOT CHOOSE, AND A TIE IS LEFT LOOKING LIKE A TIE. Where several wordings are heard equally the order they were read in is kept, and which of them is quoted is settled by reading - the older sounding one first, and the plainer one where that still does not separate them. Those are judgements a person makes, which is why they are made next door and written down one passage at a time rather than made here in silence.");
  let passages = await song_wordings(references);
  function scored(passage) {
    let reference = property_get(passage, "reference");
    let distinct = property_get(passage, "distinct");
    let lines = reference_lines(reference);
    function heard(wording) {
      let wording_scored = song_wording_echo(wording, lines);
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
