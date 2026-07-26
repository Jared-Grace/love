export async function functions_fn_name_literals_unresolved() {
  "every fn_name(\"X\") literal in the repo whose X names no live function - the string";
  "was written to survive a rename, so a name that resolves to nothing is either a typo";
  "or a rename that got away, and nothing else in the repo would ever say so out loud.";
  "A plain string cannot fail at import time the way a missing import does, so the wrong";
  "name travels all the way to the call that uses it and only then behaves as if absent.";
  let candidates = await functions_names();
  let love = await repo_functions_names("love");
  let offenders = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let ast = property_get(parsed, "ast");
    let unresolved = [];
    function lambda({ args }) {
      let first = fn_name_arg_get(args, name);
      let value = property_get(first, "value");
      let known = list_includes(candidates, value);
      if (not(known)) {
        list_add(unresolved, value);
      }
    }
    js_visit_calls_named(ast, fn_name.name, lambda);
    let any = greater_than(unresolved.length, 0);
    if (any) {
      list_add(offenders, {
        name,
        unresolved,
      });
    }
  }
  return offenders;
}
