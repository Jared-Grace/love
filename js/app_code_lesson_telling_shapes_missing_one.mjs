import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_source_line_shapes } from "./app_code_lesson_source_line_shapes.mjs";
import { app_code_lesson_telling_missing_generic } from "./app_code_lesson_telling_missing_generic.mjs";
export async function app_code_lesson_telling_shapes_missing_one(
  root,
  roots,
  names,
) {
  arguments_assert(arguments, 3);
  ("the ways of shaping a line that one lesson's question bank writes and its telling never shows, or null when the telling shows them all.");
  ("The finer twin of the check that holds operator SYMBOLS against the telling, and the two are held against the same split of the lesson into its halves - literally the same, now that both hand the reading of a file to the one place that does the holding. Symbols are the coarsest thing that goes wrong this way; a shape is the next thing down, and it catches what symbols cannot: a telling and a bank writing the very same operators, one of them bracketed and the other flat, or the value on one side and then the other.");
  ("This is the check the reported fault actually needed. A person read lesson eighty-nine, saw false !== (3 === 3) explained and 2 !== 2 === false asked, and named the two differences themselves: the brackets had gone, and the false had moved to the other side. Both lines write === and !== and nothing else, so the symbol check passes them, and the whole of what the learner is stuck on is what the symbol check cannot see.");
  function source_line_shapes_read(source) {
    let shapes = app_code_lesson_source_line_shapes(source);
    return shapes;
  }
  let report = await app_code_lesson_telling_missing_generic(
    root,
    roots,
    names,
    source_line_shapes_read,
  );
  return report;
}
