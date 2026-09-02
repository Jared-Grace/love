import { object_is } from "./object_is.mjs";
import { assert_json } from "./assert_json.mjs";
export function object_is_assert_json(object, json) {
  "Refuses anything that is not a plain object of named properties, and says what it was handed instead.";
  "A FUNCTION MEANING AN OBJECT HAS TO SAY SO, because the two things most often handed to it in error - a piece of text and nothing at all - are both walked without complaint by the language. Reading the properties of a string hands back its character positions, so the caller gets an answer of the right shape about the wrong thing; reading the properties of nothing throws, but it throws several steps further down, naming an operator rather than the door it came in at.";
  "Measured 2026-09-02: a button handed the words of a link - c=JHN02 - to a function meaning a set of name-and-value pairs. The complaint that reached the console was that in could not search for 0 in c=JHN02, from a place four calls below the button and naming nothing a reader of the button could act on. The button itself simply did nothing.";
  "The json is carried so the refusal can name the caller's own words, which is the whole of what the thrown operator would not say.";
  let result = object_is(object);
  assert_json(result, {
    object,
    json,
  });
}
