import { arguments_assert } from "./arguments_assert.mjs";
export function app_receipts_folder_code_valid_is(code) {
  arguments_assert(arguments, 1);
  ("$plain code");
  ("Whether a typed folder code can stand as one folder of a storage path: at least one letter, digit, dash or underscore, and nothing else.");
  ("A slash would open a second folder the person never meant, and a dot on its own names the folder above; both would put a receipt somewhere other than where it was sent. So the code is held to the characters that can only ever mean one folder.");
  let valid_is = /^[A-Za-z0-9_-]+$/.test(code);
  return valid_is;
}
