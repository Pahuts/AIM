function BirthDateFunction() { // This functionn gets the user's birthday
   // Commented out deprecated client api
   // var birthDate = Xrm.Page.getAttribute("islabase_birthday").getValue();
   // var birthDateControl = Xrm.Page.ui.controls.get("islabase_birthday");

   // XRM.Page is deprecated, formContext is the replacement API

    var formContext = executionContext.getFormContext(); //get formContext  ;
    var birthDate = formContext.getAttribute("islabase_birthday").getValue();
    var birthDateControl = formContext.ui.controls.get("islabase_birthday");


    // Xrm.Page.ui.clearFormNotification('1'); 
    formContext.ui.clearFormNotification('1');
    if (birthDate != "" && birthDate != null) {
        var age = CalculateAge(birthDate);
        var newLabel = "Birthday (" + age + ")";
    }
    else {
        var newLabel = "Birthday";
    }
    birthDateControl.setLabel(newLabel);
}

function CalculateAge(birthDate) { // This function checks if it is the user's birthday or birthmonth
    // Commented out deprecated client api
    // var gender = Xrm.Page.getAttribute("islabase_gender").getValue();

    var formContext = executionContext.getFormContext(); //get formContext
    var gender = formContext.getAttribute("islabase_gender").getValue();
    var thirdPersonValue = "";
    if (gender == true) {
        thirdPersonValue = "his";
    }
    else {
        thirdPersonValue = "her";
    }

    birthDate = new Date(birthDate);
    var todayDate = new Date();

    var years = (todayDate.getFullYear() - birthDate.getFullYear());

    if (todayDate.getMonth() < birthDate.getMonth() || todayDate.getMonth() == birthDate.getMonth() && todayDate.getDate() < birthDate.getDate()) {
        years--;
    }


    if (todayDate.getMonth() == birthDate.getMonth() && todayDate.getDate() == birthDate.getDate()) {
       // Xrm.Page.ui.setFormNotification("Today is " + thirdPersonValue + " birthday.", "INFO", "1");
        formContext.ui.setFormNotification("Today is " + thirdPersonValue + " birthday.", "INFO", "1");
    }
    else if (todayDate.getMonth() == birthDate.getMonth()) {
       // Xrm.Page.ui.setFormNotification("This month is " + thirdPersonValue + " birth month.", "INFO", "1");
        formContext.ui.setFormNotification("This month is " + thirdPersonValue + " birth month.", "INFO", "1");
    }

    return years;
}