import { html_hash_name_first } from "./html_hash_name_first.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_set } from "./html_hash_set.mjs";
export function html_hash_name_second_set(second) {
  "$plain second";
  "Writes the part of the address after the slash, keeping the part in front of it, so the address in the bar always opens what is on screen now.";
  "IT REPLACES THE ADDRESS RATHER THAN NAVIGATING, so the page is not reloaded and no step is added to the back button.";
  arguments_assert(arguments, 1);
  let first = html_hash_name_first();
  html_hash_set("#" + first + "/" + second);
}
