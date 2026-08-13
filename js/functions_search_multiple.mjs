import { list_map } from "./list_map.mjs";
import { functions_searches_found_shown } from "./functions_searches_found_shown.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_nested_depth } from "./text_split_comma_nested_depth.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
export async function functions_search_multiple(searches) {
  "Several name searches asked at once, each one a list of words that a name has to hold all of, and the answers kept apart under the search that found them.";
  "Two commas between the searches and one between the words of a search, so the whole question is a single word on a command line and no part of it needs quoting.";
  "This is what was being done by hand: several searches written out on one line with a heading echoed between them so the answers could be told apart afterwards. The heading is the key here instead, which means the answer is a value other functions can be handed rather than writing to be read once and thrown away.";
  arguments_assert(arguments, 1);
  let queries = text_split_comma_nested_depth(searches, 2);
  let joined = list_map(queries, list_join_comma);
  let found = await functions_searches_found_shown(joined);
  return found;
}
