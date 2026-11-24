import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { app_shared_text_reader_language_absent } from "./app_shared_text_reader_language_absent.mjs";
import { property_get } from "./property_get.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_map } from "./list_map.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { app_shared_text_reader_language_translation_write } from "./app_shared_text_reader_language_translation_write.mjs";
export async function app_shared_text_reader_language_translation_write_all(
  language_code,
  translations_path,
) {
  "$plain language_code";
  "Writes one language into every function holding a saying that is translated somewhere but not yet into this language, from the one list of translations at this path, and says which sayings are still without it afterwards.";
  "The set of functions is found rather than handed over, by asking the same question the gate asks, so what gets filled is exactly what was missing and nothing has to be listed by hand.";
  "Each function is committed the moment it is written, under the one-function command and its own arguments, because a run over many files lasts long enough that somebody else's sweep would otherwise take them first.";
  "Asking again afterwards is the only honest way to say it worked: a saying whose english has no pair in the list is left alone, and it shows up here rather than vanishing.";
  arguments_assert(arguments, 2);
  await ai_git_noted();
  let absent = await app_shared_text_reader_language_absent(language_code);
  function lambda$f_name(item) {
    let f_name = property_get(item, "f_name");
    return f_name;
  }
  let list = list_map(absent, lambda$f_name);
  let names = list_unique(list);
  for (let f_name of names) {
    let args = [f_name, language_code, translations_path];
    await function_call_commit(
      app_shared_text_reader_language_translation_write,
      args,
    );
  }
  let remaining = await app_shared_text_reader_language_absent(language_code);
  let r = {
    written: names,
    remaining,
  };
  return r;
}
