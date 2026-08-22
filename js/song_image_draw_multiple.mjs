import { number_from_text } from "./number_from_text.mjs";
import { each_range_async } from "./each_range_async.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { list_add } from "./list_add.mjs";
import { song_image_draw } from "./song_image_draw.mjs";
export async function song_image_draw_multiple(number_text, count_text) {
  "draws one couplet's picture several times over from the same wording, so that a batch of candidates arrives together and is looked at in one sitting instead of one at a time";
  "a drawing is not settled by reasoning about the wording, it is settled by looking - and looking one picture at a time makes every judgment a comparison against a memory of the last one. Four attempts side by side under the arrows are compared against each other, which is the comparison actually being made. It also collapses four rounds of somebody being asked what they think into one.";
  "the same wording is drawn again rather than a varied one, because the drawing is not the same twice from the same words and that spread is the thing being sampled. A wording that comes back right three times out of four is a wording that can be trusted; one that comes back right once is a wording that got lucky, and drawing it once can never tell those two apart.";
  "the draws are run one after another rather than all at once, because each one asks the folder what the next free attempt number is and then writes to it. Fired together they would all be told the same number and all write to the same file, and three of the four would be paid for and lost with nothing to show that anything went missing.";
  "a draw that fails is kept in the list rather than ending the batch, so a broken connection halfway through costs that one attempt instead of every attempt after it. A failure is worth reading: a picture is paid for when it is started, so a draw that comes back with nothing is money already spent.";
  "and it is kept with the reason it failed, which is the whole reason this stopped answering null. The reason was always known - the wait names a refused drawing and says what the refusal was, because there are more ways for a drawing to end than to continue - and then it was caught and thrown away, so a batch of four that cost four pictures and returned one looked exactly like a batch that had been unlucky with the network. Content moderation and a dropped connection are the same null and want opposite responses: one says change the wording, the other says run it again. Five draws out of seven were lost on one couplet before anybody could ask which.";
  let count = number_from_text(count_text);
  let drawn = [];
  async function one(index) {
    async function lambda() {
      let r = await song_image_draw(number_text);
      return r;
    }
    let attempt = await catch_message_async(lambda);
    list_add(drawn, attempt);
  }
  await each_range_async(count, one);
  return drawn;
}
