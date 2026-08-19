import { identity } from "./identity.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_hash_field_value_said(field, value) {
  "One word out of a link, worded the way a reader reads it rather than the way the link carries it - John 3:16 where the address says John+3:16.";
  "A link cannot hold a space, so what travels in it is not quite what anybody writes. Said back unchanged, a reader matching the page against their own address bar is shown a plus in the middle of a reference and has to work out for themselves that it is the page's doing rather than one more thing gone wrong.";
  "This is not the field's label and must never be it. A label words a value the field knows - it looks the language up and says its name - and every word that reaches here is one the field has just said it does not know. Handing an unknown word to a lookup is asking it for the one thing it has none of, and it stopped the page with an error where a reader was owed an explanation.";
  "So the reshaping asked for here is only ever the kind that works on any letters at all: putting back a space the address could not carry. A field that carries its words plainly says nothing, and gets its word back exactly as it arrived.";
  arguments_assert(arguments, 2);
  let said_fn = property_get_or(field, "said", identity);
  let said = said_fn(value);
  return said;
}
