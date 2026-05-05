const checkBoxList = document.querySelectorAll(".custom-checkbox");

const inputList = document.querySelectorAll(".goal-input");
const progressbar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");
const numberOfTaskCompleted = document.querySelector("#completed-task-number");
const progressLevel = document.querySelector(".progress-level");
const allQuotes = ['Raise the bar by completing your goals!', 'Great Start! 2 more to go', 'Just a step away, Keep going', 'Whoa! You have just completed all gols. Time for chill..!']
const totalGoals = document.querySelector("#total-goals");
const addGoalButton = document.querySelector(".add-goal button");
const allGoalsContainer = document.querySelector(".all-goals-container")

totalGoals.innerText = inputList.length;

let goalNumber = 3;

// const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
//     first:{
//         name:"",
//         isCompleted:false
//     },
//     second:{
//         name:"",
//         isCompleted:false
//     },
//     third:{
//         name:"",
//         isCompleted:false
//     }
// }

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {}
let taskCompleted = Object.values(allGoals).filter((goal) => goal.isCompleted).length;

numberOfTaskCompleted.innerText = taskCompleted;

progressValue.style.width = 100 * taskCompleted / inputList.length + "%";
// let  temp = 100 * taskCompleted / 3 + "%"; 

applyQuote();

checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener(('click'), (e) => {

        const isGoalsAdded = [...inputList].every((input) => {
            return input.value;
        })

        if (isGoalsAdded) {
            checkbox.parentElement.classList.toggle("completed");



            const inputId = checkbox.nextElementSibling.id;
            allGoals[inputId].isCompleted = !allGoals[inputId].isCompleted;
            localStorage.setItem("allGoals", JSON.stringify(allGoals));
            taskCompleted = Object.values(allGoals).filter((goal) => goal.isCompleted).length;
            numberOfTaskCompleted.innerText = taskCompleted;

            applyQuote();

            progressValue.style.width = `${100 * taskCompleted / inputList.length}%`;


        }
        else {
            progressbar.classList.add("show-error");
        }



    })
})

addGoalButton.addEventListener('click',(e)=>{
    const newGoal = document.createElement("div");
    newGoal.innerHTML = `<div class="goal-container">
            <div class="custom-checkbox">
              <img
                class="check-icon"
                src="./images/Vector 1.svg"
                alt="check-icon"
              />
            </div>
            <input
              id="${++goalNumber}"
              type="text"
              class="goal-input"
              placeholder="Add new goal..."
              autocomplete="off"
            />
          </div>`;
    

    allGoalsContainer.appendChild(newGoal);

})

inputList.forEach((input) => {

    if (allGoals && allGoals[input.id]) {
        input.value = allGoals[input.id].name;

        if (allGoals[input.id].isCompleted) {
            input.parentElement.classList.add("completed");
        }
    }




    input.addEventListener("focus", (e) => {
        progressbar.classList.remove("show-error");
    });


    input.addEventListener("input", (e) => {

        if (allGoals[input.id]) {
            if (allGoals[input.id].isCompleted) {
                input.value = allGoals[input.id].name;
                return;
            }
            allGoals[e.target.id].name = input.value;
        }
        else{
            allGoals[input.id] = {
                name:input.value,
                isCompleted:false
            }
        }

        

        console.log(allGoals);
        localStorage.setItem("allGoals", JSON.stringify(allGoals));
    })

});

function applyQuote() {
    progressLevel.innerText = allQuotes[taskCompleted];
}