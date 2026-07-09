import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_gloss_bible_generate_generic_prompt_user_middle(language) {
  let r = text_combine_multiple([
    'Here is the ',
    language,
    ' passage to output English glosses for: ',
  ]);
  return r;
}
