import { property_get } from "./property_get.mjs";
import { file_temp } from "./file_temp.mjs";
import { command_line_code_ignore } from "./command_line_code_ignore.mjs";
import { text_combine } from "./text_combine.mjs";
import { file_write } from "./file_write.mjs";
export async function crypto_mini_sat_dimacs_to_output(dimacs) {
  async function lambda(temp_path) {
    await file_write(temp_path, dimacs);
    let command = text_combine("cryptominisat5 ", temp_path);
    let r = await command_line_code_ignore(command);
    return r;
  }
  let r = await file_temp(lambda);
  let stdout = property_get(r, "stdout");
  return stdout;
}
