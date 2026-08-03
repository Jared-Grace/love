import { js_boolean_values } from "./js_boolean_values.mjs";
import { g_genders_names } from "./g_genders_names.mjs";
export function g_profile_axes() {
  "Every axis a generated person varies on, with the values each one may hold.";
  "The axes are what CODE picks and hands to the writing call, so that the spread over a whole game is dealt rather than left to whatever an LLM reaches for first.";
  "Household holds master, servant and freed on ONE axis because they exclude each other - a person cannot be owned and be an owner at once, and one axis makes that unconstructible rather than something a check has to catch. It also keeps one type where a master flag beside a servant flag needed a boolean in one place and a word in another.";
  "The centurion of Matthew 8 verse 9 is not the exception he first looks like. He is under authority AND commands, but being under authority is military rank rather than being owned, and every person alive is under somebody, so it separates nobody. He is a soldier who owns a servant: government soldier, household master.";
  "Children is its own axis because Scripture speaks to parents as parents - Ephesians 6 verses 1 to 4, Colossians 3 verses 20 and 21, Titus 2 verse 4 - and a marriage says nothing about whether anybody was born.";
  let axes = {
    gender: g_genders_names(),
    age: ["teenager", "young adult", "middle-aged", "older", "elderly"],
    marriage: ["single", "betrothed", "married", "widowed"],
    children: js_boolean_values(),
    household: ["none", "master", "servant", "freed"],
    government: ["civilian", "official", "soldier"],
  };
  return axes;
}
