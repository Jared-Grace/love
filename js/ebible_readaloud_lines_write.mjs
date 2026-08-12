import { ebible_readaloud_lines_measure } from "./ebible_readaloud_lines_measure.mjs";
import { ebible_readaloud_lines_path } from "./ebible_readaloud_lines_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function ebible_readaloud_lines_write() {
  "Measures every bible on this machine's disk against its own pages and writes the answer down.";
  "The measuring opens and parses every chapter of every bible, which is the better part of an hour, so it is a command somebody runs. What checks the answer afterwards needs nothing but the file, and so can run wherever the rest of the gates run.";
  let measured = await ebible_readaloud_lines_measure();
  let path = ebible_readaloud_lines_path();
  await file_overwrite_json(path, measured);
  return measured;
}
