import { g_genders_names } from "./g_genders_names.mjs";
export function g_profile_axes() {
  "Every axis a generated person varies on, with the values each one may hold.";
  "The axes are what CODE picks and hands to the writing call, so that the spread over a whole game is dealt rather than left to whatever an LLM reaches for first.";
  "Servitude holds master, servant and freed on ONE axis because they exclude each other - a person cannot be owned and be an owner at once, and one axis makes that unconstructible rather than something a check has to catch.";
  "The centurion of Matthew 8 verse 9 is not the exception he first looks like. He is under authority AND commands, but being under authority is military rank rather than being owned, and every person alive is under somebody, so it separates nobody. He is a soldier who owns a servant: government soldier, servitude master.";
  "Sons and daughters are counted apart rather than as one children flag because Scripture speaks to them apart - a father provoking his sons in Ephesians 6 verse 4, and the daughters given or kept back in 1 Corinthians 7 verses 36 to 38 - and because whom a person has decides what they fear losing.";
  "The count stops at multiple. Beyond that the number is a detail of the person rather than an axis to spread the cast over, and it would multiply the deck for nothing.";
  let counts = ["none", "one", "multiple"];
  let axes = {
    gender: g_genders_names(),
    age: ["teenager", "young adult", "middle-aged", "older", "elderly"],
    marriage: ["single", "betrothed", "married", "widowed"],
    sons: counts,
    daughters: counts,
    servitude: ["none", "master", "servant", "freed"],
    government: ["civilian", "official", "soldier"],
  };
  return axes;
}
