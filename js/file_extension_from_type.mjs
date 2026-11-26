import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function file_extension_from_type(type) {
  "$plain type";
  "The ending a file name takes for bytes of the kind type says, such as jpg for image/jpeg and png for image/png - the part after the slash, with jpeg written the short way every photo is named.";
  "A kind that says nothing, as bytes whose kind the browser was not told, is taken to be a photo, jpg, since a photo is what is being saved.";
  arguments_assert(arguments, 1);
  let parts = type.split("/");
  let b = equal(parts.length, 2);
  if (not(b) || equal(parts[1], "")) {
    let r = "jpg";
    return r;
  }
  let after = parts[1];
  if (equal(after, "jpeg")) {
    let r2 = "jpg";
    return r2;
  }
  return after;
}
