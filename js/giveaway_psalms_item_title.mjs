import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
export function giveaway_psalms_item_title(chapter) {
  arguments_assert(arguments, 1);
  ("$plain chapter");
  ("What one box of sung psalms is called on its download page - Psalm 147, and nothing else.");
  ("★ THE TITLE NAMES THE PSALM AND NOT WHAT IS IN THE BOX, BECAUSE WHAT IS IN THE BOX KEEPS CHANGING AND THE PSALM NEVER DOES. A title saying five songs would be wrong the next time a sixth is added, and a title saying songs would be wrong the day pictures go in beside them. The psalm is the one thing about a box that is settled forever, so it is the only thing the title says; everything that grows lives in the description underneath, which is rewritten every time the box is.");
  ("The word is singular because one psalm is one psalm, even where it was sung in pieces. A box holding verses one to eleven and verses twelve to twenty is still the box for Psalm 147, and saying Psalms there would read as a box of several.");
  let title = text_combine("Psalm ", chapter);
  return title;
}
