import { emoji_sleep_face } from "./emoji_sleep_face.mjs";
import { emoji_sleep_z } from "./emoji_sleep_z.mjs";
import { emoji_globe_americas } from "./emoji_globe_americas.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { emoji_100 } from "./emoji_100.mjs";
import { string_the_servant_of_god_is } from "./string_the_servant_of_god_is.mjs";
import { emoji_ok } from "./emoji_ok.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { emoji_wave } from "./emoji_wave.mjs";
import { emoji_trinity } from "./emoji_trinity.mjs";
import { emoji_fire } from "./emoji_fire.mjs";
import { prayer_start } from "./prayer_start.mjs";
import { prayer_end } from "./prayer_end.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
export function app_reply_choices() {
  let v = [
    {
      text: emoji_pray() + " Amen",
      response: prayer_end(),
    },
    {
      text: emoji_pray() + " Bless",
      response:
        prayer_start() +
        "May God bless you, your family, your church and your country exceedingly abundantly more than anyone can ask or think " +
        prayer_end(),
    },
    {
      text: emoji_fire() + " Glory",
      response: emoji_pray() + " All glory to God " + emoji_trinity() + " ! ",
    },
    {
      text: emoji_wave() + "Greetings",
      response:
        emoji_wave() +
        emoji_smile() +
        " Greetings in the name of our LORD Jesus Christ! " +
        emoji_cross(),
    },
    {
      text: emoji_pray() + " Heal",
      response: emoji_pray() + "May the LORD heal the sick",
    },
    {
      text: emoji_ok() + "How r u",
      response:
        emoji_ok() +
        " " +
        string_the_servant_of_god_is() +
        " doing good " +
        emoji_100() +
        " through the grace of God, because " +
        emoji_book_open() +
        " all things work together for good to them that love God and are called according to the purpose of God! (Romans 8:28)" +
        emoji_pray(),
    },
    {
      text: emoji_globe_americas() + " Location",
      response:
        emoji_globe_americas() +
        " " +
        string_the_servant_of_god_is() +
        " from 🇺🇸 the United States of America, state of Florida, city of Jacksonville. " +
        emoji_pray(),
    },
    {
      text: emoji_wave() + " Name",
      response:
        emoji_pray() +
        " " +
        string_the_servant_of_god_is() +
        " called Jared Patten Mathis " +
        "🤝",
    },
    {
      text: "🎵 Praise",
      response:
        " 🎵 🗣️ Praise the LORD our God in the name of Jesus Christ! 🎶",
    },
    {
      text: emoji_pray() + " Pray",
      response: prayer_start(),
    },
    {
      text: emoji_pray() + " Preach",
      response: "I cannot preach at this time",
    },
    {
      text: emoji_pray() + " Provide",
      response: emoji_pray() + "May the LORD provide what is needed",
    },
    {
      text: emoji_pray() + " Sleep",
      response:
        emoji_pray() +
        emoji_sleep_z() +
        " May the LORD bless your sleep, make your sleep sweet and peaceful, protect you from demons, bad dreams and all harm, and make you wake up feeling refreshed. " +
        emoji_sleep_face(),
    },
    {
      text: emoji_pray() + " Thanks",
      response: emoji_pray() + " Thank you very much! " + emoji_smile(),
    },
    {
      text: emoji_pray() + " WhatsApp",
      response: "WhatsApp: +1-904-314-4053",
    },
  ];
  return v;
}
