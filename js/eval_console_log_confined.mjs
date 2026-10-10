import { greater_than } from "./greater_than.mjs";
import { js_code_confined_refusals } from "./js_code_confined_refusals.mjs";
import { eval_console_log_replace } from "./eval_console_log_replace.mjs";
export function eval_console_log_confined(code, console_log_replacement) {
  "Runs a program handed a stand-in console, but only a program that cannot reach anything outside itself; anything else is refused before it runs.";
  "This is the safe wrapper over the raw runner. The raw runner turns any text into code with every power the process has, so everything that reached it was dangerous, and that was most of the course - every lesson that shows what a program prints. The programs never needed that power: they bind their own names and print. So the refusal costs the course nothing and takes away everything the raw runner gave.";
  let refusals = js_code_confined_refusals(code);
  if (greater_than(refusals.length, 0)) {
    throw new Error(
      "the program reaches outside itself, so it is not run: " +
        refusals.join(", ") +
        "\n" +
        code,
    );
  }
  let r = eval_console_log_replace(code, console_log_replacement);
  return r;
}
