export function app_code_comparison_operands_wanted(symbol, want_true) {
  arguments_assert(arguments, 2);
  ("two numbers to stand either side of a given comparison so that the comparison comes out true, or comes out false, whichever was asked for: >= with false asked for gives back a smaller number and a larger one");
  ("A lesson choosing its own numbers has to know what each comparison means all over again - which way round <= wants them, that !== will take any two that differ, that === wants one number twice. Six operators and two answers each is twelve small rules to get right in every lesson that asks, and the operator itself already knows all of them.");
  ("So nothing here reasons about the symbol at all. Every second number is tried against the operator's own working out, and the ones that come out the way the caller asked are the ones to choose between. A comparison added to the language is served by this without a line being changed.");
  ("The left number is drawn from 3 up so that there is always a smaller number left to reach for, and the second numbers reach past it on both sides, so no comparison and no answer can be asked for and find nothing that fits.");
  ("Both numbers stay at 2 or above, because each of them is about to be written out as a small piece of arithmetic and there is no arithmetic on small whole numbers that comes to less than 2.");
  let left = integer_random(3, 9);
  let candidates = range_from(2, 12);
  function lambda(right) {
    "a second number is a fitting one when the operator itself says the pair answers the way the caller asked";
    let value = app_code_operator_solve(left, symbol, right);
    let wanted = equal(value, want_true);
    return wanted;
  }
  let fitting = list_filter(candidates, lambda);
  let right = list_random_item(fitting);
  let operands = {
    left,
    right,
  };
  return operands;
}
