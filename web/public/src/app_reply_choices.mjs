import { emoji_dove } from "./emoji_dove.mjs";
import { app_reply_pray } from "./app_reply_pray.mjs";
import { emoji_family } from "./emoji_family.mjs";
import { emoji_voice } from "./emoji_voice.mjs";
import { emoji_hands_raising } from "./emoji_hands_raising.mjs";
import { emoji_church } from "./emoji_church.mjs";
import { string_lord_bless } from "./string_lord_bless.mjs";
import { string_lord_bless_your } from "./string_lord_bless_your.mjs";
import { emoji_phone } from "./emoji_phone.mjs";
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
  let heal = app_reply_pray("Heal", "heal the sick");
  let job = app_reply_pray("Job", "provide you with a good job");
  let provide = app_reply_pray("Provide", "provide what is needed");
  let will = app_reply_pray("Will", "have His will done " + emoji_dove());
  let with2 = app_reply_pray("With", "always be with you " + emoji_dove());
  let v = [
    {
      text: emoji_pray() + " Amen",
      response: prayer_end(),
    },
    {
      text: emoji_pray() + " Bless",
      response:
        prayer_start() +
        string_lord_bless() +
        "you, your family, your church and your country exceedingly abundantly more than anyone can ask or think " +
        prayer_end(),
    },
    {
      text: emoji_pray() + " Church",
      response:
        emoji_pray() + string_lord_bless_your() + "church " + emoji_church(),
    },
    {
      text: emoji_pray() + " Family",
      response:
        emoji_pray() + string_lord_bless_your() + "family " + emoji_family(),
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
      text: emoji_hands_raising() + "Hallelujah",
      response:
        emoji_hands_raising() +
        " Hallelujah! Hallelujah! Hallelujah! " +
        emoji_pray(),
    },
    heal,
    {
      text: emoji_pray() + " How family",
      response: emoji_pray() + "Please pray for my family",
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
    job,
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
        " 🎵 " +
        emoji_voice() +
        " Praise the LORD our God in the name of Jesus Christ! 🎶",
    },
    {
      text: emoji_pray() + " Pray",
      response: prayer_start(),
    },
    {
      text: emoji_pray() + " Preach",
      response:
        emoji_pray() + "At this time, I cannot choose a day and time to preach",
    },
    provide,
    {
      text: emoji_pray() + " Sleep",
      response:
        emoji_pray() +
        emoji_sleep_z() +
        " " +
        string_lord_bless_your() +
        "sleep, make your sleep sweet and peaceful, protect you from demons, bad dreams and all harm, and make you wake up feeling refreshed. " +
        emoji_sleep_face(),
    },
    {
      text: emoji_pray() + " Thanks",
      response: emoji_pray() + " Thank you very much! " + emoji_smile(),
    },
    {
      text: emoji_phone() + " WhatsApp",
      response: emoji_phone() + " WhatsApp: +1-904-314-4053",
    },will,
    with2,
  ];
  return v;
}
