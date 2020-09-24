var formContext;
function CalculateADLT(executionContext) {
    formContext = executionContext.getFormContext();
    try {

        if (formContext.getAttribute("islabase_contact").getValue() === null) {
            formContext.ui.setFormNotification("Contact does not contains data. Please make sure to place an order via the contact record and click (+) and not directly in Order Entity. ", "ERROR", "1");
        }
        else {
            if (formContext.getAttribute("createdon").getValue() === null) {
                var contactId = formContext.getAttribute("islabase_contact").getValue()[0].id;
                contactId = contactId.substring(1, 37);
                retreiveDefaultShowroomId(formContext, contactId);
            }
        }
    }
    catch (msg) {
        alert(msg);
    }

}
function retreiveDefaultShowroomId(formContext, contactId) {
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/contacts(" + contactId + ")?$select=_islabase_showroom_value", true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                var result = JSON.parse(this.response);
                var showroomId = result["_islabase_showroom_value"];
                var showroom = result["_islabase_showroom_value@OData.Community.Display.V1.FormattedValue"];
                var _islabase_showroom_value_lookuplogicalname = result["_islabase_showroom_value@Microsoft.Dynamics.CRM.lookuplogicalname"];

                if (showroomId === null) {
                    formContext.ui.clearFormNotification("1");
                    formContext.ui.setFormNotification("Failed To Calculate ALDT. Contact does not contain Showroom.", "ERROR", "2");
                    setTimeout(function () {
                        formContext.ui.clearFormNotification("2");
                    },
                        3000);
                }
                else {
                    
                    var lookupValue = new Array();
                    lookupValue[0] = new Object();
                    lookupValue[0].id = showroomId
                    lookupValue[0].name = showroom;
                    lookupValue[0].entityType = _islabase_showroom_value_lookuplogicalname;

                    formContext.getAttribute("islabase_showroom").setValue(lookupValue);
                    RunWorkflowToCalculateADLT(showroomId, formContext);
                }

            } else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();
}
function RunWorkflowToCalculateADLT(showroomId, formContext) {
    var entity = {
        "EntityId": showroomId
    };
    formContext.ui.setFormNotification("Calculating ALDT. Please wait...", "INFO", "1");
    var WorkflowId = "36384c05-dad9-428a-99fb-fdc67eeccf2e";
    var req = new XMLHttpRequest();
    req.open("POST", Xrm.Page.context.getClientUrl() + "/api/data/v9.0/workflows(" + WorkflowId + ")/Microsoft.Dynamics.CRM.ExecuteWorkflow", true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                setTimeout(function () { retrieveALDT(showroomId, formContext); }, 2500);
            } else {
                formContext.ui.clearFormNotification("1");
                formContext.ui.setFormNotification("Failed To Calculate ALDT. Please Try Again...", "ERROR", "2");
                setTimeout(function () {
                    formContext.ui.clearFormNotification("2");
                },
                    3000);
            }
        }
    };
    req.send(JSON.stringify(entity));
}
function retrieveALDT(assignedShowroomId, formContext) {
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/islabase_showrooms(" + assignedShowroomId + ")?$select=islabase_adltwithrange", true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                var result = JSON.parse(this.response);
                var ALDT = result["islabase_adltwithrange"];
                if (ALDT === null)
                    retrieveALDT(assignedShowroomId, formContext);
                else
                    saveADLTToOrder(ALDT, assignedShowroomId, formContext);
            } else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();
}
function saveADLTToOrder(islabase_adlt, assignedShowroomId, formContext) {
    formContext.ui.setFormNotification("Advised Delivery Lead Time: " + islabase_adlt, "INFO", "1");
    formContext.getAttribute("islabase_adlt").setValue(islabase_adlt);
    clearAdlrWithRange(assignedShowroomId, formContext);
}

function clearAdlrWithRange(assignedShowroomId, formContext) {
    var entity = {};
    entity.islabase_adltwithrange = "";

    var req = new XMLHttpRequest();
    req.open("PATCH", formContext.context.getClientUrl() + "/api/data/v9.1/islabase_showrooms(" + assignedShowroomId + ")", true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 204) {
                //Success - No Return Data - Do Something
            } else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send(JSON.stringify(entity));
}