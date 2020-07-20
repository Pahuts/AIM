function HideSEELLFields()
{ 
    var ndphSEELLApplicantType = Xrm.Page.data.entity.attributes.get("ndph_seellapplicanttype");
    var ndphSchool  = Xrm.Page.data.entity.attributes.get("ndph_school");

    if (Xrm.Page.ui.tabs.get('participants_tab').setVisible(true)){
        if (ndphSchool.getValue()[0].id == "{f15b7ce7-0f17-ea11-a811-000d3a82bec6}") {
            if (ndphSEELLApplicantType == "Individual"){
                Xrm.Page.ui.tabs.get('participants_tab').setVisible(false);
            } else if (ndphSEELLApplicantType == "Corporate") {
                Xrm.Page.ui.tabs.get('participants_tab').setVisible(true);
            }
        } else if (ndphSchool.getValue()[0].id != "{f15b7ce7-0f17-ea11-a811-000d3a82bec6}") {
            Xrm.Page.ui.tabs.get('participants_tab').setVisible(false);
        }
    }
}
function HideParticipantsTab()
{
        var activeStage = Xrm.Page.data.process.getActiveStage();
        var stagename = activeStage.getName();
        var school = Xrm.Page.getAttribute('ndph_school').getValue();
        var ndphSEELLApplicantType = Xrm.Page.getAttribute('ndph_seellapplicanttype').getValue();
    
    if(school != null){
        if(school == "School of Executive Education and Lifelong Learning")
        {
        alert("Stage Name: " + stagename);
        // var school1 = Xrm.Page.getAttribute('ndph_school').getValue()[0].name;
        
        // if (school1 == "School of Executive Education and Lifelong Learning")
        // {
        if(ndphSEELLApplicantType != null) {
            if (ndphSEELLApplicantType == "Individual") {
                Xrm.Page.ui.tabs.get('participants_tab').setVisible(false);
            }
        }
            // }  
        } else {
            Xrm.Page.ui.tabs.get('participants_tab').setVisible(false);
        }  
    }

}

function showHideParticipants()
    {
            var activeStage = Xrm.Page.data.process.getActiveStage();
            var stagename = activeStage.getName();
            var school = Xrm.Page.getAttribute('ndph_school').getValue();
            if(school != null)
            {
                if(Xrm.Page.ui.tabs.get('participants_tab') != null && Xrm.Page.ui.tabs.get('participants_tab') != 'undefined') {
                    var school1 = Xrm.Page.getAttribute('ndph_school').getValue()[0].name;
                    if (school1 == "School of Executive Education and Lifelong Learning")
                    {
                        Xrm.Page.ui.tabs.get('tab_6').setVisible(true);
                        Xrm.Page.ui.tabs.get('requirements_opptab').setVisible(true);
                        Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('ME_application_form').setVisible(false);  
                        Xrm.Page.ui.tabs.get('appadtestinterview_opptab').setVisible(false);
                        Xrm.Page.ui.tabs.get('fundingregistration_opptab').setVisible(false);
                        
                        if (Xrm.Page.data.entity.attributes.get("ndph_seellprogramtype").getText() == "Open Program" &&
                        Xrm.Page.data.entity.attributes.get("ndph_seellapplicanttype").getText() == "Corporate")
                            { 
                                Xrm.Page.ui.tabs.get('participants_tab').setVisible(true);
                                Xrm.Page.ui.tabs.get("participants_tab").sections.get("Participants_Section").setVisible(true);
                            }
                        else if (Xrm.Page.data.entity.attributes.get("ndph_seellprogramtype").getText() == "Customized Program")
                            { 
                                Xrm.Page.ui.tabs.get('participants_tab').setVisible(true);
                                Xrm.Page.ui.tabs.get("participants_tab").sections.get("Participants_Section").setVisible(true);
                            }
                        else 
                            {
                                Xrm.Page.ui.tabs.get('participants_tab').setVisible(false);
                                Xrm.Page.ui.tabs.get("participants_tab").sections.get("Participants_Section").setVisible(false);
                            }
    
                        if(stagename == "Registration")
                        {
                            Xrm.Page.ui.tabs.get('fundingregistration_opptab').setVisible(true); 
                        }
                    } else {
                        Xrm.Page.ui.tabs.get('participants_tab').setVisible(false);
                        Xrm.Page.ui.tabs.get("participants_tab").sections.get("Participants_Section").setVisible(false);
                    } 
                }
                
            }
        }
    

