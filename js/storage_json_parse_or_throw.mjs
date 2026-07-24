import { json_from } from "./json_from.mjs";
import { error } from "./error.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function storage_json_parse_or_throw(storage_local_key, json) {
  "a bare parse throws an opaque error naming no key — a corrupt stored value must fail LOUD at its source: name the key, keep the raw bytes, per error-early";
  try {
    let parsed = json_from(json);
    return parsed;
  } catch (parse_error) {
    let message = text_combine_multiple([
      "storage corrupt at ",
      storage_local_key,
      ": ",
      parse_error.message,
    ]);
    let corrupt = new Error(message);
    corrupt.storage_corrupt = true;
    corrupt.storage_local_key = storage_local_key;
    corrupt.raw = json;
    throw corrupt;
  }
}
