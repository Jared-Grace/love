import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { lyric_video_hearings_mispaired_and_misheard } from "./lyric_video_hearings_mispaired_and_misheard.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { lyric_video_hearings_misheard_baseline_path } from "./lyric_video_hearings_misheard_baseline_path.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function lyric_video_hearings_match_rate_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate over every song that has been listened to: no recording is filed under a psalm it is not singing, and no recording is newly too unclear to follow.");
  ("★ WHAT THIS CATCHES IS A PAIRING AND NOT A PERFORMANCE, and until 2026-10-02 it could not tell them apart. It asked one question - were fewer than half the written words caught - and a recording of the right psalm sung too fast to follow answers that question exactly as a recording of the wrong psalm does. Psalm 104 verses 1 to 4, third singing, made the gate red on a correctly paired recording, and the only answers available were to lower the floor for everybody or to leave the repo red.");
  ("★ SO THE SHARE OF THE WORDS HEARD DECIDES WHICH FAULT IT IS. A low match rate asks the question; `$fn ",
    fn_name("lyric_video_hearing_psalm_share"),
    "` answers it, because a recording of a different psalm cannot hold this psalm's words however clearly it was sung. Below the share floor is a mispairing and fails against zero, with no record that can bless it. At or above it the recording is the right psalm badly heard, which fails only when it is new, against a shrink-only record.");
  ("How many songs were listened to travels out beside the verdict, because a gate that heard none and a gate that heard four hundred and found nothing wrong say the same word otherwise. The listenings are read out of one file, so a file that moves or is written a new way would leave this green and watching nothing.");
  ("THE TWO ARE REFUSED SEPARATELY AND THE MISPAIRING IS REFUSED FIRST, because a wrongly paired recording renders a whole video whose words never once match the singing and no amount of it is acceptable, while a badly heard one renders correctly and only has times worth less than usual.");
  ("Three other readings were weighed and rejected. Lowering the match rate floor to let the one correct recording through hides every real mispairing between the old floor and the new one, and the floor exists for nothing else. Leaving the gate red for a person to judge spends the one scarce thing in this repo on a question the numbers already answer. Returning the badly heard ones in the answer rather than refusing on them is silent, because what is recorded per commit is a gate's verdict and not what it handed back, so a second one arriving would never be seen.");
  let found = await lyric_video_hearings_mispaired_and_misheard();
  let mispaired = property_get(found, "mispaired");
  list_empty_is_assert_json(mispaired, {
    mispaired,
    hint: "a recording holds almost none of the words of the psalm it is filed under, and almost none of what was heard in it is that psalm's either, which means the audio and the text are a mismatched pair - open the named recording, hear a few seconds of it, and move it under the chapter it is actually singing",
  });
  let misheard = property_get(found, "misheard");
  let path = lyric_video_hearings_misheard_baseline_path();
  let hint = text_combine_multiple([
    "fewer than half the written words were caught in these, but what was caught is this psalm's, so each is the right recording sung too unclearly to follow - hear the words with ",
    fn_name("lyric_video_transcript_around"),
    " and, once you are sure of the chapter, record the name with ",
    fn_name("lyric_video_hearings_misheard_baseline_add"),
    "; the line times in such a recording are the aligner's guess and are the one set here not to trust",
  ]);
  let told = await baseline_names_gate_generic(
    misheard,
    path,
    hint,
    fn_name("lyric_video_hearings_misheard_baseline_shrink_write"),
  );
  let heard = property_get(found, "heard");
  let added = property_get(told, "added");
  let stale = property_get(told, "stale");
  let r = {
    heard,
    added,
    stale,
  };
  return r;
}