// all functions on web resource
function HideTabs()
{
        
        var oppType = Xrm.Page.getAttribute('ndph_opportunitytype').getText();
        var activeStage = Xrm.Page.data.process.getActiveStage();
        var stagename = activeStage.getName();
        if (oppType == "Program") 
        {

           if(stagename =="Prospect")
           {Xrm.Page.data.process.addOnStageChange(refreshpage);
                Xrm.Page.ui.tabs.get("tab_6").setVisible(false);    
                Xrm.Page.ui.tabs.get('appadtestinterview_opptab').setVisible(false);
                Xrm.Page.ui.tabs.get('requirements_opptab').setVisible(true);
                Xrm.Page.ui.tabs.get('fundingregistration_opptab').setVisible(false);   
                Xrm.Page.getAttribute('ndph_programbatch').setRequiredLevel("required");       
            }      
            else if (stagename == "Applicant")
            { Xrm.Page.data.process.addOnStageChange(refreshpage);
                Xrm.Page.ui.tabs.get("BasicInfo_Tab").setVisible(true);
                Xrm.Page.ui.tabs.get('tab_6').setVisible(true);
                Xrm.Page.ui.tabs.get('requirements_opptab').setVisible(true);
                Xrm.Page.ui.tabs.get('requirements_opptab').sections.get("requirements_opptab_section_7").setVisible(true);
                Xrm.Page.ui.tabs.get('appadtestinterview_opptab').setVisible(true);
                Xrm.Page.ui.tabs.get('fundingregistration_opptab').setVisible(false); 
 
           } 
            else if (stagename == "Registration")
            {Xrm.Page.data.process.addOnStageChange(refreshpage);
                Xrm.Page.ui.tabs.get("BasicInfo_Tab").setVisible(true);
                Xrm.Page.ui.tabs.get('tab_6').setVisible(true);
                Xrm.Page.ui.tabs.get('requirements_opptab').setVisible(true);
                Xrm.Page.ui.tabs.get('requirements_opptab').sections.get("requirements_opptab_section_7").setVisible(true);
                Xrm.Page.ui.tabs.get('appadtestinterview_opptab').setVisible(true);
                Xrm.Page.ui.tabs.get('fundingregistration_opptab').setVisible(true);               
            } 
        }
        else if(oppType == "Partnership")
        {
            Xrm.Page.ui.tabs.get("BasicInfo_Tab").setVisible(true);
            Xrm.Page.ui.tabs.get("BasicInfo_Tab").sections.get("Program_Application_Section").setVisible(false);
            Xrm.Page.ui.tabs.get("BasicInfo_Tab").sections.get("Participants_Section").setVisible(false);
            Xrm.Page.ui.tabs.get('tab_6').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').setVisible(true);
            Xrm.Page.ui.tabs.get('appadtestinterview_opptab').setVisible(false);
            Xrm.Page.ui.tabs.get('fundingregistration_opptab').setVisible(false);  
        }            
    
    else
    {
        Xrm.Page.ui.tabs.get("BasicInfo_Tab").sections.get("Participants_Section").setVisible(false);
        Xrm.Page.ui.tabs.get("BasicInfo_Tab").sections.get("Program_Application_Section").setVisible(false);
        Xrm.Page.ui.tabs.get('tab_6').setVisible(false);
        Xrm.Page.ui.tabs.get('requirements_opptab').setVisible(false);
        Xrm.Page.ui.tabs.get('APPLICATION_INFORMATION').setVisible(false);
        Xrm.Page.ui.tabs.get('appadtestinterview_opptab').setVisible(false);
        Xrm.Page.ui.tabs.get('fundingregistration_opptab').setVisible(false);  
    }
}


function refreshForm()
{
setTimeout(function () { 
    Xrm.Utility.openEntityForm(Xrm.Page.data.entity.getEntityName(), Xrm.Page.data.entity.getId()); 
	}, 3000);
}

function refreshpage()
{
parent.location.reload();
}
function StageChange()
{
    Xrm.Page.data.process.addOnStageChange(HideTabs);
}

