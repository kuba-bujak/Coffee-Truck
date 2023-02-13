let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let name = id("name"),
  phone = id("phone"),
  email = id("email"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

  form.addEventListener("submit", (e) => {
	engine(name, 0, "Name cannot be blank");
	engine(phone, 1, "Phone number cannot be blank");
	engine(email, 2, "Email cannot be blank");

	if (!checkStatus()) e.preventDefault();
 });

 let engine = (id, serial, message) => {
	if (id.value.trim() === "" || id.value === null) {
		errorMsg[serial].innerHTML = message;
		id.style.borderColor = "red";

		// icons
		failureIcon[serial].style.opacity = "1";
		successIcon[serial].style.opacity = "0";
	}
	else {
		errorMsg[serial].innerHTML = "";
		id.style.borderColor = "green";
		
		// icons
		failureIcon[serial].style.opacity = "0";
		successIcon[serial].style.opacity = "1";
	}
 };

 let checkStatus = () => {
	if (successIcon[0].style.opacity === '1'  && successIcon[1].style.opacity === '1'  && successIcon[2].style.opacity === '1') {
		return true;
 }
};