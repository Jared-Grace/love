import { arguments_assert } from "./arguments_assert.mjs";
export function app_learn_js_sayings_short() {
  arguments_assert(arguments, 0);
  ("five short Bible sayings, each starting with an uppercase letter and the rest lowercase, shared by the lessons that change letters between uppercase and lowercase, so there is one list to edit");
  let sayings = [
    "Jesus wept",
    "God is love",
    "Rejoice in the Lord",
    "Be still",
    "Christ is risen",
  ];
  return sayings;
}
