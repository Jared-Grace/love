import { reply_phrases } from "./reply_phrases.mjs";
export function reply_phrase_god_sent_his_son() {
  "God sent his son into the world, in the words of 1 John 4:9.";
  let r = reply_phrases([
    "god sent his one and only son into the world",
    "that god hath sent his only begotten son into the world",
    "that god has sent his only begotten son into the world",
    "that god has sent his only born son into the world",
    "because god sent his only begotten son into the world",
    "because god hath sent his only begotten son into the world",
    "because that god sent his only begotten son into the world",
    "because god sent that his onely begotten sonne into this world",
    "because his son the only begotten hath god sent to the world",
    "when he sent his only son into the world",
  ]);
  return r;
}
