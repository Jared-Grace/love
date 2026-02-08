import { g_sermon_generate_book_generic } from "../../../love/public/src/g_sermon_generate_book_generic.mjs";
export async function app_ceb_bible_gloss_generate_generic(
  language,
  last,
  bible_folders,
  book_code,
  fn,
  property_name,
  language_code,
  chapter_code_specified,
) {
  const prompt_system = `You will be given a Bible passage and its context in ${language}.
For each ${language} word, output an English gloss.
Also output a full explanation of each ${language} word, explaining its meaning and grammar (including prefixes and suffixes), written for an English speaker with no background in grammar. 
Explanations should include any etymology.
Explanations should be easy to understand. Explain as simply as possible.

Output format:
[{"word":"${language} word","gloss":"english gloss","explain":"full explanation"}, ...]

The ${last} provided as a reference.`;
  const prompt_user_middle =
    "Here is the passage to output English glosses for: ";
  await g_sermon_generate_book_generic(
    bible_folders,
    book_code,
    fn,
    prompt_user_middle,
    prompt_system,
    property_name,
    chapter_code_specified,
  );
}
