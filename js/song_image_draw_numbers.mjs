import { fn_name } from "./fn_name.mjs";
import { text_split_comma_each_async } from "./text_split_comma_each_async.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { list_add } from "./list_add.mjs";
import { song_image_draw } from "./song_image_draw.mjs";
export async function song_image_draw_numbers(numbers_text) {
  "$plain numbers_text";
  "draws one fresh picture for each of several named couplets, so that a round of wording changes spread across the hymn is answered in one command instead of one command per couplet";
  "IT TAKES ITS SET RATHER THAN FINDING IT, and that is right here where the other shape would be wrong. Which couplets were reworded is a judgment somebody made while reading the pictures, and nothing on disk records it: every couplet has a wording and every wording could always be drawn again, so a command that went looking would find all thirty-six. The set is the whole content of the instruction, so the caller has to say it.";
  "ONE EACH RATHER THAN SEVERAL EACH is the difference from drawing one couplet over and over, and the two are for opposite questions. Several of one couplet samples how reliable a wording is. One of each asks whether a change landed at all, across a batch of changes, and that is the cheaper question to ask first - a wording that comes back wrong on its single draw is not usually a wording that got unlucky.";
  "the draws run one after another for the reason a batch of one couplet does: each asks the folder what the next free attempt number is and then writes to it, so two fired together would be told the same number and one of the two would be paid for and overwritten.";
  "a draw that fails is kept in the list with the reason rather than ending the round, because a picture is paid for when it is started and a refusal and a dropped connection want opposite responses - one says change the wording, the other says run it again.";
  ("DRAWING A PICTURE DOES NOT MAKE IT VISIBLE, and a round of draws is not finished until the sandbox bundle is built again. The page that shows the attempts runs in a browser and cannot count files, so which attempts exist is compiled into it as a constant; the draw writes that constant's source and the built bundle still holds the old copy. The reader is then looking at a page that honestly reports the picture is not there. Measured 2026-08-25: five draws landed on disk, the newest bundle chunk was an hour and a half older, and the person reviewing said they could not see the new one. Run ",
    fn_name("webpack_build_dev"),
    " over sandbox afterwards, and reload the page hard rather than navigating to it, since the browser is a third copy again.");
  let drawn = [];
  async function one(number_text) {
    async function lambda() {
      let r = await song_image_draw(number_text);
      return r;
    }
    let attempt = await catch_message_async(lambda);
    list_add(drawn, attempt);
  }
  await text_split_comma_each_async(numbers_text, one);
  return drawn;
}
