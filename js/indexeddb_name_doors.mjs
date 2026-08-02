export async function indexeddb_name_doors() {
  "Every browser-database function that receives the name of a kept thing, and which of its arguments those are, as {f_name: [position]}. Read-only.";
  "Worked out from the functions themselves rather than written down. A list written down is right on the day it is written and silently wrong afterwards: somebody adds a thirteenth way into the store, the list does not hear about it, and the reading built on the list goes on passing while watching one place fewer than it says it does. Read off the parameter lists, it cannot fall behind them.";
  "Narrowed to the functions whose names begin with the browser database's own word, because the words looked for are ordinary ones and asking them of the whole repo would take every function that happens to call something a name.";
  arguments_assert(arguments, 0);
  let repo_name = repo_love_name();
  let f_names = await repo_functions_names(repo_name);
  let wanted = indexeddb_name_parameters();
  let prefix = "indexeddb_";
  let doors = {};
  for (let f_name of f_names) {
    let ours = text_starts_with(f_name, prefix);
    if (not(ours)) {
      continue;
    }
    let parsed = await function_parse_declaration(f_name);
    let declaration = property_get(parsed, "declaration");
    let params = js_function_declaration_params_names(declaration);
    let positions = [];
    let position = 0;
    for (let param of params) {
      let holds = list_includes(wanted, param);
      if (holds) {
        list_add(positions, position);
      }
      position = add(position, 1);
    }
    let none = list_empty_is(positions);
    if (none) {
      continue;
    }
    property_set(doors, f_name, positions);
  }
  return doors;
}
