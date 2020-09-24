function showCloseAsWonRegister() {
    var activeStage = Xrm.Page.data.process.getActiveStage();
    var stagename = activeStage.getName();
    var oppType = Xrm.Page.getAttribute('ndph_opportunitytype').getValue();
    var school = Xrm.Page.getAttribute('ndph_school').getValue()[0].name;
    var state = Xrm.Page.getAttribute('statecode').getText();
    var statusCode = Xrm.Page.getAttribute('statuscode').getText();
    var status = Xrm.Page.data.process.getStatus();
   
    if(stagename == "Lead")
    {
        return false;
    }

 

    if (statusCode == "in Progress")
    {
        return false;
    } 

 

    if (status == "Finished")
    {
        return true;
     } 
     else if (status == "active") 
     {
        return false;
     } 
     
    if (state == "Won") 
    {
        return false;
    }
    
    if (oppType = "Program") 
    {
        if (stagename == "Registration") 
        {
            if (status == "Finished") 
            {
                return true;
            }
        } 
        else if ((stagename == "Prospect") && (school == "School of Executive Education and Lifelong Learning")) 
        {
            return true;
        } 
    }
}