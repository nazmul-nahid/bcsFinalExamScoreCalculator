/*  
⚠️ Function Name Must be analyzeText()

জিহাদ একটি AI কোম্পানিতে কাজ করে।
অনেক সময় ইউজাররা অনেক বড় লেখা(text) ইনপুট দেয়। এত বড় লেখা নিয়ে কাজ করতে AI-এর বেশি সময় লাগে।

তাই জিহাদ এমন একটি ফাংশন বানাতে চায়, যা বড় টেক্সটকে একটু ছোট করে বিশ্লেষণ করতে সাহায্য করবে।

তোমাকে একটি ফাংশন লিখতে হবে, যা—
1️⃣ ইনপুট হিসেবে একটি text (string) নেবে
2️⃣ ওই text থেকে সবচেয়ে বড় (দীর্ঘ) শব্দটি খুঁজে বের করবে
3️⃣ পুরো text-এ মোট কতটি অক্ষর আছে তা গণনা করবে
➡️ স্পেস (space) গণনায় ধরা হবে না

এই তথ্যগুলো ব্যবহার করে জিহাদ একটি ছোট summary তৈরি করতে পারবে।

👉 তোমার কাজ হলো এই লজিক ব্যবহার করে একটি ফাংশন তৈরি করা।

ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি String নেবে এবং একটি Object রিটার্ন করবে যেখানে সবচেয়ে বড় শব্দ এবং মোট ক্যারেক্টার সংখ্যা থাকবে।

📥 Input:
ইনপুট হবে একটি String (একটি পূর্ণ বাক্য/Sentence)।

🚀 Output:
একটি Object

{
  longwords: String,   // সবচেয়ে লম্বা শব্দ(প্রথমটি যদি একাধিক থাকে)
  token: Number        // স্পেস বাদ দিয়ে মোট character সংখ্যা
}
🚩 Challenge:
যদি

ইনপুট string না হয় (যেমন: Number, Array বা Object)
তাহলে "Invalid" রিটার্ন করতে হবে।
💡 Hints:
split(), join() মেথড ব্যবহার করতে পারো।
*/

function analyzeText(str){
    if(typeof str !== "string" || str === ""){
        return "Invalid";
    }

    const strWithoutSpace = str.split(' ').join('');
    const totalChar = strWithoutSpace.length;
    
    const words = str.split(' ');

    let longestWord = '';
    for(const word of words ){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return {
        "longwords" : longestWord,
        "token" : totalChar 
    };


}
const largestText = analyzeText("i love my country");
console.log(largestText);