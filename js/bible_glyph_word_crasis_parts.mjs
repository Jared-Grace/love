import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_testament_new_name } from "./ebible_testament_new_name.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { bible_greek_crasis_kai_partners } from "./bible_greek_crasis_kai_partners.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function bible_glyph_word_crasis_parts(strong, gloss, testament_name) {
  arguments_assert(arguments, 3);
  ("$plain strong");
  ("$plain gloss");
  ("$plain testament_name");
  ("the number and the English are one interlinear word's own, and the name is the testament it stands in. All three are data to read and none of them runs.");
  ("One interlinear word as the words a picture Bible draws it as: itself alone, or - for kai fused onto another word - the kai and the other word apart, each with its own number and its own share of the English.");
  ("THE KAI TAKES THE ENGLISH WORDS THAT SAY KAI and nothing else. Kai is seated on its picture for every sense it has - and, also, too, even - so the words and, also, too and even in the English of a fused word are the kai, and every other word is its partner. And I becomes the kai then I; I too becomes I then the kai, in the order the English says them.");
  ("WHERE THE ENGLISH HAS NO SUCH WORD THE WORD STAYS WHOLE. The Berean often leaves the kai of κἀγώ untranslated and writes only I, and a picture for a word the English does not say would be a picture of nothing on the line.");
  let whole = [
    {
      strong,
      gloss,
    },
  ];
  let new_name = ebible_testament_new_name();
  let greek = equal(testament_name, new_name);
  if (not(greek)) {
    return whole;
  }
  let partners = bible_greek_crasis_kai_partners();
  let partner = property_get_or_null(partners, strong);
  if (null_is(partner)) {
    return whole;
  }
  let kai_words = ["and", "also", "too", "even"];
  let kai = [];
  let rest = [];
  let kai_first = false;
  for (let token of text_split_space(gloss)) {
    let lower = text_lower_to(token);
    let says_kai = list_includes(kai_words, lower);
    if (says_kai) {
      if (list_empty_is(rest)) {
        kai_first = true;
      }
      list_add(kai, token);
    } else {
      list_add(rest, token);
    }
  }
  if (list_empty_is(kai)) {
    return whole;
  }
  let kai_part = {
    strong: "2532",
    gloss: list_join_space(kai),
  };
  let rest_part = {
    strong: partner,
    gloss: list_join_space(rest),
  };
  if (kai_first) {
    let r = [kai_part, rest_part];
    return r;
  }
  let r2 = [rest_part, kai_part];
  return r2;
}
