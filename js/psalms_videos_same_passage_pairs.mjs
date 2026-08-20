import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function psalms_videos_same_passage_pairs() {
  "The passages this channel has sung twice, each with the watch code of both singings: the same verses, two separate recordings made on different days.";
  "These are not a file uploaded twice. Two takes of the same verses differ in what they are, so both belong on the channel and neither is a mistake to be cleared away - the question they raise is only whether a chapter's reading order should hand a listener the verse and then hand it to them again. That is the singer's judgement, so this says what the pairs are and decides nothing.";
  ("Seven titles came back doubled and one of them is here. Three of the seven were one recording uploaded twice, settled in ",
    fn_name("psalms_videos_second_copy"),
    ", and hearing the words showed the rest were not two singings of anything: a song whose title named the wrong verse had landed on top of the song that really was that verse. Those are written down as what they are in ",
    fn_name("psalms_videos_verse_mislabelled"),
    ", and correcting a title there takes it out of this question rather than into it.");
  arguments_assert(arguments, 0);
  let pairs = [
    {
      passage: "Psalms 88:5",
      first: "9KklM5UTs-k",
      second: "HmDtrc1s_ps",
    },
  ];
  return pairs;
}
