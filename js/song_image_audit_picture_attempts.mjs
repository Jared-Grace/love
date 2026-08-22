import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export function song_image_audit_picture_attempts(key, known, kept) {
  arguments_assert(arguments, 3);
  let text_key = String(key);
  let attempts = property_exists(known, text_key)
    ? property_get(known, text_key)
    : [kept];
  return attempts;
}
