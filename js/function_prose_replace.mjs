import { function_transform_auto } from "./function_transform_auto.mjs";
import { js_prose_statement_nodes } from "./js_prose_statement_nodes.mjs";
import { js_prose_statement } from "./js_prose_statement.mjs";
import { text_replace_once } from "./text_replace_once.mjs";
import { text_includes } from "./text_includes.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function function_prose_replace(f_name, text_before, text_after) {
  "Changes a run of text inside one line of what a function says about itself, naming the run rather than the line.";
  "Changing a line already had a command, and it asked for the line's number - which meant reading the account back, counting, and trusting the count. The general one that replaces text anywhere in the file asks only for text already in front of the reader, and over three days it was reached for a hundred and thirty-seven times while the numbered one was reached for twice. The aim is why, not the safety, so this is the same aim pointed somewhere it cannot do harm.";
  "Nothing handed in here can arrive as code. The new text is written into a quoted string by the same builder the numbered one uses, so quotes and newlines inside it are spelled out rather than closing the string and starting a statement. That is the whole reason this can be approved once and stop asking, where replacing text anywhere in the file never can be - there the third argument is source, and it stays in the file the repo then runs.";
  "The run has to name exactly one line and appear exactly once inside it. Both halves are told out loud rather than guessed: no line means the text has already been changed or a character differs, and more than one means the run is not yet unique and a little more of the sentence around it will part them. A replacement nobody can point at afterwards is the failure worth refusing.";
  "Only lines written as a plain quoted sentence can be reached. A line broken round a name spelled as a reference is built rather than written, and putting a new sentence in its place would throw the reference away.";
  arguments_assert(arguments, 3);
  function lambda(ast) {
    let statements = js_prose_statement_nodes(ast);
    function holds(prose) {
      let prose_expression = property_get(prose, "expression");
      let prose_said = property_get(prose_expression, "value");
      let holds_is = text_includes(prose_said, text_before);
      return holds_is;
    }
    let matched = list_filter(statements, holds);
    let lines = list_size(matched);
    equal_assert_json(lines, 1, {
      f_name,
      text_before,
      lines,
      hint: "a change to one line asks for text that sits in exactly one of them. None at all usually means the text has already been changed, or a character differs - a stray space, a different kind of quote. More than one means the run is not yet unique, and taking in a little more of the sentence around it is usually enough to tell the lines apart",
    });
    let statement = list_get(matched, 0);
    let expression = property_get(statement, "expression");
    let said = property_get(expression, "value");
    let after = text_replace_once(said, text_before, text_after);
    let written = js_prose_statement(after);
    let written_expression = property_get(written, "expression");
    property_set(statement, "expression", written_expression);
  }
  let output = await function_transform_auto(f_name, lambda);
  return output;
}
