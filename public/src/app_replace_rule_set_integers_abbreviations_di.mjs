import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function app_replace_rule_set_integers_abbreviations_di(i) {
  object_merge(
    {
      di: ["", "di", "git (numbers 0-9)"],
    },
    i,
  );
}
