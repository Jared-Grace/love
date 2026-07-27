export function js_string_literal_single_find(ast) {
  "The one string a function actually uses as a value, which is how a selector says where.";
  "Comments are left out, because in this repo a comment is a string too. A function of four explanations and one message holds five strings and means one, so counting them all would refuse every function that says anything about itself - which is all of them.";
  "Naming what was looked for is the whole of the complaint's usefulness: a function holding two strings and a function holding none fail here the same way, and told only that a list was the wrong length a reader cannot tell which happened, nor in whose code.";
  let prose = js_prose_literal_nodes(ast);
  let literals = js_list_type_nodes(ast, "Literal");
  function value_string_is(node) {
    let commented = list_includes(prose, node);
    if (commented) {
      return false;
    }
    let value = js_literal_value_get(node);
    let string_is = text_is(value);
    return string_is;
  }
  let values = list_filter(literals, value_string_is);
  let asked = {
    hint: "a selector names one place, so this function was expected to use exactly one string as a value - would you like to pick a function with one, or say which of several you meant?",
  };
  let only = list_single_message(values, asked);
  return only;
}
