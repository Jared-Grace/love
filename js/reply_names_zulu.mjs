import { arguments_assert } from "./arguments_assert.mjs";
export function reply_names_zulu() {
  arguments_assert(arguments, 0);
  ("Given names in Zulu, spoken in South Africa.");
  let names = ["mandla", "nomsa", "sipho", "zodwa"];
  return names;
}
