export function js_declaration_signature(ast) {
  "The shape of what a module's function actually does, with its own name and its comments left out. Two people solving the same small problem write the same steps and choose different words for them, so this is the form in which their two functions can be recognised as one.";
  "The name is left out because the whole point is to find the same work sitting under two names. The comments are left out because prose is where two authors differ most and it changes nothing about what runs.";
  let declaration = js_flo(ast);
  let declared = js_declared_names(ast);
  let parameters = js_function_params_all(ast);
  let bound = list_concat(declared, parameters);
  let block = property_get(declaration, "body");
  let statements = property_get(block, "body");
  function work_is(statement) {
    let expression_is = js_node_type_is(statement, "ExpressionStatement");
    if (expression_is) {
      let expression = property_get(statement, "expression");
      let comment_is = js_node_type_is(expression, "Literal");
      let work = not(comment_is);
      return work;
    }
    return true;
  }
  let work = list_filter(statements, work_is);
  ("The parameters and the work are read in one pass, so a parameter carries the same position wherever it is used. Reading them separately would start the numbering over and make a function returning its first argument look like one returning its second.");
  let params = property_get(declaration, "params");
  let together = [params, work];
  let signature = js_node_signature(together, bound);
  return signature;
}
