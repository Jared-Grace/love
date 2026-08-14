import { list_included_in_is } from "./list_included_in_is.mjs";
export function app_code_quiz_variation_buildable_is(
  variation,
  tokens_offered,
) {
  "True when every token in an accepted ordering is one the learner has a button for. An ordering that is not buildable can never be pressed, so it is neither an answer nor a fault.";
  "It is worth its own name because two callers have to agree on it exactly. The quiz drops the unbuildable orderings so the learner cannot start one and dead-end - a swap across a non-commutative neighbour introduces a bracket the answer never had, and there is no bracket button for it. A gate asking whether the quiz is too lenient has to drop the same ones, or it reports faults in orderings nobody could ever have pressed.";
  let buildable = list_included_in_is(variation, tokens_offered);
  return buildable;
}
