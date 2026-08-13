import { app_shared_hash_field_unknown } from "./app_shared_hash_field_unknown.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function app_shared_hash_fields_unknown_findings(hash, fields) {
  "Everything wrong with a link, as one flat run of a field paired with the word it could not make sense of - empty when the link is asking only for things that exist.";
  "Every field is asked, not only until the first complaint, because a reader whose link has two words wrong should be told both at once rather than finding the second one after fixing the first. Pairing each word with the field it came from is what lets a single screen say what is wrong with a link without knowing what kinds of thing a link can name.";
  let findings = [];
  function ask(field) {
    let unknown = app_shared_hash_field_unknown(hash, field);
    function note(value) {
      let finding = {
        field,
        value,
      };
      list_add(findings, finding);
    }
    each(unknown, note);
  }
  each(fields, ask);
  return findings;
}
