import { arguments_assert } from "./arguments_assert.mjs";
import { bible_names_men } from "./bible_names_men.mjs";
import { bible_names_women } from "./bible_names_women.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { text_size } from "./text_size.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function reply_names_bible() {
  "Every name of a person in the Bible, written the way somebody typing a message would write it: all in small letters, one spelling each, and only the ones that are a single plain word.";
  "★ IT PUBLISHES NOBODY, AND THAT IS THE WHOLE REASON IT IS THE FIRST SOURCE REACHED FOR. A list of the names the people writing in actually have is that list of people, put in a public repository, and it grows by one real person every time somebody new writes. These names have been in print for two thousand years, and a person recognised by one of them is recognised by a word that millions of people share.";
  "IT IS TAKEN FROM WHAT THIS REPOSITORY ALREADY HOLDS rather than fetched from anywhere. The names were already written down here for the picture Bible, so this asks a question of a list that exists instead of introducing a second list that would then have to be kept level with the first.";
  "A NAME OF ONE OR TWO LETTERS IS DROPPED, and there are only a handful of them. On, So and Er are names in the Bible and are also words in a sentence, so kept, a message saying I am so tired is a person named So. A short name is the case where the cost of being wrong is highest and the number of real people helped is lowest.";
  "A NAME WRITTEN WITH A HYPHEN IN IT IS DROPPED for the same reason from the other side: nobody introduces themselves as Adoni-Bezek, and every one of them is a compound that a person typing their own name would not produce.";
  "IT IS ONLY ONE OF THE SOURCES AND IS NOT MEANT TO BE ENOUGH. It has no Grace, no Faith, no Blessing, no Muhammad, no Ali - names borne by enormous numbers of the people who actually write. Those belong on a list somebody authors, kept separate from this one so that each can be argued about on its own.";
  "THE OTHER SPELLINGS ARE LOST HERE AND THAT IS A KNOWN GAP. The list this reads keeps only the first spelling of a name given several - Abijah, and not Abiah or Abia - so a person using one of the other spellings is not found. Recovering them means reading the same text a second way, which is a separate piece of work.";
  arguments_assert(arguments, 0);
  let men = bible_names_men();
  let women = bible_names_women();
  let both = list_concat_multiple([men, women]);
  let names = [];
  for (let name of both) {
    let lower = text_lower_to(name);
    let compound = text_includes(lower, "-");
    if (compound) {
      continue;
    }
    let a = text_size(lower);
    let long_enough = greater_than_equal(a, 3);
    if (not(long_enough)) {
      continue;
    }
    list_add(names, lower);
  }
  let unique = list_unique(names);
  let sorted = list_sort_text(unique);
  return sorted;
}
