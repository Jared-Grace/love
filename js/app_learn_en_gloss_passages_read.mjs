import { app_learn_en_gloss_passages } from "./app_learn_en_gloss_passages.mjs";
export function app_learn_en_gloss_passages_read(language_code) {
  "A way to read one chapter's passages for one language, handed to the shared gloss code that asks for passages by chapter alone.";
  "$plain language_code";
  "the code is a language's short name, like tgl or es. It picks an entry from a fixed list and nothing that runs.";
  async function passages_read(chapter_code) {
    let groups = await app_learn_en_gloss_passages(language_code, chapter_code);
    return groups;
  }
  return passages_read;
}
