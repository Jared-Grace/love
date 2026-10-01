import { number_is } from "./number_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_subtitles_dialogue_line } from "./lyric_video_subtitles_dialogue_line.mjs";
import { subtitles_time_text } from "./subtitles_time_text.mjs";
export function lyric_video_subtitles_card_event(card, middle_x) {
  arguments_assert(arguments, 2);
  ("$plain card");
  ("$plain middle_x");
  ("One authored card of a lyric video - words that are not sung, such as the verse shown over an instrumental or the name of the verse coming next - as one subtitle event, centred across the screen at the height the card names.");
  ("★ A CARD IS SHOWN AT ITS OWN TIMES, WITH NO LEAD. A sung line is put up a little before it is sung so the eye arrives first; a card is not sung, so the moment written for it is the moment it appears.");
  ("THE CARD CARRIES ITS OWN SIZE, COLOUR AND WEIGHT rather than a style of its own, because each card on the screen at once is set differently - a grey heading, the verse in gold, its Hebrew larger - and one style per card would be a style per use.");
  let x = number_is(card.x) ? card.x : middle_x;
  let place = "\\an5\\pos(" + x + "," + card.y + ")";
  let look = "\\fs" + card.size + "\\c" + card.colour + "\\b" + card.bold;
  let event = lyric_video_subtitles_dialogue_line({
    start: subtitles_time_text(card.start),
    end: subtitles_time_text(card.end),
    style: "Lyric",
    effect: place + "\\fad(400,400)" + look,
    text: card.text,
  });
  return event;
}
