import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
import { assert_json } from "./assert_json.mjs";
import { bible_pronunciation_picks } from "./bible_pronunciation_picks.mjs";
import { bible_pronunciation_picks_path } from "./bible_pronunciation_picks_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function bible_pronunciation_pick_set(word, pick) {
  "$plain word";
  "$plain pick";
  "Keeps the ear's answer for one name - A, the saying the recordings use, or B, the saying the reading holds now - replacing that name's earlier answer and keeping every other name's.";
  arguments_assert(arguments, 2);
  let allowed = list_includes(["A", "B"], pick);
  assert_json(allowed, {
    hint: "a pick is A or B",
    pick,
  });
  let picks = await bible_pronunciation_picks();
  picks[word] = pick;
  let path = bible_pronunciation_picks_path();
  await file_overwrite_json(path, picks);
  return picks;
}
