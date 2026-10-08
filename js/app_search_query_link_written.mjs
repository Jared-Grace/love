import { arguments_assert } from "./arguments_assert.mjs";
import { text_url_encode } from "./text_url_encode.mjs";
import { app_search_query_hash_word_gap } from "./app_search_query_hash_word_gap.mjs";
import { text_url_space_spelled } from "./text_url_space_spelled.mjs";
import { text_replace } from "./text_replace.mjs";
export function app_search_query_link_written(query) {
  "$plain query";
  "What somebody typed into the search box, spelled the way a link may carry it.";
  "EVERY CHARACTER IS SPELLED OUT FIRST, AND THAT IS THE WHOLE POINT. A set of named values is written into an address as name equals value, with a comma between one pair and the next, so a comma inside a value is read at the other end as the end of that value. A search for faith, hope and love arrived as a search for faith, and the reader was shown real verses for a real word with nothing saying that three of their words had been dropped. An ampersand is read as that same separator by an older spelling the reader still accepts, and a plus is read as a gap between words, so both of those were lost in their own way too.";
  "THE SPACES ARE PUT BACK AS A PLUS AFTERWARDS, because that is what this app's links have always used and the reading side undoes it before it reads the spelling back. A space spelled out would also have worked and would have made every old link unreadable, which is the opposite of what a shared link is for.";
  "NOTHING THE OLD WAY WROTE STOPS OPENING. A link already sent names its words either plainly or with a plus between them, and neither of those holds a spelling to undo, so it reads back exactly as it did before. What changes is only what is written from here on.";
  arguments_assert(arguments, 1);
  let spelled = text_url_encode(query);
  let gap = app_search_query_hash_word_gap();
  let space = text_url_space_spelled();
  let written = text_replace(spelled, space, gap);
  return written;
}
