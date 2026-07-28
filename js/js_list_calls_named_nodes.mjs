export function js_list_calls_named_nodes(ast, f_name) {
  "Every place a name is called, in the order they are written.";
  "The walker hands back its own record of each place — where it sat, what";
  "enclosed it — and every caller here wants only the call itself, so the";
  "unwrapping happens once here rather than at each of them.";
  function lambda(la) {
    js_visit_calls_named_nodes(ast, f_name, la);
  }
  let list = list_adder(lambda);
  return list;
}
