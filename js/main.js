(function() {
    let newUsersList = document.querySelector('.new-users-list');

    // READ THE PDF BEFORE STARTING
    // Step 1-5 is read the pdf.

    // Add your code here
    let newUserForm = document.querySelector('.new-user-form');

    newUserForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let usernameElement = event.target.elements['username'];
        let cityElement = event.target.elements['city'];
        let provinceElement = event.target.elements['province'];

        let username = usernameElement.value;
        let city = cityElement.value;
        let province = provinceElement.value;


        let isFormValid = true;


        if (!hasWhiteSpace(username) && isValueNotEmpty(username)) {
            usernameElement.classList.remove('is-invalid');
        } else {
            isFormValid = false;
            usernameElement.classList.add('is-invalid');
        }

        // the isValueNotEmpty function: 
        if (isValueNotEmpty(city)) {
            cityElement.classList.remove('is-invalid');
        } else {
            isFormValid = false;
            cityElement.classList.add('is-invalid');
        }

        if (isValueNotEmpty(province)) {
            provinceElement.classList.remove('is-invalid');
        } else {
            isFormValid = false;
            provinceElement.classList.add('is-invalid');
        }

        // returns true if value not empty
        if (!isFormValid) {
            return addUser;
        }

        addUser(username, city, province);

        usernameElement.value = '';
        cityElement.value = '';
        provinceElement.value = '';

    })

    // returns false if the value is empty
    function isValueNotEmpty(value) {
        return value.trim() !== '';
    }

    // the hasWhiteSpace function
    // returns true if s has whitespace
    // returns false if s does not have whitespace
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    // adds user to the page.
    function addUser(username, city, province) {
        let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
        newUsersList.innerHTML = newUsersList.innerHTML + newUser;
    }
})();