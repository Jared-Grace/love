import { g_genders_get } from "./g_genders_get.mjs";
export function g_sexes() {
  "The two sexes a generated person may be, as a closed list, so the generator is given the fact rather than left to guess at it.";
  "Sex is GIVEN to the call and a personality is never given with it. Write a woman is a fact; write an emotional woman is the stereotype the rule exists to stop.";
  let genders = g_genders_get();
  let v = ["man", "woman"];
  return v;
}
