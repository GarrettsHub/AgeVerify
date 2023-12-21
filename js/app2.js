const today = new Date();


const dateInput = document.getElementById('dateInput');
const validYear = today.getFullYear() - 21;
const validMonth = today.getMonth();
const validDay = today.getDate() - 1;

const checkbox = document.getElementById('checkbox')

const message = document.getElementById('message');
let messageText;


// console.log('checkbox is not checked', checkbox.checked)
// console.log('the year is', validYear, 'the month is', validMonth, 'the day of the month is', validDate)

// const validAge = 

// console.log(dateinput)

const validate =()=> {
    const isChecked = checkbox.checked; 
    if (!isChecked) {
        messageText = "Please check the box to verify your age"
        message.innerHTML = `
            ${messageText};
        `
    } else {
        getDOB()
    }
}

const getDOB =()=> {
    const userDate = new Date(dateInput.value);
    const userYear = userDate.getFullYear();
    const userMonth = userDate.getMonth();
    const userDay = userDate.getDate();
    // console.log(userYear, userMonth, userDay)
    verifyAge(userYear, userMonth, userDay);
};

const verifyAge =(year, month, day)=> {
    const userYear = year;
    const userMonth = month;
    const userDay = day;
    if (validYear >= userYear) {
        if (validMonth >= userMonth) {
            if (validDay >= userDay) {
                messageText = "access granted"
                message.innerHTML =`
                ${messageText};
                `
                
            } else {
                messageText = ('access denied')
                message.innerHTML =`
                ${messageText};
                `
            }
        } else {
            messageText = ('access denied')
            message.innerHTML =`
            ${messageText};
            `
        }
    } else {
        messageText = ('access denied')
        message.innerHTML =`
        ${messageText};
        `
    }
};