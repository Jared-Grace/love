import { each } from "../../../love/public/src/each.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { text_replace_if_starts_with } from "../../../love/public/src/text_replace_if_starts_with.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_map_first } from "../../../love/public/src/list_map_first.mjs";
import { list_map_filter_text_empty_not_is } from "../../../love/public/src/list_map_filter_text_empty_not_is.mjs";
import { list_map_split_space } from "../../../love/public/src/list_map_split_space.mjs";
import { list_map_prefix_without_any } from "../../../love/public/src/list_map_prefix_without_any.mjs";
import { list_map_prefix_any } from "../../../love/public/src/list_map_prefix_any.mjs";
import { list_filter_starts_with_any } from "../../../love/public/src/list_filter_starts_with_any.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export function ebible_references_names(books, lines) {
  function lambda(item) {
    let replacements = {
      Psalms: ["Psalm"],
      Song: ["Song of Solomon"],
    };
    function lambda2(froms, to) {
      function lambda3(from) {
        item = text_replace_if_starts_with(from + " ", item, to + " ");
      }
      each(froms, lambda3);
    }
    each_object(replacements, lambda2);
    return item;
  }
  let mapped = list_map(lines, lambda);
  let books_names = list_map_property(books, "text");
  let verse_references = list_filter_starts_with_any(mapped, books_names);
  let book_names = list_map_prefix_any(verse_references, books_names);
  let mapped2 = list_map_prefix_without_any(verse_references, books_names);
  let mapped3 = list_map_split_space(mapped2);
  let mapped4 = list_map_filter_text_empty_not_is(mapped3);
  let chapter_verses_list = list_map_first(mapped4);
  let v = {
    chapter_verses_list,
    book_names,
  };
  return v;
}
