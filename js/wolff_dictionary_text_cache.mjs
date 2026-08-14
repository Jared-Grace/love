import { invoke_cache_file } from "./invoke_cache_file.mjs";
import { wolff_dictionary_text } from "./wolff_dictionary_text.mjs";
export async function wolff_dictionary_text_cache() {
  "Wolff's Dictionary of Cebuano Visayan, kept on this disk after the first reading so that asking for it again costs nothing and reaches nobody.";
  "Every question a gloss asks of this book is asked of one copy held here. A dictionary is not a thing that changes, so a second asking over the network could only ever return what the first one already did - and the archive it comes from is somebody else's bandwidth either way.";
  let r = await invoke_cache_file(wolff_dictionary_text, []);
  return r;
}
