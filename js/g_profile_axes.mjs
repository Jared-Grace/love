import { g_genders_names } from "./g_genders_names.mjs";
export function g_profile_axes() {
  "Every axis a generated person varies on, with the values each one may hold.";
  "The axes are what CODE picks and hands to the writing call, so that the spread over a whole game is dealt rather than left to whatever an LLM reaches for first.";
  "Servitude holds master, servant and freed on ONE axis because they exclude each other - a person cannot be owned and be an owner at once, and one axis makes that unconstructible rather than something a check has to catch.";
  "The centurion of Matthew 8 verse 9 is not the exception he first looks like. He is under authority AND commands, but being under authority is military rank rather than being owned, and every person alive is under somebody, so it separates nobody. He is a soldier who owns a servant: government_role soldier, servitude master.";
  "Sons and daughters are counted apart rather than as one children flag because Scripture speaks to them apart - a father provoking his sons in Ephesians 6 verse 4, and the daughters given or kept back in 1 Corinthians 7 verses 36 to 38 - and because whom a person has decides what they fear losing.";
  "Every axis is named so that its KEY asks a question and its VALUE answers it, because these go to an LLM as JSON and a key and value that read together as an English noun phrase are a fact about something other than the person. Government held civilian, and civilian government is a real phrase meaning civil rather than military rule - so the pair could be read as a description of the state. It is government_role holding none now, which no idiom joins up, and none is what the sieve was already treating civilian as.";
  "Marriage became marital_status for the same reason. Single sits two lines under sons holding one, and beside counting words it can be read as one marriage; inside a status it can only be a status.";
  "An OCCUPATION is deliberately not here even though two of the government_role values are jobs. Work has dozens of values, so dealing it would multiply the deck for nothing, and the prompt asks the LLM to choose it against the profile instead. What must be SPREAD is dealt here; what is only detail is chosen there.";
  "The count stops at multiple. Beyond that the number is a detail of the person rather than an axis to spread the cast over, and it would multiply the deck for nothing.";
  let counts = ["none", "one", "multiple"];
  let axes = {
    gender: g_genders_names(),
    age: ["teenager", "young adult", "middle-aged", "older", "elderly"],
    marital_status: ["single", "betrothed", "married", "widowed"],
    sons: counts,
    daughters: counts,
    servitude: ["none", "master", "servant", "freed"],
    government_role: ["none", "official", "soldier"],
  };
  return axes;
}
