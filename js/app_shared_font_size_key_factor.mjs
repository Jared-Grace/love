import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function app_shared_font_size_key_factor() {
  "The word the size a reader chose is filed under on their device, as a multiple of the size their own browser is set to.";
  "A word of its own, beside the older one that held a count of pixels rather than over the top of it. WHICH WORD A NUMBER IS FILED UNDER IS THE ONLY HONEST WAY TO TELL THE TWO SCHEMES APART. Telling them apart by how big they are was written first and is wrong: the larger button multiplies by 1.1, so fifteen presses carry a factor past 4 and into the range a count of pixels occupies, and the page would then collapse to a quarter of its size for the one reader who needed it biggest of all.";
  "Frozen for the same reason its neighbour is: from the moment this ships it is written into browsers this repo will never see again, and a different word here does not move anybody's setting, it hides it.";
  arguments_assert(arguments, 0);
  let key = text_frozen("font_size_factor");
  return key;
}
