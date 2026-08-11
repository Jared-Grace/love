export function functions_app_import_advice_curried(sentence) {
  arguments_assert(arguments, 1);
  ("A way of making a gate's complaint out of the lines it is complaining about: the gate's own sentence about what the whole fault is, and under it one line per name saying what to do about that name in particular.");
  ("Both records of this fault want the same thing said in the same shape, and each wants its own first sentence, because one is about code belonging to no app reaching into one and the other is about one app reaching into another. So the sentence is what is given here and everything else is shared.");
  async function hint_get(added) {
    let advice = await functions_app_import_advice(added);
    let r = list_join_newline([sentence, advice]);
    return r;
  }
  return hint_get;
}
