import { command_line_read } from "./command_line_read.mjs";
export async function command_line_read_empty() {
  let answer = await command_line_read("");
  return answer;
}
