import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_template_comment_text } from "./js_template_comment_text.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export function js_prose_template_sentences(ast) {
  arguments_assert(arguments, 1);
  ("Every sentence in one file that was written with backticks so a name could stand in a gap in it, read out as plain words.");
  ("It is the third way a paragraph hides from the reader that gathers explanations by reading lines, and the one that will keep arriving, because it is the shape this repo tells a writer to reach for when the sentence has to hold a name. A line beginning with a backtick is not a line beginning with a quote, so the line reader passes over the whole paragraph however it is laid out.");
  ("A statement that is nothing but a template does no work at all, which is what makes it safe to read every one of them as a paragraph. Anything a template is really being used for - a piece of text being built - is a value handed to something, and a value is not a statement.");
  ("Turning the gaps back into words is asked of the one that already knows how, so a name written as a reference comes back as the name and anything else is left out. That reader was written for putting a comment back as an ordinary string; the question it answers is the same one.");
  let sentences = [];
  for (let node of js_list_type_nodes(ast, "ExpressionStatement")) {
    let expression = property_get(node, "expression");
    let template_is = js_node_type_is(expression, "TemplateLiteral");
    if (not(template_is)) {
      continue;
    }
    let sentence = js_template_comment_text(expression);
    list_add(sentences, sentence);
  }
  return sentences;
}
