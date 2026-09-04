import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_derivatives_forbidden_words_least } from "./ebible_derivatives_forbidden_words_least.mjs";
import { ebible_derivatives_forbidden_spans } from "./ebible_derivatives_forbidden_spans.mjs";
import { folder_repo_love_published_paths } from "./folder_repo_love_published_paths.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { null_is } from "./null_is.mjs";
import { text_words_searchable } from "./text_words_searchable.mjs";
import { text_searchable_spans_shared } from "./text_searchable_spans_shared.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { path_relative } from "./path_relative.mjs";
import { property_set } from "./property_set.mjs";
export async function ebible_derivatives_forbidden_text_carried() {
  "Every file this repo publishes that carries a run of words belonging to a translation whose terms forbid derivatives, named against the runs that were found in it.";
  "The runs come back with the names rather than only a count of them, because whoever has to repair this needs to see what was found before they can tell a real copy from a coincidence, and asking again for each file would mean gathering a whole translation's runs again for every one.";
  "Every file is read, whatever kind of file it says it is. A picture read as writing comes out as a run of characters no word of any language is spelled with, so it matches nothing and costs only the reading - while deciding which files are worth reading would be a list of endings that goes stale silently, and the file somebody hid text in would be the one with the unexpected ending.";
  "A file that has gone between being named and being read is stepped over rather than stopping the reading. Several of us share this folder and files appear and go all day; a reading that stopped would report a neighbour's ordinary work as a fault.";
  arguments_assert(arguments, 0);
  let words_least = ebible_derivatives_forbidden_words_least();
  let spans = await ebible_derivatives_forbidden_spans();
  let paths = await folder_repo_love_published_paths();
  let root = folder_repo_love();
  let carried = {};
  for (let f_path of paths) {
    let text = await file_read_try(f_path);
    let gone = null_is(text);
    if (gone) {
      continue;
    }
    let searchable = text_words_searchable(text);
    let shared = text_searchable_spans_shared(searchable, spans, words_least);
    let found = list_empty_not_is(shared);
    if (found) {
      let name = path_relative(root, f_path);
      property_set(carried, name, shared);
    }
  }
  return carried;
}
