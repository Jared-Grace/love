import { list_map } from "./list_map.mjs";
import { app_shared_verse_texts } from "./app_shared_verse_texts.mjs";
export function app_supper_texts_colored(parent, texts) {
  function to_entry(text) {
    let entry = {
      name: "",
      text,
    };
    return entry;
  }
  let entries = list_map(texts, to_entry);
  app_shared_verse_texts(parent, entries);
}
