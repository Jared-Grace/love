import { text_split_comma } from "./text_split_comma.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_add } from "./baseline_known_add.mjs";
import { colors_near_miss_pairs } from "./colors_near_miss_pairs.mjs";
import { color_near_miss_baseline_path } from "./color_near_miss_baseline_path.mjs";
export async function color_near_miss_baseline_add(pairs_comma) {
  arguments_assert(arguments, 1);
  ("Record NAMED pairs of colours that read as one colour, and leave every other such pair still failing.");
  ("Its whole-file twin takes every near miss the repo carries right now, which is the wrong shape for this gate in particular: what it holds is a mixture. Two files that each picked a gold a shade apart are one decision made twice and have to be collapsed. A ramp of dark greys inside one screen is not - the gaps between its steps are what draw the edges on it, and the picture frame standing on the page behind it is told apart from that page by a gap of eleven. Absorbing the whole set treats both alike, and afterwards nothing distinguishes the duplicate that was blessed by accident from the boundary that had to be.");
  ("A gap under the threshold is not the same claim as a gap that does no work. The threshold measures two patches held side by side, which is the hardest way to tell two colours apart; an edge between them is the easiest, and a boundary a reader sees at a glance can sit well inside the distance at which the same two colours look identical as blocks. So a pair drawing an edge is recorded rather than collapsed, and the reason is written down beside it in the commit rather than left to be rediscovered.");
  ("A pair is written the way the gate prints it, the two colours with a tilde between them - `first ~ second`. Several are one comma-joined word, which is how every command here takes a list.");
  ("A COLOUR SPELLED AS rgb HOLDS COMMAS OF ITS OWN and cannot be passed here, because the splitter would cut it into pieces mid-colour. It is not silent: every piece lands as a pair the repo is not failing on, and the phantom refusal below throws naming them. So such a pair waits for a splitter that can be told where the boundaries are, and until then the answer is to collapse it rather than record it.");
  let pairs = text_split_comma(pairs_comma);
  let path = color_near_miss_baseline_path();
  let offending = await colors_near_miss_pairs();
  let r = await baseline_known_add(pairs, path, offending);
  return r;
}
