import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_name_get } from "./html_hash_name_get.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { html_hash_set } from "./html_hash_set.mjs";
export function html_hash_name_second_set(second) {
  "$plain second";
  "Writes the part of the address after the slash, keeping the part in front of it, so the address in the bar always opens what is on screen now.";
  "IT REPLACES THE ADDRESS RATHER THAN NAVIGATING, so the page is not reloaded and no step is added to the back button.";
  arguments_assert(arguments, 1);
  let name = html_hash_name_get();
  let parts = text_split(name, "/");
  let first = list_first(parts);
  html_hash_set("#" + first + "/" + second);
}
