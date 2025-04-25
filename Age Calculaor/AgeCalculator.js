const btn = document.getElementById("calculate-age");
const dateOfBirth = document.getElementById("dateOfBirth");
const result = document.getElementById("result");

function calculateAge() {
    const birthdayValue = dateOfBirth.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday");
    } else {
        const age = getAge(birthdayValue);
        result.innerText = `You are ${age} ${age !== 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();

    const month = currentDate.getMonth() - birthdayDate.getMonth();
    const day = currentDate.getDate() - birthdayDate.getDate();

    if (month < 0 || (month === 0 && day < 0)) {
        age--;
    }

    return age;
}

btn.addEventListener('click', calculateAge);
