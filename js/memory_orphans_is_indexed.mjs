import { arguments_assert } from "./arguments_assert.mjs";
import { text_ends_with_not } from "./text_ends_with_not.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
export function memory_orphans_is_indexed(name, ignores, index_text) {
  arguments_assert(arguments, 3);
  let is_not_md = text_ends_with_not(name, ".md");
  if (is_not_md) {
    return false;
  }
  let is_the_index = list_includes(ignores, name);
  if (is_the_index) {
    return false;
  }
  let pointer = "](" + name;
  let has_pointer = text_includes(index_text, pointer);
  if (has_pointer) {
    return true;
  }
  let stem = text_suffix_without(name, ".md");
  let wikilink = "[[" + stem + "]]";
  let has_wikilink = text_includes(index_text, wikilink);
  return has_wikilink;
}
