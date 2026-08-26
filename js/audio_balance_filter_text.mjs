import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function audio_balance_filter_text(
  expression_left,
  expression_right,
  text_tail,
) {
  "$plain expression_left";
  "$plain expression_right";
  "$plain text_tail";
  "write the whole picture of what happens to the sound - take the two sides apart, give each its own sliding gain, put them back together, and run whatever comes after that on the pair";
  "THE TWO SIDES HAVE TO BE TAKEN APART BECAUSE A GAIN APPLIES TO EVERYTHING IT IS GIVEN. Asked of a stereo pair it lifts both by the same amount, which is the one correction that can never change a balance. Split, each side has its own gain and the difference between the two gains is the repair.";
  "THE WORK IS DONE IN FLOATING POINT rather than in whole numbers, because a gain that leans one side down and the other up crosses full scale on the way through, and a whole-number pipe clips there silently - the damage is done before anything downstream gets the chance to hold it.";
  "Whatever comes after the join is handed in rather than spelled here, because the balance repair and the loudness work are separate decisions that happen to travel together, and a caller wanting one without the other should not have to take both.";
  let filter_text = text_combine_multiple([
    "[0:a]aformat=sample_fmts=fltp,channelsplit=channel_layout=stereo[l][r];",
    "[l]volume=eval=frame:volume=",
    expression_left,
    "[lg];",
    "[r]volume=eval=frame:volume=",
    expression_right,
    "[rg];",
    "[lg][rg]join=inputs=2:channel_layout=stereo,",
    text_tail,
    "[out]",
  ]);
  return filter_text;
}
