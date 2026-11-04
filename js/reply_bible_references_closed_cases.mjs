import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_on_match_bible_reference } from "./reply_on_match_bible_reference.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_sequence_output } from "./reply_sequence_output.mjs";
import { reply_bible_references_closed } from "./reply_bible_references_closed.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { reply_last } from "./reply_last.mjs";
import { reply_attempt } from "./reply_attempt.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function reply_bible_references_closed_cases() {
  "What the closing step says for each way verses can be noted, read from the real Bible file. The words of each message stand for a verse said whole or in part, because this tests the step and not any verse's wording.";
  function verse(words, chapter_code, verse_number, quote) {
    let read = reply_sequence(words);
    let noted = reply_on_match_bible_reference(
      read,
      chapter_code,
      verse_number,
      quote,
    );
    return noted;
  }
  let v = verse(["part", "seven"], "1JN04", "7", true);
  let v2 = verse(["whole", "seven"], "1JN04", "7", false);
  let v3 = verse(["part", "eight"], "1JN04", "8", true);
  let v4 = verse(["whole", "eight"], "1JN04", "8", false);
  let v5 = verse(["whole", "nine"], "1JN04", "9", false);
  let v6 = verse(["whole", "twenty"], "MAT17", "20", false);
  let v7 = verse(["whole", "twenty", "two"], "MAT17", "22", false);
  let v8 = verse(["whole", "ninety"], "1JN04", "99", false);
  let o = reply_sequence_output(["hello"], ["Hello"]);
  let said = reply_choice([v, v2, v3, v4, v5, v6, v7, v8, o]);
  let room = reply_once_or_more(said);
  let last = reply_last();
  let rule2 = reply_sequence([room, last]);
  let rule = reply_bible_references_closed(rule2);
  let seven =
    "Beloved, let us love one another, because love comes from God. Everyone who loves has been born of God and knows God.";
  let eight = "Whoever does not love does not know God, because God is love.";
  let cases = [
    {
      message: "part seven",
      outputs: [`Amen! 1 John 4:7 ${seven}`],
    },
    {
      message: "whole seven",
      outputs: ["1 John 4:7 Amen!"],
    },
    {
      message: "whole seven whole eight",
      outputs: ["1 John 4:7-8 Amen!"],
    },
    {
      message: "part seven part eight",
      outputs: [`Amen! 1 John 4:7-8 ${seven} ${eight}`],
    },
    {
      message: "part seven whole seven",
      outputs: ["1 John 4:7 Amen!"],
    },
    {
      message: "whole seven whole nine",
      outputs: ["1 John 4:7 Amen!", "1 John 4:9 Amen!"],
    },
    {
      message: "part seven whole eight",
      outputs: [`Amen! 1 John 4:7 ${seven}`, "1 John 4:8 Amen!"],
    },
    {
      message: "whole twenty whole twenty two",
      outputs: ["Matthew 17:20-22 Amen!"],
    },
    {
      message: "hello whole seven",
      outputs: ["1 John 4:7 Amen!", "Hello"],
    },
    {
      message: "hello",
      outputs: ["Hello"],
    },
    {
      message: "whole ninety",
      broke: true,
    },
    {
      message: "nothing here",
      answered: false,
    },
  ];
  async function checked(item) {
    let got = await reply_attempt(item.message, rule);
    let want = {
      answered: item.answered ?? not_equal(item.broke, true),
      broke: equal(item.broke, true),
      outputs: item.outputs ?? [],
    };
    let r = {
      message: item.message,
      ok: json_equal(got, want),
      got,
    };
    return r;
  }
  let results = await list_map_async(cases, checked);
  return results;
}
