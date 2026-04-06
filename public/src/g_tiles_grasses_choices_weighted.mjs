import { list_duplicate_by_index } from "../../../love/public/src/list_duplicate_by_index.mjs";
import { g_tiles_grasses_choices } from "../../../love/public/src/g_tiles_grasses_choices.mjs";
export function g_tiles_grasses_choices_weighted() {
  let taken = g_tiles_grasses_choices();
  ("this code makes some of the tiles appear more times in the list - so that the list represents a weighted probability choice");
  let tiles_choices = list_duplicate_by_index(taken);
  return tiles_choices;
}
