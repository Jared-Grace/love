import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_color_hue_groups } from "./app_code_color_hue_groups.mjs";
import { text_to } from "./text_to.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_color_tone_faults() {
  arguments_assert(arguments, 0);
  ("every hue this app draws that does not hold exactly one dark colour and one light one, written out as a sentence per fault - either a hue said twice at the same tone, or a hue with one tone and no twin at the other");
  ("THE RULE IS ONE DARK AND ONE LIGHT PER HUE, AND THE WHOLE OF ITS FORCE IS THAT THE TWO TONES ARE WHAT THE DRAWING ASKS FOR. Four ways of drawing a colour are in use and they ask two questions between them - a colour carrying white lettering must be dark, a colour carrying near-black lettering must be light, a word read on the black code line must be light, a word read on the pale card must be dark. A hue that has answered both has nothing left to be asked. A second dark at the same hue is therefore not a colour, it is the first one written out again somewhere else, and it will drift away from its twin the first time either is revised.");
  ("A MISSING TONE IS A FAULT AND IS REPORTED AS LOUDLY AS A SPARE ONE, which is the half that would have gone unsaid. A hue with a dark and no light cannot be used for one of the four jobs at all, so the job gets done by borrowing another hue - and the borrowing happens at the call, silently, where nothing is measuring. An absence leaves no colour behind to be found by sweeping the palettes, so it has to be looked for on purpose, here, by asking each hue for both of its tones rather than asking each colour whether it is alright.");
  ("THE SENTENCES SPELL THE COLOURS BECAUSE A RATCHET HOLDS NAMES AND NOTHING ELSE. What is banked is the fault as a sentence, so a fault that is repaired stops producing its sentence and a fault that appears produces one nobody has seen. Spelling the colours in is also what makes the banked list readable as the thing it actually is - the list of what stands between this palette and four hues at two tones each.");
  ("NOTHING HERE DECIDES WHETHER A FAULT MAY STAND. Three of these are known and argued about at length elsewhere, one of them is not this app's to change, and the colour decisions are all waiting on somebody who has worked in colour. This only says what is true.");
  let groups = app_code_color_hue_groups();
  let faults = [];
  function side_check(members, tone, other, other_tone) {
    "one tone of one hue, asked whether there is exactly one of it.";
    let several = greater_than(members.length, 1);
    if (several) {
      let count = text_to(members.length);
      let names = members.join(", ");
      let sentence =
        count +
        " " +
        tone +
        " colours at one hue, where one is wanted: " +
        names;
      faults.push(sentence);
      return;
    }
    let none = equal(members.length, 0);
    if (none) {
      let names = other.join(", ");
      let sentence =
        "no " + tone + " colour at the hue of the " + other_tone + " " + names;
      faults.push(sentence);
    }
  }
  for (let group of groups) {
    let dark = property_get(group, "dark");
    let light = property_get(group, "light");
    side_check(dark, "dark", light, "light");
    side_check(light, "light", dark, "dark");
  }
  return faults;
}
