import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_try } from "./js_parse_try.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { js_statement_prose_is } from "./js_statement_prose_is.mjs";
import { not } from "./not.mjs";
export function js_text_prose_only_is(text) {
  "Whether a piece of code holds nothing but paragraphs written for a reader - one or more of them, and no line that does any work.";
  "IT ANSWERS ABOUT A PIECE, NOT A FILE. What is handed over is a run of lines lifted out of the middle of a body, which is the shape a hand edit arrives in: the words somebody is about to replace, and the words they are replacing them with. So it is read as a whole small module of its own rather than looked for inside one.";
  "NOTHING THAT WILL NOT READ IN IS COUNTED AS PROSE. A run of lines cut out of a body often will not stand on its own - half a record, the inside of a loop - and the honest answer there is no. That one-sidedness is the point: this exists to say when a named command would have done the job, and saying so wrongly sends a reader to a command that will refuse them.";
  "AN EMPTY PIECE IS NOT PROSE EITHER, because nothing is not something written for a reader, and a reading that said yes to nothing would say yes to every piece that failed to read in and came back holding no lines.";
  arguments_assert(arguments, 1);
  let ast = js_parse_try(text);
  let torn_is = null_is(ast);
  if (torn_is) {
    return false;
  }
  let statements = property_get(ast, "body");
  let empty_is = list_empty_is(statements);
  if (empty_is) {
    return false;
  }
  for (let statement of statements) {
    let prose_is = js_statement_prose_is(statement);
    if (not(prose_is)) {
      return false;
    }
  }
  return true;
}
