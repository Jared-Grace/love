import { js_visit_type } from "./js_visit_type.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_is } from "./text_is.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
export function js_address_fused_words(ast, words) {
  "Every place one of the given words is written into the middle of a joined-up address instead of being read off the function that holds it - the shape a link takes when somebody builds it by hand, where the word sits between a separator and an equals sign and so is part of a longer string that no reading of arguments can see.";
  "Prose is left out. A docstring is a string standing alone as a statement, and one that describes a link naturally spells the link out; flagging that would ask somebody to reword an explanation to satisfy a check, which is the opposite of what this is for.";
  let prose = [];
  function on_statement(node) {
    let expression = property_get(node, "expression");
    list_add(prose, expression);
  }
  js_visit_type(ast, "ExpressionStatement", on_statement);
  let marks = ["?", "#", "&", ","];
  let found = [];
  function on_literal(node) {
    let described = list_includes(prose, node);
    if (described) {
      return;
    }
    let text = property_get(node, "value");
    let written = text_is(text);
    if (not(written)) {
      return;
    }
    function on_word(word) {
      function on_mark(mark) {
        let needle = mark + word + "=";
        let fused = text_includes(text, needle);
        if (fused) {
          list_add(found, {
            word,
            text,
          });
        }
      }
      each(marks, on_mark);
    }
    each(words, on_word);
  }
  js_visit_type(ast, "Literal", on_literal);
  return found;
}
