import { app_reply_choices_whatsapp } from "./app_reply_choices_whatsapp.mjs";
import { app_reply_glory } from "./app_reply_glory.mjs";
import { app_reply_give } from "./app_reply_give.mjs";
import { text_combine_today } from "./text_combine_today.mjs";
import { app_reply_how_feel_today } from "./app_reply_how_feel_today.mjs";
import { newline_2 } from "./newline_2.mjs";
import { app_reply_greetings_live } from "./app_reply_greetings_live.mjs";
import { app_reply_response_how_r_u_today } from "./app_reply_response_how_r_u_today.mjs";
import { app_reply_how_r_u_today } from "./app_reply_how_r_u_today.mjs";
import { text_the_servant_of_god_first_upper } from "./text_the_servant_of_god_first_upper.mjs";
import { emoji_no } from "./emoji_no.mjs";
import { emoji_clock } from "./emoji_clock.mjs";
import { app_reply_how_feel } from "./app_reply_how_feel.mjs";
import { app_reply_called_why } from "./app_reply_called_why.mjs";
import { app_reply_live } from "./app_reply_live.mjs";
import { app_reply_response_live } from "./app_reply_response_live.mjs";
import { app_reply_response_how_day } from "./app_reply_response_how_day.mjs";
import { app_reply_how_day } from "./app_reply_how_day.mjs";
import { app_reply_response_how_family } from "./app_reply_response_how_family.mjs";
import { app_reply_how_family } from "./app_reply_how_family.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
import { app_reply_greetings } from "./app_reply_greetings.mjs";
import { app_reply_how_r_u } from "./app_reply_how_r_u.mjs";
import { prayer_blessing_expand } from "./prayer_blessing_expand.mjs";
import { app_reply_pray_help_generic } from "./app_reply_pray_help_generic.mjs";
import { emoji_camera } from "./emoji_camera.mjs";
import { app_reply_call_why_generic } from "./app_reply_call_why_generic.mjs";
import { app_reply_choices_thanks } from "./app_reply_choices_thanks.mjs";
import { emojis_sing_wrap } from "./emojis_sing_wrap.mjs";
import { emoji_voice } from "./emoji_voice.mjs";
import { app_reply_response_how_r_u_skip_first_upper } from "./app_reply_response_how_r_u_skip_first_upper.mjs";
import { app_reply_choices_glory } from "./app_reply_choices_glory.mjs";
import { app_reply_choices_will_done_fragment } from "./app_reply_choices_will_done_fragment.mjs";
import { app_reply_choices_name } from "./app_reply_choices_name.mjs";
import { app_reply_choices_location } from "./app_reply_choices_location.mjs";
import { app_reply_choices_give } from "./app_reply_choices_give.mjs";
import { app_reply_choices_praise } from "./app_reply_choices_praise.mjs";
import { app_reply_response_greetings } from "./app_reply_response_greetings.mjs";
import { app_reply_response_how_r_u } from "./app_reply_response_how_r_u.mjs";
import { emoji_handshake } from "./emoji_handshake.mjs";
import { emoji_rock } from "./emoji_rock.mjs";
import { emoji_rainbow } from "./emoji_rainbow.mjs";
import { emoji_question } from "./emoji_question.mjs";
import { emoji_dove } from "./emoji_dove.mjs";
import { app_reply_pray } from "./app_reply_pray.mjs";
import { emoji_family } from "./emoji_family.mjs";
import { emoji_hands_raising } from "./emoji_hands_raising.mjs";
import { emoji_church } from "./emoji_church.mjs";
import { text_lord_bless_your } from "./text_lord_bless_your.mjs";
import { emoji_phone } from "./emoji_phone.mjs";
import { emoji_sleep_face } from "./emoji_sleep_face.mjs";
import { emoji_sleep_z } from "./emoji_sleep_z.mjs";
import { emoji_globe_americas } from "./emoji_globe_americas.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { emoji_100 } from "./emoji_100.mjs";
import { text_the_servant_of_god_is_first_upper } from "./text_the_servant_of_god_is_first_upper.mjs";
import { emoji_ok } from "./emoji_ok.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { emoji_wave } from "./emoji_wave.mjs";
import { prayer_start } from "./prayer_start.mjs";
import { prayer_end } from "./prayer_end.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
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
    text_combine("give you safe travels ", emoji_dove()),
  );
  let pray_request = app_reply_choices_will_done_fragment();
  let will = app_reply_pray("Will", pray_request);
  let with2 = app_reply_pray(
    "With",
    text_combine("always be with you! ", emoji_dove()),
  );
  let s = app_reply_response_how_r_u_skip_first_upper();
  let b = {
    text: text_combine(emoji_pray(), " Bless"),
    response: prayer_blessing_expand(),
  };
  let greetings = app_reply_response_greetings();
  let hru = app_reply_response_how_r_u();
  let hru_today = app_reply_response_how_r_u_today();
  let how_family = app_reply_response_how_family();
  let how_day = app_reply_response_how_day();
  let live = app_reply_response_live();
  let called_why = app_reply_call_why_generic("did", "");
  let how_feel = text_combine(
    emoji_pray(),
    " God is helping me be joyful when I suffer",
  );
  let how_feel_today = text_combine_today(how_feel);
  let s3 = text_the_servant_of_god_first_upper();
  let v = [
    {
      text: text_combine(emoji_pray(), " Amazing"),
      response: text_combine(
        emoji_pray(),
        " Yet not I, but the grace of God that is with me!",
      ),
    },
    {
      text: text_combine(emoji_pray(), " Amen"),
      response: prayer_end(),
    },
    {
      text: text_combine(emoji_question(), " Ask"),
      response: "What are you asking me to do?",
    },
    {
      text: text_combine(emoji_pray(), " Bless short"),
      response: text_combine("God bless", prayer_end()),
    },
    {
      text: text_combine(emoji_phone(), " Call want why?"),
      response: app_reply_call_why_generic("do", "want to "),
    },
    {
      text: app_reply_called_why(),
      response: called_why,
    },
    {
      text: text_combine(emoji_phone(), " Call no"),
      response: text_combine(emoji_phone(), " No video call"),
    },
    {
      text: text_combine(emoji_pray(), " Church"),
      response: text_combine_multiple([
        emoji_pray(),
        text_lord_bless_your(),
        "church ",
        emoji_church(),
      ]),
    },
    education,
    {
      text: text_combine(emoji_pray(), " Family"),
      response: text_combine_multiple([
        emoji_pray(),
        text_lord_bless_your(),
        "family ",
        emoji_family(),
      ]),
    },
    {
      text: text_combine(emoji_pray(), " Friends"),
      response: text_combine(
        emoji_pray(),
        'Every friend of Jesus is a friend of mine! Jesus says: "You are My friends if you do what I command you." (John 15:14)',
      ),
    },
    {
      text: text_combine(emoji_pray(), " Future"),
      response: text_combine_multiple([
        emoji_pray(),
        "God knows the future. I do not know the future.",
        emoji_question(),
      ]),
    },
    {
      text: app_reply_glory(),
      response: app_reply_choices_glory(),
    },
    {
      text: app_reply_give(),
      response: app_reply_choices_give(),
    },
    {
      text: text_combine(emoji_pray(), " Fundraiser"),
      response: text_combine(
        emoji_pray(),
        " Sorry, I cannot create a fundraiser for you",
      ),
    },
    {
      text: app_reply_greetings(),
      response: greetings,
    },
    {
      text: text_combine_multiple([
        app_reply_greetings(),
        " ",
        app_reply_called_why(),
      ]),
      response: list_join_newline_2([greetings, called_why]),
    },
    {
      text: text_combine_multiple([
        app_reply_greetings(),
        " ",
        app_reply_how_day(),
      ]),
      response: list_join_newline_2([greetings, how_day]),
    },
    {
      text: text_combine_multiple([
        app_reply_greetings(),
        " ",
        app_reply_how_family(),
      ]),
      response: list_join_newline_2([greetings, how_family]),
    },
    {
      text: text_combine_multiple([
        app_reply_greetings(),
        " ",
        app_reply_how_feel(),
      ]),
      response: list_join_newline_2([greetings, how_feel]),
    },
    {
      text: text_combine_multiple([
        app_reply_greetings(),
        " ",
        app_reply_how_r_u(),
      ]),
      response: list_join_newline_2([greetings, hru]),
    },
    {
      text: text_combine_multiple([
        app_reply_greetings(),
        " ",
        app_reply_how_r_u_today(),
      ]),
      response: list_join_newline_2([greetings, hru_today]),
    },
    {
      text: text_combine_multiple([
        app_reply_greetings(),
        " ",
        app_reply_how_r_u(),
        " ",
        app_reply_how_family(),
      ]),
      response: list_join_newline_2([greetings, hru, how_family]),
    },
    {
      text: app_reply_greetings_live(),
      response: list_join_newline_2([greetings, live]),
    },
    {
      text: text_combine(emoji_hands_raising(), " Hallelujah"),
      response: text_combine_multiple([
        emoji_hands_raising(),
        " Hallelujah! Hallelujah! Hallelujah! ",
        emoji_pray(),
      ]),
    },
    heal,
    {
      text: text_combine(emoji_pray(), " Health"),
      response: text_combine(
        emoji_pray(),
        " The doctors said I had a diagnosis of schizoaffective disorder. Please pray for my health, that I am healed from everything and that those who gave me medicine command me to stop taking medicine.",
      ),
    },
    {
      text: text_combine(emoji_pray(), " Help me"),
      response: app_reply_pray_help_generic("me"),
    },
    {
      text: text_combine(emoji_pray(), " Help us"),
      response: app_reply_pray_help_generic("us"),
    },
    {
      text: text_combine(emoji_question(), " Help what"),
      response: text_combine(
        emoji_pray(),
        "What help are you asking for? What are you asking me to do?",
      ),
    },
    {
      text: app_reply_how_day(),
      response: how_day,
    },
    {
      text: app_reply_how_family(),
      response: how_family,
    },
    {
      text: app_reply_how_feel(),
      response: how_feel,
    },
    {
      text: app_reply_how_feel_today(),
      response: how_feel_today,
    },
    {
      text: app_reply_how_r_u(),
      response: hru,
    },
    {
      text: app_reply_how_r_u_today(),
      response: hru_today,
    },
    {
      text: text_combine_multiple([
        app_reply_how_r_u(),
        " ",
        app_reply_how_family(),
      ]),
      response: list_join_newline_2([hru, how_family]),
    },
    {
      text: text_combine_multiple([
        app_reply_how_r_u(),
        " ",
        app_reply_how_day(),
      ]),
      response: list_join_newline_2([hru, how_day]),
    },
    {
      text: text_combine(emoji_pray(), " Invite"),
      response: text_combine(
        emoji_pray(),
        "If the LORD makes a way, then I will travel to you. However at this time I have no money to travel.",
      ),
    },
    job,
    {
      text: text_combine(emoji_globe_americas(), " Language"),
      response: text_combine_multiple([
        emoji_globe_americas(),
        " ",
        s3,
        " speaks English. ",
        emoji_pray(),
      ]),
    },
    {
      text: app_reply_live(),
      response: live,
    },
    {
      text: text_combine(emoji_globe_americas(), " Location"),
      response: app_reply_choices_location(),
    },
    {
      text: text_combine(emoji_wave(), " Meet"),
      response: text_combine_multiple([
        emoji_pray(),
        " Nice to meet you! ",
        emoji_handshake(),
      ]),
    },
    {
      text: text_combine(emoji_wave(), " Name"),
      response: app_reply_choices_name(),
    },
    {
      text: text_combine(emoji_wave(), " Name location"),
      response: text_combine_multiple([
        app_reply_choices_name(),
        newline_2(),
        app_reply_choices_location(),
      ]),
    },
    {
      text: text_combine(emoji_wave(), " Name ministry"),
      response: text_combine(
        'The name of my ministry is: \"JESUS rose to life\" ',
        emoji_cross(),
      ),
    },
    {
      text: text_combine(emoji_ok(), "Okay"),
      response: text_combine_multiple([
        emoji_ok(),
        " ",
        text_the_servant_of_god_is_first_upper(),
        " okay, yes ",
        emoji_100(),
        " ",
        emoji_pray(),
      ]),
    },
    {
      text: text_combine(emoji_dove(), " Peace"),
      response: text_combine_multiple([
        emoji_dove(),
        " Now may the Lord of peace himself give you peace at all times and in every way. The Lord be with you ",
        emoji_rainbow(),
      ]),
    },
    {
      text: text_combine(emoji_camera(), " Pictures"),
      response: text_combine(
        emoji_camera(),
        " Here are some pictures of my wife and I: https://www.facebook.com/media/set/?set=a.761930266739275&type=3",
      ),
    },
    {
      text: "🎵 Praise",
      response: app_reply_choices_praise(),
    },
    {
      text: text_combine(emoji_pray(), " Pray"),
      response: prayer_start(),
    },
    {
      text: text_combine(emoji_pray(), " Preach"),
      response: text_combine(
        emoji_pray(),
        "If God wills, then yes I will preach teach. Do you have a day and time?",
      ),
    },
    {
      text: text_combine_multiple([emoji_pray(), " ", "Prayers"]),
      response: text_combine(
        emoji_pray(),
        "According to the desire of God, may there be prayer",
      ),
    },
    {
      text: text_combine_multiple([emoji_pray(), " ", "Programming"]),
      response: text_combine(
        emoji_pray(),
        "I have been computer programming 💻",
      ),
    },
    {
      text: text_combine_multiple([emoji_pray(), " ", "Replying"]),
      response: text_combine(
        emoji_pray(),
        "I have been replying to messages 📨",
      ),
    },
    {
      text: text_combine(emoji_pray(), " Share"),
      response: text_combine_multiple([
        emoji_pray(),
        " What day and time are you asking me to share the word of God? ",
        emoji_book_open(),
      ]),
    },
    provide,
    {
      text: text_combine(emoji_pray(), " Sleep"),
      response: text_combine_multiple([
        emoji_pray(),
        emoji_sleep_z(),
        " ",
        text_lord_bless_your(),
        "sleep, make your sleep sweet and peaceful, protect you from demons, bad dreams and all harm, and make you wake up feeling refreshed. ",
        emoji_sleep_face(),
      ]),
    },
    {
      text: "Song",
      response: text_combine_multiple([
        "https://youtu.be/rNhSoUKPgMQ",
        newline_2(),
        " Jesus gave me the grace to write this song",
      ]),
    },
    {
      text: text_combine(emoji_no(), " Sorry"),
      response: " Sorry, I will not do that",
    },
    {
      text: "Talk",
      response: "What do you want to talk about?",
    },
    {
      text: text_combine(emoji_pray(), " Testimony"),
      response: text_combine_multiple([
        emoji_pray(),
        " Jesus died for my sins. ",
        emoji_cross(),
        " Jesus was buried. ",
        emoji_rock(),
        " Jesus rose to life. ",
        emoji_pray(),
        emoji_church(),
        " I confessed this truth since I was about 7 years old. But I never decided to fully obey Jesus as LORD until I was about 26 years old. Then eventually God called me to ministry. ",
        emoji_cross(),
        emoji_smile(),
      ]),
    },
    {
      text: text_combine(emoji_pray(), " Thank God"),
      response: text_combine_multiple([
        emoji_pray(),
        " Thank the LORD, our God! ",
        emoji_smile(),
      ]),
    },
    {
      text: text_combine(emoji_pray(), " Thank you"),
      response: app_reply_choices_thanks(),
    },
    {
      text: text_combine(emoji_clock(), " Time"),
      response: text_combine(emoji_pray(), " I have time to reply to messages"),
    },
    {
      text: text_combine(emoji_pray(), " Travel ask"),
      response: text_combine(emoji_pray(), "No money for travel"),
    },
    travel_pray,
    {
      text: text_combine(emoji_voice(), " Voice"),
      response: text_combine_multiple([
        emojis_sing_wrap("My voice is a gift and miracle from God! "),
        app_reply_choices_glory(),
        " ",
        app_reply_choices_thanks(),
      ]),
    },
    {
      text: text_combine(emoji_smile(), " Well"),
      response: text_combine_multiple([
        emoji_smile(),
        " All is well! ",
        emoji_pray(),
      ]),
    },
    {
      text: text_combine(emoji_question(), " What"),
      response: text_combine(emoji_pray(), " What do you mean?"),
    },
    {
      text: app_reply_choices_whatsapp(),
      response: text_combine(emoji_phone(), " WhatsApp: +1-904-314-4052"),
    },
    will,
    {
      text: text_combine(emoji_pray(), " Wills"),
      response: text_combine(emoji_pray(), " If God wills, yes"),
    },
    with2,
    {
      text: text_combine(emoji_pray(), " Word"),
      response: text_combine(
        emoji_pray(),
        " Behold, I am an unworthy servant of the LORD. May the word of the LORD come true!",
      ),
    },
    {
      text: text_combine(emoji_pray(), " Work"),
      response: text_combine(
        emoji_pray(),
        " Through the grace of God: Recently, I have only been doing ministry work. I have been preaching at different churches. I have also made Bible singing videos: https://www.youtube.com/@CHRISTrosetolifesinging Also, I have been doing some computer programming.",
      ),
    },
  ];
  return v;
}
