import { file_temp } from "./file_temp.mjs";
import { command_line_code_ignore_stdout } from "./command_line_code_ignore_stdout.mjs";
import { text_combine } from "./text_combine.mjs";
import { file_write } from "./file_write.mjs";
export async function crypto_mini_sat_dimacs_to_output(dimacs) {
  ("the solver exits nonzero to say unsatisfiable, which is an answer, so the exit code is ignored and the printed result is what matters");
  async function lambda(temp_path) {
    await file_write(temp_path, dimacs);
    let command = text_combine("cryptominisat5 ", temp_path);
    let v = await command_line_code_ignore_stdout(command);
    return v;
  }
  let v = await file_temp(lambda);
  return v;
}
