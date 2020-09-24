$(document).ready(function() {
    // disable additional fields
    $("#parentaccountid").parent().find('.input-group-btn').hide(); 
    $("#ndph_industry").prop("disabled", true);
    $("#ndph_joblevel").prop("disabled", true);
    $("#ndph_applicantpositiontitle").prop("disabled", true);

    // hide PICOT Section
    var checkedPICOT = $("#ndph_otherpersoninchargeoftraining").prop("checked");
    var PICOT = $(".section[data-name='person_in_charge_of_training_section']").closest("fieldset");
    if($("#ndph_otherpersoninchargeoftraining").prop("checked")){
        $(".section[data-name='person_in_charge_of_training_section']").closest("fieldset").show();
    }else {
        $(".section[data-name='person_in_charge_of_training_section']").closest("fieldset").hide();
    }
    if($("#ndph_seellprogramtype").val() == "649840001") {
        $(".tab[data-name='Other_Information']").hide();
        $(".tab[data-name='Other_Information']").prev().hide();   // Hides the tab's title
    }else {
        $(".tab[data-name='Other_Information']").show();
        $(".tab[data-name='Other_Information']").prev().show();   // shows the tab's title
    }
        // How did you find out about this program field function
        function participantSource() {
          var pSource = $("#ndph_oderhowdidyoufirstfoundoutaboutprgram").val();
          var online = $("#ndph_online");
          var traditionalMedia = $("#ndph_traditionalmedia");
          var wordOfMouth = $("#ndph_wordofmouth");

          if (pSource == "649840000") {
              online.parent().parent().show();
              traditionalMedia.parent().parent().hide();
              wordOfMouth.parent().parent().hide();

          }else if (pSource == "649840001") {
              online.parent().parent().hide();
              traditionalMedia.parent().parent().show();
              wordOfMouth.parent().parent().hide();
          }else if (pSource == "649840002") {
              online.parent().parent().hide();
              traditionalMedia.parent().parent().hide();
              wordOfMouth.parent().parent().show();      
          }else {
              online.parent().parent().hide();
              traditionalMedia.parent().parent().hide();
              wordOfMouth.parent().parent().hide();      
          }
        }

    // $("#InsertButton").css({"float" : "right !important"});
    // check seell program type -- changed to check SEELL Portal Status
    function seellProgramType() { // shows/hides the participants tab depending on seell portal status
        var seellPT = $("#ndph_seellprogramtype").val();
        var seellPS = $("#ndph_seellportalstatus").val();
        var seellAT= $("#ndph_seellapplicanttype").val();
        // var tab = $('table[data-name="Participants_Tab"]').closest('.tab'); 
        // var label = tab.prev('.tab-title');

        if (seellAT == "649840000") { // hides participants tab if Applicant Type == Individual
            $(".tab[data-name='Participants_Tab']").hide();          // Hides tab
            $(".tab[data-name='Participants_Tab']").prev().hide();   // Hides the tab's title
            // $(".tab[data-name='Other_Information']").show();      
            // $(".tab[data-name='Other_Information']").prev().show();  

            // debugging tool
            // alert("nyek")

        } else if (seellAT == "649840001") { // shows participants tab if Applicant Type == Corporate
            $(".tab[data-name='Participants_Tab']").show();          // Shows tab
            $(".tab[data-name='Participants_Tab']").prev().show();   // Shows the tab's title
            // $(".tab[data-name='Other_Information']").hide();      
            // $(".tab[data-name='Other_Information']").prev().hide();  
            $(".tab[data-name='Background_Information']").hide();
            $(".tab[data-name='Background_Information']").prev().hide();  
            // debugging tool
            // alert("awit");
        }
    }
    
    // billing information functions
    function updatePersonICOTraining() {
    var checkedPICOT = $("#ndph_otherpersoninchargeoftraining").prop("checked");
    var PICOT = $(".section[data-name='person_in_charge_of_training_section']").closest("fieldset");
    
        if (checkedPICOT) {
            PICOT.show();
        } else {
            PICOT.hide();
            clearPersonInChargeOfTraining();
        }
    }
    // run function
    
    function clearPersonInChargeOfTraining() {
        var countryCode = $("#ndph_countrycodepersoninchargeoftraining2");
        var countryCodeName = $("#ndph_countrycodepersoninchargeoftraining2_name");
        var countryCodeEntity = $("#ndph_countrycodepersoninchargeoftraining2_entityname");

        $("#ndph_firstnamepersoninchargeoftraining").val("");
        $("#ndph_middlenamepersoninchargeoftraining").val("");
        $("#ndph_lastnamepersoninchargeoftraining").val("");
        countryCode.val("");
        countryCodeName.val("");
        countryCodeEntity.val("");
        $("#ndph_mobilenumberpersoninchargeoftraining").val("");
        $("#ndph_emailpersoninchargeoftraining").val("");
        $("#ndph_positiontitlepersoninchargeoftraining").val("");
    }

    function billingCountry() { // disables states when country does not contain data
        var billingCountry = $("#ndph_countrybilling").val();
        var billingState = $("#ndph_statebilling");
        var billingStateName = $("#ndph_statebilling_name");
        var billingStateEntityName = $("#ndph_statebilling_entityname");
        var billingStateOther = $("#ndph_stateotherbilling");
        var checkedState = $("#ndph_statenotonthelistbilling");
        var billingCity = $("#ndph_citybilling");
        var billingCityName = $("#ndph_citybilling_name");
        var billingCityEntityName = $("#ndph_citybilling_entityname");

        if (billingCountry)
        {
            billingStateOther.prop('disabled',false);
            checkedState.prop('disabled', false);
            billingState.parent().find('.input-group-btn').show();
        }
        else
        {
            checkedState.prop('disabled', true);
            billingState.val("");
            billingStateName.val("");
            billingStateEntityName.val("");
            billingStateOther.val("");
            billingStateOther.prop('disabled',true);
            // billingStateOther.parent().parent().hide();
            billingState.parent().find('.input-group-btn').hide();
        }   

    }


    function billingState() {
        var billingState = $("#ndph_statebilling").val();
        var billingStateName = $("#ndph_statebilling_name");
        var billingStateEntityName = $("#ndph_statebilling_entityname");
        var billingStateOther = $("#ndph_stateotherbilling").val();
        var billingCity = $("#ndph_citybilling");
        var billingCityName = $("#ndph_citybilling_name");
        var billingCityEntityName = $("#ndph_citybilling_entityname");
        var billingCityOther = $("#ndph_cityotherbilling");
        var checkedCity = $("#ndph_citynotonthelistbilling");

        if (billingState || billingStateOther) 
        {
            // enable city fields
            billingCity.parent().find('.input-group-btn').show(); 
            billingCityOther.prop("disabled", false);
            checkedCity.prop("disabled", false);
            
            // alert("nandito sa if");
        }else 
        {
            // disable city fields
            billingCity.val("");
            billingCityName.val("");
            billingCityEntityName.val("");
            billingCityOther.val("");
            billingCity.parent().find('.input-group-btn').hide();
            billingCityOther.prop("disabled", true);
            checkedCity.prop("disabled", true);
            
            // alert("nandito sa else");
        }
    }


    function billingStateCheck() { // checks if state not on the list is checked
        var billingState = $("#ndph_statebilling");
        var billingStateName = $("#ndph_statebilling_name");
        var billingStateEntityName = $("#ndph_statebilling_entityname");
        var billingStateOther = $("#ndph_stateotherbilling");
        var checkedState = $("#ndph_statenotonthelistbilling");
        var checkedCity = $("#ndph_citynotonthelistbilling");


        if (checkedState.prop("checked")) 
        {   // disable state field and city checkbox
            billingStateOther.parent().parent().show();
            billingState.parent().parent().parent().hide();
            checkedCity.prop("checked", true);
            checkedCity.prop("disabled", true);
            billingCityCheck();
            billingState.val("");
            billingStateName.val("");
            billingStateEntityName.val("");

        }else
        {   // enable statefield and city checkbox
            billingStateOther.parent().parent().hide();
            billingState.parent().parent().parent().show();
            // checkedCity.prop("checked", false);
            
            billingStateOther.val("");
            billingCityCheck();
            
        }
    }

    function billingCityCheck() {  // checks if city not on the list is checked
        var billingCity = $("#ndph_citybilling");
        var billingCityName = $("#ndph_citybilling_name");
        var billingCityEntityName = $("#ndph_citybilling_entityname");
        var billingCityOther = $("#ndph_cityotherbilling");
        var checkedCity = $("#ndph_citynotonthelistbilling");

        if (checkedCity.prop("checked")) 
        {
            billingCityOther.parent().parent().show();
            billingCity.parent().parent().parent().hide();
            billingCity.val("");
            billingCityName.val("");
            billingCityEntityName.val("");

        }else
        {
            billingCityOther.parent().parent().hide();
            billingCity.parent().parent().parent().show();
           billingCityOther.val("");
        }

    }


    // hide fields
    // $("#ndph_statenotonthelistbilling").parent().parent().parent().hide();
    // $("#ndph_citynotonthelistbilling").parent().parent().parent().hide();


    // adjust column spans of fields
    $("#ndph_countrybilling").parent().parent().parent().attr("colspan","2");          // Billing Information
    $("#ndph_countrybilling").parent().css("width","100%");
    $("#ndph_statebilling").parent().parent().parent().attr("colspan","2");
    $("#ndph_statebilling").parent().css("width","100%");
    $("#ndph_stateotherbilling").parent().parent().attr("colspan","2");
    $("#ndph_citybilling").parent().parent().parent().attr("colspan","2");
    $("#ndph_citybilling").parent().css("width","100%");
    $("#ndph_cityotherbilling").parent().parent().attr("colspan","2");


    // Initiate the functions
    seellProgramType(); // shows/hides the participants tab depending on the value of seell program type
    billingCountry(); // shows or hides billing information fields
    billingStateCheck(); // shows or hides state fields
    billingCityCheck(); // shows or hides city fields
    billingState(); // Disables or enables state and city fields


    // Initiate functions on field change
    $("#ndph_countrybilling").change(billingCountry);
    $("#ndph_statenotonthelistbilling").change(billingStateCheck);
    $("#ndph_citynotonthelistbilling").change(billingCityCheck);
    $("#ndph_statebilling").change(billingState);
    $("#ndph_stateotherbilling").change(billingState);
    $("#ndph_citybilling").change(billingState);
    $("#ndph_otherpersoninchargeoftraining").change(updatePersonICOTraining);

    //$('input[name =ctl00$ContentContainer$MainContent$EntityFormControl$InsertButton]').removeClass("form-action-container-left");
    //$('input[name =ctl00$ContentContainer$MainContent$EntityFormControl$InsertButton]').addClass("pull-right");
    //$('.submit-btn btn btn-primary form-action-container-left').css({"float" : "right !important"});
    //$('.submit-btn btn btn-primary form-action-container-left').addClass("pull-right");

    // initiate functions
    participantSource()

    // execute functions on change
    $("#ndph_oderhowdidyoufirstfoundoutaboutprgram").change(participantSource);


    $('iframe').load( function() {
        $('iframe').contents().find("head")
        .append($("<style type='text/css'>  .crmEntityFormView .actions .btn:first-child{float: right !important;}  </style>"));
    });
});