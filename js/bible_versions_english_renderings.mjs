import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { bible_versions_english_choices_usable } from "./bible_versions_english_choices_usable.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { assert_message } from "./assert_message.mjs";
import { list_map } from "./list_map.mjs";
export async function bible_versions_english_renderings() {
  arguments_assert(arguments, 0);
  ("Every English translation this repo may put in front of a reader, each said to render the words of the original, to render them inside a small vocabulary, or not to be a translation of the words at all but a restatement of their sense made to help translators.");
  ("A COUNT OF SHARED WORDS CANNOT TELL A TRANSLATION FROM A RESTATEMENT, AND THAT IS WHY THIS IS WRITTEN DOWN. Ranking the wordings of a passage by how much of a sung line each says the same way asks only which words match; a text written to explain a verse in plain modern English will often match a plainly written song better than any translation of the words does, and win. Measured 2026-09-02, the loudest wording at four passages of one hymn was a translator's helper text rather than a bible. The counting is right about what it counts and has nothing at all to say about this, so the answer has to come from somewhere else.");
  ("THE JUDGEMENT IS AUTHORED AND NOT GUESSED FROM THE TEXT. What a translation is for is stated by the people who made it, not discoverable by measuring its words - the Simplified Text and the Translation for Translators both say on their own covers that they are helps for translators rather than bibles to be read, and the Bible in Basic English says it keeps to about a thousand words. A rule that tried to detect this by reading verses would be a guess wearing a measurement's clothes.");
  ("AN UNJUDGED TRANSLATION STOPS THE WHOLE ANSWER RATHER THAN PASSING AS ORDINARY. The shelf of usable English choices is asked for its own list here, so a translation added to it and not judged here is found the moment anything asks, and is named. Left to a quiet default it would be handed to a reader as though somebody had decided about it, which is the one outcome a written-down judgement exists to prevent.");
  ("IT SAYS WHAT A TEXT IS FOR AND NOT HOW TIGHT IT IS. Translations of the words differ enormously among themselves in how closely they follow the order and idiom of the original, and sorting them along that line would be a second argument with no end to it. The line drawn here is the one a reader actually needs: was this made to give me the words of the original, or was it made to give me somebody's account of what they mean.");
  let helper = ["eng-t4t", "en_ust"];
  let small_vocabulary = ["engBBE"];
  let words = [
    "eng-asv",
    "eng-kjv",
    "eng-kjv2006",
    "eng-rv",
    "engasvbt",
    "engbsb",
    "engDBY",
    "engfbv",
    "enggnv",
    "engkjvcpb",
    "englsv",
    "engmsb",
    "engojb",
    "engULB",
    "engwebster",
    "engwmb",
    "engwmbb",
    "engylt",
    "en_ult",
    "engroth",
  ];
  let authored = [];
  for (let bible_folder of helper) {
    let one = {
      bible_folder,
      rendering: "helper",
    };
    list_add(authored, one);
  }
  for (let bible_folder of small_vocabulary) {
    let one = {
      bible_folder,
      rendering: "small_vocabulary",
    };
    list_add(authored, one);
  }
  for (let bible_folder of words) {
    let one = {
      bible_folder,
      rendering: "words",
    };
    list_add(authored, one);
  }
  let usable = await bible_versions_english_choices_usable();
  function judged(choice) {
    let bible_folder = property_get(choice, "bible_folder");
    let name = property_get(choice, "name");
    let found = list_find_property_or_null(
      authored,
      "bible_folder",
      bible_folder,
    );
    let message = text_combine_multiple([
      "this English translation is on the usable shelf and nobody has said here whether it renders the words of the original or restates their sense: ",
      bible_folder,
    ]);
    assert_message(found, message);
    let rendering = property_get(found, "rendering");
    let v = {
      bible_folder,
      name,
      rendering,
    };
    return v;
  }
  let renderings = list_map(usable, judged);
  return renderings;
}
