import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { app_message_reply_records_by_key } from "./app_message_reply_records_by_key.mjs";
import { object_values } from "./object_values.mjs";
import { text_lower_words_letters } from "./text_lower_words_letters.mjs";
import { list_includes } from "./list_includes.mjs";
export async function reply_messages_word_counts(words_comma) {
  arguments_assert(arguments, 1);
  ("How many real messages hold each of the words asked about, as a whole word, whatever its capitals or the marks around it. Say which spellings people really write before a building block is given them.");
  ("★ IT ANSWERS ONLY NUMBERS, AND ONLY FOR WORDS THE CALLER ALREADY TYPED, because the messages are private and this answer lands in a conversation. Nothing a message holds that was not asked about can come out, so it never hands back a list of the words it found.");
  let asked = text_split_comma(words_comma);
  let by_key = await app_message_reply_records_by_key();
  let records = object_values(by_key);
  let held = [];
  for (let record of records) {
    let words = text_lower_words_letters(record.message);
    held.push(words);
  }
  let counts = {};
  for (let word of asked) {
    let count = 0;
    for (let message_words of held) {
      if (list_includes(message_words, word)) {
        count = count + 1;
      }
    }
    counts[word] = count;
  }
  let r = {
    messages: records.length,
    counts,
  };
  return r;
}
