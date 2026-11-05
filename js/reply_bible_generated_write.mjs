import { not } from "./not.mjs";
import { functions_names_includes } from "./functions_names_includes.mjs";
import { reply_bible_generated_is } from "./reply_bible_generated_is.mjs";
import { function_delete_if_exists } from "./function_delete_if_exists.mjs";
import { json_to } from "./json_to.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_new_code } from "./function_new_code.mjs";
export async function reply_bible_generated_write(f_name, code) {
  "Writes one function the verse generator made, replacing the one it made earlier. A function of the same name that it did not make stops the run, because that name already means something else.";
  let exists = await functions_names_includes(f_name);
  if (exists) {
    let generated = await reply_bible_generated_is(f_name);
    if (not(generated)) {
      throw new Error(
        `${f_name} already exists and the verse generator did not write it`,
      );
    }
  }
  await function_delete_if_exists(f_name);
  let says = json_to(`Made by ${fn_name("reply_bible_verse_function_new")}.`);
  await function_new_code(f_name, [], false, [
    `(${says});`,
    `let r = ${code};`,
    "return r;",
  ]);
  return f_name;
}
