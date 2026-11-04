import { app_reply_pray } from "./app_reply_pray.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_dove } from "./emoji_dove.mjs";
import { reply_choices_will_done_fragment } from "./reply_choices_will_done_fragment.mjs";
import { reply_response_how_r_u_skip_first_upper } from "./reply_response_how_r_u_skip_first_upper.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { prayer_blessing_expand } from "./prayer_blessing_expand.mjs";
import { reply_response_greetings } from "./reply_response_greetings.mjs";
import { reply_response_how_r_u } from "./reply_response_how_r_u.mjs";
import { reply_response_how_r_u_today } from "./reply_response_how_r_u_today.mjs";
import { app_reply_response_how_family } from "./app_reply_response_how_family.mjs";
import { app_reply_response_how_day } from "./app_reply_response_how_day.mjs";
import { app_reply_response_live } from "./app_reply_response_live.mjs";
import { app_reply_call_why_generic } from "./app_reply_call_why_generic.mjs";
import { text_combine_today } from "./text_combine_today.mjs";
import { text_the_servant_of_god_first_upper } from "./text_the_servant_of_god_first_upper.mjs";
import { prayer_end } from "./prayer_end.mjs";
import { emoji_question } from "./emoji_question.mjs";
import { emoji_phone } from "./emoji_phone.mjs";
import { app_reply_called_why } from "./app_reply_called_why.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_lord_bless_your } from "./text_lord_bless_your.mjs";
import { emoji_church } from "./emoji_church.mjs";
import { emoji_family } from "./emoji_family.mjs";
import { app_reply_glory } from "./app_reply_glory.mjs";
import { reply_choices_glory } from "./reply_choices_glory.mjs";
import { app_reply_give } from "./app_reply_give.mjs";
import { reply_choices_give } from "./reply_choices_give.mjs";
import { app_reply_greetings } from "./app_reply_greetings.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
import { app_reply_how_day } from "./app_reply_how_day.mjs";
import { app_reply_how_family } from "./app_reply_how_family.mjs";
import { app_reply_how_feel } from "./app_reply_how_feel.mjs";
import { app_reply_how_r_u } from "./app_reply_how_r_u.mjs";
import { app_reply_how_r_u_today } from "./app_reply_how_r_u_today.mjs";
import { app_reply_greetings_live } from "./app_reply_greetings_live.mjs";
import { emoji_hands_raising } from "./emoji_hands_raising.mjs";
import { app_reply_pray_help_generic } from "./app_reply_pray_help_generic.mjs";
import { app_reply_how_feel_today } from "./app_reply_how_feel_today.mjs";
import { emoji_globe_americas } from "./emoji_globe_americas.mjs";
import { app_reply_live } from "./app_reply_live.mjs";
import { reply_choices_location } from "./reply_choices_location.mjs";
import { emoji_wave } from "./emoji_wave.mjs";
import { emoji_handshake } from "./emoji_handshake.mjs";
import { reply_choices_name } from "./reply_choices_name.mjs";
import { newline_2 } from "./newline_2.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { emoji_ok } from "./emoji_ok.mjs";
import { text_the_servant_of_god_is_first_upper } from "./text_the_servant_of_god_is_first_upper.mjs";
import { emoji_100 } from "./emoji_100.mjs";
import { emoji_rainbow } from "./emoji_rainbow.mjs";
import { emoji_camera } from "./emoji_camera.mjs";
import { reply_choices_praise } from "./reply_choices_praise.mjs";
import { prayer_start } from "./prayer_start.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { emoji_sleep_z } from "./emoji_sleep_z.mjs";
import { emoji_sleep_face } from "./emoji_sleep_face.mjs";
import { emoji_no } from "./emoji_no.mjs";
import { emoji_rock } from "./emoji_rock.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { app_reply_choices_thanks } from "./app_reply_choices_thanks.mjs";
import { emoji_clock } from "./emoji_clock.mjs";
import { emoji_voice } from "./emoji_voice.mjs";
import { emojis_sing_wrap } from "./emojis_sing_wrap.mjs";
import { app_reply_choices_whatsapp } from "./app_reply_choices_whatsapp.mjs";
import { reply_response_whatsapp } from "./reply_response_whatsapp.mjs";
export function app_reply_choices() {
  let education = app_reply_pray(
    "Education",
    "provide education to those in need 🏫",
  );
  let heal = app_reply_pray("Heal", "heal the sick");
  let job = app_reply_pray("Job", "provide you with a good job");
  let provide = app_reply_pray("Provide", "provide what is needed");
  let right = emoji_dove();
  let pray_request2 = text_combine("give you safe travels ", right);
  let travel_pray = app_reply_pray("Travel pray", pray_request2);
  let pray_request = reply_choices_will_done_fragment();
  let will = app_reply_pray("Will", pray_request);
  let right2 = emoji_dove();
  let pray_request3 = text_combine("always be with you! ", right2);
  let with2 = app_reply_pray("With", pray_request3);
  reply_response_how_r_u_skip_first_upper();
  let left = emoji_pray();
  ({
    text: text_combine(left, " Bless"),
    response: prayer_blessing_expand(),
  });
  let greetings = reply_response_greetings();
  let hru = reply_response_how_r_u();
  let hru_today = reply_response_how_r_u_today();
  let how_family = app_reply_response_how_family();
  let how_day = app_reply_response_how_day();
  let live = app_reply_response_live();
  let called_why = app_reply_call_why_generic("did", "");
  let left2 = emoji_pray();
  let how_feel = text_combine(
    left2,
    " God is helping me be joyful when I suffer",
  );
  let how_feel_today = text_combine_today(how_feel);
  let s = text_the_servant_of_god_first_upper();
  let left3 = emoji_pray();
  let left4 = emoji_pray();
  let left5 = emoji_pray();
  let left6 = emoji_question();
  let left7 = emoji_pray();
  let right3 = prayer_end();
  let left8 = emoji_phone();
  let left9 = emoji_phone();
  let left10 = emoji_phone();
  let left11 = emoji_pray();
  let v2 = emoji_pray();
  let blessing = text_lord_bless_your();
  let v3 = emoji_church();
  let left12 = emoji_pray();
  let v4 = emoji_pray();
  let blessing2 = text_lord_bless_your();
  let v5 = emoji_family();
  let left13 = emoji_pray();
  let left14 = emoji_pray();
  let left15 = emoji_pray();
  let v6 = emoji_pray();
  let v7 = emoji_question();
  let left16 = emoji_pray();
  let left17 = emoji_pray();
  let t = app_reply_greetings();
  let t2 = app_reply_called_why();
  let t3 = app_reply_greetings();
  let v8 = app_reply_how_day();
  let t4 = app_reply_greetings();
  let v9 = app_reply_how_family();
  let t5 = app_reply_greetings();
  let t6 = app_reply_how_feel();
  let t7 = app_reply_greetings();
  let t8 = app_reply_how_r_u();
  let t9 = app_reply_greetings();
  let r = app_reply_how_r_u_today();
  let t10 = app_reply_greetings();
  let t11 = app_reply_how_r_u();
  let v10 = app_reply_how_family();
  let left18 = emoji_hands_raising();
  let v11 = emoji_hands_raising();
  let v12 = emoji_pray();
  let left19 = emoji_pray();
  let left20 = emoji_pray();
  let left21 = emoji_pray();
  let left22 = emoji_pray();
  let left23 = emoji_question();
  let left24 = emoji_pray();
  let t12 = app_reply_how_r_u();
  let v13 = app_reply_how_family();
  let t13 = app_reply_how_r_u();
  let v14 = app_reply_how_day();
  let left25 = emoji_pray();
  let left26 = emoji_pray();
  let left27 = emoji_globe_americas();
  let v15 = emoji_globe_americas();
  let v16 = emoji_pray();
  let left28 = emoji_globe_americas();
  let left29 = emoji_wave();
  let v17 = emoji_pray();
  let v18 = emoji_handshake();
  let left30 = emoji_wave();
  let left31 = emoji_wave();
  let t14 = reply_choices_name();
  let r2 = newline_2();
  let t15 = reply_choices_location();
  let left32 = emoji_wave();
  let right4 = emoji_cross();
  let left33 = emoji_ok();
  let v19 = emoji_ok();
  let u = text_the_servant_of_god_is_first_upper();
  let v20 = emoji_100();
  let v21 = emoji_pray();
  let left34 = emoji_dove();
  let v22 = emoji_dove();
  let v23 = emoji_rainbow();
  let left35 = emoji_camera();
  let left36 = emoji_camera();
  let left37 = emoji_pray();
  let left38 = emoji_pray();
  let left39 = emoji_pray();
  let v24 = emoji_pray();
  let left40 = emoji_pray();
  let v25 = emoji_pray();
  let left41 = emoji_pray();
  let v26 = emoji_pray();
  let left42 = emoji_pray();
  let left43 = emoji_pray();
  let v27 = emoji_pray();
  let v28 = emoji_book_open();
  let left44 = emoji_pray();
  let v29 = emoji_pray();
  let v30 = emoji_sleep_z();
  let blessing3 = text_lord_bless_your();
  let v31 = emoji_sleep_face();
  let r3 = newline_2();
  let left45 = emoji_no();
  let left46 = emoji_pray();
  let v32 = emoji_pray();
  let v33 = emoji_cross();
  let v34 = emoji_rock();
  let v35 = emoji_pray();
  let v36 = emoji_church();
  let v37 = emoji_cross();
  let v38 = emoji_smile();
  let left47 = emoji_pray();
  let v39 = emoji_pray();
  let v40 = emoji_smile();
  let left48 = emoji_pray();
  let left49 = emoji_clock();
  let left50 = emoji_pray();
  let left51 = emoji_pray();
  let left52 = emoji_pray();
  let left53 = emoji_voice();
  let v41 = emojis_sing_wrap("My voice is a gift and miracle from God! ");
  let v42 = reply_choices_glory();
  let v43 = app_reply_choices_thanks();
  let left54 = emoji_smile();
  let v44 = emoji_smile();
  let v45 = emoji_pray();
  let left55 = emoji_question();
  let left56 = emoji_pray();
  let left57 = emoji_pray();
  let left58 = emoji_pray();
  let left59 = emoji_pray();
  let left60 = emoji_pray();
  let left61 = emoji_pray();
  let left62 = emoji_pray();
  let v = [
    {
      text: text_combine(left3, " Amazing"),
      response: text_combine(
        left4,
        " Yet not I, but the grace of God that is with me!",
      ),
    },
    {
      text: text_combine(left5, " Amen"),
      response: prayer_end(),
    },
    {
      text: text_combine(left6, " Ask"),
      response: "What are you asking me to do?",
    },
    {
      text: text_combine(left7, " Bless short"),
      response: text_combine("God bless", right3),
    },
    {
      text: text_combine(left8, " Call want why?"),
      response: app_reply_call_why_generic("do", "want to "),
    },
    {
      text: app_reply_called_why(),
      response: called_why,
    },
    {
      text: text_combine(left9, " Call no"),
      response: text_combine(left10, " No video call"),
    },
    {
      text: text_combine(left11, " Church"),
      response: text_combine_multiple([v2, blessing, "church ", v3]),
    },
    education,
    {
      text: text_combine(left12, " Family"),
      response: text_combine_multiple([v4, blessing2, "family ", v5]),
    },
    {
      text: text_combine(left13, " Friends"),
      response: text_combine(
        left14,
        'Every friend of Jesus is a friend of mine! Jesus says: "You are My friends if you do what I command you." (John 15:14)',
      ),
    },
    {
      text: text_combine(left15, " Future"),
      response: text_combine_multiple([
        v6,
        "God knows the future. I do not know the future.",
        v7,
      ]),
    },
    {
      text: app_reply_glory(),
      response: reply_choices_glory(),
    },
    {
      text: app_reply_give(),
      response: reply_choices_give(),
    },
    {
      text: text_combine(left16, " Fundraiser"),
      response: text_combine(
        left17,
        " Sorry, I cannot create a fundraiser for you",
      ),
    },
    {
      text: app_reply_greetings(),
      response: greetings,
    },
    {
      text: text_combine_multiple([t, " ", t2]),
      response: list_join_newline_2([greetings, called_why]),
    },
    {
      text: text_combine_multiple([t3, " ", v8]),
      response: list_join_newline_2([greetings, how_day]),
    },
    {
      text: text_combine_multiple([t4, " ", v9]),
      response: list_join_newline_2([greetings, how_family]),
    },
    {
      text: text_combine_multiple([t5, " ", t6]),
      response: list_join_newline_2([greetings, how_feel]),
    },
    {
      text: text_combine_multiple([t7, " ", t8]),
      response: list_join_newline_2([greetings, hru]),
    },
    {
      text: text_combine_multiple([t9, " ", r]),
      response: list_join_newline_2([greetings, hru_today]),
    },
    {
      text: text_combine_multiple([t10, " ", t11, " ", v10]),
      response: list_join_newline_2([greetings, hru, how_family]),
    },
    {
      text: app_reply_greetings_live(),
      response: list_join_newline_2([greetings, live]),
    },
    {
      text: text_combine(left18, " Hallelujah"),
      response: text_combine_multiple([
        v11,
        " Hallelujah! Hallelujah! Hallelujah! ",
        v12,
      ]),
    },
    heal,
    {
      text: text_combine(left19, " Health"),
      response: text_combine(
        left20,
        " The doctors said I had a diagnosis of schizoaffective disorder. Please pray for my health, that I am healed from everything and that those who gave me medicine command me to stop taking medicine.",
      ),
    },
    {
      text: text_combine(left21, " Help me"),
      response: app_reply_pray_help_generic("me"),
    },
    {
      text: text_combine(left22, " Help us"),
      response: app_reply_pray_help_generic("us"),
    },
    {
      text: text_combine(left23, " Help what"),
      response: text_combine(
        left24,
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
      text: text_combine_multiple([t12, " ", v13]),
      response: list_join_newline_2([hru, how_family]),
    },
    {
      text: text_combine_multiple([t13, " ", v14]),
      response: list_join_newline_2([hru, how_day]),
    },
    {
      text: text_combine(left25, " Invite"),
      response: text_combine(
        left26,
        "If the LORD makes a way, then I will travel to you. However at this time I have no money to travel.",
      ),
    },
    job,
    {
      text: text_combine(left27, " Language"),
      response: text_combine_multiple([v15, " ", s, " speaks English. ", v16]),
    },
    {
      text: app_reply_live(),
      response: live,
    },
    {
      text: text_combine(left28, " Location"),
      response: reply_choices_location(),
    },
    {
      text: text_combine(left29, " Meet"),
      response: text_combine_multiple([v17, " Nice to meet you! ", v18]),
    },
    {
      text: text_combine(left30, " Name"),
      response: reply_choices_name(),
    },
    {
      text: text_combine(left31, " Name location"),
      response: text_combine_multiple([t14, r2, t15]),
    },
    {
      text: text_combine(left32, " Name ministry"),
      response: text_combine(
        'The name of my ministry is: \"JESUS rose to life\" ',
        right4,
      ),
    },
    {
      text: text_combine(left33, "Okay"),
      response: text_combine_multiple([
        v19,
        " ",
        u,
        " okay, yes ",
        v20,
        " ",
        v21,
      ]),
    },
    {
      text: text_combine(left34, " Peace"),
      response: text_combine_multiple([
        v22,
        " Now may the Lord of peace himself give you peace at all times and in every way. The Lord be with you ",
        v23,
      ]),
    },
    {
      text: text_combine(left35, " Pictures"),
      response: text_combine(
        left36,
        " Here are some pictures of my wife and I: https://www.facebook.com/media/set/?set=a.761930266739275&type=3",
      ),
    },
    {
      text: "🎵 Praise",
      response: reply_choices_praise(),
    },
    {
      text: text_combine(left37, " Pray"),
      response: prayer_start(),
    },
    {
      text: text_combine(left38, " Preach"),
      response: text_combine(
        left39,
        "If God wills, then yes I will preach teach. Do you have a day and time?",
      ),
    },
    {
      text: text_combine_multiple([v24, " ", "Prayers"]),
      response: text_combine(
        left40,
        "According to the desire of God, may there be prayer",
      ),
    },
    {
      text: text_combine_multiple([v25, " ", "Programming"]),
      response: text_combine(left41, "I have been computer programming 💻"),
    },
    {
      text: text_combine_multiple([v26, " ", "Replying"]),
      response: text_combine(left42, "I have been replying to messages 📨"),
    },
    {
      text: text_combine(left43, " Share"),
      response: text_combine_multiple([
        v27,
        " What day and time are you asking me to share the word of God? ",
        v28,
      ]),
    },
    provide,
    {
      text: text_combine(left44, " Sleep"),
      response: text_combine_multiple([
        v29,
        v30,
        " ",
        blessing3,
        "sleep, make your sleep sweet and peaceful, protect you from demons, bad dreams and all harm, and make you wake up feeling refreshed. ",
        v31,
      ]),
    },
    {
      text: "Song",
      response: text_combine_multiple([
        "https://youtu.be/b_j9ZsNhpEY",
        r3,
        " Jesus gave me the grace to write this song",
      ]),
    },
    {
      text: text_combine(left45, " Sorry"),
      response: " Sorry, I will not do that",
    },
    {
      text: "Talk",
      response: "What do you want to talk about?",
    },
    {
      text: text_combine(left46, " Testimony"),
      response: text_combine_multiple([
        v32,
        " Jesus died for my sins. ",
        v33,
        " Jesus was buried. ",
        v34,
        " Jesus rose to life. ",
        v35,
        v36,
        " I confessed this truth since I was about 7 years old. But I never decided to fully obey Jesus as LORD until I was about 26 years old. Then eventually God called me to ministry. ",
        v37,
        v38,
      ]),
    },
    {
      text: text_combine(left47, " Thank God"),
      response: text_combine_multiple([v39, " Thank the LORD, our God! ", v40]),
    },
    {
      text: text_combine(left48, " Thank you"),
      response: app_reply_choices_thanks(),
    },
    {
      text: text_combine(left49, " Time"),
      response: text_combine(left50, " I have time to reply to messages"),
    },
    {
      text: text_combine(left51, " Travel ask"),
      response: text_combine(left52, "No money for travel"),
    },
    travel_pray,
    {
      text: text_combine(left53, " Voice"),
      response: text_combine_multiple([v41, v42, " ", v43]),
    },
    {
      text: text_combine(left54, " Well"),
      response: text_combine_multiple([v44, " All is well! ", v45]),
    },
    {
      text: text_combine(left55, " What"),
      response: text_combine(left56, " What do you mean?"),
    },
    {
      text: app_reply_choices_whatsapp(),
      response: reply_response_whatsapp(),
    },
    will,
    {
      text: text_combine(left57, " Wills"),
      response: text_combine(left58, " If God wills, yes"),
    },
    with2,
    {
      text: text_combine(left59, " Word"),
      response: text_combine(
        left60,
        " Behold, I am an unworthy servant of the LORD. May the word of the LORD come true!",
      ),
    },
    {
      text: text_combine(left61, " Work"),
      response: text_combine(
        left62,
        " Through the grace of God: Recently, I have only been doing ministry work. I have been preaching at different churches. I have also made Bible singing videos: https://www.youtube.com/@CHRISTrosetolifesinging Also, I have been doing some computer programming.",
      ),
    },
  ];
  return v;
}
