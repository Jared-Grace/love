import { js_literal_text_is } from "./js_literal_text_is.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
export function js_node_writing_inside_is(node) {
  "Whether a piece of writing is written out anywhere inside this piece of a line - the He inside \"He\" + \" gave\" is one, and nothing in 44 / 4 is.";
  "Asked because a plus means two different things. Between numbers it may be moved about freely, and 1 + 2 and 2 + 1 are the same sum written twice. Joining writing it may not: He and gave joined the other way round is a different sentence, and an unscramble that swapped them would mark a learner right for saying something else.";
  "The question is put this way round - is there writing in here - rather than as is this all numbers, because a name is the common case and nobody can say what a name holds until the line runs. Read the hopeful way a name would have to count as writing, and n + 1 would stop being the same sum as 1 + n, which is a right answer a learner would be marked wrong for. Read this way a name is let through, and the only thing that shuts the door is writing actually present in the line.";
  let writing = false;
  function on_literal(found) {
    let text_is = js_literal_text_is(found);
    if (text_is) {
      writing = true;
    }
  }
  on_literal(node);
  js_visit_type_node(node, "Literal", on_literal);
  return writing;
}
