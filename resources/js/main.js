if (typeof(Storage) !== "undefined") {
    let current = localStorage.recent;
    if (current) {
        const tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        const tablink = document.getElementsByClassName("tablink");
        for (i = 0; i < tablink.length; i++) {
            tablink[i].classList.remove("active");
        }
        if (current == "link1")
            document.getElementById("signin").style.display = "block";
        else
            document.getElementById("signup").style.display = "block";
        document.getElementById(current).classList.add("active");
    }
}

function openTab(evt, choice) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    const tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].classList.remove("active");
    }
    document.getElementById(choice).style.display = "block";
    evt.currentTarget.classList.add("active");

    if (typeof(Storage) !== "undefined") {
        localStorage.recent = evt.currentTarget.getAttribute('id');
    }
}

function validateLogin() {
    clearRequiredFields();
    const required = document.getElementsByClassName("required");
    const useremail = document.getElementById("loginuseremail").value;
    const userpass = document.getElementById("loginuserpass").value;
    let result = true;
    if (useremail == "") {
        required[0].innerHTML = "This field cannot be empty.";
        result = false;
    } else if (!validateEmail(useremail)) {
        required[0].innerHTML = "Invalid Email Format.";
        result = false;
    }
    if (userpass == "") {
        required[1].innerHTML = "This field cannot be empty.";
        result = false;
    }
    return result;
}

function validateRegister() {
    clearRequiredFields();
    const required = document.getElementsByClassName("required");
    const userfirstname = document.getElementById("userfirstname").value;
    const userlastname = document.getElementById("userlastname").value;
    const userpass = document.getElementById("userpass").value;
    const userpassconfirm = document.getElementById("userpassconfirm").value;
    const useremail = document.getElementById("useremail").value;
    const usergender = document.getElementsByClassName("usergender");
    let result = true;
    if (userfirstname == "") {
        required[2].innerHTML = "This field cannot be empty.";
        result = false;
    }
    if (userlastname == "") {
        required[3].innerHTML = "This field cannot be empty.";
        result = false;
    }
    if (userpass == "") {
        required[5].innerHTML = "This field cannot be empty.";
        result = false;
    }
    if (userpassconfirm == "") {
        required[6].innerHTML = "This field cannot be empty.";
        result = false;
    }
    if (userpass != "" && userpassconfirm != "" && userpass != userpassconfirm) {
        required[5].innerHTML = "Passwords doesn't match.";
        required[6].innerHTML = "Passwords doesn't match.";
        result = false;
    }
    if (useremail == "") {
        required[7].innerHTML = "This field cannot be empty.";
        result = false;
    } else if (!validateEmail(useremail)) {
        required[7].innerHTML = "Invalid Email Format.";
        result = false;
    }
    if (!usergender[0].checked && !usergender[1].checked) {
        required[8].innerHTML = "You must select your gender.";
        result = false;
    }
    return result;
}

function clearRequiredFields() {
    const required = document.getElementsByClassName("required");
    for (i = 0; i < required.length; i++) {
        required[i].innerHTML = "";
    }
}

function validateEmail(email) {
    const emailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailformat))
        return false;
    return true;
}
