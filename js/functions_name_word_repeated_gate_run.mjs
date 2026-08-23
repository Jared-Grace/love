import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_name_word_repeated_named } from "./functions_name_word_repeated_named.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_name_word_repeated_gate_run() {
  "QA gate for the naming rule: a name is its parts joined and every part is meant to narrow, so no name says one word twice running. The cut already refuses to write such a name, and until this was built nothing asked it of the names already standing.";
  "IT RATCHETS AGAINST NOTHING, BECAUSE THERE IS NOTHING LEFT TO GRANDFATHER. Twenty five were found the first time anybody looked, one of them saying its word three times. Six of the twenty five were never faults at all - a name crossing out of an app's prefix into what that app calls the thing says the word twice in two different roles - and the reading learned that. The other nineteen were renamed, so a shrink-only baseline holding nothing would be a file that exists only to say so.";
  "A NAME THAT DOUBLES A WORD FROM NOW ON IS A SLIP AND FAILS AT ONCE, rather than waiting for somebody to notice and rewrite a list.";
  let told = await functions_name_word_repeated_named();
  let offenders = property_get(told, "offenders");
  let walked = property_get(told, "walked");
  let result = list_empty_is_assert_walked_generic(
    walked,
    offenders,
    text_combine_multiple([
      "these names say one word twice running - the second telling narrows nothing, so give the second part a word that says what it is instead, and rename with ",
      fn_name("function_rename"),
    ]),
  );
  return result;
}
