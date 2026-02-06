import { g_objection_generate_property } from "../../../love/public/src/g_objection_generate_property.mjs";
import { g_sermon_generate_book_generic } from "../../../love/public/src/g_sermon_generate_book_generic.mjs";
export async function app_ceb_bible_gloss_generate() {
  let bible_folder = "engbsb";
  let book_code = "JAS";
  const prompt_system = `You will be given a Bible passage and its context in Cebuano. For each Cebuano word, output an English gloss. Each gloss should be a string in a JSON array.`;
  const prompt_user_middle =
    "Here is the passage to output English glosses for:";
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
