import { json_to } from "./json_to.mjs";
import { not } from "./not.mjs";
import { functions_names_includes } from "./functions_names_includes.mjs";
import { function_new_code } from "./function_new_code.mjs";
export async function reply_bible_shared_functions_write(shared, codes_all) {
  "Writes the function for each thing verses share, when a verse rule calls it and it does not exist yet. Returns the names it wrote.";
  let written = [];
  async function piece_write(f_name, code) {
    let called = codes_all.includes(`${f_name}()`);
    if (not(called)) {
      return;
    }
    let exists = await functions_names_includes(f_name);
    if (exists) {
      return;
    }
    await function_new_code(f_name, [], false, [
      `let r = ${code};`,
      "return r;",
    ]);
    written.push(f_name);
  }
  for (let key of shared.choices) {
    let choice = key.split(" ");
    let json = json_to(choice);
    await piece_write(shared.names[key], `reply_choice(${json})`);
  }
  for (let key of shared.runs) {
    let run = key.split(" ");
    let v = run.join("_");
    let json2 = json_to(key);
    await piece_write(`reply_phrase_${v}`, `reply_words(${json2})`);
  }
  return written;
}
