import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast_body } from "./function_ast_body.mjs";
import { property_get } from "./property_get.mjs";
import { js_statement_move_before_refusals } from "./js_statement_move_before_refusals.mjs";
import { js_statement_move_before } from "./js_statement_move_before.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_statement_move_before(
  f_name,
  address,
  address_before,
) {
  "$plain f_name";
  "$plain address";
  "$plain address_before";
  arguments_assert(arguments, 3);
  ("One line of the named function lifted up to stand above another line of it - or, where a reason says not to, that reason and nothing done.");
  ("WHY THIS EXISTS. A page here is written as a run of sections, and the thing every section closes over is made at the bottom, because making it needs what the sections built. So nothing above the bottom can be cut out into a file of its own: a cut hands its lines their names as arguments, and a name bound below them has no value to hand. Boxing the value does not help, because the box is made down there too. Moving the line that makes it up above the sections is the one edit that unsticks this, and there was no way to ask for it.");
  ("EACH END IS POINTED AT BY A NAME, the same way the two ends of a cut are: the line a name reaches is the earliest line in the body that name is written on. So a name written above the line you mean points at that earlier line instead, and the answer says so rather than moving the wrong line.");
  ("WHAT IT WILL NOT DECIDE FOR YOU. A line does more than bind a name - it may draw, send, or write into something both places can reach - and after the move it does that earlier. Nothing in the two lines says whether earlier is wrong, so that judgment stays with whoever asked, exactly as choosing a name stays with whoever asks for a run to be cut out under one.");
  ("It answers with the reasons instead of throwing, because a caller trying a move on a body it has not read wants to be told no rather than stopped. The writing next door is the one that stops.");
  ("It canonicalizes afterwards for the ordinary reason: a line that has moved may need the file read again before anything else is asked of it.");
  let read = await function_ast_body(f_name);
  let ast = property_get(read, "ast");
  let refusals = js_statement_move_before_refusals(
    ast,
    address,
    address_before,
  );
  let refused = list_empty_not_is(refusals);
  if (refused) {
    let held = {
      moved: false,
      f_name,
      address,
      address_before,
      refusals,
    };
    return held;
  }
  function lambda(ast_transform) {
    js_statement_move_before(ast_transform, address, address_before);
  }
  await function_transform(f_name, lambda);
  let r = await function_auto(f_name);
  return r;
}
