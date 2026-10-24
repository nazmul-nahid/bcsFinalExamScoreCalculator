/* 
Problem-03: BCS Final Score Calculator
⚠️ Function Name Must be finalScore()

BCS পরীক্ষার OMR sheet ডিজিটালভাবে চেক করা হয়। এটা right, wrong, missed সব কটি গণনা করতে পারে, কিন্তু ফাইনাল স্কোর বের করতে পারে না। তোমার কাজ হলো একটি ফাংশন বানানো যা Object নেবে এবং ফাইনাল স্কোর ক্যালকুলেট করবে।

ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি Object নেবে এবং নিচের শর্ত ও নিয়ম অনুযায়ী ফলাফল প্রদান করবে।

📥 Input:
একটি Object যার প্রপার্টিগুলো হবে:

{
  right: Number,
  wrong: Number,
  skip: Number
}
*/


function finalScore(omr){

    if(typeof omr !== "object" ){
        return "Invalid"
    }
    if( omr.right + omr.wrong + omr.skip !==100){
        return "Invalid";
    }
    
    const rightNumber = omr.right;
    const rightTotalNumber = rightNumber * 1;

    const wrongNumber = omr.wrong;
    const wrongTotalNumber =  wrongNumber * 0.5;

    const skipNumber = omr.skip;
    const skipTotalNumber = skipNumber * 0;


    const score = Math.round(rightTotalNumber - wrongTotalNumber + skipTotalNumber);
    

    return score;
}

const score = finalScore(
    {
        right: 56,
        wrong: 25,
        skip: 19
    });

console.log(score);    
