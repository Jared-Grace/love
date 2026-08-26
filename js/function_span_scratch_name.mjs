import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
export function function_span_scratch_name(f_name) {
  arguments_assert(arguments, 1);
  ("The name a run of lines is cut out under while it is being held up against a function that already exists.");
  ("It is never meant to survive the command that makes it. The cut has to become a function before anything can read it, and the reading decides whether the run is put back exactly as it was or pointed at the function it matched - so the name only has to be one nothing else answers to, and one a reader coming across it knows to be halfway through something.");
  ("Built from the name of the function the run was living in, so two commands running at once on different functions cannot land on the same word.");
  let scratch = text_combine(f_name, "_span_scratch");
  return scratch;
}
