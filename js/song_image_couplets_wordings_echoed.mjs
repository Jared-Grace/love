import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets_references } from "./song_image_couplets_references.mjs";
import { song_wordings_echoed } from "./song_wordings_echoed.mjs";
import { song_image_couplets_reference_lines } from "./song_image_couplets_reference_lines.mjs";
export async function song_image_couplets_wordings_echoed() {
  arguments_assert(arguments, 0);
  ("Every passage this hymn rests on, each against the wordings really on offer for it, and each wording against how much of the sung couplets resting there it says the same way - loudest first.");
  ("NO TRANSLATION HAS EVER BEEN CHOSEN FOR THIS HYMN, WHICH IS WHY THIS EXISTS. The page quotes one translation per passage, and the choosing was done for the other song only - so all seventy seven passages this hymn rests on alone are shown in the page's usual translation, not because that translation says the sung line best but because nobody has asked. Two more, Matthew twenty seven fifty nine to sixty and Luke twenty four one, are shown in the King James and the American Standard, and both were picked to echo a line of the other song rather than a line of this one.");
  ("IT RANKS AND DOES NOT CHOOSE, the same as its neighbour does for the other song. What comes back is a reading list; which wording is quoted is written down one passage at a time by somebody who has read it.");
  ("THE SIXTEEN PASSAGES BOTH SONGS REST ON ARE RANKED HERE TOO, and they are the ones to read last. The page answers which translation a passage is quoted from by the passage alone, so those sixteen cannot be given a wording for this hymn without taking it away from the other song - which is a judgement about the two songs together and not a reading of this one.");
  let references = song_image_couplets_references();
  let echoed = await song_wordings_echoed(
    references,
    song_image_couplets_reference_lines,
  );
  return echoed;
}
