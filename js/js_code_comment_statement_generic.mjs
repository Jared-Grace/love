import { js_code_string_statement } from "./js_code_string_statement.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_identifier_segments } from "./text_identifier_segments.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { text_replace } from "./text_replace.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join } from "./list_join.mjs";
import { fn_name } from "./fn_name.mjs";
export function js_code_comment_statement_generic(value, f_names) {
  "One comment's words as a statement that survives being normalized, with every function it names turned into a live reference to that function. The names it may use are handed in rather than looked up here, so the whole index is read once for a sweep instead of once for every comment.";
  "A comment that names no function becomes a plain string, the shape the rest of the codebase comments in. A comment that names one becomes a template literal with the name substituted in, and that shape is forced, not chosen: a later step rewrites any function name sitting in the text of a string or a template into a comma expression, which makes the reference live at the cost of tearing the sentence apart. A substitution is skipped by that step, so the sentence survives whole and the reference is still live - renaming the function rewrites the comment along with the code.";
  let trimmed = text_trim(value);
  let segments = text_identifier_segments(trimmed);
  ("only names carrying an underscore are turned into references. Some fifty functions are named with a single everyday word - and, double, add, range - and those words appear in ordinary prose far more often than they name anything, so substituting them turns a sentence into a row of lookups. The same restriction is already how the pipeline's own name-to-reference step decides, and for the same reason");
  function known_is(segment) {
    let identifier = property_get(segment, "identifier");
    if (identifier) {
      let text = property_get(segment, "text");
      let underscored = text_includes(text, "_");
      if (underscored) {
        let known_name = list_includes(f_names, text);
        return known_name;
      }
    }
    return false;
  }
  let known = list_filter(segments, known_is);
  let none = list_empty_is(known);
  if (none) {
    let plain = js_code_string_statement(trimmed);
    return plain;
  }
  let pieces = [];
  function lambda(segment) {
    let text = property_get(segment, "text");
    let is = known_is(segment);
    if (is) {
      let substitution = text_combine_multiple([
        "${",
        fn_name("fn_name"),
        '("',
        text,
        '")}',
      ]);
      list_add(pieces, substitution);
      return;
    }
    let escaped_backslash = text_replace(text, "\\", "\\\\");
    let escaped_tick = text_replace(escaped_backslash, "`", "\\`");
    ("every dollar sign is escaped, not just the two characters that open a substitution. A dollar sign is a legal character in a name, so the text arrives split between segments - the dollar on one side of the boundary and the brace on the other - and a rule looking for the pair intact never finds it. Escaping the dollar alone means the pair can never form, and a lone escaped dollar in a template is just a dollar");
    let escaped = text_replace(escaped_tick, "$", "\\$");
    list_add(pieces, escaped);
  }
  each(segments, lambda);
  let empty = "";
  let joined = list_join(pieces, empty);
  let template = text_combine_multiple(["`", joined, "`;"]);
  return template;
}
