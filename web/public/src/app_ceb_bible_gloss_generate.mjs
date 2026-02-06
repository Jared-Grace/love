import { g_objection_generate_property } from "../../../love/public/src/g_objection_generate_property.mjs";
import { g_sermon_generate_book_generic } from "../../../love/public/src/g_sermon_generate_book_generic.mjs";
export async function app_ceb_bible_gloss_generate() {
  let bible_folder = "engbsb";
  let book_code = "JAS";
  const prompt_system = `You will be given a Bible passage and its context in Cebuano. For each Cebuano word, output an English gloss. Also, please output a full explanation of the Cebuano word that explains its meaning, including grammar, including prefixes, suffixes, roots and parts to an English speaker who is not knowledgeable of grammar. Explain as simply as possible, including simple words where possible. Output: [{"ceb":"CEBUANO_WORD","gloss":"ENGLISH_GLOSS","explain":"FULL_EXPLANATION"},...] . "CEBUANO_WORD" should include any punctuation before or after a word. The original language and English are provided as a reference.`;
  const prompt_user_middle =
    "Here is the passage to output English glosses for: ";
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
