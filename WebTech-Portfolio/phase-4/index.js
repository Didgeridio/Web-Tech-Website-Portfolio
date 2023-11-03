let foodItem;
const API_KEY = "qRzyHjhxcNNlVY1r0VWINQ==enIAfW3IRTXLVN60";

document.getElementById("searchButton").onclick = function(){

    foodItem = document.getElementById("foodItemTextBox").value;
    console.log(foodItem);
    fetch('https://api.api-ninjas.com/v1/nutrition?query=' + foodItem, {
    method: 'GET',
    headers: {
        'X-Api-Key': API_KEY,
        'Content-Type': 'application/json'
    }
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        let foodInfo = result[0];
        let calories = foodInfo.calories;
        let carbohydrates = foodInfo.carbohydrates_total_g;
        let cholesterol = foodInfo.cholesterol_mg;
        let saturated_fat = foodInfo.fat_saturated_g;
        let total_fat = foodInfo.fat_total_g;
        let fiber = foodInfo.fiber_g
        let potassium = foodInfo.potassium_mg;
        let protein = foodInfo.protein_g;
        let serving_size = foodInfo.serving_size_g;
        let sodium = foodInfo.sodium_mg;
        let sugar = foodInfo.sugar_g;
        console.log(calories);
        console.log(carbohydrates);
        console.log(protein);
        document.getElementById("servingSize").innerHTML = serving_size + "g";
        document.getElementById("kCal").innerHTML = calories + "kcal";  
        document.getElementById("protein").innerHTML = protein + "g"; 
        document.getElementById("carbs").innerHTML = carbohydrates + "g";  
        document.getElementById("cholesterol").innerHTML = cholesterol + "g"; 
        document.getElementById("totalFat").innerHTML = total_fat + "g";  
        document.getElementById("saturatedFat").innerHTML = saturated_fat + "g"; 
        document.getElementById("fiber").innerHTML = fiber + "g";  
        document.getElementById("potassium").innerHTML = potassium + "mg";
        document.getElementById("sodium").innerHTML = sodium + "mg";
        document.getElementById("sugar").innerHTML = sugar + "g";
    })
    .catch(error => {
        console.error('Error: ', error);
        if(error == "TypeError: Cannot read properties of undefined (reading 'calories')") {
            alert("That is not a real food or is not on the list. Please enter a different food!")
        }
        else if(error == "TypeError: foodInfo is undefined") {
            alert("That is not a real food or is not on the list. Please enter a different food!")
        }
        else {
            alert("An error occurred due to:" + error + " ");
        }
    });
    }