export function js_statement_swap_bound_named(node_before, node_after) {
  "$plain node_before";
  "$plain node_after";
  "The name for one binding swapped for another binding, said as the name that was bound where that name stayed put, and as the bare fact of a value having moved where it did not.";
  "THE NAME OF A BINDING IS ONLY WORTH SAYING WHILE IT STAYS THE SAME. Where the value was written differently the name is the address a reader goes to; where the name changed too, saying either of them points at half the edit, so the kind is said on its own.";
  "A BINDING OF MORE THAN ONE NAME AT ONCE HAS NO ONE ADDRESS EITHER, and comes back the same way, because the reading that fetches the name gives such a binding up rather than choosing one of them.";
  arguments_assert(arguments, 2);
  let name = js_declaration_single_variable_name_try(node_before);
  let name_after = js_declaration_single_variable_name_try(node_after);
  let same_name = equal(name, name_after);
  let nameless = null_is(name);
  if (nameless) {
    let r = "one value written differently";
    return r;
  }
  if (not(same_name)) {
    let r2 = "one value written differently";
    return r2;
  }
  let said = text_combine_multiple([name, " written differently"]);
  return said;
}
