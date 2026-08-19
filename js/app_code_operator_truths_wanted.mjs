export function app_code_operator_truths_wanted(symbol, want_true) {
  arguments_assert(arguments, 2);
  ("a pair of truth values to stand either side of a given operator so that it comes out true, or comes out false, whichever was asked for: || with false asked for gives back false and false");
  ("The sibling of the one that chooses two numbers for a comparison, and it works the same way: nothing here reasons about the symbol at all. Every pair of a true and a false is tried against the operator's own working out, and the ones that answer the way the caller asked are the ones to choose between.");
  ("Written out as rules instead, && and || would each need their own list of the pairs that make them true and the pairs that make them false - four small lists to keep right, saying again what the operators already say themselves, and a third operator of this kind would need a fifth and a sixth.");
  ("One of the fitting pairs is drawn rather than the first taken, because a lesson asking for a false || would otherwise show the same two sides false every time, and one asking for a true && has only one pair to give whatever it does.");
  let both = [true, false];
  let pairs = [];
  function left_each(left) {
    "every pair is a true or a false on the left with a true or a false on the right";
    function right_each(right) {
      "one pair, kept when the operator itself says it answers the way the caller asked";
      let value = app_code_operator_solve(left, symbol, right);
      let wanted = equal(value, want_true);
      if (wanted) {
        let pair = [left, right];
        list_add(pairs, pair);
      }
    }
    each(both, right_each);
  }
  each(both, left_each);
  let truths = list_random_item(pairs);
  return truths;
}
