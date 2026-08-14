import { list_add } from "./list_add.mjs";
import { html_code_meta_description } from "./html_code_meta_description.mjs";
import { html_code_meta_property } from "./html_code_meta_property.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function html_code_head_social_items(title, description, image_url) {
  "$plain title";
  "$plain description";
  "$plain image_url";
  "The head tags that decide what a shared link looks like where it is pasted - a name and a sentence instead of a bare address.";
  "An app with nothing to say about itself gets none of them, because a card built from an empty sentence reads worse than the address it replaced.";
  "A picture is separate from the rest and may be absent on its own, because it is a file that has to exist somewhere before it can be pointed at, while a sentence only has to be written. An app can have one without the other, and the card is built from whatever is there.";
  if (text_empty_is(description)) {
    let none = [];
    return none;
  }
  let r2 = html_code_meta_description(description);
  let r3 = html_code_meta_property("og:title", title);
  let r4 = html_code_meta_property("og:description", description);
  let r5 = html_code_meta_property("og:type", "website");
  let r = [r2, r3, r4, r5];
  if (text_empty_is(image_url)) {
    return r;
  }
  let r6 = html_code_meta_property("og:image", image_url);
  list_add(r, r6);
  return r;
}
