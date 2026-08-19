import { arguments_assert } from "./arguments_assert.mjs";
import { functions_duplicates_groups_unmarked } from "./functions_duplicates_groups_unmarked.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_map } from "./list_map.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
export async function functions_duplicate_words_unmarked(words) {
  "Out of the flat words a ratchet holds one to a group of alike functions, the ones nobody has marked as alike on purpose.";
  "The three gates over a shared opening, ending and middle all hold their findings as one comma-joined word to a group, and all three have to let the mark through. Asking here, of the word, is what lets one answer serve all three: the word is already the group's own members, so taking it apart and putting it back gives the mark exactly the names it needs and changes nothing about what the record holds.";
  "The mark itself is read by the sibling that decides this for a group anywhere, so what counts as marked cannot drift between the gate over functions written as each other's definition and these three.";
  arguments_assert(arguments, 1);
  let groups = list_map(words, text_split_comma);
  let unmarked = await functions_duplicates_groups_unmarked(groups);
  let kept = list_map(unmarked, list_join_comma);
  return kept;
}
