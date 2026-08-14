import { html_code_meta_description } from "./html_code_meta_description.mjs";
import { html_code_meta_property } from "./html_code_meta_property.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function html_code_head_social_items(title, description) {
  "$plain title";
  "$plain description";
  "The head tags that decide what a shared link looks like where it is pasted - a name and a sentence instead of a bare address.";
  "An app with nothing to say about itself gets none of them, because a card built from an empty sentence reads worse than the address it replaced.";
  "There is no picture here yet. A picture has to be a file living at a full address of its own, and until there is one the card simply appears without it.";
  if (text_empty_is(description)) {
    let none = [];
    return none;
  }
  let r2 = html_code_meta_description(description);
  let r3 = html_code_meta_property("og:title", title);
  let r4 = html_code_meta_property("og:description", description);
  let r5 = html_code_meta_property("og:type", "website");
  let r = [r2, r3, r4, r5];
  return r;
}
