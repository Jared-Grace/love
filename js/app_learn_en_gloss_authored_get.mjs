import { app_learn_en_gloss_authored } from "./app_learn_en_gloss_authored.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_find } from "./list_find.mjs";
export function app_learn_en_gloss_authored_get(language_code) {
  "The one authored store of English words explained in the language this code names.";
  "$plain language_code";
  "the code is a language's short name, like tgl or es, the same one a reader's address carries. It picks an entry from a fixed list and nothing that runs.";
  let authored = app_learn_en_gloss_authored();
  function code_is(store) {
    let language = property_get(store, "language");
    let code = property_get(language, "language_code");
    let r = equal(code, language_code);
    return r;
  }
  let store = list_find(authored, code_is);
  return store;
}