function RestrictPreviousStage()
{
    var direction = econtext.getEventArgs().getDirection();
    if (direction =="Previous")
    {
        Xrm.Page.data.process.moveNext(Showalert);
    }
}
function Showalert(e)
{
    alert("Cannot go back to previous stage");
}

function showHideParticipants()
    {
            var activeStage = Xrm.Page.data.process.getActiveStage();
            var stagename = activeStage.getName();
            var school = Xrm.Page.getAttribute('ndph_school').getValue();
            if(school != null)
            {
                if(Xrm.Page.ui.tabs.get('participants_tab') != null && Xrm.Page.ui.tabs.get('participants_tab') != 'undefined') {
                    var school1 = Xrm.Page.getAttribute('ndph_school').getValue()[0].name;
                    if (school1 == "School of Executive Education and Lifelong Learning")
                    {
                        Xrm.Page.ui.tabs.get('tab_6').setVisible(true);
                        Xrm.Page.ui.tabs.get('requirements_opptab').setVisible(true);
                        Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('ME_application_form').setVisible(false);  
                        Xrm.Page.ui.tabs.get('appadtestinterview_opptab').setVisible(false);
                        Xrm.Page.ui.tabs.get('fundingregistration_opptab').setVisible(false);
                        
                        if (Xrm.Page.data.entity.attributes.get("ndph_seellprogramtype").getText() == "Open Program" &&
                        Xrm.Page.data.entity.attributes.get("ndph_seellapplicanttype").getText() == "Corporate")
                            { 
                                Xrm.Page.ui.tabs.get('participants_tab').setVisible(true);
                                Xrm.Page.ui.tabs.get("participants_tab").sections.get("Participants_Section").setVisible(true);
                            }
                        else if (Xrm.Page.data.entity.attributes.get("ndph_seellprogramtype").getText() == "Customized Program")
                            { 
                                Xrm.Page.ui.tabs.get('participants_tab').setVisible(true);
                                Xrm.Page.ui.tabs.get("participants_tab").sections.get("Participants_Section").setVisible(true);
                            }
                        else 
                            {
                                Xrm.Page.ui.tabs.get('participants_tab').setVisible(false);
                                Xrm.Page.ui.tabs.get("participants_tab").sections.get("Participants_Section").setVisible(false);
                            }
    
                        if(stagename == "Registration")
                        {
                            Xrm.Page.ui.tabs.get('fundingregistration_opptab').setVisible(true); 
                        }
                    } else {
                        Xrm.Page.ui.tabs.get('participants_tab').setVisible(false);
                        Xrm.Page.ui.tabs.get("participants_tab").sections.get("Participants_Section").setVisible(false);
                    } 
                }
                
            }
        }

function HideTabOnLead()
{ 
    if (Xrm.Page.data.entity.attributes.get("ndph_leadtype").getText() == "Program")
    {
        if (Xrm.Page.data.entity.attributes.get("ndph_leadapproach").getText() == "Application")
        {
            Xrm.Page.ui.tabs.get('Application_form').setVisible(true);
            Xrm.Page.ui.tabs.get('Billing_information').setVisible(true);
        }
        else if (Xrm.Page.data.entity.attributes.get("ndph_leadapproach").getText() == "Inquiry / Lead Generation")
        {
            if (Xrm.Page.data.entity.attributes.get("ndph_readytoapply").getValue() == "1")
            {
                Xrm.Page.ui.tabs.get('Application_form').setVisible(true);
                Xrm.Page.ui.tabs.get('Billing_information').setVisible(true);
            }
            else 
            {
                Xrm.Page.ui.tabs.get('Application_form').setVisible(false); 
                Xrm.Page.ui.tabs.get('Billing_information').setVisible(false);
            }
        }
        else 
        {
            Xrm.Page.ui.tabs.get('Application_form').setVisible(false); 
            Xrm.Page.ui.tabs.get('Billing_information').setVisible(false);
        }
    }
    else 
    {
        Xrm.Page.ui.tabs.get('Application_form').setVisible(false); 
        Xrm.Page.ui.tabs.get('Billing_information').setVisible(false);

    }
}


