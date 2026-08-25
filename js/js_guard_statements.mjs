export function js_guard_statements(
  test_fn_name,
  tested_name,
  bound_name,
  returned_name,
) {
  "The two lines a guard is made of, built from four names alone - one binding a name to a call asking the question, and one handing something back when the answer is yes.";
  "A GUARD WAS THE ONE SHAPE NOTHING COULD WRITE. The commands that add a line to a body write a call to a named function, or a sentence of prose, and a guard is neither: it is a name bound, a test of that name, and a way out. Read off the commits, adding one was a hand edit every time - which is the whole reason this exists rather than a note somewhere saying to be careful.";
  "NOTHING HANDED IN MAY BE A LINE OF CODE, and that is settled by reading the tree back rather than by looking at the words. The four are dropped into the two lines, the lines are parsed, and the shapes are checked against what a guard is; a word carrying more than a name comes out a different shape and stops there.";
  "THE ONE WORD THAT NEED NOT BE A NAME IS the one handed back, which may also be the word for nothing, because a reading that answers with nothing is the commonest thing a guard in this repo guards and refusing that word would leave the shape half covered.";
  "NOTHING IS WRITTEN HERE. The lines are handed back for a caller to put where it wants them.";
  arguments_assert(arguments, 4);
  let bound_code = text_combine_multiple([
    "let ",
    bound_name,
    " = ",
    test_fn_name,
    "(",
    tested_name,
    ");",
  ]);
  let binding = js_parse_statement(bound_code);
  let guard_code = text_combine_multiple([
    "if (",
    bound_name,
    ") { return ",
    returned_name,
    "; }",
  ]);
  let guard = js_parse_statement(guard_code);
  js_guard_statements_shape_assert(binding, guard);
  let statements = [binding, guard];
  return statements;
}
