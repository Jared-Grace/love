import { text_spelling_old_same_is } from "./text_spelling_old_same_is.mjs";
import { functions_names_includes } from "./functions_names_includes.mjs";
import { reply_bible_generated_is } from "./reply_bible_generated_is.mjs";
export async function reply_bible_choice_function_names(keys, wordings_all) {
  "The function name for each shared choice. A word however spelled is named after its most used spelling, so reply_word_love. Any other choice is named from its words.";
  "A word whose plain name already belongs to a function the generator did not write takes the longer name, because reply_word_us reads only us.";
  let text = ` ${wordings_all.join(" ")} `;
  function uses_count(word) {
    let count = text.split(` ${word} `).length - 1;
    return count;
  }
  function star_drop(element) {
    let word = element.replace("*", "");
    return word;
  }
  let names = {};
  for (let key of keys) {
    let words = key.split(" ").map(star_drop);
    function spelled(word) {
      let same = text_spelling_old_same_is(word, words[0]);
      return same;
    }
    let name = `reply_word_${words.join("_")}`;
    if (words.every(spelled)) {
      function more_used(a, b) {
        let order = uses_count(b) - uses_count(a);
        return order;
      }
      let head = [...words].sort(more_used)[0];
      let head_name = `reply_word_${head}`;
      let free = true;
      if (await functions_names_includes(head_name)) {
        free = await reply_bible_generated_is(head_name);
      }
      if (free) {
        name = head_name;
      } else if (words.length === 1) {
        name = `${head_name}_u_v`;
      }
    }
    names[key] = name;
  }
  return names;
}
