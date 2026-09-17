import { arguments_assert } from "./arguments_assert.mjs";
import { ssml_phoneme_speak } from "./ssml_phoneme_speak.mjs";
import { google_text_to_speech_audio } from "./google_text_to_speech_audio.mjs";
import { sha256_hash } from "./sha256_hash.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function google_text_to_speech_phoneme_probe(
  voice_name,
  word,
  phonemes,
) {
  "$plain voice_name";
  "$plain word";
  "$plain phonemes";
  "Whether one voice actually listens when it is told how to say a word: it says the word plainly twice and then once more with the sounds spelled out, and reports both whether the voice repeats itself and whether being told the sounds changed anything.";
  "★ IT ANSWERS BY WEIGHING THE SOUND, NOT BY LISTENING TO IT. A voice that does not know this markup ignores it and returns an ordinary reading with no complaint, so asking whether it worked cannot be answered by ear on a subtle word and cannot be answered from the writing at all.";
  "★ THE PLAIN READING IS TAKEN TWICE, AND WITHOUT THAT THE ANSWER IS WORTHLESS. Two recordings differing proves the markup was read only if the same request twice does not differ by itself - and the first time this was asked with one plain reading, two runs of the identical request came back unalike, which would have been read as proof of exactly the thing it disproves. Steady must be true before heard means anything at all.";
  "★ THE SOUNDS HANDED IN SHOULD BE ABSURDLY WRONG, because the question being asked is whether anything was heard rather than whether it was heard correctly. Telling the voice to say a Hebrew word as banana makes a refusal and an agreement impossible to confuse; a faithful pronunciation would come back nearly identical either way and prove nothing.";
  "★ A REFUSAL IS LET THROUGH RATHER THAN CAUGHT, because the complaint says which half was objected to and a quiet nothing in its place would leave that unasked. It is asked one language at a time for the same reason, so a voice that refuses cannot stop the next one being tried.";
  arguments_assert(arguments, 3);
  let plain_input = {
    text: word,
  };
  let marked = ssml_phoneme_speak(word, phonemes);
  let marked_input = {
    ssml: marked,
  };
  let first = await google_text_to_speech_audio(voice_name, plain_input);
  let second = await google_text_to_speech_audio(voice_name, plain_input);
  let spoken = await google_text_to_speech_audio(voice_name, marked_input);
  let first_sha = sha256_hash(first);
  let second_sha = sha256_hash(second);
  let marked_sha = sha256_hash(spoken);
  let steady = equal(first_sha, second_sha);
  let same = equal(second_sha, marked_sha);
  let heard = not(same);
  let r = {
    voice_name,
    word,
    phonemes,
    marked,
    plain_bytes: second.length,
    marked_bytes: spoken.length,
    first_sha,
    second_sha,
    marked_sha,
    steady,
    heard,
  };
  return r;
}
