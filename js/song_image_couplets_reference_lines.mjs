import { list_add_multiple } from "./list_add_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { not_equal } from "./not_equal.mjs";
import { song_image_couplet_references } from "./song_image_couplet_references.mjs";
import { list_includes } from "./list_includes.mjs";
export function song_image_couplets_reference_lines(reference) {
  arguments_assert(arguments, 1);
  ("$plain reference");
  ("The sung lines of this hymn that rest on one passage of scripture, in the order the hymn sings them.");
  ("IT IS THE OTHER DIRECTION OF WHAT IS ALREADY WRITTEN DOWN, AND NOTHING MORE THAN THAT. The hymn is glossed couplet by couplet, each naming the passages its couplet leans on, which answers what a couplet rests on. Choosing which translation to quote at a passage asks the opposite question - which lines are listening at it - and there was no way to ask it. Both readings come off the same glosses, so neither can drift from the other.");
  ("A COUPLET IS HANDED BACK AS ITS TWO HALVES AND NOT AS ONE JOINED LINE. What is counted at the far end is the longest run of words a line and a verse say the same way, and joining the halves would let a run cross the turn between them - words the ear never hears in a row, scored as though it did. The loudest half is kept anyway, so splitting them costs nothing except a run that was never really there.");
  ("A REPEATED COUPLET IS PASSED OVER, because it sings words already on this list and the passage behind them does not change on the second hearing. Carrying it again would put the same words in twice, and the counting keeps whichever line it hears loudest - so a duplicate can only ever tie with itself.");
  ("A passage nothing rests on is answered with an empty list rather than a refusal, which is the ordinary state while a hymn is still being glossed and is not a fault worth stopping for.");
  let couplets = song_image_couplets();
  let resting = [];
  for (let couplet of couplets) {
    let repeated = not_equal(couplet.same_as, 0);
    if (repeated) {
      continue;
    }
    let named = song_image_couplet_references(couplet.n);
    let rests = list_includes(named, reference);
    if (rests) {
      list_add_multiple(resting, [couplet.first, couplet.second]);
    }
  }
  return resting;
}
