// const [translatedText, setTranslatedText] = useState("");

// import * as GoogleGenerativeAI from "@google/generative-ai";

// const API_KEY = "AIzaSyBniqya5Recf3KlH3__fihuMuAoVFxgl0E";

// const startChat = async (letter) => {
//   const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//   const prompt = "${letter} أريد كلمة تبدأ بحرف";
//   const result = await model.generateContent(prompt);
//   const response = result.response;
//   const text = response.text();
//   console.log(text);
//   return text;
// };

// const fetchWord = async (letter) => {
//   startChat(letter);
//   // setTranslatedText(word);
// };

// const Givetranslation = async (word) => {
//   const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//   const prompt = "give me translation of ${word} into arabic";
//   const result = await model.generateContent(prompt);
//   const response = result.response;
//   const text = response.text();
//   console.log(text);
//   return text;
// };

const wordsData = {
  ا: [
    {
      word: "أسد",
      meaning: "Lion",
    },
    { word: "أرنب", meaning: "Rabbit" },
    { word: "أم", meaning: "Mother" },
    { word: "أب", meaning: "Father" },
  ],
  ب: [
    { word: "بطة", meaning: "Duck" },
    { word: "باب", meaning: "Door" },
    { word: "بيت", meaning: "House" },
    { word: "برج", meaning: "Tower" },
  ],
  ت: [
    { word: "تفاح", meaning: "Apple" },
    { word: "تمر", meaning: "Date" },
    { word: "تاج", meaning: "Crown" },
    { word: "تلفاز", meaning: "Television" },
  ],
  ث: [
    { word: "ثعلب", meaning: "Fox" },
    { word: "ثوب", meaning: "Dress" },
    { word: "ثلاثة", meaning: "Three" },
    { word: "ثروة", meaning: "Wealth" },
  ],
  ج: [
    { word: "جمل", meaning: "Camel" },
    { word: "جبن", meaning: "Cheese" },
    { word: "جبل", meaning: "Mountain" },
    { word: "جنية", meaning: "Fairy" },
  ],
  ح: [
    { word: "حصان", meaning: "Horse" },
    { word: "حليب", meaning: "Milk" },
    { word: "حمامة", meaning: "Dove" },
    { word: "حوت", meaning: "Whale" },
  ],
  خ: [
    { word: "خروف", meaning: "Sheep" },
    { word: "خبز", meaning: "Bread" },
    { word: "خاتم", meaning: "Ring" },
    { word: "خيمة", meaning: "Tent" },
  ],
  د: [
    { word: "دجاجة", meaning: "Chicken" },
    { word: "دب", meaning: "Bear" },
    { word: "دراجة", meaning: "Bicycle" },
    { word: "دولفين", meaning: "Dolphin" },
  ],
  ذ: [
    { word: "ذئب", meaning: "Wolf" },
    { word: "ذهب", meaning: "Gold" },
    { word: "ذراع", meaning: "Arm" },
    { word: "ذرة", meaning: "Corn" },
  ],
  ر: [
    { word: "رأس", meaning: "Head" },
    { word: "رمان", meaning: "Pomegranate" },
    { word: "رجل", meaning: "Man" },
    { word: "رسم", meaning: "Drawing" },
  ],
  ز: [
    { word: "زرافة", meaning: "Giraffe" },
    { word: "زيت", meaning: "Oil" },
    { word: "زبدة", meaning: "Butter" },
    { word: "زهرة", meaning: "Flower" },
  ],
  س: [
    { word: "سيارة", meaning: "Car" },
    { word: "سماء", meaning: "Sky" },
    { word: "سكر", meaning: "Sugar" },
    { word: "سمك", meaning: "Fish" },
  ],
  ش: [
    { word: "شجرة", meaning: "Tree" },
    { word: "شمس", meaning: "Sun" },
    { word: "شباك", meaning: "Window" },
    { word: "شمعة", meaning: "Candle" },
  ],
  ص: [
    { word: "صقر", meaning: "Falcon" },
    { word: "صابون", meaning: "Soap" },
    { word: "صندوق", meaning: "Box" },
    { word: "صورة", meaning: "Picture" },
  ],
  ض: [
    { word: "ضفدع", meaning: "Frog" },
    { word: "ضوء", meaning: "Light" },
    { word: "ضرس", meaning: "Molar" },
    { word: "ضيف", meaning: "Guest" },
  ],
  ط: [
    { word: "طائرة", meaning: "Airplane" },
    { word: "طاولة", meaning: "Table" },
    { word: "طبيب", meaning: "Doctor" },
    { word: "طفل", meaning: "Child" },
  ],
  ظ: [
    { word: "ظرف", meaning: "Envelope" },
    { word: "ظفر", meaning: "Nail" },
    { word: "ظل", meaning: "Shadow" },
    { word: "ظهر", meaning: "Back" },
  ],
  ع: [
    { word: "عصفور", meaning: "Bird" },
    { word: "عنب", meaning: "Grapes" },
    { word: "عين", meaning: "Eye" },
    { word: "عجلة", meaning: "Wheel" },
  ],
  غ: [
    { word: "غزال", meaning: "Gazelle" },
    { word: "غسالة", meaning: "Washing Machine" },
    { word: "غابة", meaning: "Forest" },
    { word: "غيمة", meaning: "Cloud" },
  ],
  ف: [
    { word: "فيل", meaning: "Elephant" },
    { word: "فراولة", meaning: "Strawberry" },
    { word: "فراشة", meaning: "Butterfly" },
    { word: "فنجان", meaning: "Cup" },
  ],
  ق: [
    { word: "قمر", meaning: "Moon" },
    { word: "قلم", meaning: "Pen" },
    { word: "قطة", meaning: "Cat" },
    { word: "قارب", meaning: "Boat" },
  ],
  ك: [
    { word: "كتاب", meaning: "Book" },
    { word: "كرسي", meaning: "Chair" },
    { word: "كلب", meaning: "Dog" },
    { word: "كوب", meaning: "Cup" },
  ],
  ل: [
    { word: "لعبة", meaning: "Toy" },
    { word: "ليمون", meaning: "Lemon" },
    { word: "لحم", meaning: "Meat" },
    { word: "لسان", meaning: "Tongue" },
  ],
  م: [
    { word: "مدرسة", meaning: "School" },
    { word: "مطر", meaning: "Rain" },
    { word: "مفتاح", meaning: "Key" },
    { word: "منزل", meaning: "House" },
  ],
  ن: [
    { word: "نمر", meaning: "Tiger" },
    { word: "نحلة", meaning: "Bee" },
    { word: "نار", meaning: "Fire" },
    { word: "نجم", meaning: "Star" },
  ],
  ه: [
    { word: "هاتف", meaning: "Phone" },
    { word: "هرم", meaning: "Pyramid" },
    { word: "هلال", meaning: "Crescent" },
    { word: "هدهد", meaning: "Hoopoe" },
  ],
  و: [
    { word: "وردة", meaning: "Rose" },
    { word: "وسادة", meaning: "Pillow" },
    { word: "وادي", meaning: "Valley" },
    { word: "ورق", meaning: "Paper" },
  ],
  ي: [
    { word: "يد", meaning: "Hand" },
    { word: "يقطين", meaning: "Pumpkin" },
    { word: "يمامة", meaning: "Pigeon" },
    { word: "يرقة", meaning: "Larva" },
  ],
};

export default wordsData;
