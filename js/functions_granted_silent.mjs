import { arguments_assert } from "./arguments_assert.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { functions_prose } from "./functions_prose.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
export async function functions_granted_silent() {
  "Every command Claude may run without being asked that says nothing about what it does.";
  "These are the worst ones to leave silent, out of everything here. A function nobody calls from a command line is found by reading the code that calls it, and the call site says what it was for; a granted command is found by searching for one, and a search by meaning is the only search there is once you do not already know the name. So the ones most likely to be looked for are the ones a look cannot turn up.";
  "Ninety of the eight hundred and twenty-one granted commands were silent when this was written, and the list is only allowed to get shorter from there. Writing all ninety at once is the wrong repair - a sentence guessed from a name would be worse than the silence, because a wrong account is read and believed - so this holds the line at the newly granted instead.";
  arguments_assert(arguments, 0);
  let names = permission_grant_names();
  let prose = await functions_prose();
  let spoken = properties_get(prose);
  function silent_is(f_name) {
    let said = list_includes(spoken, f_name);
    let quiet = not(said);
    return quiet;
  }
  let silent = list_filter(names, silent_is);
  return silent;
}
