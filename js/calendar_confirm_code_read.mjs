import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function calendar_confirm_code_read(typed) {
  arguments_assert(arguments, 1);
  ("A code as a person typed it, read back to the spelling ",
    fn_name("calendar_confirm_code"),
    " writes, PRAY- and 4 signs: every mark that is not a letter or digit is dropped and letters are made capital, so PRAY-6Q5J, pray 6q5j, PRAY6Q5J and 6q5j all read as PRAY-6Q5J.");
  ("The leading PRAY is dropped only when 8 signs were typed, since PRAY is itself one of the 4-sign bodies a code can have. Anything else is handed back cleaned but not shaped, and so matches no code.");
  let cleaned = String(typed)
    .toUpperCase()
    .replace(/[^0-9A-Z]/g, "");
  let prefix = "PRAY";
  let body = cleaned;
  if (equal(cleaned.length, 8) && cleaned.startsWith(prefix)) {
    body = cleaned.slice(4);
  }
  if (equal(body.length, 4)) {
    let r = prefix + "-" + body;
    return r;
  }
  return cleaned;
}
