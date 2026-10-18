import { arguments_assert } from "./arguments_assert.mjs";
import { audio_loudness_envelope } from "./audio_loudness_envelope.mjs";
import { audio_envelopes_fit } from "./audio_envelopes_fit.mjs";
export async function audio_files_fit(path_left, path_right) {
  arguments_assert(arguments, 2);
  ("$plain path_left");
  ("$plain path_right");
  ("Whether two media files hold the same singing, answered by measuring the loudness shape of each and lining the two up: how closely they agree at their best, how far in that agreement begins, and how much longer the longer file is.");
  ("★ ASKING ABOUT ONE PAIR IS THE WEAKEST FORM OF THIS QUESTION, BECAUSE A CLOSENESS MEANS NOTHING WITHOUT KNOWING WHAT A WRONG ANSWER SCORES. Over fifteen hundred pairs of psalm recordings against psalm videos the true pairs came out at ninety-two hundredths or better and the wrong ones at seventy-one hundredths or less, so a number from this door can be read against those two figures - but that split was measured elsewhere and is not evidence this pair produced. The offset is not a second test either, though it reads like one: it lands on the difference in the two lengths almost whatever the pair holds, because both files end on the same last note and flush endings beat every other alignment.");
  ("This is the door for asking about one pair. A walk over many pairs measures each file once and compares the shapes it already holds, because measuring is the whole cost and the comparing is nearly free.");
  let envelope_left = await audio_loudness_envelope(path_left);
  let envelope_right = await audio_loudness_envelope(path_right);
  let fit = audio_envelopes_fit(envelope_left, envelope_right);
  return fit;
}
