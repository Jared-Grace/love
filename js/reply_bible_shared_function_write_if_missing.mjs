import { functions_names_includes } from "./functions_names_includes.mjs";
import { function_new_code } from "./function_new_code.mjs";
export async function reply_bible_shared_function_write_if_missing(
  f_name,
  code,
) {
  "Writes one shared word or phrase the verses call, but only when nothing has that name yet. Once it exists it belongs to whoever edits it, so the verse generator calls it and never writes over it. The name says what the function means in plain English, and the function holds the other spellings and wordings. Answers whether it wrote.";
  let exists = await functions_names_includes(f_name);
  if (exists) {
    return false;
  }
  await function_new_code(f_name, [], false, [`let r = ${code};`, "return r;"]);
  return true;
}
