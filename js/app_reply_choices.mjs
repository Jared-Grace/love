import { emoji_handshake } from "../../../love/public/src/emoji_handshake.mjs";
import { newline } from "../../../love/public/src/newline.mjs";
import { emoji_rock } from "../../../love/public/src/emoji_rock.mjs";
import { emoji_rainbow } from "../../../love/public/src/emoji_rainbow.mjs";
import { string_the_servant_of_god } from "../../../love/public/src/string_the_servant_of_god.mjs";
import { emoji_question } from "../../../love/public/src/emoji_question.mjs";
import { emoji_dove } from "../../../love/public/src/emoji_dove.mjs";
import { app_reply_pray } from "../../../love/public/src/app_reply_pray.mjs";
import { emoji_family } from "../../../love/public/src/emoji_family.mjs";
import { emoji_voice } from "../../../love/public/src/emoji_voice.mjs";
import { emoji_hands_raising } from "../../../love/public/src/emoji_hands_raising.mjs";
import { emoji_church } from "../../../love/public/src/emoji_church.mjs";
import { string_lord_bless } from "../../../love/public/src/string_lord_bless.mjs";
import { string_lord_bless_your } from "../../../love/public/src/string_lord_bless_your.mjs";
import { emoji_phone } from "../../../love/public/src/emoji_phone.mjs";
import { emoji_sleep_face } from "../../../love/public/src/emoji_sleep_face.mjs";
import { emoji_sleep_z } from "../../../love/public/src/emoji_sleep_z.mjs";
import { emoji_globe_americas } from "../../../love/public/src/emoji_globe_americas.mjs";
import { emoji_book_open } from "../../../love/public/src/emoji_book_open.mjs";
import { emoji_100 } from "../../../love/public/src/emoji_100.mjs";
import { string_the_servant_of_god_is } from "../../../love/public/src/string_the_servant_of_god_is.mjs";
import { emoji_ok } from "../../../love/public/src/emoji_ok.mjs";
import { emoji_cross } from "../../../love/public/src/emoji_cross.mjs";
import { emoji_smile } from "../../../love/public/src/emoji_smile.mjs";
import { emoji_wave } from "../../../love/public/src/emoji_wave.mjs";
import { emoji_trinity } from "../../../love/public/src/emoji_trinity.mjs";
import { emoji_fire } from "../../../love/public/src/emoji_fire.mjs";
import { prayer_start } from "../../../love/public/src/prayer_start.mjs";
import { prayer_end } from "../../../love/public/src/prayer_end.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
export function app_reply_choices() {
  let education = app_reply_pray(
    "Education",
    "provide education to those in need 🏫",
  );
  let heal = app_reply_pray("Heal", "heal the sick");
  let job = app_reply_pray("Job", "provide you with a good job");
  let provide = app_reply_pray("Provide", "provide what is needed");
  let travel_pray = app_reply_pray(
    "Travel pray",
    "give you safe travels " + emoji_dove(),
  );
  let will = app_reply_pray("Will", "have His will done " + emoji_dove());
  let with2 = app_reply_pray("With", "always be with you " + emoji_dove());
  let v = [
    {
      text: emoji_pray() + " Amen",
      response: prayer_end(),
    },
    {
      text: emoji_question() + " Ask",
      response: "What are you asking me to do?",
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
      text: emoji_pray() + " Bless short",
      response: "God bless" + prayer_end(),
    },
    {
      text: emoji_phone() + " Call why?",
      response:
        emoji_phone() +
        " Why did you call me? What did you want to talk about?",
    },
    {
      text: emoji_phone() + " Call no",
      response: emoji_phone() + " No video call",
    },
    {
      text: emoji_pray() + " Church",
      response:
        emoji_pray() + string_lord_bless_your() + "church " + emoji_church(),
    },
    education,
    {
      text: emoji_pray() + " Family",
      response:
        emoji_pray() + string_lord_bless_your() + "family " + emoji_family(),
    },
    {
      text: emoji_pray() + " Future",
      response:
        emoji_pray() +
        "God knows the future. I do not know the future." +
        emoji_question(),
    },
    {
      text: emoji_fire() + " Glory",
      response: emoji_pray() + " All glory to God " + emoji_trinity() + " ! ",
    },
    {
      text: emoji_pray() + " Give",
      response:
        emoji_pray() +
        " Sorry, I have nothing to give you at this time. According to the desire of the LORD: May the LORD provide and may the LORD lead you to someone who will abundantly provide whatever you ask the same day you ask.",
    },
    {
      text: emoji_wave() + " Greetings",
      response:
        emoji_wave() +
        emoji_smile() +
        " Greetings in the name of our LORD Jesus Christ! " +
        emoji_cross(),
    },
    {
      text: emoji_hands_raising() + " Hallelujah",
      response:
        emoji_hands_raising() +
        " Hallelujah! Hallelujah! Hallelujah! " +
        emoji_pray(),
    },
    heal,
    {
      text: emoji_pray() + " Health",
      response:
        emoji_pray() +
        " The doctors said I had a diagnosis of schizoaffective disorder. Please pray for my health, that I am healed from everything and that those who gave me medicine command me to stop taking medicine.",
    },
    {
      text: emoji_pray() + " Help",
      response: "God help us" + prayer_end(),
    },
    {
      text: emoji_question() + " Help what",
      response:
        emoji_pray() +
        "What help are you asking for? What are you asking me to do?",
    },
    {
      text: emoji_ok() + " How day",
      response:
        emoji_ok() +
        " The day of the " +
        string_the_servant_of_god_is() +
        " doing good " +
        emoji_100() +
        " through the grace of God, because " +
        emoji_book_open() +
        " all things work together for good to them that love God and are called according to the purpose of God! (Romans 8:28) However please pray that the servant of God will stop hearing demons" +
        emoji_pray(),
    },
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
        " all things work together for good to them that love God and are called according to the purpose of God! (Romans 8:28) However please pray that the servant of God will stop hearing demons" +
        emoji_pray(),
    },
    {
      text: emoji_pray() + " Invite",
      response:
        emoji_pray() +
        "If the LORD makes a way, then I will travel to you. However at this time I have no money to travel.",
    },
    job,
    {
      text: emoji_globe_americas() + " Language",
      response:
        emoji_globe_americas() +
        " " +
        string_the_servant_of_god() +
        " speaks English. " +
        emoji_pray(),
    },
    {
      text: emoji_question() + " Languages",
      response: "Do you speak any languages besides English?",
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
      text: emoji_wave() + " Meet",
      response: emoji_pray() + " Nice to meet you! " + emoji_handshake(),
    },
    {
      text: emoji_wave() + " Name",
      response:
        emoji_pray() +
        " " +
        string_the_servant_of_god_is() +
        " called Jared Patten Mathis " +
        emoji_handshake(),
    },
    {
      text: emoji_ok() + "Okay",
      response:
        emoji_ok() +
        " " +
        string_the_servant_of_god_is() +
        " okay, yes " +
        emoji_100() +
        " " +
        emoji_pray(),
    },
    {
      text: emoji_dove() + " Peace",
      response:
        emoji_dove() +
        " Now may the Lord of peace himself give you peace at all times and in every way. The Lord be with all of you " +
        emoji_rainbow(),
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
        emoji_pray() +
        "If God wills, then yes I will preach. I am not available 10 am to 12 pm every day EST. Do you have a day and time?",
    },
    {
      text: emoji_pray() + " " + "Prayers",
      response:
        emoji_pray() + "According to the desire of God, may there be prayer",
    },
    {
      text: emoji_pray() + " " + "Programming",
      response: emoji_pray() + "I have been computer programming 💻",
    },
    {
      text: emoji_pray() + " " + "Replying",
      response: emoji_pray() + "I have been replying to messages 📨",
    },
    {
      text: emoji_pray() + " Share",
      response:
        emoji_pray() +
        " What day and time are you asking me to share the word of God? " +
        emoji_book_open(),
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
      text: "Song",
      response:
        "https://youtu.be/rNhSoUKPgMQ" +
        newline() +
        newline() +
        " Jesus gave me the grace to write this song",
    },
    {
      text: emoji_pray() + " Testimony",
      response:
        emoji_pray() +
        " Jesus died for my sins. " +
        emoji_cross() +
        " Jesus was buried. " +
        emoji_rock() +
        " Jesus rose to life. " +
        emoji_pray() +
        emoji_church() +
        " I confessed this truth since I was about 7 years old. But I never decided to fully obey Jesus as LORD until I was about 26 years old. Then eventually God called me to ministry. " +
        emoji_cross() +
        emoji_smile(),
    },
    {
      text: emoji_pray() + " Thank God",
      response: emoji_pray() + " Thank the LORD, our God! " + emoji_smile(),
    },
    {
      text: emoji_pray() + " Thank you",
      response: emoji_pray() + " Thank you very much! " + emoji_smile(),
    },
    {
      text: emoji_pray() + " Travel ask",
      response: emoji_pray() + "No money for travel",
    },
    travel_pray,
    {
      text: emoji_question() + " What",
      response: emoji_pray() + "What do you mean?",
    },
    {
      text: emoji_phone() + " WhatsApp",
      response: emoji_phone() + " WhatsApp: +1-904-314-4052",
    },
    will,
    {
      text: emoji_pray() + " Wills",
      response: emoji_pray() + " If God wills, yes",
    },
    with2,
  ];
  return v;
}
