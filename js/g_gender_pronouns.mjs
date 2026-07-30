import { g_gender_female } from "./g_gender_female.mjs";
import { equal } from "./equal.mjs";
export function g_gender_pronouns(gender_name) {
  "the third-person pronouns for a gender name ('male' / 'female') as { subject, object, possessive, possessive_pronoun, reflexive } — he/him/his/his/himself for male, she/her/her/hers/herself for female. lets NPC-facing text address a specific person ('open HIS heart', 'comfort HER') instead of neutral they/them/their, using the npc.gender every person already carries. an unknown gender falls back to the male set (never expected — every npc has a real gender).";
  let female = {
    subject: "she",
    object: "her",
    possessive: "her",
    possessive_pronoun: "hers",
    reflexive: "herself",
  };
  let male = {
    subject: "he",
    object: "him",
    possessive: "his",
    possessive_pronoun: "his",
    reflexive: "himself",
  };
  let right = g_gender_female();
  let is_female = equal(gender_name, right);
  if (is_female) {
    return female;
  }
  return male;
}
