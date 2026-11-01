import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { object_assign } from "./object_assign.mjs";
import { js_flo } from "./js_flo.mjs";
import { list_first } from "./list_first.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_find } from "./list_find.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { function_params_new_generic } from "./function_params_new_generic.mjs";
import { function_identifier_rename_checked } from "./function_identifier_rename_checked.mjs";
export async function function_param_object_property_rename(
  f_name,
  property_name,
  property_name_after,
) {
  arguments_assert(arguments, 3);
  ("Gives one of the names a function takes out of its object parameter - function f({a, b}) - a new name: in the list it is taken out of, everywhere the function reads it, and as the key of the object every call hands in.");
  ("The partner of ",
    fn_name("function_param_object_property_new"),
    ", which adds such a name; renaming is the step after two names turn out to mean one thing.");
  ("Reading it inside the function is renamed by ",
    fn_name("function_identifier_rename_checked"),
    ", which refuses a name already taken there. That rename also reaches a shorthand key the function writes into an object of its own, so a name it hands on under the same name is handed on under the new one - which is what a rename made bottom-up through a chain of builders wants, and the reason to rename the innermost builder first.");
  ("Refuses a function whose first parameter is not taken apart that way, and a call that hands in anything but an object written out in place. A call that leaves the name out is left alone, since there is nothing in it to rename.");
  function property_has_name(name) {
    function lambda(property) {
      let key = property_get(property, "key");
      let key_name = property_get(key, "name");
      let eq = equal(key_name, name);
      return eq;
    }
    return lambda;
  }
  function key_rename(property) {
    object_assign(property, {
      key: {
        type: "Identifier",
        name: property_name_after,
      },
      shorthand: false,
    });
  }
  function on_declaration(ast) {
    let declaration = js_flo(ast);
    let params = property_get(declaration, "params");
    let pattern = list_first(params);
    let type = property_get(pattern, "type");
    let b = equal(type, "ObjectPattern");
    assert_json(b, {
      f_name,
      type,
    });
    let pattern_properties = property_get(pattern, "properties");
    let lambda$item = property_has_name(property_name);
    let property = list_find(pattern_properties, lambda$item);
    key_rename(property);
  }
  function on_call(args) {
    let object = list_first(args);
    let type = property_get(object, "type");
    let b2 = equal(type, "ObjectExpression");
    assert_json(b2, {
      f_name,
      type,
    });
    let object_properties = property_get(object, "properties");
    let lambda$item2 = property_has_name(property_name);
    let property = list_find_or_null(object_properties, lambda$item2);
    if (null_is(property)) {
      return;
    }
    key_rename(property);
  }
  await function_params_new_generic(on_declaration, on_call, f_name);
  await function_identifier_rename_checked(
    f_name,
    property_name,
    property_name_after,
  );
}
