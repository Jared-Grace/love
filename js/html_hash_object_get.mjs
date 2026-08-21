import { text_lower_to } from "./text_lower_to.mjs";
import { text_replace } from "./text_replace.mjs";
import { text_includes_not } from "./text_includes_not.mjs";
import { html_hash_symbol } from "./html_hash_symbol.mjs";
import { object_adder } from "./object_adder.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_equal_first } from "./text_split_equal_first.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { html_hash_get } from "./html_hash_get.mjs";
export function html_hash_object_get() {
  "The address of the page read apart into the words it names and what it says for each.";
  "Two characters are taken as standing between one pair and the next. A comma is what every link this repo writes uses; an ampersand is what the code app wrote for as long as it pulled its own address apart, and links spelling it were sent to people. Reading both costs one substitution and keeps those links opening; refusing the older one would have broken exactly the readers this whole checking exists to speak to.";
  "Nothing this repo puts on the right of an equals holds either character - the values are codes, names of things, and numbers - so a value is never cut in half by this.";
  "THE WORD ON THE LEFT IS READ WITHOUT REGARD TO CASE, the one on the right exactly as written. A link is typed out by hand, read aloud, dictated into a phone and re-typed at the other end, and the capitals are the first thing that journey loses; a page that answered only the exact spelling would open on its own front door with nothing saying why. The value cannot be treated the same way - a book name and a language code mean what their capitals say.";
  "Every word a page here asks for is already spelled in small letters - each is held by a function of its own rather than written out at the place it is used, and all of them were read to check it - so lowering the left side finds what the readers are asking for and never hides anything from them.";
  function lambda3(oa) {
    let hash_url = html_hash_get();
    let prefix = html_hash_symbol();
    let n = text_includes_not(hash_url, prefix);
    if (n) {
      return;
    }
    let without = text_prefix_without(hash_url, prefix);
    let commas = text_replace(without, "&", ",");
    let split = text_split_comma(commas);
    function lambda(s) {
      let v = text_split_equal_first(s);
      let second = property_get(v, "second");
      let first = property_get(v, "first");
      let key = text_lower_to(first);
      oa(key, second);
    }
    each(split, lambda);
  }
  let hash = object_adder(lambda3);
  return hash;
}
