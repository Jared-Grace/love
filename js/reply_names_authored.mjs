import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { reply_names_akan } from "./reply_names_akan.mjs";
import { reply_names_arabic } from "./reply_names_arabic.mjs";
import { reply_names_english } from "./reply_names_english.mjs";
import { reply_names_filipino } from "./reply_names_filipino.mjs";
import { reply_names_igbo } from "./reply_names_igbo.mjs";
import { reply_names_kalenjin } from "./reply_names_kalenjin.mjs";
import { reply_names_kamba } from "./reply_names_kamba.mjs";
import { reply_names_kikuyu } from "./reply_names_kikuyu.mjs";
import { reply_names_luhya } from "./reply_names_luhya.mjs";
import { reply_names_luo } from "./reply_names_luo.mjs";
import { reply_names_mandinka } from "./reply_names_mandinka.mjs";
import { reply_names_persian } from "./reply_names_persian.mjs";
import { reply_names_sanskrit } from "./reply_names_sanskrit.mjs";
import { reply_names_shona } from "./reply_names_shona.mjs";
import { reply_names_sotho } from "./reply_names_sotho.mjs";
import { reply_names_spanish } from "./reply_names_spanish.mjs";
import { reply_names_swahili } from "./reply_names_swahili.mjs";
import { reply_names_yoruba } from "./reply_names_yoruba.mjs";
import { reply_names_zulu } from "./reply_names_zulu.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
export function reply_names_authored() {
  arguments_assert(arguments, 0);
  ("The given names people in this correspondence actually go by that no book in the repo could supply, written down by hand so that a real person saying their own name is recognised as having said one.");
  ("★ A NAME IS ON THIS LIST BECAUSE MILLIONS OF PEOPLE HAVE IT, NEVER BECAUSE ONE CORRESPONDENT DOES. That is the whole rule, and it is what makes the file safe to publish. A list built from who has written in is a list of who has written in, however it is dressed up - it would name real people in a public repository, and it would grow every time somebody new was refused. A list built from what is common names nobody: every entry here would be on it if this correspondence had never happened.");
  ("It is kept apart from ",
    fn_name("reply_names_bible"),
    " on purpose. That one is derived - it is a reading of a book the repo already holds, and it can be rebuilt from the book at any time. This one is authored, so it is the one that carries a judgement, and a judgement should be somewhere a person can find it and argue with it rather than mixed into a derivation.");
  ("★ THE NAMES ARE GROUPED BY LANGUAGE, AND THE LANGUAGES ARE ASKED FOR IN ALPHABETICAL ORDER, so that nothing in the file puts one people ahead of another or lumps a continent together while splitting a language apart. Every group is the same kind of thing, and where a group sits is decided by the spelling of its name alone. A name shared by several languages sits with the one it was taken from.");
  ("★ WHAT IS MISSING HERE IS NOT A MISTAKE, IT IS THE PRICE. No list of names holds every name; somebody will always give a real name that is not written down here. A name that is missed costs a reply that does not know who it is talking to. A word that is wrongly taken for a name costs nothing at all, because the name is never said back - the answer is fixed text either way. The two costs are not equal, so where there is doubt the name goes in.");
  ("The one thing kept out for that reason is a word that finishes the sentence I am by itself. Blessed, fine, well, grateful, sorry, hungry - somebody writing those is telling you how they are, not what they are called, and no reading of the rest of the message will recover from taking it as a name. Grace and Faith and Hope are not in that class: nobody writes I am grace to say how they are.");
  ("Some of these are used as family names as well as given ones. That costs nothing here - the parser is asking whether a word is a name at all, not which of a person's names it is.");
  let names = reply_names_akan();
  let names2 = reply_names_arabic();
  let names3 = reply_names_english();
  let names4 = reply_names_filipino();
  let names5 = reply_names_igbo();
  let names6 = reply_names_kalenjin();
  let names7 = reply_names_kamba();
  let names8 = reply_names_kikuyu();
  let names9 = reply_names_luhya();
  let names10 = reply_names_luo();
  let names11 = reply_names_mandinka();
  let names12 = reply_names_persian();
  let names13 = reply_names_sanskrit();
  let names14 = reply_names_shona();
  let names15 = reply_names_sotho();
  let names16 = reply_names_spanish();
  let names17 = reply_names_swahili();
  let names18 = reply_names_yoruba();
  let names19 = reply_names_zulu();
  let groups = [
    names,
    names2,
    names3,
    names4,
    names5,
    names6,
    names7,
    names8,
    names9,
    names10,
    names11,
    names12,
    names13,
    names14,
    names15,
    names16,
    names17,
    names18,
    names19,
  ];
  let all = list_concat_multiple(groups);
  let sorted = list_unique_sorted(all);
  return sorted;
}
