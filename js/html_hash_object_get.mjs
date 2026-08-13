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
      oa(first, second);
    }
    each(split, lambda);
  }
  let hash = object_adder(lambda3);
  return hash;
}
