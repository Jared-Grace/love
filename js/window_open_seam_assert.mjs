import { process_human_seam_is } from "./process_human_seam_is.mjs";
import { assert_json } from "./assert_json.mjs";
export function window_open_seam_assert(what) {
  "Putting a window on the screen only makes sense when the person looking at that screen asked for it. From the ai seam it is an interruption nobody requested, arriving while they were reading something else, so the seam refuses rather than doing it quietly.";
  "The file twin of this refuses an editor window; this one refuses any window at all, a browser included, since the interruption is the same whichever program draws it.";
  let human = process_human_seam_is();
  assert_json(human, {
    hint: "this opens a window on the human's screen, so it is theirs to run from their own keyboard — read the same thing without opening it, or ask them to run it",
    what,
  });
}