function HideOtherProgramQuestions()
{ 
    if (Xrm.Page.data.entity.attributes.get("ndph_school").getValue() != null)
    {
        if (Xrm.Page.data.entity.attributes.get("ndph_school").getValue()[0].id == "{F15B7CE7-0F17-EA11-A811-000D3A82BEC6}")
        {
            Xrm.Page.getControl("ndph_possiblesourcesoffunding").setVisible(false);
        }
        else 
        {
            Xrm.Page.getControl("ndph_possiblesourcesoffunding").setVisible(true);
        }
    }
    else
    {
        Xrm.Page.ui.tabs.get('Application_form').sections.get('other_program_specific_questions').setVisible(false); 
    }
}


function HideProgramform()
{
    if (Xrm.Page.data.entity.attributes.get("ndph_program").getValue() != null)
    {
        if (Xrm.Page.data.entity.attributes.get("ndph_program").getValue()[0].id == "{8E8678DD-2217-EA11-A811-000D3A82BEC6}")
        {
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MBA_application_form').setVisible(true); 
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('EMBA_application_form').setVisible(false); 
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MSDS_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('ME_application_form').setVisible(false);  
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MDM_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('EMDRCM_application_form').setVisible(false);
        }
        else if (Xrm.Page.data.entity.attributes.get("ndph_program").getValue()[0].id == "{784FD1CF-2217-EA11-A811-000D3A82BEC6}")
        {
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('EMBA_application_form').setVisible(true);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MBA_application_form').setVisible(false); 
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('ME_application_form').setVisible(false);  
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MSDS_application_form').setVisible(false); 
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MDM_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('EMDRCM_application_form').setVisible(false);
        }
        else if (Xrm.Page.data.entity.attributes.get("ndph_program").getValue()[0].id == "{94986F48-2317-EA11-A811-000D3A82BEC6}")
        {
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MSDS_application_form').setVisible(true); 
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MBA_application_form').setVisible(false); 
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('EMBA_application_form').setVisible(false); 
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('ME_application_form').setVisible(false); 
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MDM_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('EMDRCM_application_form').setVisible(false);
        }
        else if (Xrm.Page.data.entity.attributes.get("ndph_program").getValue()[0].id == "{D98E150A-2317-EA11-A811-000D3A82BEC6}")
        {
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('ME_application_form').setVisible(true); 
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MBA_application_form').setVisible(false); 
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('EMBA_application_form').setVisible(false); 
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MSDS_application_form').setVisible(false); 
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MDM_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('EMDRCM_application_form').setVisible(false);
        }
        
        else if (Xrm.Page.data.entity.attributes.get("ndph_program").getValue()[0].id == "{B3DF1EEC-2217-EA11-A811-000D3A82BEC6}") 
        {
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MDM_application_form').setVisible(true);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('EMBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MSDS_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('ME_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('EMDRCM_application_form').setVisible(false);
        } 
        
        else if (Xrm.Page.data.entity.attributes.get("ndph_program").getValue()[0].id == "{718AD8FD-2217-EA11-A811-000D3A82BEC6}") 
        {
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('EMDRCM_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('EMBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MSDS_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('ME_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MDM_application_form').setVisible(false);
        } 
         else if (Xrm.Page.data.entity.attributes.get("ndph_program").getValue()[0].id == "{56928636-2317-EA11-A811-000D3A82BEC6}")
        {
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('ME_application_form').setVisible(false); 
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MBA_application_form').setVisible(false); 
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('EMBA_application_form').setVisible(false); 
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MSDS_application_form').setVisible(false); 
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MDM_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('EMDRCM_application_form').setVisible(false);
        }
  }
    else
    {
        Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MBA_application_form').setVisible(false); 
        Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('EMBA_application_form').setVisible(false); 
        Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MSDS_application_form').setVisible(false);
        Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('ME_application_form').setVisible(false); 
        Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('MDM_application_form').setVisible(false);
        Xrm.Page.ui.tabs.get('requirements_opptab').sections.get('EMDRCM_application_form').setVisible(false);
    }
}



function HideLeadProgramform() {
    if (Xrm.Page.data.entity.attributes.get("ndph_program").getValue() != null) 
    {
        if (Xrm.Page.data.entity.attributes.get("ndph_program").getValue()[0].id == "{8E8678DD-2217-EA11-A811-000D3A82BEC6}") 
        {
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MBA_application_form').setVisible(true);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('EMBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MSDS_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('ME_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MDM_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('EMDRCM_application_form').setVisible(false);
        } 
        else if (Xrm.Page.data.entity.attributes.get("ndph_program").getValue()[0].id == "{784FD1CF-2217-EA11-A811-000D3A82BEC6}") 
        {
            Xrm.Page.ui.tabs.get('Application_form').sections.get('EMBA_application_form').setVisible(true);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('ME_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MSDS_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MDM_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('EMDRCM_application_form').setVisible(false);
        } 
        else if (Xrm.Page.data.entity.attributes.get("ndph_program").getValue()[0].id == "{94986F48-2317-EA11-A811-000D3A82BEC6}") 
        {
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MSDS_application_form').setVisible(true);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('EMBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('ME_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MDM_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('EMDRCM_application_form').setVisible(false);
        } 
        else if (Xrm.Page.data.entity.attributes.get("ndph_program").getValue()[0].id == "{D98E150A-2317-EA11-A811-000D3A82BEC6}") 
        {
            Xrm.Page.ui.tabs.get('Application_form').sections.get('ME_application_form').setVisible(true);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('EMBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MSDS_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MDM_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('EMDRCM_application_form').setVisible(false);
        } 
        else if (Xrm.Page.data.entity.attributes.get("ndph_program").getValue()[0].id == "{B3DF1EEC-2217-EA11-A811-000D3A82BEC6}") 
        {
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MDM_application_form').setVisible(true);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('EMBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MSDS_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('ME_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('EMDRCM_application_form').setVisible(false);
        } 
        else if (Xrm.Page.data.entity.attributes.get("ndph_program").getValue()[0].id == "{718AD8FD-2217-EA11-A811-000D3A82BEC6}") 
        {
            Xrm.Page.ui.tabs.get('Application_form').sections.get('EMDRCM_application_form').setVisible(true);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('EMBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MSDS_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('ME_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MDM_application_form').setVisible(false);
        } 
        else if (Xrm.Page.data.entity.attributes.get("ndph_school").getValue()[0].id == "{F15B7CE7-0F17-EA11-A811-000D3A82BEC6}") 
        {
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('EMBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MSDS_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('ME_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MDM_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('EMDRCM_application_form').setVisible(false);
        } 
        else
        {
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('EMBA_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MSDS_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('ME_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('MDM_application_form').setVisible(false);
            Xrm.Page.ui.tabs.get('Application_form').sections.get('EMDRCM_application_form').setVisible(false);
        }
    } 
    else 
    {
        Xrm.Page.ui.tabs.get('Application_form').sections.get('MBA_application_form').setVisible(false);
        Xrm.Page.ui.tabs.get('Application_form').sections.get('EMBA_application_form').setVisible(false);
        Xrm.Page.ui.tabs.get('Application_form').sections.get('MSDS_application_form').setVisible(false);
        Xrm.Page.ui.tabs.get('Application_form').sections.get('ME_application_form').setVisible(false);
        Xrm.Page.ui.tabs.get('Application_form').sections.get('MDM_application_form').setVisible(false);
        Xrm.Page.ui.tabs.get('Application_form').sections.get('EMDRCM_application_form').setVisible(false);
    }

}


function printprogram()
{
    var program = Xrm.Page.data.entity.attributes.get("ndph_program").getValue()[0].id;
    alert(program);
}

function OnPageLoad()
{
   Xrm.Page.data.process.addOnProcessStatusChange(statusFinishOpp);
}

function statusFinishOpp() {
    status = Xrm.Page.data.process.getStatus();
    if (status == "finished") {
        Xrm.Page.ui.refreshRibbon();
    }
}

function LockProgramBatch()
{
    if (Xrm.Page.data.entity.attributes.get("ndph_programbatch").getValue() != null)
    {
        Xrm.Page.ui.controls.get("ndph_programbatch").setDisabled(true);
    }
     
}
function saves()
{
Xrm.Page.data.entity.save();
Xrm.Page.data.process.addOnStageChange(refreshpage);
}

function setAccept()
{ 
 if (Xrm.Page.getAttribute("ndph_approvalstatus").getValue() == 649840000)
{
    if (Xrm.Page.getAttribute("ndph_acceptedoffer").getValue() == 1)
    {
        Xrm.Page.getAttribute("ndph_devfieldacceptedoffer").setValue(1);
    }
    else if (Xrm.Page.getAttribute("ndph_acceptedoffer").getValue() == 0)
    {
        Xrm.Page.getAttribute("ndph_devfieldacceptedoffer").setValue(0);
    }
}
}

