import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_dollar_choice_argument_names } from "./js_dollar_choice_argument_names.mjs";
import { js_dollar_choices } from "./js_dollar_choices.mjs";
import { js_record_parameter_names } from "./js_record_parameter_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function js_dollar_choices_parameters_unknown() {
  arguments_assert(arguments, 0);
  ("Every dollar-macro that asks for something the expander does not hand it, named beside the words it asks for in vain.");
  ("A macro is handed one record and unpacks the names it wants out of it. Nothing checks the two lists against each other, and nothing can: a name unpacked out of a record is not a caller of anything, so a rename of what the expander puts in cannot follow it, and the name that is no longer sent simply arrives as nothing.");
  ("What that costs is the whole macro rather than one line of it. The nothing is not noticed where it lands - it is carried into whatever the macro does with it, and comes out as a complaint about converting nothing to an object, from a line that looks fine. Nine of them stood dead this way, and no gate could go red over it, because a macro only ever runs when somebody types one and a person typing one reads the failure as their own mistake.");
  ("Both lists are read rather than written down here. The expander's list is the record it builds, and each macro's list is what it unpacks - so a name added or dropped on either side is seen the moment it changes, and this cannot fall out of step with the thing it is checking.");
  ("Only the macros the expander actually reaches are asked. A helper further in may well take the same names one at a time, fed by hand from a macro that has them, and what it calls its own parameters is nobody's contract.");
  ("How many were read is handed back beside them, and it is counted up as the reading goes rather than taken from the length of the list of macros. The two are not the same number: one that does not unpack a record at all is passed over, and a reading that reached nothing would otherwise report the same figure as one that reached them all.");
  let allowed = await js_dollar_choice_argument_names();
  let choices = js_dollar_choices();
  let read = 0;
  let rows = [];
  for (let choice of choices) {
    let fn = property_get(choice, "fn");
    let f_name = fn.name;
    let parsed = await function_parse_declaration(f_name);
    let declaration = property_get(parsed, "declaration");
    let names = js_record_parameter_names(declaration);
    if (null_is(names)) {
      continue;
    }
    read = add(read, 1);
    let unknown = [];
    for (let name of names) {
      let known_is = list_includes(allowed, name);
      if (not(known_is)) {
        list_add(unknown, name);
      }
    }
    let none_is = list_empty_is(unknown);
    if (none_is) {
      continue;
    }
    let word = property_get(choice, "name");
    list_add(rows, {
      word,
      f_name,
      unknown,
    });
  }
  let r = {
    read,
    rows,
  };
  return r;
}
