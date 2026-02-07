import { string_upper_to } from "../../../love/public/src/string_upper_to.mjs";
import { ebible_folder_cebuano } from "../../../love/public/src/ebible_folder_cebuano.mjs";
import { app_ceb_bible_gloss_generate_property } from "../../../love/public/src/app_ceb_bible_gloss_generate_property.mjs";
import { g_sermon_generate_book_generic } from "../../../love/public/src/g_sermon_generate_book_generic.mjs";
export async function app_ceb_bible_gloss_generate() {
  let bible_folder = "engbsb";
  let book_code = "JAS";
  let language = "Cebuano";
  let u = string_upper_to(s);
  const prompt_system = `You will be given a Bible passage and its context in ${language}.
For each ${language} word, output an English gloss.
Also output a full explanation of each ${language} word, explaining its meaning and grammar (including prefixes and suffixes), written for an English speaker with no background in grammar. 
Explanations should be easy to understand. Explain as simply as possible.

Output format:
[{"ceb":"${language}_WORD","gloss":"ENGLISH_GLOSS","explain":"FULL_EXPLANATION"}, ...]

"CEBUANO_WORD" should include any punctuation before or after a word.
The original language and English are provided as a reference.`;
  const prompt_user_middle =
    "Here is the passage to output English glosses for: ";
  let fn = app_ceb_bible_gloss_generate;
  let property_name = app_ceb_bible_gloss_generate_property();
  let c = ebible_folder_cebuano();
  await g_sermon_generate_book_generic(
    [c, bible_folder],
    book_code,
    fn,
    prompt_user_middle,
    prompt_system,
    property_name,
  );
}
