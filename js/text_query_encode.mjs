import { arguments_assert } from "./arguments_assert.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_join_separator } from "./list_map_join_separator.mjs";
import { text_url_encode } from "./text_url_encode.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function text_query_encode(pairs) {
  "A set of named values written the way a web address and a form both carry them, as name=value joined by ampersands, with every name and every value spelled so that a space or an accent survives the journey.";
  "$plain pairs";
  "An address and a posted form differ only in where the same text is put - one after a question mark, the other in the body - so the writing of it is one thing with one name. Keeping them apart would have meant two spellings of the same rule, and the one that got a fix would not have been the one carrying the secret.";
  arguments_assert(arguments, 1);
  let names = properties_get(pairs);
  function named(name) {
    let value = property_get(pairs, name);
    let value_encoded = text_url_encode(value);
    let name_encoded = text_url_encode(name);
    let piece = text_combine_multiple([name_encoded, "=", value_encoded]);
    return piece;
  }
  let query = list_map_join_separator(names, named, "&");
  return query;
}
