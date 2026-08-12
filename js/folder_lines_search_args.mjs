import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_or_empty } from "./text_split_comma_or_empty.mjs";
import { folder_lines_search } from "./folder_lines_search.mjs";
export async function folder_lines_search_args(
  path_folder,
  s,
  folders_skipped,
) {
  ("The same search as ",
    fn_name("folder_lines_search"),
    ", reachable from a command line, where the folders to leave alone arrive as one word with commas between them");
  ("A command line hands every word over separately, so a parameter meant to hold a list of things silently keeps the first one and drops the rest. Joining them into one word and taking it apart here is how every other list in this repo crosses that line.");
  ("The searching itself is not repeated here, only the taking apart. A twin that did the work again would be free to drift from the one it is named after, and the drift would show up as the command line quietly answering something different from the code.");
  arguments_assert(arguments, 3);
  let skipped = text_split_comma_or_empty(folders_skipped);
  let found = await folder_lines_search(path_folder, s, skipped);
  return found;
}
