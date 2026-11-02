import { property_list_first } from "./property_list_first.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
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
import { function_transform } from "./function_transform.mjs";
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
    ", which refuses a name already taken there. That rename leaves the keys of any object the function writes alone - a name it hands on under the same name keeps the old key, written out as old: new - because the far end still answers to the old key; renaming that key is a rename of the far end's parameter, done there.");
  ("Refuses a function whose first parameter is not taken apart that way, and a call that hands in anything but an object written out in place. A call that leaves the name out is left alone, since there is nothing in it to rename.");
  function property_has_name(name) {
    function lambda(property) {
      let key = property_get(property, "key");
      let eq = property_equals(key, "name", name);
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
    let pattern = property_list_first(declaration, "params");
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
  ("The name in the list is written short again once what it is read into carries the same name, so the list reads as it did before");
  function on_declaration_short(ast) {
    let declaration = js_flo(ast);
    let params = property_get(declaration, "params");
    let pattern_properties = list_first_property(params, "properties");
    let lambda$item3 = property_has_name(property_name_after);
    let property = list_find(pattern_properties, lambda$item3);
    object_assign(property, {
      shorthand: true,
    });
  }
  await function_transform(f_name, on_declaration_short);
}
