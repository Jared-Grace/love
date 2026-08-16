import { arguments_assert } from "./arguments_assert.mjs";
import { function_params_plain_ast } from "./function_params_plain_ast.mjs";
import { permission_plain_marker } from "./permission_plain_marker.mjs";
import { property_equals } from "./property_equals.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { permission_grant_words_unsafe } from "./permission_grant_words_unsafe.mjs";
import { text_includes } from "./text_includes.mjs";
export function permission_grant_refusals_parameters(
  ast,
  params,
  refusals,
  unaliased,
) {
  arguments_assert(arguments, 4);
  ("Every reason to refuse a grant that is read off the function's own parameter list, added to the list of reasons already gathered.");
  ("A word inside a parameter's name is a guess about what the parameter holds, and the guess is wrong often enough to matter - chapter_code holds a Bible chapter identifier, not source text. Reading the shape of the name instead would loosen the check for every function nobody has looked at, so the function declares the exception itself and an unmarked parameter is still refused.");
  ("A parameter can be written as a pattern rather than as a name, and reading a name off one threw rather than answering. Twenty-eight live functions are written that way, so asking whether any of them may be granted crashed the one tool that stands before a rule is written - and a crash is not a refusal, it is no answer at all. What is taken apart inside a pattern cannot be read off the parameter list, so the honest answer is that this check cannot see what the parameter holds, which is a reason to refuse rather than a reason to pass.");
  let plain = function_params_plain_ast(ast);
  let plain_prefix = permission_plain_marker();
  for (let p of params) {
    let named = property_equals(p, "type", "Identifier");
    if (not(named)) {
      list_add(
        refusals,
        unaliased +
          " takes a parameter written as a pattern rather than a name, so nothing here can read what it carries — give it a plain name and the check can answer",
      );
      continue;
    }
    let p_name = property_get(p, "name");
    let declared = list_includes(plain, p_name);
    if (declared) {
      continue;
    }
    ("The refusal says how to lift it, because for the commonest case the lifting is the whole answer. A hundred and forty-one live functions are refused on this reason alone and every one of them names a Bible chapter or book, which is a code the way a shell script is a code, which is to say not at all. The reader was being told a fact and left to find out on their own that the function may simply say what the parameter holds - so the fact travelled and the repair did not.");
    for (let word of permission_grant_words_unsafe()) {
      let matches = text_includes(p_name, word);
      if (matches) {
        list_add(
          refusals,
          "the parameter " +
            p_name +
            " reads as a " +
            word +
            ", and one grant covers every argument the function is ever handed — if it holds ordinary data, have the function say so in its own words with " +
            plain_prefix +
            p_name,
        );
      }
    }
  }
}
