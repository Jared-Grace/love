import { text_includes } from "./text_includes.mjs";
import { list_map } from "./list_map.mjs";
// Rebuild the typeable command from the derived alias + its args (re-quoting any
// arg that contains a space, as a shell would). The alias is the shorthand you'd
// type; the args follow it.
export function example_command_text(alias, args) {
  function quote(arg) {
    if (text_includes(arg, " ")) {
      return '"' + arg + '"';
    }
    return arg;
  }
  let quoted = list_map(args, quote);
  let all = [alias].concat(quoted);
  return all.join(" ");
}
