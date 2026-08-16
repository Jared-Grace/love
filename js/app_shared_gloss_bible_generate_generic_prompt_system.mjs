import { gloss_entries_key } from "./gloss_entries_key.mjs";
import { app_shared_gloss_bible_generate_generic_prompt_rules } from "./app_shared_gloss_bible_generate_generic_prompt_rules.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_gloss_bible_generate_generic_prompt_system(
  language,
  word,
  last,
  language_reader,
) {
  "The instructions handed to an assistant ahead of a Bible passage, asking it for a gloss of every word in the passage's own language and a plain explanation of that word's meaning and grammar, both written in the reader's own language, answered as one JSON object.";
  "The passage's language and the reader's are two separate settings because they are two separate people's languages, and only the apps written first happened to gloss a foreign passage for an English reader. An app teaching English to an Urdu speaker wants the opposite pair, and nothing else about the asking changes.";
  let r2 = app_shared_gloss_bible_generate_generic_prompt_rules();
  let r3 = gloss_entries_key();
  let r = text_combine_multiple([
    "You will be given a Bible passage and its context in ",
    language,
    ".\nFor each ",
    language,
    " word, output an ",
    language_reader,
    " gloss.\nAlso output a full explanation of each ",
    language,
    " word, explaining its meaning and grammar (including prefixes and suffixes), written for an ",
    language_reader,
    " speaker with no background in grammar. \nExplanations should be easy to understand. Explain as simply as possible.\n\n",
    r2,
    '\n\nOutput ONLY a JSON object, in exactly this format, holding one item per word of the passage:\n{"',
    r3,
    '": [{"',
    word,
    '":"',
    language,
    ' word","gloss":"',
    language_reader,
    ' gloss","explain":"full explanation"}, ...]}\n\nThe ',
    last,
    " provided as a reference.",
  ]);
  return r;
}
