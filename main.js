let form = document.getElementsByClassName("form")[0];
let button = document.getElementById("submitBtn");

form.addEventListener("submit", function (event) {

    event.preventDefault();


    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let city = document.getElementById("city");
    let job = document.getElementById("job");
    let email = document.getElementById("email");
    let password = document.getElementById("password");




    let user = {
        firstName: firstName.value,
        lastName: lastName.value,
        city: city.value,
        email: email.value,
        job: job.value,
        password: password.value
    }
      
    // validateInput();


    let url = "http://www.sedc.somee.com/api/users"

    axios.post(url, user).then(function (response) {
        getNew()
    })
    form.reset();

});

let url = "http://www.sedc.somee.com/api/users"
getNew();

function getNew() {

    axios.get(url).then(function (response) {
        console.log(response.data);


        for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];

            let tbody = document.getElementById("tBody");

            let tr = document.createElement("tr");

            tbody.append(tr);

            let firstNameTd = document.createElement("td");
            firstNameTd.innerHTML = element.firstName;
            tr.append(firstNameTd);
            let lastNameTd = document.createElement("td");
            lastNameTd.innerHTML = element.lastName;
            tr.append(lastNameTd);
            let cityTd = document.createElement("td");
            cityTd.innerHTML = element.city;
            tr.append(cityTd);
            let jobTd = document.createElement("td");
            jobTd.innerHTML = element.job;
            tr.append(jobTd);
            let emailTd = document.createElement("td");
            emailTd.innerHTML = element.email;
            tr.append(emailTd);
            let passwordTd = document.createElement("td");
            passwordTd.innerHTML = element.password;
            tr.append(passwordTd);

            let button = document.createElement("button");
            let deleteTd = document.createElement("td");
            deleteTd.append(button);
            button.innerHTML = "Delete"
            tr.append(deleteTd);

            button.id = element.id;
            button.className = "btn btn-danger"

            button.addEventListener("click", (element) => {
                console.log(element)
                console.log(element.target)

                let url1 = `http://www.sedc.somee.com/api/users/${element.target.id}`

                axios.delete(url1).then(function (reponse) {

                })
            });

            let buttonNew = document.createElement("button");
            buttonNew.className = "btn btn-primary"
            let detailsTd = document.createElement("td");
            detailsTd.append(buttonNew);
            buttonNew.innerHTML = "Details"
            tr.append(detailsTd);
            buttonNew.id = element.id;
            buttonNew.dataset.toggle = "modal";
            buttonNew.dataset.target = "#modelWindow";



            // $('.btn-primary').click(function () {
            //     $('#modelWindow').modal('show');
            // });
            buttonNew.addEventListener("click", () => {
                axios.get(`http://www.sedc.somee.com/api/users/${buttonNew.id}`).then(function (response) {

            let modalBody = document.getElementById("modalB");
            let trModal = document.createElement("tr");
            let tdModalFirstName = document.createElement("td");
            let modalFirstNameInput = document.createElement("input")
            modalFirstNameInput.value = element.firstName;
            let tdModalLastName = document.createElement("td");
            let modalLastNameInput = document.createElement("input")
            modalLastNameInput.value = element.lastName;
            let tdModalCity = document.createElement("td");
            let modalCityInput = document.createElement("input")
            modalCityInput.value = element.city;
            let tdModalJob = document.createElement("td");
            let modalJobInput = document.createElement("input")
            modalJobInput.value = element.job;
            let tdModalEmail = document.createElement("td");
            let modalEmailInput = document.createElement("input")
            modalEmailInput.value = element.email;
            let tdModalPassword = document.createElement("td");
            let modalPasswordInput = document.createElement("input")
            modalPasswordInput.value = element.password;

            modalBody.append(trModal);
            trModal.append(tdModalFirstName, tdModalLastName, tdModalCity, tdModalJob, tdModalEmail, tdModalPassword);
            tdModalFirstName.append(modalFirstNameInput);
            tdModalLastName.append(modalLastNameInput);
            tdModalCity.append(modalCityInput);
            tdModalJob.append(modalJobInput);
            tdModalEmail.append(modalEmailInput);
            tdModalPassword.append(modalPasswordInput);


            // let buttonModal = document.createElement("button");
            // buttonModal.innerHTML = "Edit"
            // buttonModal.className = "btn btn secondary"
            // modalBody.append(buttonModal);


            // let buttonSave = document.createElement("button");
            // buttonSave.innerHTML = "Save"
            // buttonSave.className = "btn btn secondary"
            // modalBody.append(buttonSave);
            closeBtn.addEventListener("click", () => {
                trModal.innerHTML = "";
            });


            let url2 = `http://www.sedc.somee.com/api/users/${element.id}`

            buttonSave.addEventListener("click", (element) => {
                //console.log(element.target)
                let users = {
                    firstName: modalFirstNameInput.value,
                    lastName: modalLastNameInput.value,
                    city: modalCityInput.value,
                    job: modalJobInput.value,
                    email: modalEmailInput.value,
                    password: modalPasswordInput.value


                }

                axios.put(url2, users).then(function (reponse) {

                    console.log(response)
                })
            })
        })
       

    })
}
})
}
getNew()

let closeBtn = document.getElementById("btnClose")
let buttonSave = document.getElementById("btnSave")