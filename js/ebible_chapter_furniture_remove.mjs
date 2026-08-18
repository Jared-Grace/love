import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { html_parse_find_list_to } from "./html_parse_find_list_to.mjs";
import { html_parse_node } from "./html_parse_node.mjs";
import { html_parse_remove } from "./html_parse_remove.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function ebible_chapter_furniture_remove(d, main, selector) {
  arguments_assert(arguments, 3);
  ("Take out of a chapter's page every element the given selector names, except one that has a verse marker inside it.");
  ("A verse marker inside an element settles what the element is, whatever it is called. The page puts a marker at the start of each verse and nowhere else, so a heading, a footnote, a title and a note's popup never hold one, and an element that does hold one is holding scripture.");
  ("That question is asked because the name alone is not enough. The same name means a divider on one translation's pages and a wrapper around the verses on another's: Bangwinji writes an empty block called s5 between paragraphs, and then writes the paragraphs themselves inside blocks of the very same name. Taking every s5 away threw out almost the whole of Mark, which then had three runs of words against forty-five numbered verses and stopped the reading of all one thousand five hundred translations at the letter b.");
  ("Asking what an element holds rather than adding a name to a list is what keeps this from going stale. A list of names is written from the pages somebody happened to look at, and says nothing about the next page; whether an element holds a verse marker is a question the page answers itself, every time.");
  let found = html_parse_find_list_to(main, selector);
  function lambda(item) {
    let node = html_parse_node(d, item);
    let verses = html_parse_find_list_to(node, ".verse");
    let furniture = list_empty_is(verses);
    if (furniture) {
      html_parse_remove(node);
    }
  }
  each(found, lambda);
}
