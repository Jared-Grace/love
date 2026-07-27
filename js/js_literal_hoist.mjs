export function js_literal_hoist(ast, selects, name) {
  "Gives a value written into a function a name of its own: binds it once at the top, and puts that name everywhere the value was written.";
  "This is the first half of making a function general. A value spelled out in three places is three separate decisions that happen to agree, and nothing says they must go on agreeing; bound to one name it becomes a single decision, and the name is then something a later step can turn into a parameter.";
  "Every place the same value was written is taken, not only the one that was picked. Leaving the others spelled out would be worse than doing nothing, because the function would then read as though the name stood for the value while some of it went on ignoring the name.";
  "The rewriting happens before the binding is put in, since the binding holds the value too - written the other way round it would immediately rewrite itself into naming itself.";
  let node = list_single(selects);
  let source = js_unparse(node);
  let value = js_literal_value_get(node);
  let same_value_is = equal_curried(value);
  let prose = js_prose_literal_nodes(ast);
  let literals = js_list_type_nodes(ast, "Literal");
  function written_value_is(one) {
    let commented = list_includes(prose, one);
    if (commented) {
      return false;
    }
    let each_value = js_literal_value_get(one);
    let same = same_value_is(each_value);
    return same;
  }
  let matching = list_filter(literals, written_value_is);
  function named(one) {
    let statement = js_parse_statement(name);
    let identifier = js_statement_expression_get(statement);
    object_replace(one, identifier);
  }
  each(matching, named);
  let code = js_code_let_assign(name, source);
  let binding = js_parse_statement(code);
  js_flo_body_add_first(ast, binding);
}
