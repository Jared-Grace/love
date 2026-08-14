import { html_parse } from "./html_parse.mjs";
import { invoke_cache_global } from "./invoke_cache_global.mjs";
import { wolff_dictionary_text_cache } from "./wolff_dictionary_text_cache.mjs";
export async function wolff_dictionary_parsed() {
  "Wolff's dictionary read as a page rather than as a run of characters, ready to be asked for its entries.";
  "It goes through the reader the rest of the repo parses pages with, rather than cutting the entries out by hand between one marker and the next. A dictionary is markup all the way down - a headword is bold, a part of speech is italic, a cross-reference is a small-caps link - and every one of those is a thing to ask a parser for and a thing to guess wrong at by hand.";
  "The reading is held for as long as the program runs and no longer. Nine megabytes of page becomes a shape in memory that no file could hold, so what is kept on disk is the page and what is kept here is the reading of it - and a second caller in the same run is spared repeating a parse that takes seconds.";
  async function parse() {
    let text = await wolff_dictionary_text_cache();
    let parsed = await html_parse(text);
    return parsed;
  }
  let r = await invoke_cache_global(parse, []);
  return r;
}
