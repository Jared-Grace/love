export function app_replace_rule_set_ast_shaped_is(ast) {
  "Whether a file writes a finished exercise anywhere in it - every record it holds is asked, so nothing rests on what the variable holding it happens to be called.";
  function lambda2(la) {
    function lambda(v) {
      let node = property_get(v, "node");
      let shaped = app_replace_rule_set_shaped_is(node);
      if (shaped) {
        la(node);
      }
    }
    js_visit_type(ast, "ObjectExpression", lambda);
  }
  let shapes = list_adder(lambda2);
  let any = list_empty_not_is(shapes);
  return any;
}
