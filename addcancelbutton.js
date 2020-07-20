/*Add Cancel Button */
$('#InsertButton').before('<input type="button" value="Cancel" onclick="goBack()" id="CancelButton" class="btn classicbutton btn-default form-action-container-right active"/>')   

/*Edit CSS of OOB Submit button*/
$('#InsertButton').addClass("important classicbutton"); 

/*Cancel Button function */
function goBack() {

        if (confirm("Are you sure you want to cancel?")) {
            window.history.back();
        }
        
    }
    