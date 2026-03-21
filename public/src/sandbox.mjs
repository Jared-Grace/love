import { app_replace_rule_set_rules_get } from "../../../love/public/src/app_replace_rule_set_rules_get.mjs";
import { app_replace_rule_set_scientific_notation_numbers } from "../../../love/public/src/app_replace_rule_set_scientific_notation_numbers.mjs";
import { app_replace_rule_set_verify_nearley } from "../../../love/public/src/app_replace_rule_set_verify_nearley.mjs";
import nearley from "nearley";
import compile from "nearley/lib/compile.js";
import generate from "nearley/lib/generate.js";
import grammarParser from "nearley/lib/nearley-language-bootstrapped.js";
export async function sandbox() {
  let rs = app_replace_rule_set_scientific_notation_numbers();
  let rules = app_replace_rule_set_rules_get(rs);
  app_replace_rule_set_verify_nearley(rules);
}
