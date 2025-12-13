import { app_reply_response_how_family } from "../../../love/public/src/app_reply_response_how_family.mjs";
import { app_reply_how_family } from "../../../love/public/src/app_reply_how_family.mjs";
import { list_join_newline_2 } from "../../../love/public/src/list_join_newline_2.mjs";
import { app_reply_greetings } from "../../../love/public/src/app_reply_greetings.mjs";
import { app_reply_how_r_u } from "../../../love/public/src/app_reply_how_r_u.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { prayer_blessing_expand } from "../../../love/public/src/prayer_blessing_expand.mjs";
import { app_reply_response_how_r_u_skip_before } from "../../../love/public/src/app_reply_response_how_r_u_skip_before.mjs";
import { app_reply_pray_help_generic } from "../../../love/public/src/app_reply_pray_help_generic.mjs";
import { emoji_camera } from "../../../love/public/src/emoji_camera.mjs";
import { app_reply_call_why_generic } from "../../../love/public/src/app_reply_call_why_generic.mjs";
import { app_reply_choices_thanks } from "../../../love/public/src/app_reply_choices_thanks.mjs";
import { emojis_sing_wrap } from "../../../love/public/src/emojis_sing_wrap.mjs";
import { emoji_voice } from "../../../love/public/src/emoji_voice.mjs";
import { string_first_lower_to } from "../../../love/public/src/string_first_lower_to.mjs";
import { app_reply_response_how_r_u_skip } from "../../../love/public/src/app_reply_response_how_r_u_skip.mjs";
import { app_reply_choices_glory } from "../../../love/public/src/app_reply_choices_glory.mjs";
import { app_reply_choices_will_done_fragment } from "../../../love/public/src/app_reply_choices_will_done_fragment.mjs";
import { app_reply_choices_name } from "../../../love/public/src/app_reply_choices_name.mjs";
import { app_reply_choices_location } from "../../../love/public/src/app_reply_choices_location.mjs";
import { app_reply_choices_give } from "../../../love/public/src/app_reply_choices_give.mjs";
import { app_reply_choices_praise } from "../../../love/public/src/app_reply_choices_praise.mjs";
import { app_reply_response_greetings } from "../../../love/public/src/app_reply_response_greetings.mjs";
import { app_reply_response_how_r_u } from "../../../love/public/src/app_reply_response_how_r_u.mjs";
import { emoji_handshake } from "../../../love/public/src/emoji_handshake.mjs";
import { newline } from "../../../love/public/src/newline.mjs";
import { emoji_rock } from "../../../love/public/src/emoji_rock.mjs";
import { emoji_rainbow } from "../../../love/public/src/emoji_rainbow.mjs";
import { string_the_servant_of_god } from "../../../love/public/src/string_the_servant_of_god.mjs";
import { emoji_question } from "../../../love/public/src/emoji_question.mjs";
import { emoji_dove } from "../../../love/public/src/emoji_dove.mjs";
import { app_reply_pray } from "../../../love/public/src/app_reply_pray.mjs";
import { emoji_family } from "../../../love/public/src/emoji_family.mjs";
import { emoji_hands_raising } from "../../../love/public/src/emoji_hands_raising.mjs";
import { emoji_church } from "../../../love/public/src/emoji_church.mjs";
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
import { emoji_fire } from "../../../love/public/src/emoji_fire.mjs";
import { prayer_start } from "../../../love/public/src/prayer_start.mjs";
import { prayer_end } from "../../../love/public/src/prayer_end.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
export function app_reply_choices() {
  marker("1");
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
  let pray_request = app_reply_choices_will_done_fragment();
  let will = app_reply_pray("Will", pray_request);
  let with2 = app_reply_pray("With", "always be with you! " + emoji_dove());
  let s = app_reply_response_how_r_u_skip();
  let s2 = app_reply_response_how_r_u_skip_before();
  let b = {
    text: emoji_pray() + " Bless",
    response: prayer_blessing_expand(),
  };
  let greetings = app_reply_response_greetings();
  let hru = app_reply_response_how_r_u();
  let how_family = app_reply_response_how_family();
  let v = [
    {
      text: emoji_pray() + " Amazing",
      response:
        emoji_pray() + " Yet not I, but the grace of God that is with me!",
    },
    {
      text: emoji_pray() + " Amen",
      response: prayer_end(),
    },
    {
      text: emoji_question() + " Ask",
      response: "What are you asking me to do?",
    },
    {
      text: emoji_pray() + " Bless short",
      response: "God bless" + prayer_end(),
    },
    {
      text: emoji_phone() + " Call want why?",
      response: app_reply_call_why_generic("do", "want "),
    },
    {
      text: emoji_phone() + " Called why?",
      response: app_reply_call_why_generic("did", ""),
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
      response: app_reply_choices_glory(),
    },
    {
      text: emoji_pray() + " Give",
      response: app_reply_choices_give(),
    },
    {
      text: app_reply_greetings(),
      response: greetings,
    },
    {
      text: app_reply_greetings() + " " + app_reply_how_r_u(),
      response: list_join_newline_2([greetings, hru]),
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
      text: emoji_pray() + " Help me",
      response: app_reply_pray_help_generic("me"),
    },
    {
      text: emoji_pray() + " Help us",
      response: app_reply_pray_help_generic("us"),
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
        string_first_lower_to(s2) +
        " today is one day closer to the return of Jesus than yesterday!",
    },
    {
      text: app_reply_how_family(),
      response: app_reply_response_how_family(),
    },
    {
      text: app_reply_how_r_u(),
      response: how_r_u,
    },
    {
      text: app_reply_how_r_u() + " " + app_reply_how_family(),
      response: list_join_newline_2([how_r_u, how_family]),
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
      response:
        "Do you speak any languages besides English? If so, what languages do you speak besides English?",
    },
    {
      text: emoji_globe_americas() + " Location",
      response: app_reply_choices_location(),
    },
    {
      text: emoji_wave() + " Meet",
      response: emoji_pray() + " Nice to meet you! " + emoji_handshake(),
    },
    {
      text: emoji_wave() + " Name",
      response: app_reply_choices_name(),
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
        " Now may the Lord of peace himself give you peace at all times and in every way. The Lord be with you " +
        emoji_rainbow(),
    },
    {
      text: emoji_camera() + " Pictures",
      response:
        emoji_camera() +
        " Here are some pictures of my wife and I: https://www.facebook.com/media/set/?set=a.761930266739275&type=3",
    },
    {
      text: "🎵 Praise",
      response: app_reply_choices_praise(),
    },
    {
      text: emoji_pray() + " Pray",
      response: prayer_start(),
    },
    {
      text: emoji_pray() + " Preach",
      response:
        emoji_pray() +
        "If God wills, then yes I will preach teach. Do you have a day and time?",
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
      response: app_reply_choices_thanks(),
    },
    {
      text: emoji_pray() + " Travel ask",
      response: emoji_pray() + "No money for travel",
    },
    travel_pray,
    {
      text: emoji_pray() + " Travel ask",
      response: emoji_pray() + "No money for travel",
    },
    {
      text: emoji_voice() + " Voice",
      response:
        emojis_sing_wrap("My voice is a gift and miracle from God! ") +
        app_reply_choices_glory() +
        " " +
        app_reply_choices_thanks(),
    },
    {
      text: emoji_smile() + " Well",
      response: emoji_smile() + " All is well! " + emoji_pray(),
    },
    {
      text: emoji_question() + " What",
      response: emoji_pray() + " What do you mean?",
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
    {
      text: emoji_pray() + " Word",
      response:
        emoji_pray() +
        " Behold, I am an unworthy servant of the LORD. May the word of the LORD come true!",
    },
  ];
  return v;
}
