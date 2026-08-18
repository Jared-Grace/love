export async function function_lift_nested_readings_unrefused(
  ast,
  nested,
  refusals_fn,
) {
  arguments_assert(arguments, 3);
  ("Of the functions written inside one function, those the handed-in judgement does not turn down, each with the reading that says what moving it would have to hand it.");
  ("Two of the moves that leave a name behind ask exactly this, and they differ in nothing but which judgement they ask. Written out once each, the walk that steps over a refusal, the reading asked for only once a function has come through clear, and the pair handed back together were all standing twice - and standing twice they can be improved on one side only, which is how a shared middle quietly stops being shared.");
  ("Why one would not go ahead is never decided here. It is asked of the judgement the move itself asks, so a list made this way and the move that reads it cannot disagree about a single function.");
  ("The reading is asked for only after the judgement comes back clear, because a function being turned down never needs one and the asking is the expensive part.");
  let readings = [];
  for (let declaration of nested) {
    let refusals = await refusals_fn(ast, declaration);
    let refused_is = list_empty_not_is(refusals);
    if (refused_is) {
      continue;
    }
    let reading = await js_function_nested_lift_reading(ast, declaration);
    let taken = {
      declaration,
      reading,
    };
    list_add(readings, taken);
  }
  return readings;
}
