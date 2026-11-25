import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { path_join } from "./path_join.mjs";
import { ebible_chapter_code_parse } from "./ebible_chapter_code_parse.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { ebible_chapter_code_to_number } from "./ebible_chapter_code_to_number.mjs";
import { file_audio_mp3_or_wav } from "./file_audio_mp3_or_wav.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function bible_audio_piece_short_write(
  bible_folder,
  chapter_code,
  piece,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "$plain piece";
  "Makes a tall phone-shaped video of one recorded piece of a chapter - its verse words and reference on screen, as large as the frame allows, over the piece's own sound - and hands back where it put it.";
  "★ IT EXISTS SO ONE VERSE CAN BE HEARD WITH ITS WORDS IN FRONT OF YOU. Checking whether the voice said a word right means listening while reading, and a chapter video makes you find the verse first. One piece is one verse is one file, so this takes the number of the file and nothing else.";
  "★ THE WORDS ARE GROWN UNTIL THEY NO LONGER FIT AND THEN TAKEN BACK ONE STEP, MEASURED BY A BROWSER RATHER THAN GUESSED FROM HOW MANY LETTERS THERE ARE. A short verse fills the screen and a long one still fits, and a guess from the letter count is wrong exactly where the words are long.";
  "THE FOOT OF THE FRAME IS LEFT EMPTY BECAUSE A SHORTS PLAYER DRAWS ITS OWN BUTTONS AND TITLE THERE, and words under them could not be read.";
  "The words shown are the verse as the page gives it, from the chapter's own record of which verse each piece holds; the reference is worked out from the same record, so a piece holding two verses says both.";
  arguments_assert(arguments, 3);
  let folder = bible_audio_folder(bible_folder, chapter_code);
  let file_path = path_join([folder, "verses.json"]);
  let verses = await file_read_json(file_path);
  let index = Number(piece);
  function lambda(r) {
    let eq = equal(r.chunk, index);
    return eq;
  }
  let row = verses.rows.find(lambda);
  let parsed = ebible_chapter_code_parse(chapter_code);
  let book_code = parsed.book_code;
  function lambda2(b) {
    let eq2 = equal(b.book_code, book_code);
    return eq2;
  }
  let book = ebible_books_engbsb().find(lambda2);
  let book_name = book ? book.text : book_code;
  let chapter_number = ebible_chapter_code_to_number(chapter_code);
  let verse_numbers = row.verse_numbers;
  let verse_text = equal(verse_numbers.length, 1)
    ? verse_numbers[0]
    : verse_numbers[0] + "-" + verse_numbers[subtract(verse_numbers.length, 1)];
  let reference = book_name + " " + chapter_number + ":" + verse_text;
  let path_stem = path_join([folder, piece]);
  let path_audio = await file_audio_mp3_or_wav(path_stem);
  let path_picture = path_join([folder, piece + "_short.png"]);
  let path_output = path_join([folder, piece + "_short.mp4"]);
  let width = 1080;
  let height = 1920;
  function escaped(text) {
    let e = text
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
    return e;
  }
  let fitting =
    "var box=document.getElementById('box');function fits(s){box.style.fontSize=s+'px';return box.scrollHeight<=box.clientHeight}" +
    "var low=10,high=400;while(high-low>1){var m=Math.floor((low+high)/2);if(fits(m)){low=m}else{high=m}}fits(low);";
  let html =
    "<html><body style='margin:0;background:#000;color:#fff;font-family:\"Noto Serif\",Georgia,serif'>" +
    "<div id='box' style='position:absolute;left:80px;right:80px;top:180px;bottom:420px;display:flex;flex-direction:column;justify-content:center;text-align:center;overflow:hidden'>" +
    "<div style='line-height:1.25'>" +
    escaped(row.text) +
    "</div>" +
    "<div style='margin-top:0.8em;font-size:0.6em;color:#f2c94c'>" +
    escaped(reference) +
    "</div>" +
    "</div><script>" +
    fitting +
    "</script></body></html>";
  async function on_page(page) {
    await page.setViewportSize({
      width,
      height,
    });
    await page.setContent(html);
    await page.screenshot({
      path: path_picture,
    });
  }
  await playwright_test_blank(on_page);
  await ffmpeg_words_run([
    "-y",
    "-loop",
    "1",
    "-i",
    path_picture,
    "-i",
    path_audio,
    "-c:v",
    "libx264",
    "-tune",
    "stillimage",
    "-pix_fmt",
    "yuv420p",
    "-r",
    "30",
    "-c:a",
    "aac",
    "-b:a",
    "192k",
    "-shortest",
    path_output,
  ]);
  let r2 = {
    reference,
    path_output,
  };
  return r2;
}
