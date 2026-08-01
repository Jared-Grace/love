import { equal } from "./equal.mjs";
import { function_new_transform } from "./function_new_transform.mjs";
import { js_find_body_block } from "./js_find_body_block.mjs";
import { js_block_body_add_code } from "./js_block_body_add_code.mjs";
import { function_auto } from "./function_auto.mjs";
import { text_combine } from "./text_combine.mjs";
export async function function_new_getter_number(f_name, meaning, value) {
  "Writes a whole named NUMBER in one command - the file, the line saying what it is for, and the count it hands back - and leaves nothing to finish by hand.";
  "The twin of the getter that writes a word. That one hands its value to JSON so a size can keep its full stop, which turns a count into the text of a count: a settings function written with it answers with the characters one and eight rather than with eighteen, and every sum built on it silently joins instead of adding.";
  "The value is read as a number and refused when it is not one. That refusal is the whole reason this is a command rather than a line of written code - a value that reaches generated source unchecked is a place to write anything at all, and a named constant is exactly the shape nobody would look at twice.";
  let number = Number(value);
  let left2 = Number.isFinite(number);
  if (equal(left2, false)) {
    let said = text_combine(
      "A named number needs a number to hand back, and this one received: ",
      value,
    );
    throw new Error(said);
  }
  ("Once the value is known to be a number, writing the file is the same work its");
  ("twin already does, so it is asked to do it. The two used to end in the same");
  ("dozen lines, and a reader had to compare them character by character to find that");
  ("the only difference was up here.");
  let written = await function_new_getter(f_name, meaning, number);
  return written;
}
