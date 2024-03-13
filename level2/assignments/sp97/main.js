const form = document.travelForm


form.addEventListener("submit", function(event){
    event.preventDefault()
    
 const firstName = form.firstName.value
 const lastName = form.lastName.value
const age = form.age.value
const gender = form.gender.value
const location = form.location.value
const dietary = form.dietary.value



    form.firstName.value = ""
    form.lastName.value = ""
    //create alert
    alert(
        "First name: " + firstName +
        "\nLast Name: " + lastName +
        "\nAge" + age +
        "\ngender" + gender +
        "\nlocation" + location +
        "\ndietary" + dietary
    )
});