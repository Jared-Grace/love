import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { list_get } from "./list_get.mjs";
import { property_set } from "./property_set.mjs";
export function app_g_arcs_chapter_code(chosen, codes) {
  "The chapter the bench is showing: the one already chosen, or the first written chapter when nothing has been chosen yet.";
  "A PAGE JUST OPENED HAS CHOSEN NOTHING, and a bench showing nothing says less than a bench showing the first chapter. It writes the answer back into what was chosen rather than only returning it, so that every later reading agrees with the first one.";
  let chapter_code = property_get(chosen, "chapter_code");
  let unchosen = null_is(chapter_code);
  if (unchosen) {
    let first = list_get(codes, 0);
    property_set(chosen, "chapter_code", first);
    return first;
  }
  return chapter_code;
}
