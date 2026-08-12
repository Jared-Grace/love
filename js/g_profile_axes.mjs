import { g_genders_names } from "./g_genders_names.mjs";
export function g_profile_axes() {
  "Every axis a generated person varies on, with the values each one may hold.";
  "The axes are what CODE picks and hands to the writing call, so that the spread over a whole game is dealt rather than left to whatever an LLM reaches for first.";
  "Servitude holds all four states on ONE axis because they exclude each other, and one axis makes the impossible combination unconstructible rather than something a check has to catch. Splitting it into a has-servants field and a has-master field was worked through and dropped: the only person it could say that this cannot is somebody freed who then has servants, and that person is not wanted, so the split bought a sieve rule and nothing else.";
  "FREE rather than none, and it is Scripture's own word - Galatians 3 verse 28 sets slave against free, and Philemon and Ephesians 6 and 1 Corinthians 7 all use the same pair. The player answers these people FROM those passages, so the profile and the answer share a vocabulary. None shared nothing with anything.";
  "It also splits what free and freed had collapsed. Free says nothing about the past; the old pair carried the whole distinction on one letter, which is the kind of near-miss a reader blurs. Was a bondservant says the past outright.";
  "BONDSERVANT rather than servant, which the ESV and NASB both use for doulos. Servant alone could be read as hired help, and if it were, the passages that most want a bondservant - Philemon, 1 Corinthians 7 verse 21, Ephesians 6 verse 5 - would not match the person the writing call produced. It says bound without saying owned, which is the same constraint the rest of these values keep.";
  "A HIRED servant is deliberately not a fifth value, though Scripture does draw that line with its own second word - the hired men of Mark 1 verse 20, the hired servants the prodigal envies in Luke 15 verse 17, the hireling who flees in John 10 verse 12. The reason is that a hired man is legally FREE, so hired-or-not is a fact about his work rather than his standing, and this axis holds standing. It belongs in the occupation the writing call chooses, which is where a detail goes; adding it here would have grown the deck by about a fifth to say what occupation already says.";
  "The values say HAS servants rather than owns them. Ephesians 6 verse 9 addresses masters by what they owe, never by title over a person, and there is no reason for this file to speak of people as property where Scripture does not.";
  "The centurion of Matthew 8 verse 9 is not the exception he first looks like. He is under authority AND commands, but being under authority is military rank rather than being a servant, and every person alive is under somebody, so it separates nobody. He is a soldier with a servant: government_role soldier, servitude has servants.";
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
    servitude: [
      "free",
      "has servants",
      "is a bondservant",
      "was a bondservant",
    ],
    government_role: ["none", "official", "soldier"],
  };
  return axes;
}
