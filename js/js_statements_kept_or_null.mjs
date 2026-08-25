export function js_statements_kept_or_null(texts_before, texts_after) {
  "The statements a run still holds after an edit, in the order they stand in - or nothing at all, where the two sides cannot honestly be lined up on them.";
  "A STATEMENT WRITTEN THE SAME WAY ON BOTH SIDES DID NOT MOVE, which is the whole of what lines the two sides up. Everything that sits between one such statement and the next is where the edit happened, and a place is what a command can be pointed at where a total never is.";
  "A LINE STANDING TWICE MAKES THE LINING UP A GUESS. Two identical statements in one run give no way to say which of them the surviving one on the other side answers to, and everything worked out afterwards would rest on the guess. Nothing comes back rather than a guess dressed as an answer.";
  "SURVIVORS COMING BACK IN ANOTHER ORDER IS NOTHING TOO. The edit shuffled the run as well as changing it, and there are then no places to walk at all - what sits between two survivors on one side is not what sits between the same two on the other.";
  "The two sides are asked of each other rather than one side being trusted, because a statement is only a survivor if it stands on both, and a run that only reads the before would count a line the edit deleted.";
  arguments_assert(arguments, 2);
  function kept_before_lambda(text) {
    let held = list_includes(texts_after, text);
    return held;
  }
  function kept_after_lambda(text_after) {
    let held_after = list_includes(texts_before, text_after);
    return held_after;
  }
  let kept_before = list_filter(texts_before, kept_before_lambda);
  let kept_after = list_filter(texts_after, kept_after_lambda);
  let ordered = lists_equal_pair(kept_before, kept_after);
  if (not(ordered)) {
    return null;
  }
  let once = list_unique_is(kept_before);
  if (not(once)) {
    return null;
  }
  return kept_before;
}
