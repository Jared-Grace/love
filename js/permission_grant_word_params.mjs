import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { permission_grant_context } from "./permission_grant_context.mjs";
import { property_get } from "./property_get.mjs";
import { function_ast_memo } from "./function_ast_memo.mjs";
import { js_flo_params_get } from "./js_flo_params_get.mjs";
import { function_params_plain_ast } from "./function_params_plain_ast.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function permission_grant_word_params(word) {
  "$plain word";
  "Every function whose parameter carries one of the words that block a permission grant, without having said the parameter is ordinary data - the ones a person has to look at and judge one way or the other.";
  "the word is one of the blocking words themselves, matched inside a parameter's name; it is compared, never run, and nothing here can be steered by it";
  "A word inside a parameter's name is a guess about what the parameter holds, and the guess is wrong in one direction only. It never lets an unsafe parameter through, and it does stop a safe one - a chapter's name like PRO22 is a code the way a shell script is a code, which is to say not at all. The function says so about itself and the refusal lifts, so the only thing missing was a way to find the ones that have not said it yet.";
  "It reports what was walked beside what was found, because nothing found is the answer either when every parameter is honest or when the list of functions came back empty, and those two mean opposite things.";
  "It only ever finds and reports. Marking a parameter as ordinary is a claim about what that parameter holds, and it is true one function at a time - a sweep that wrote the marker everywhere would be loosening the check by guessing, which is the very thing the check exists to stop.";
  arguments_assert(arguments, 1);
  let context = await permission_grant_context();
  let live = property_get(context, "live");
  let parsed = property_get(context, "parsed");
  let found = [];
  let unnamed = 0;
  for (let name of live) {
    let ast = await function_ast_memo(name, parsed);
    let params = js_flo_params_get(ast);
    let plain = function_params_plain_ast(ast);
    for (let p of params) {
      ("A parameter written as a pattern rather than a name has no single name to read a word out of, so it is counted and passed over rather than guessed at. It is counted because passing over in silence is how a whole shape of parameter stops being looked at without anybody deciding that it should be.");
      let kind = property_get(p, "type");
      let named = equal(kind, "Identifier");
      if (not(named)) {
        unnamed = add(unnamed, 1);
        continue;
      }
      let p_name = property_get(p, "name");
      let declared = list_includes(plain, p_name);
      if (declared) {
        continue;
      }
      let carries = text_includes(p_name, word);
      if (carries) {
        list_add(found, {
          name,
          param: p_name,
        });
      }
    }
  }
  let r = {
    word,
    checked: list_size(live),
    unnamed,
    found,
  };
  return r;
}
