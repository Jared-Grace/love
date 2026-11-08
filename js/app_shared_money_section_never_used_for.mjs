import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_money_section_never_used_for() {
  "The part of what this app does with money that answers what a gift will never go to, and what happens if more arrives than the work needs.";
  "The answer to too much is written down here rather than left to be decided when it happens, because that is the moment a promise is worth least if it was never made.";
  let texts = {
    en: {
      title: "What a gift is never used for",
      lines: [
        "Never profit.",
        "Scripture says not to be greedy for money (1 Timothy 3:3), so our purpose is not to make ourselves rich. There are too many people hungry and in urgent need today for us to store up profit for ourselves.",
        "It is also not our purpose to receive your gift and give it away for some other purpose on your behalf.",
        "If more comes in than the work needs, we stop receiving gifts, or we widen who is paid among the people contributing. We do not keep the difference, and we do not send your money somewhere you did not choose.",
      ],
    },
    ur: {
      title: "تحفہ کن کاموں میں کبھی نہیں لایا جاتا",
      lines: [
        "نفع کے لیے کبھی نہیں۔",
        "کلامِ مُقدّس کہتا ہے کہ پیسے کے لالچی نہ ہوں (1 تیمتھیس 3:3)، اِس لیے ہمارا مقصد اپنے آپ کو امیر بنانا نہیں۔ آج بہت سے لوگ بھوکے اور سخت ضرورت میں ہیں، اِتنے کہ ہم اپنے لیے نفع جمع نہیں کر سکتے۔",
        "یہ بھی ہمارا مقصد نہیں کہ آپ کا تحفہ لے کر آپ کی طرف سے کسی اور مقصد کے لیے دے دیں۔",
        "اگر کام کی ضرورت سے زیادہ آ جائے تو ہم تحفے لینا بند کر دیتے ہیں، یا حصہ ڈالنے والوں میں سے اور لوگوں کو اجرت دینے لگتے ہیں۔ ہم فرق اپنے پاس نہیں رکھتے، اور آپ کے پیسے وہاں نہیں بھیجتے جہاں آپ نے نہیں چُنا۔",
      ],
    },
    tgl: {
      title: "Kung saan hindi kailanman ginagamit ang isang kaloob",
      lines: [
        "Hindi kailanman para sa tubo.",
        "Sinasabi ng Kasulatan na huwag maging sakim sa salapi (1 Timoteo 3:3), kaya hindi namin layunin na payamanin ang aming sarili. Napakaraming tao ang nagugutom at may agarang pangangailangan ngayon para mag-ipon kami ng tubo para sa aming sarili.",
        "Hindi rin namin layunin na tanggapin ang iyong kaloob at ibigay ito sa ibang layunin para sa iyo.",
        "Kung higit ang dumating kaysa sa kailangan ng gawain, hihinto kami sa pagtanggap ng mga kaloob, o palalawakin namin kung sino ang binabayaran sa mga taong tumutulong. Hindi namin itinatago ang sobra, at hindi namin ipinapadala ang iyong pera sa lugar na hindi mo pinili.",
      ],
    },
    translated_from: {
      ur: {
        title: "What a gift is never used for",
        lines: [
          "Never profit.",
          "Scripture says not to be greedy for money (1 Timothy 3:3), so our purpose is not to make ourselves rich. There are too many people hungry and in urgent need today for us to store up profit for ourselves.",
          "It is also not our purpose to receive your gift and give it away for some other purpose on your behalf.",
          "If more comes in than the work needs, we stop receiving gifts, or we widen who is paid among the people contributing. We do not keep the difference, and we do not send your money somewhere you did not choose.",
        ],
      },
      tgl: {
        title: "What a gift is never used for",
        lines: [
          "Never profit.",
          "Scripture says not to be greedy for money (1 Timothy 3:3), so our purpose is not to make ourselves rich. There are too many people hungry and in urgent need today for us to store up profit for ourselves.",
          "It is also not our purpose to receive your gift and give it away for some other purpose on your behalf.",
          "If more comes in than the work needs, we stop receiving gifts, or we widen who is paid among the people contributing. We do not keep the difference, and we do not send your money somewhere you did not choose.",
        ],
      },
    },
  };
  let section = app_shared_text_reader_language(texts);
  property_set(section, "verses", ["1 Timothy 3:3"]);
  return section;
}
