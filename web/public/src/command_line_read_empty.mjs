import { command_line_read } from "./command_line_read.mjs";
export async function command_line_read_empty() {
  let v2 = await command_line_read("");
  return v2;
}
