import { property_list_first } from "./property_list_first.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { js_flo } from "./js_flo.mjs";
import { assert_json } from "./assert_json.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { function_params_new_generic } from "./function_params_new_generic.mjs";
export async function function_param_object_property_new(
  f_name,
  property_name,
  value_default,
) {
  arguments_assert(arguments, 3);
  ("Gives a function whose one parameter is an object taken apart in its list - function f({a, b}) - one more name taken out of it, and puts that name, with value_default, into the object every call that already exists hands in.");
  ("Refuses a function whose first parameter is not taken apart that way, and a call that hands in anything but an object written out in place, because there is nowhere to put the new name without guessing.");
  function property_first(code) {
    let expression = js_parse_expression(code);
    let property = property_list_first(expression, "properties");
    return property;
  }
  function function_transform_current_lambda(ast) {
    let declaration = js_flo(ast);
    let pattern = property_list_first(declaration, "params");
    let type = property_get(pattern, "type");
    let b = equal(type, "ObjectPattern");
    assert_json(b, {
      f_name,
      type,
    });
    let pattern_properties = property_get(pattern, "properties");
    let shorthand = property_first("({" + property_name + "})");
    list_add(pattern_properties, shorthand);
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
    let property = property_first(
      "({" + property_name + ": " + value_default + "})",
    );
    list_add(object_properties, property);
  }
  await function_params_new_generic(
    function_transform_current_lambda,
    on_call,
    f_name,
  );
}
