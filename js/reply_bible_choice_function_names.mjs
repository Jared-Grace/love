import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { subtract } from "./subtract.mjs";
import { text_spelling_old_same_is } from "./text_spelling_old_same_is.mjs";
import { functions_names_includes } from "./functions_names_includes.mjs";
import { function_read } from "./function_read.mjs";
export async function reply_bible_choice_function_names(choices, wordings_all) {
  ("The function name for each shared choice, given as its words joined by spaces. Spellings of one word are named after the spelling the Bibles use most, so love and loue is ",
    fn_name("reply_word_love"),
    ". Other choices are named from all their words.");
  ("A name already taken by a function that is not this choice, like the plain word us, is not used, because that function does not read the other spellings.");
  let v = wordings_all.join(" ");
  let text = ` ${v} `;
  function uses_count(word) {
    let count = subtract(text.split(` ${word} `).length, 1);
    return count;
  }
  let names = {};
  for (let key of choices) {
    let choice = key.split(" ");
    let v2 = choice.join("_");
    let name = `reply_word_${v2}`;
    function spelled(word) {
      let same = text_spelling_old_same_is(word, choice[0]);
      return same;
    }
    if (choice.every(spelled)) {
      function more_used(a, b) {
        let left = uses_count(b);
        let right = uses_count(a);
        let order = subtract(left, right);
        return order;
      }
      let sorted = [...choice].sort(more_used);
      let head_name = `reply_word_${sorted[0]}`;
      let free = true;
      if (await functions_names_includes(head_name)) {
        let source = await function_read(head_name);
        function holds(word) {
          let is = source.includes(`"${word}"`);
          return is;
        }
        free =
          source.includes(
            text_combine_multiple([fn_name("reply_choice"), "("]),
          ) && choice.every(holds);
      }
      if (free) {
        name = head_name;
      }
    }
    names[key] = name;
  }
  return names;
}
