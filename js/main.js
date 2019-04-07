"use strict"


let smallChat = document.querySelector(".small-chat");
let bigChat = document.querySelector(".big-chat");

smallChat.onclick = function () {
    bigChat.classList.toggle("d-none");
}


let userInput = document.querySelector(".input");
let addDiv = document.querySelector(".purple-div");

userInput.onkeydown = function (e) {

    if (e.keyCode == 13) {
        const newDiv = document.createElement("div");
        if (userInput.value[0] === userInput.value[0].toLowerCase()) {
            newDiv.innerHTML = userInput.value;
            newDiv.classList.add("add-div");
            let img = document.createElement("img");
            img.src = "images/salah.jpg";
            newDiv.appendChild(img);
            addDiv.appendChild(newDiv);
            userInput.value = "";

        }
        else if (userInput.value[0] === userInput.value[0].toUpperCase()) {
            // newDiv = document.createElement("div");
            let span = document.createElement("span");
            span.innerHTML = userInput.value;
            newDiv.appendChild(span);
            newDiv.classList.add("addSECOND-div");
            let img = document.createElement("img");
            img.src = "images/operator.jpg";
            img.classList.add("img");
            newDiv.appendChild(img);
            addDiv.appendChild(newDiv);
            newDiv.insertBefore(img, span);
            userInput.value = "";
        }


        newDiv.addEventListener("click", function () {
            if (!newDiv.classList.contains("selected")) {
                newDiv.classList.add("selected")
            }
            else if (newDiv.classList.contains("selected")) {
                newDiv.classList.remove("selected")
            }
        })
        let trash = document.querySelector(".trash")
        trash.addEventListener("click", function () {
            for (let i = 0; i < bigChat.children[0].children.length; i++) {
                if (bigChat.children[0].children[i].classList.contains("selected")) {
                    bigChat.children[0].children[i].remove()
                }
            }
        })
    }

}

let senButton = document.querySelector(".send")

senButton.onclick = function () {

    const newDiv = document.createElement("div");
    if (userInput.value[0] === userInput.value[0].toLowerCase()) {

        newDiv.innerHTML = userInput.value;
        newDiv.classList.add("add-div");
        let img = document.createElement("img");
        img.src = "images/salah.jpg";
        newDiv.appendChild(img)
        addDiv.appendChild(newDiv);
        userInput.value = ""

    }
    else if (userInput.value[0] === userInput.value[0].toUpperCase()) {
        let span = document.createElement("span");
        span.innerHTML = userInput.value;
        newDiv.appendChild(span);
        newDiv.classList.add("addSECOND-div");
        let img = document.createElement("img");
        img.src = "images/operator.jpg";
        img.classList.add("img")
        newDiv.appendChild(img)
        addDiv.appendChild(newDiv);
        newDiv.insertBefore(img, span)
        userInput.value = ""
    }


    newDiv.addEventListener("click", function () {
        if (!newDiv.classList.contains("selected")) {
            newDiv.classList.add("selected")
        }
        else if (newDiv.classList.contains("selected")) {
            newDiv.classList.remove("selected")
        }
    })
    let trash = document.querySelector(".trash")
    trash.addEventListener("click", function () {
        for (let i = 0; i < bigChat.children[0].children.length; i++) {
            if (bigChat.children[0].children[i].classList.contains("selected")) {
                bigChat.children[0].children[i].remove()
            }
        }
    })

}

let close = document.querySelector(".close")
close.addEventListener("click", function () {
    bigChat.classList.toggle("d-none")
})


//Filter metodundan istifadə edərək rəqəmlərdən ibarət bir array-də yalnız 5-ə 
//bölünən rəqəmləri ayrıca bir array-ə doldurun.

let arrayFirst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filter = arrayFirst.filter(function (a) { return a % 5 == 0 });
console.log(filter);


//Map metodundan istifadə edərək array-də olan bütün rəqəmləri 2 dəfə artırın.
let arraySecond = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let map = arraySecond.map(function (a) { return a * 2 });
console.log(map);


//Reduce metodundan istifadə edərək array-də olan rəqəmlərdən yalnız cütləri cəmləyin.
let arrayThird = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reduce = arrayThird.reduce(function (sum, a) {
    if (a % 2 == 0) {
        sum += a;
    }                                                 //nie 1 vahid artiq
    return sum
})
console.log(reduce)


// Find metodundan istifadə edərək emaillərdən ibarət bir array-də ilk "code.edu.az" domain-i olan emaili tapın.
let arrayFourth = ["resad@code.edu.az", "resad", "code.edu.az"];
// let find=arrayFourth.find(function(a) {
//     if(a.indexOf("code.edu.az")!=-1){
//         console.log(a)
//         break                                        //find  yazilma???
//     }
//     return a
// })


function myFunction() {
    for (let i = 0; i < arrayFourth.length; i++) {
        if (arrayFourth[i].indexOf("code.edu.az") != -1) {
            console.log(arrayFourth[i])
            break
        }
    }
}
myFunction()





