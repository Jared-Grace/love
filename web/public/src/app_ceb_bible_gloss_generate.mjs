import { g_objection_generate_property } from "../../../love/public/src/g_objection_generate_property.mjs";
import { g_sermon_generate_book_generic } from "../../../love/public/src/g_sermon_generate_book_generic.mjs";
export async function app_ceb_bible_gloss_generate() {
  let bible_folder = "engbsb";
  let book_code = "JAS";
  const prompt_system = `You will be given a Bible passage and its context in Cebuano.

For each Cebuano word, output:

- an English gloss

- a simple explanation of the word’s meaning and grammar (including prefixes, suffixes, or markers), written for an English speaker with no background in grammar

- when it adds clarity, explain the word’s meaning or function in the context of this passage (for example, how it contributes to authorship, audience, tone, or letter structure).

Apply this contextual explanation consistently to all words, even function words, as appropriate.
Keep explanations clear, concrete, and non-technical.

Output format:
[{"ceb":"CEBUANO_WORD","gloss":"ENGLISH_GLOSS","explain":"FULL_EXPLANATION"}, ...]

"CEBUANO_WORD" should include any punctuation before or after a word.

The original language and English translation are provided only as reference.`;
  const prompt_user_middle =
    "Here is the passage to output English glosses and explanations for: ";
  let fn = app_ceb_bible_gloss_generate;
  let property_name = g_objection_generate_property();
  await g_sermon_generate_book_generic(
    ["cebulb", bible_folder],
    book_code,
    fn,
    prompt_user_middle,
    prompt_system,
    property_name,
  );
}
