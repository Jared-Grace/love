import { fn_name } from "./fn_name.mjs";
export function bible_glyph_roots_greek_drafted() {
  ("The New Testament words seated in bulk by the AI rather than one at a time in the hand-written table, one row each: the Strong's number, the root family it is filed under, its picture and a short gloss. The hand-written table merges these in, so every reader sees one table. The rules for choosing are written once, beside the Old Testament rows in ",
    fn_name("bible_glyph_roots_hebrew_drafted"),
    ".");
  ("A GREEK NAME OF HEBREW ORIGIN WEARS ITS HEBREW NAME'S PICTURE, copied rather than chosen again, and is filed under the same root word, so Isaiah, Samuel and Jonah are drawn alike in both testaments and a reader meets one picture for one person. Judas waits by the human's choice, and with him the patriarch Judah and Jude, since Greek gives all three one number.");
  let rows = [
    ["4613", "shama", "ear+proper_name", "Simon"],
    ["2501", "yoseph", "i_am+plus", "Joseph"],
    ["2268", "yasha", "rescue+i_am", "Isaiah"],
    ["2464", "tsachaq", "laughing+proper_name", "Isaac"],
    ["4672", "shalom", "peace+proper_name", "Solomon"],
    ["4540", "shamar", "guard+proper_name", "Samaria"],
    ["2197", "zakar", "reminder_ribbon+i_am", "Zechariah"],
    ["2448", "yadah", "hands_raised+proper_name", "Judah, the town"],
    ["2495", "yonah", "dove+proper_name", "Jonah"],
    ["76", "adam", "person+proper_name", "Adam"],
    ["3482", "nathan", "hands_giving+heart_on_fire", "Nathanael, given of God"],
    ["5328", "paroh", "house+proper_name", "Pharaoh"],
    ["3017", "levi", "handshake+proper_name", "Levi"],
    ["958", "ben", "son+right_arrow", "Benjamin"],
    ["4545", "shama", "ear+heart_on_fire", "Samuel"],
    ["4528", "shaal", "question+heart_on_fire", "Shealtiel"],
    ["2408", "rum", "up_arrow+i_am", "Jeremiah"],
    ["1662", "qum", "heart_on_fire+pointing_up", "Eliakim"],
    ["7", "ab", "father+i_am", "Abijah"],
    ["4524", "tsedeq", "ruler+proper_name", "Zadok"],
    ["2498", "mishpat", "i_am+scales", "Jehoshaphat"],
    ["1478", "chazaq", "might+i_am", "Hezekiah"],
    ["5617", "yasha", "rescue+proper_name", "Hosea"],
    ["4502", "raah", "eyes+son", "Reuben"],
    ["4488", "rapha", "bandage+i_am", "Rhesa, Rephaiah"],
    ["3518", "ner", "lamp+i_am", "Neri, Neriah"],
    ["2493", "yhwh", "i_am+heart_on_fire", "Joel"],
    ["2422", "pathach", "unlocked+proper_name", "Jephthah"],
    ["2242", "alah", "pointing_up+proper_name", "Heli, Eli"],
    ["1800", "ish", "man_beard+proper_name", "Enosh"],
    ["1697", "chamor", "donkey+proper_name", "Hamor"],
    ["1666", "elisha", "heart_on_fire+rescue", "Elisha"],
    ["5502", "kerub", "cherub", "cherubim"],
    ["4519", "tsaba", "military_helmet", "sabaoth, hosts"],
    ["2581", "qanna", "face_steam+describing", "Cananaean, zealot"],
  ];
  let drafted = [];
  for (let row of rows) {
    drafted.push({
      strong: row[0],
      root: row[1],
      glyph: row[2],
      gloss: row[3],
    });
  }
  return drafted;
}
