import { text_trim } from "./text_trim.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_replace } from "./text_replace.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_comment_statement(value) {
  "One comment's words as a statement that survives being normalized. A comment that names something in snake case becomes a template literal; everything else becomes a plain string, which is how the rest of the codebase writes its comments.";
  "The split is not a matter of taste. A plain string containing a snake case name is rewritten by a later step into a comma expression so the name becomes a live reference - good for the reference, fatal for the sentence, which comes out with a word missing and the rest in fragments. A template literal is left alone by that step, so the words stay a sentence. Measured over two normalize runs: the template literal came back identical both times.";
  let trimmed = text_trim(value);
  let backslashed = text_replace(trimmed, "\\", "\\\\");
  let underscore_is = text_includes(trimmed, "_");
  if (underscore_is) {
    let ticked = text_replace(backslashed, "`", "\\`");
    let dollared = text_replace(ticked, "${", "\\${");
    let template = text_combine_multiple(["`", dollared, "`;"]);
    return template;
  }
  let quoted = text_replace(backslashed, '"', '\\"');
  let statement = text_combine_multiple(['"', quoted, '";']);
  return statement;
}
