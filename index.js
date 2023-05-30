document.getElementById("checkButton").addEventListener("click",function(){
    var birthdateInput = document.getElementById("birthdate");
    var birthdate = new Date(birthdateInput.value);
    var year = birthdate.getFullYear();

    var animal = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
    var zodiacIndex = (year - 4) %12;
    var zodiac = animal[zodiacIndex]

    var result = document.getElementById("result");
    result.textContent = year + "年は" + zodiac + "年です．";
});
