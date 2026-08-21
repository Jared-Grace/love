import { g_arc_generate } from "./g_arc_generate.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function g_arc_person(index) {
  "Read back the one person of the pool a number names, which is where how many turns they may be given is written down.";
  "THE POOL IS THE AUTHORITY ON A PERSON, and a written arc is an answer to it rather than a thing that could disagree with it. The number of turns was fixed once, when the pool was drawn; words written against that number and words written against a different one look the same on the page, and only the person's own record can tell them apart.";
  "The name is built the same way the writing of it built the name, out of the writer's own name and the number - so a rename moves both ends at once and neither can be left pointing at the other's old spelling.";
  let f = g_arc_generate;
  let name = text_combine_multiple([f.name, "_", index]);
  let file_name = file_name_json(name);
  let path = storage_function_path(f.name, file_name);
  let person = await file_read_json(path);
  return person;
}
