import { reply_name_jared } from "./reply_name_jared.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_phrase_my_friend_in_christ } from "./reply_phrase_my_friend_in_christ.mjs";
import { reply_response_greetings_friend } from "./reply_response_greetings_friend.mjs";
import { reply_response_good_morning } from "./reply_response_good_morning.mjs";
import { reply_good_time } from "./reply_good_time.mjs";
import { reply_response_good_afternoon } from "./reply_response_good_afternoon.mjs";
import { reply_response_good_evening } from "./reply_response_good_evening.mjs";
import { reply_sequence_output } from "./reply_sequence_output.mjs";
import { reply_phrase_my_dear_brother } from "./reply_phrase_my_dear_brother.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_word_hello } from "./reply_word_hello.mjs";
import { reply_response_greetings } from "./reply_response_greetings.mjs";
export function app_shared_message_reply_greeting() {
  let greeting_response = reply_response_greetings();
  let hello = reply_word_hello();
  let hi_word = reply_choice(["hi", hello, "hey", "greetings"]);
  let my_dear_brother = reply_phrase_my_dear_brother();
  let name = reply_name_jared();
  let jared = reply_optional(name);
  let greeting = reply_sequence_output(
    [hi_word, my_dear_brother, jared],
    greeting_response,
  );
  let friend_phrase = reply_phrase_my_friend_in_christ();
  let friend_response = reply_response_greetings_friend();
  let friend = reply_sequence_output([hi_word, friend_phrase], friend_response);
  let morning_response = reply_response_good_morning();
  let morning = reply_good_time("morning", morning_response);
  let afternoon_response = reply_response_good_afternoon();
  let afternoon = reply_good_time("afternoon", afternoon_response);
  let evening_response = reply_response_good_evening();
  let evening = reply_good_time("evening", evening_response);
  let greetings = reply_choice([greeting, friend, morning, afternoon, evening]);
  return greetings;
}
