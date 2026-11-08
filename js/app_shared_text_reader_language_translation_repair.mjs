import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { app_shared_text_reader_language_absent } from "./app_shared_text_reader_language_absent.mjs";
import { list_includes } from "./list_includes.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { app_shared_text_reader_language_translation_write } from "./app_shared_text_reader_language_translation_write.mjs";
import { list_add } from "./list_add.mjs";
export async function app_shared_text_reader_language_translation_repair(
  language_code,
  translations_path,
) {
  "$plain language_code";
  "Writes one language, from the list of translations at this path, into exactly the functions holding a saying that other languages have and this one does not yet.";
  "What is still missing afterwards is asked again and handed back, because a run that matched nothing looks just like one that matched everything. Whatever remains is english the list did not have words for, or english that has changed since the list was made.";
  "Each function is committed as soon as it is written, so a peer's sweep landing mid-run cannot take the earlier ones under another name.";
  arguments_assert(arguments, 2);
  await ai_git_noted();
  let absent = await app_shared_text_reader_language_absent(language_code);
  let written = [];
  for (let one of absent) {
    let f_name = one.f_name;
    let already = list_includes(written, f_name);
    if (already) {
      continue;
    }
    let args = [f_name, language_code, translations_path];
    await function_call_commit(
      app_shared_text_reader_language_translation_write,
      args,
    );
    list_add(written, f_name);
  }
  let remaining = await app_shared_text_reader_language_absent(language_code);
  let r = {
    written,
    remaining,
  };
  return r;
}
