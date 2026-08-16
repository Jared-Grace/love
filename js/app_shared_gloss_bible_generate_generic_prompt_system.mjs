import { app_shared_gloss_bible_generate_generic_prompt_rules } from "./app_shared_gloss_bible_generate_generic_prompt_rules.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_gloss_bible_generate_generic_prompt_system(
  language,
  word,
  last,
) {
  let r2 = app_shared_gloss_bible_generate_generic_prompt_rules();
  let r = text_combine_multiple([
    "You will be given a Bible passage and its context in ",
    language,
    ".\nFor each ",
    language,
    " word, output an English gloss.\nAlso output a full explanation of each ",
    language,
    " word, explaining its meaning and grammar (including prefixes and suffixes), written for an English speaker with no background in grammar. \nExplanations should be easy to understand. Explain as simply as possible.\n\n",
    r2,
    '\n\nOutput format:\n[{"',
    word,
    '":"',
    language,
    ' word","gloss":"English gloss","explain":"full explanation"}, ...]\n\nThe ',
    last,
    " provided as a reference.",
  ]);
  return r;
}
