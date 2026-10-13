import { arguments_assert } from "./arguments_assert.mjs";
import { list_duplicates_by_property } from "./list_duplicates_by_property.mjs";
import { list_add } from "./list_add.mjs";
export function giveaway_psalms_items_defects(items) {
  arguments_assert(arguments, 1);
  ("$plain items");
  ("Every name claimed twice inside one box of the psalms giveaway, said as which box and which name. An empty answer means no file in any box would land on another.");
  ("★ A REPEATED NAME IS NOT REFUSED BY THE HOST, IT SILENTLY REPLACES WHAT WAS THERE, WHICH IS WHY THIS IS CHECKED RATHER THAN LEFT TO BE NOTICED. Uploading two files under one name leaves one of them, and nothing says which or that it happened; the box then holds fewer files than it was given and reads as complete. Every other way of being wrong about a name shows up as a wrong name, which somebody reading the shelf can see. This one shows up as nothing at all.");
  ("★ IT BECAME POSSIBLE THE DAY A BOX STOPPED HOLDING ONLY RECORDINGS. The record of the singing already refuses to be written with a name claimed twice, so while a box was its rows and nothing else the question was settled upstream. A box now holds the words of its psalm as well, named by a different rule that has never met the first, and two rules spelling names into one box is exactly the arrangement where a collision is possible and neither rule can see it.");
  ("★ THE CHECK IS WITHIN A BOX AND NEVER ACROSS BOXES, BECAUSE A BOX IS THE WHOLE OF WHERE A NAME HAS TO BE UNIQUE. The address of a file is the box's name and then the file's, so two boxes may hold the same file name without either hiding the other - and they do, since the free zip of a box carries no folder above its entries and every box's files are named after their own psalm anyway.");
  ("It is handed the boxes rather than reading them, so that a box with a collision in it can be made up and shown to fire. A check that read for itself could only ever be run against the shelf as it stands, which is to say against the one case that proves nothing.");
  let defects = [];
  for (let item of items) {
    let repeated = list_duplicates_by_property(item.files, "path_in_item");
    for (let one of repeated) {
      let defect = {
        fault: "name_claimed_twice",
        identifier: item.identifier,
        path_in_item: one.path_in_item,
      };
      list_add(defects, defect);
    }
  }
  return defects;
}
