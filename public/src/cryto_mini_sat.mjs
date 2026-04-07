import { command_line_generic_code_ignore } from "../../../love/public/src/command_line_generic_code_ignore.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { command_line_generic } from "../../../love/public/src/command_line_generic.mjs";
export async function cryto_mini_sat() {
  `sudo apt update
sudo apt install cryptominisat`;
  let value = true;
  let property_name = command_line_generic_code_ignore();
  let object = {};
  property_set(object, property_name, value);
  let stdout = await command_line_generic(
    "cryptominisat5 /media/j/JPM/user/temp/3addf5dd-c638-4b30-b164-d47670db6f54",
  );
}
