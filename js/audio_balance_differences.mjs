import { math_min } from "./math_min.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { ffmpeg_loudness_short_channel } from "./ffmpeg_loudness_short_channel.mjs";
export async function audio_balance_differences(path_in) {
  "$plain path_in";
  "answer, moment by moment, how much louder the left side of a recording is than the right - a positive number leans left and a negative one leans right";
  "THIS IS THE MEASUREMENT THE FAULT SHOWS UP IN. A stereo recording that leans to one side does not announce it: the peak meters can say one side is higher while the ear says the other is, because a peak is one instant and loudness is a stretch of time. Laid out over the whole recording the lean has a shape, and the shape is what says whether it is a mistake or the music moving about.";
  "NEAR-SILENCE IS THROWN AWAY RATHER THAN AVERAGED IN. Where nothing is playing the two sides differ by whatever noise happens to be under them, which can be tens of decibels apart and means nothing at all. Kept in, those moments swamp the reading; a gap of true silence can hand back a lean of forty decibels that no listener could ever hear.";
  "The two sides are read in step because they are measured on the same frame boundaries, so the readings pair up by their place in the list and no matching by time is needed.";
  let floor_decibels = -45;
  let left_readings = await ffmpeg_loudness_short_channel(path_in, "c0");
  let right_readings = await ffmpeg_loudness_short_channel(path_in, "c1");
  let paired_count = math_min(left_readings.length, right_readings.length);
  let differences = [];
  for (
    let index_place = 0;
    less_than(index_place, paired_count);
    index_place++
  ) {
    let loud_left = left_readings[index_place].reading;
    let loud_right = right_readings[index_place].reading;
    if (less_than(loud_left, floor_decibels)) {
      continue;
    }
    if (less_than(loud_right, floor_decibels)) {
      continue;
    }
    differences.push({
      second: left_readings[index_place].second,
      difference: subtract(loud_left, loud_right),
    });
  }
  return differences;
}
