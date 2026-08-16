import { list_last } from "./list_last.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_split } from "./text_split.mjs";
export function ebible_copyright_links_language(links) {
  "Which language a translation is in and what its speakers call it - read off the one link on its licence page that points at the language catalogue every eBible page links to.";
  "The code and the name come from the same link on purpose. Taken apart they can disagree; taken together they are whatever the page itself says.";
  "A page carrying no such link is answered with nothing under either name rather than being refused, because its terms are still worth reading even when its language cannot be placed.";
  let mark = "ethnologue.org/language/";
  for (let link of links) {
    let href = property_get(link, "href");
    let marked = text_includes(href, mark);
    if (marked) {
      let parts = text_split(href, "/");
      let language_code = list_last(parts);
      let language_name = property_get(link, "text");
      let placed = {
        language_code,
        language_name,
      };
      return placed;
    }
  }
  let unplaced = {
    language_code: null,
    language_name: null,
  };
  return unplaced;
}
