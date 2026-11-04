import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { reply_bible_verses } from "./reply_bible_verses.mjs";
import { reply_bible_references_closed } from "./reply_bible_references_closed.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_last } from "./reply_last.mjs";
import { reply_attempt } from "./reply_attempt.mjs";
import { list_size } from "./list_size.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function reply_bible_verses_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: each verse the rules know reads its own wording and cites itself, and neighbours join, against the real Bible file.");
  let item2 = reply_bible_verses();
  let room = reply_once_or_more(item2);
  let last = reply_last();
  let rule2 = reply_sequence([room, last]);
  let rule = reply_bible_references_closed(rule2);
  let three =
    "And this is his commandment, that we should believe in the name of his Son Jesus Christ, and love one another, as he hath commanded us.";
  let lead =
    "For in the word of the Lord it is written in the  first John, verses 7 through 10:";
  let seven =
    "Beloved, let us love one another, for love is from God; and everyone who loves has been born of God and knows God.";
  let eight = "He who does not love does not know God, for God is love.";
  let nine =
    "In this was manifested the love of God among us, because God sent his only begotten Son into the world, that we might live through him.";
  let ten =
    "Herein is love, not that we loved God, but that he loved us, and sent his Son to be the propitiation for our sins.";
  let v = three.replace("Jesus Christ", "Christ");
  let cases = [
    [three, ["1 John 3:23 Amen!"]],
    [v, ["1 John 3:23 Amen!"]],
    [seven, ["1 John 4:7 Amen!"]],
    [`${lead} ${seven} ${eight} ${nine} ${ten}`, ["1 John 4:7-10 Amen!"]],
    [
      `${three} ${lead} ${seven} ${eight} ${nine} ${ten}`,
      ["1 John 3:23 Amen!", "1 John 4:7-10 Amen!"],
    ],
    [lead, []],
  ];
  async function checked(item) {
    let [message, outputs] = item;
    let got = await reply_attempt(message, rule);
    let a = list_size(outputs);
    let answered = greater_than(a, 0);
    let r2 = {
      message,
      ok: json_equal(got, {
        answered,
        broke: false,
        outputs,
      }),
      got,
    };
    return r2;
  }
  let results = await list_map_async(cases, checked);
  let failures = list_filter_property(results, "ok", false);
  list_empty_is_assert_json(failures, {
    failures,
    hint: "a verse rule read its wording differently than this case expects",
  });
  let r = {
    checked: list_size(results),
  };
  return r;
}
