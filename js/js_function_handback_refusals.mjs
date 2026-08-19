import { property_equals_not } from "./property_equals_not.mjs";
import { js_function_declaration_statements_deep } from "./js_function_declaration_statements_deep.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { js_statement_await_own_is } from "./js_statement_await_own_is.mjs";
import { and } from "./and.mjs";
import { js_function_rebound_names_deferred } from "./js_function_rebound_names_deferred.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_lift_wrapper_refusals } from "./js_function_lift_wrapper_refusals.mjs";
import { js_function_nested_lift_reading } from "./js_function_nested_lift_reading.mjs";
import { js_function_return_own_is } from "./js_function_return_own_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function js_function_handback_refusals(ast, declaration) {
  arguments_assert(arguments, 2);
  ("Every reason there is not to move this function's body out and have it hand its writes back, leaving the name behind on a few lines that call it and put what comes back where the writes used to go. Empty means there is none.");
  ("The move next door turns a function down for writing to a name it reached out for, because a parameter would only be a copy and the write would stop reaching the line waiting to read it. This is the answer to that refusal rather than another way of making it, so the one thing that stops the move next door is the one thing this needs in order to have anything to do - and a function with no such write is turned down here and sent there.");
  ("Measured across the whole repo on 2026-08-18, that one refusal was fifty-nine of the sixty-seven a walk of the oversize functions ran into. Every other shape the move next door cannot keep the meaning of, this one cannot either, so they are asked for once and kept rather than written out a second time - a second copy would drift, and the drift would read as this move promising something the other one knows better about.");
  ("Two reasons are asked here and nowhere else, and both are about when a write actually happens rather than whether one is made at all. A write made from inside a function written within this one lands whenever that inner function is called, and this one has handed its writes back long before. A write made before this one waits on something lands before the wait, and the handing back only comes after it - so anything that runs during the wait reads the old value where it used to read the new one. Nothing else in the repo distinguishes any of this, because the move next door refuses every closed-over write outright and so never has to ask when it happens.");
  ("One reason is asked here and nowhere else. What comes back has to carry the writes, so the line left behind can only put them where they go once it has been handed them - and a body that hands an answer back part way through never reaches the handing back at all. The writes would then be made on a copy and lost, silently, which is the whole failure this move exists to avoid. A body like that can still be moved; somebody has to decide what its answer and its writes should look like arriving together.");
  let refusals = await js_function_lift_wrapper_refusals(ast, declaration);
  function written_closed_not_is(refusal) {
    let other_is = property_equals_not(refusal, "reason", "written_closed");
    return other_is;
  }
  let kept = list_filter(refusals, written_closed_not_is);
  let reading = await js_function_nested_lift_reading(ast, declaration);
  let written_closed = property_get(reading, "written_closed");
  let nothing_written_is = list_empty_is(written_closed);
  if (nothing_written_is) {
    list_add(kept, {
      reason: "nothing_written",
      why: "this function writes to nothing it reached out for, so there is nothing for it to hand back and these lines would only be a longer way of saying what the plain move next door says in one. Would you like that one instead?",
    });
  }
  ("What the move costs is fixed and knowable before it runs: the lines left behind are one call and one taking for each write, so a body of a given length comes back as one plus however many names it writes. A body no longer than that is replaced by something the same length or longer, and the only thing that has happened is that a reader now has two files to open instead of one. The first thing this move leaves behind is a body of exactly that shape, so without this the walk offers its own leavings back to itself for ever, and the only thing stopping it is the name already being spoken for.");
  let deep = js_function_declaration_statements_deep(declaration);
  let size = list_size(deep);
  let written_count = list_size(written_closed);
  let left_behind = add(written_count, 1);
  let shorter_not_is = less_than_equal(size, left_behind);
  if (shorter_not_is) {
    list_add(kept, {
      reason: "nothing_shorter",
      why: "what this move leaves behind is one call and one line for each name written, and this function is already no longer than that - so moving it would trade a short piece here for a piece the same length somewhere else, and leave a reader two files to open where there was one.",
      size,
      left_behind,
    });
  }
  let deferred = js_function_rebound_names_deferred(declaration);
  let deferred_closed = list_intersection(deferred, written_closed);
  let deferred_is = list_empty_not_is(deferred_closed);
  if (deferred_is) {
    list_add(kept, {
      reason: "written_later",
      why: "this function writes to a name it reached out for from inside a function written within it - a handler it installs, a callback it hands on - so that write happens whenever that inner function is called, which may be long after this one has finished and handed its writes back. Moving it out would leave the write landing on the parameter the moved body was handed, and the line outside waiting to read it reading the old value for ever, with nothing going red. Would you like the inner function pulled out first?",
      deferred_closed,
    });
  }
  let block = property_get(declaration, "body");
  let waits_is = js_statement_await_own_is(block);
  let written_any_is = list_empty_not_is(written_closed);
  let waiting_is = and(waits_is, written_any_is);
  if (waiting_is) {
    list_add(kept, {
      reason: "written_awaiting",
      why: "this function waits on something on a line of its own, and it writes to a name it reached out for. Every write would move to after the last wait, because that is where the handing back is - so while it waits, anything else that runs would go on reading the value from before the write, where today it reads the one after. Would you like the waiting part moved out on its own first?",
      written_closed,
    });
  }
  let handed_back_is = js_function_return_own_is(declaration);
  if (handed_back_is) {
    list_add(kept, {
      reason: "returns_own",
      why: "this function hands an answer back of its own, and what comes back has to carry the writes as well, so the two would have to travel together and be taken apart again by the line left behind. That is a shape somebody should choose rather than one this should choose for them.",
      written_closed,
    });
  }
  return kept;
}
