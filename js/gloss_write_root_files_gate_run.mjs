import { gloss_write_root_files } from "./gloss_write_root_files.mjs";
import { greater_than } from "./greater_than.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function gloss_write_root_files_gate_run() {
  "Gate: nothing sits loose in the gloss handover folder - every file there belongs inside the folder of the store it was authored for. Throws so the dispatcher seam exits nonzero.";
  "The failure it catches is silent by nature. A store reading its own folder and finding nothing looks the same as a store nobody has authored anything for yet, so a passage stranded outside the store folders is not noticed by the thing that wanted it; it is noticed months later when the passage comes back blank.";
  "It starts at nothing and has no list beside it to write exceptions in, because the answer to a loose file is always to put it in the store it belongs to. A file nobody can say which store wrote it is a question for a person, and a red light is how that question gets asked.";
  let loose = await gloss_write_root_files();
  let count = list_size(loose);
  let any = greater_than(count, 0);
  if (any) {
    let shown = json_format_to(loose);
    let message = text_combine_multiple([
      "gloss handover: ",
      count,
      " files sit loose in the folder rather than inside a store's own folder, so nothing will read them back - ",
      shown,
    ]);
    throw new Error(message);
  }
  let r = {
    loose: 0,
  };
  return r;
}
