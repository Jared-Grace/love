import { song_image_kept_ast_set } from "./song_image_kept_ast_set.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_transform } from "./function_transform.mjs";
export async function song_image_kept_set(key, attempt) {
  "keeps one attempt at a couplet's drawing, writing the choice into the glosses file where the rest of the account of that couplet already lives";
  "it is here so that the choice can be made from the audit page by looking at the two pictures side by side, which is the only place the question can honestly be answered, instead of being read off the page and typed back into the file by hand afterwards - a step that was silently wrong every time somebody misread a number";
  async function lambda(ast) {
    song_image_kept_ast_set(ast, key, attempt);
  }
  let f_name = fn_name("song_image_couplet_glosses");
  await function_transform(f_name, lambda);
  let r = {
    key,
    kept: attempt,
  };
  return r;
}
