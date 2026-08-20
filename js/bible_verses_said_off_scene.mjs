import { fn_name } from "./fn_name.mjs";
export function bible_verses_said_off_scene() {
  ("the WRONG answers for a Bible-scene turn — real words really said in Scripture, by someone else, somewhere else. every text below was read out of the BSB in this repo rather than quoted from memory, and each is a faithful reproduction of the words spoken, with the surrounding narration left off so that ",
    "the option is a SAYING and not a described saying");
  ("WHY NOT ",
    fn_name("g_verses_off_topic"),
    ": that pool is mundane and procedural, which is the right wrongness for 'which verse meets this NEED' and the wrong wrongness here. a scene turn asks 'what did this person actually say at this moment', so the distractor has to be a saying a faithful person might plausibly have made — otherwise the answer is found by eliminating what does not sound like speech, and nothing is learned");
  ("TWO RULES FOR ADDING ONE. it must be TRUE Scripture spoken by someone acting rightly, never a sinful saying: a wrong option is still words the player chooses to say, and the player may not be made to say Cain's answer even to get it wrong. and it must be wrong by SITUATION rather than by a fine distinction — Samuel's 'Speak, for Your servant is listening' and Isaiah's 'Here am I. Send me' are deliberately absent, because both are so near the right answer that missing is a matter of luck rather than of knowing");
  ("the narration is dropped for a second reason: 'But Moses asked God, ...' names the speaker, so a set of whole verses is answerable without knowing any of them. that is a quotation with its reference given, which is what a sermon does, and not an altered verse presented as the verse");
  let verses = [
    {
      reference: "Exodus 3:11",
      text: "Who am I, that I should go to Pharaoh and bring the Israelites out of Egypt?",
    },
    {
      reference: "Judges 6:15",
      text: "Please, my Lord, how can I save Israel? Indeed, my clan is the weakest in Manasseh, and I am the youngest in my father's house.",
    },
    {
      reference: "Jonah 1:9",
      text: "I am a Hebrew. I worship the LORD, the God of the heavens, who made the sea and the dry land.",
    },
    {
      reference: "Ruth 1:16",
      text: "Do not urge me to leave you or to turn from following you. For wherever you go, I will go, and wherever you live, I will live; your people will be my people, and your God will be my God.",
    },
    {
      reference: "2 Kings 6:16",
      text: "Do not be afraid, for those who are with us are more than those who are with them.",
    },
    {
      reference: "Joshua 24:15",
      text: "As for me and my house, we will serve the LORD!",
    },
    {
      reference: "1 Kings 18:21",
      text: "How long will you waver between two opinions? If the LORD is God, follow Him. But if Baal is God, follow him.",
    },
    {
      reference: "Daniel 3:18",
      text: "But even if He does not, let it be known to you, O king, that we will not serve your gods or worship the golden statue you have set up.",
    },
  ];
  return verses;
}
