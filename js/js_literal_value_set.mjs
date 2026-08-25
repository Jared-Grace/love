import { arguments_assert } from "./arguments_assert.mjs";
import { js_literal_is_assert_json } from "./js_literal_is_assert_json.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { property_set } from "./property_set.mjs";
export function js_literal_value_set(literal, value) {
  "$plain value";
  "Puts a plain value in place of the one a written-out value on the page already holds.";
  "IT SETS THE PRINTED SPELLING AS WELL AS THE VALUE, and that is the whole of why it is a function rather than one line at each site. The printer writes a written-out value back out from the spelling it was read in as, so setting only the value leaves the file byte for byte what it was - and the command reports that it worked, because nothing threw and nothing was compared.";
  "THE SPELLING IS BUILT FROM THE VALUE rather than taken from the caller, which is what lets one function serve a word and a number alike: a word comes back with its quotation marks and a number without, and neither caller has to know that.";
  arguments_assert(arguments, 2);
  function lambda() {
    let v = {
      hint: "expected a literal node to write a value into",
    };
    return v;
  }
  js_literal_is_assert_json(literal, lambda);
  let raw = json_format_to(value);
  property_set(literal, "value", value);
  property_set(literal, "raw", raw);
}
