export function js_function_declaration_param_name_index(
  declaration,
  parameter_name,
) {
  "which parameter slot of this function holds the plain name parameter_name";
  "one entry per slot rather than one per name bound. an unpacked parameter answers with nothing and still takes its place, so a plain name standing after one is found at the place a call site really hands its argument to - counting names instead would point one slot too far along for every name the unpacking added";
  let params = js_function_declaration_params_get(declaration);
  let slots = list_map(params, js_identifier_name_try);
  let index = list_index_of(slots, parameter_name);
  return index;
}
