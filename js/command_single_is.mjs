import { command_shell_operators } from "./command_shell_operators.mjs";
import { text_includes } from "./text_includes.mjs";
export function command_single_is(command) {
  "whether this command line runs one thing and only one thing — nothing in it that chains, pipes or redirects into something else";
  "a chain can never be answered by a rule naming one function, however safe that function is. the rule is matched against the whole line, so whatever follows the semicolon rides in on the grant written for what precedes it. counting a chained command as demand for a grant would promise the human a prompt that then goes on happening anyway.";
  for (let operator of command_shell_operators()) {
    let found = text_includes(command, operator);
    if (found) {
      return false;
    }
  }
  return true;
}
