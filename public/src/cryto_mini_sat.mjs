import { text_prefix_without } from "../../../love/public/src/text_prefix_without.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { list_find_starts_with } from "../../../love/public/src/list_find_starts_with.mjs";
import { property_set_new_fn } from "../../../love/public/src/property_set_new_fn.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { command_line_generic_code_ignore } from "../../../love/public/src/command_line_generic_code_ignore.mjs";
import { command_line_generic } from "../../../love/public/src/command_line_generic.mjs";
export async function cryto_mini_sat() {
  `sudo apt update
sudo apt install cryptominisat`;
  let value = true;
  let fn = command_line_generic_code_ignore;
  let object = property_set_new_fn(fn, value);
  const command =
    "cryptominisat5 /media/j/JPM/user/temp/3addf5dd-c638-4b30-b164-d47670db6f54";
  let r = await command_line_generic(command, object);
  let stdout = property_get(r, "stdout");
  let lines = text_split_newline(stdout);
  const letter = "s";
  let combined = text_combine(letter, " ");
  let found = list_find_starts_with(lines, combined);
  let without = text_prefix_without(found, combined);
  return found;
}
