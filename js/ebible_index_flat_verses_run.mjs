import { verse_number_key } from "./verse_number_key.mjs";
import { list_index_of_json } from "./list_index_of_json.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
export function ebible_index_flat_verses_run(
  list,
  chapter_code,
  verse_number,
  count,
) {
  "The run of verses a page is showing, taken off the flat list of every verse in the bible in order.";
  "Because the list it is cut from is the whole bible rather than one chapter, a run that reaches the end of a chapter simply carries on into the next one - which is what reading does, and is why the run is cut here rather than out of a chapter's own verses.";
  let start = {
    chapter_code,
    [verse_number_key()]: verse_number,
  };
  let index = list_index_of_json(list, start);
  let run = list_slice_count(list, index, count);
  return run;
}
