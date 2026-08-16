import { ebible_licence_marks } from "./ebible_licence_marks.mjs";
import { ebible_licence_public_domain } from "./ebible_licence_public_domain.mjs";
import { ebible_licence_public_domain_sentences } from "./ebible_licence_public_domain_sentences.mjs";
import { ebible_licence_reservation_sentences } from "./ebible_licence_reservation_sentences.mjs";
import { ebible_licence_unknown } from "./ebible_licence_unknown.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_includes_multiple_is } from "./text_includes_multiple_is.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function ebible_text_licence(copyright_page) {
  "Which terms a licence page states - read off the page itself rather than off a memory of what a website once said.";
  "Everything is compared in lower case so that a page shouting its terms and a page murmuring them read alike.";
  "A page naming no licence and claiming no freedom is answered as unread rather than as free. The whole value of this reading is that it is wrong in the safe direction.";
  let lowered = text_lower_to(copyright_page);
  let marks = ebible_licence_marks();
  for (let entry of marks) {
    let mark = property_get(entry, "mark");
    let marked = text_includes(lowered, mark);
    if (marked) {
      let named = property_get(entry, "licence");
      return named;
    }
  }
  let free_sentences = ebible_licence_public_domain_sentences();
  let owned_sentences = ebible_licence_reservation_sentences();
  let said_free = text_includes_multiple_is(lowered, free_sentences);
  let said_owned = text_includes_multiple_is(lowered, owned_sentences);
  if (said_free && !said_owned) {
    let free = ebible_licence_public_domain();
    return free;
  }
  let unread = ebible_licence_unknown();
  return unread;
}
