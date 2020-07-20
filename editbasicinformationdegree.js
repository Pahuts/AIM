$(document).ready(function() {
    function toggleStateOtherHome() {
        var checkedStateOtherHome = $("#ndph_addressnotshownonthelist");
        var stateHome = $("#ndph_state");
        var stateHomeField = stateHome.parent().parent().parent();
        var stateOtherHome = $("#address1_stateorprovince");
        var stateOtherHomeField = stateOtherHome.parent().parent();

        if (checkedStateOtherHome.prop("checked")) {
            stateHomeField.hide();
            stateOtherHomeField.show();
        }
        else {
            stateOtherHomeField.hide();
            stateHomeField.show();
        }
    }

    // Hide/show Home City (Other) based on "Others" checkbox
    function toggleCityOtherHome() {
        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
        var cityHome = $("#ndph_city");
        var cityHomeField = cityHome.parent().parent().parent();
        var cityOtherHome = $("#address1_city");
        var cityOtherHomeField = cityOtherHome.parent().parent();

        if (checkedCityOtherHome.prop("checked")) {
            cityHomeField.hide();
            cityOtherHomeField.show();
        }
        else {
            cityOtherHomeField.hide();
            cityHomeField.show();
        }
    }

     // Toggle Business State based on whether Business Country has a value
     function toggleStateBusiness() {
        var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
        var stateBusiness = $("#ndph_mequestion12");
        var stateBusinessField = stateBusiness.parent().parent().parent();
        var stateOtherBusiness = $("#ndph_statebusinessothers");
        var stateOtherBusinessField = stateOtherBusiness.parent().parent();

        if (checkedStateOtherBusiness.prop("checked")) {
            stateBusinessField.hide();
            stateOtherBusinessField.show();
        }
        else {
            stateOtherBusinessField.hide();
            stateBusiness.show();
        }
    }
    // Toggle Business City based on whether Business State has a value
    function toggleCityBusiness() {
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
        var cityBusiness = $("#ndph_mequestion13");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessothers");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();

        if (checkedCityOtherBusiness.prop("checked")) {
            cityBusinessField.hide();
            cityOtherBusinessField.show();
        }
        else {
            cityOtherBusinessField.hide();
            cityBusiness.show();
        }
    }


    // ################################################################
    // INITIALIZE FORM
    // ################################################################

    // Get the query string from the URL
    var queryString = window.location.search;
    queryString = queryString.substring(1);

    // Parse the query string and assign parameters to "params" object
    var queries = queryString.split("&");
    var params = {};
    var query;
    for (var i = 0; i < queries.length; ++i) {
        query = queries[i].split("=");
        params[decodeURIComponent(query[0])] = decodeURIComponent(query[1]);
    }

    // Hide metadata fields
    $(".section[data-name='hidden']").closest("fieldset").hide();

        // Append program instructions
        $('<div>')
        .addClass('seellinstruction')
        .attr('id', 'seellinstruction')
        .append('<p>Fill out the Enrollment Form and one of our Business Development Officers will get in touch with you shortly. Should you wish to contact us directly, email us at <a href="mailto: seell@aim.edu" id="recruitmentEmail">SEELL@aim.edu</a>.</p>')
        .append('<p>Please be reminded that all information you submit in this Form will be recorded in AIM’s database and will be accessed only by authorized AIM personnel. </p>')
        .append('<p><a href = "https://aimdevelopmentportal.powerappsportals.com/enrollment-guide/" target = "_blank" id = "enrollmentprocess"> Click here to read the step-by-step guide to this online process. </a></p>')

        .append('<p><i>* - Required fields.</i></p>')
        .insertAfter('.page-header');

        // edit css
        $("#enrollmentprocess").attr("onclick", "return !window.open(this.href, undefined, 'width=800,height=600')");
        $("a#enrollmentprocess").css( { "color" : "blue", "text-decoration" : "underline" });
        $("a#recruitmentEmail").css( { "color" : "purple", "font-weight" : "500" } );

        // Append update applicant info instruction
        $('<div>')
        .addClass('updateApplicantInfo')
        .attr('id', 'updateApplicantInfo')
        .append('<p>To update this section, go to My Profile > Basic Information.</p>')
        .insertBefore('[data-name="seell_personal_information"]');

        // Append update home address instruction
        $('<div>')
        .addClass('updateHomeAddressInstruction')
        .attr('id', 'updateHomeAddressInstruction')
        .append('<p>To update this section, go to My Profile > Address.</p>')
        .insertBefore('[data-name="seell_home_address"]');

        // Append update business address instruction
        $('<div>')
        .addClass('updateBusinessAddressInstruction')
        .attr('id', 'updateBusinessAddressInstruction')
        .append('<p>To update this section, go to My Profile > Address.</p>')
        .insertBefore('[data-name="business_address"]');

    // Disable applicant info fields
    $("#firstname").prop('disabled', true);
    $("#middlename").prop('disabled', true);
    $("#lastname").prop('disabled', true);
    $("#ndph_suffix").prop('disabled', true);
    $("#emailaddress1").prop('disabled', true);
    $("#ndph_countrycodemobilenew").prop('disabled', true);
    $("#ndph_countrycodemobilenew_name").parent().find('.input-group-btn').hide();
    $("#mobilephone").prop('disabled', true);
    $("#ndph_dateofbirth_datepicker_description").parent().find('.form-control').prop('disabled', true);
    $("#ndph_dateofbirth").parent().find('.input-group-addon').hide();
    $("#ndph_sex").prop('disabled', true);
    $("#ndph_countryofbirth").prop('disabled', true);
    $("#ndph_citizenship").prop('disabled', true);
    // Disable home address fields
    $("#address1_line1").prop('disabled', true);
    $("#ndph_country").prop('disabled', true);
    $("#ndph_country_name").parent().find('.input-group-btn').hide();
    $("#address1_postalcode").prop('disabled', true); 
    $("#ndph_state").prop('disabled', true);
    $("#ndph_state_name").parent().find('.input-group-btn').hide(); 
    $("#address1_stateorprovince").prop('disabled', true); 
    $("#ndph_addressnotshownonthelist").prop('disabled', true);
    $("#address1_city").prop('disabled', true);  
    $("#ndph_city").prop('disabled', true);
    $("#ndph_city_name").parent().find('.input-group-btn').hide(); 
    $("#ndph_addressnotshownonlist_city").prop('disabled', true);
    // Disable business address fields
    $("#ndph_businessaddressishomeaddress").prop('disabled', true);
    $("#ndph_street1business").prop('disabled', true);
    $("#ndph_mequestion11").prop('disabled', true);
    $("#ndph_mequestion11_name").parent().find('.input-group-btn').hide();  
    $("#ndph_mequestion12").prop('disabled', true);
    $("#ndph_mequestion12_name").parent().find('.input-group-btn').hide(); 
    $("#ndph_mequestion13").prop('disabled', true);
    $("#ndph_mequestion13_name").parent().find('.input-group-btn').hide();  
    $("#ndph_mequestion14").prop('disabled', true);
    $("#ndph_statebusinessothers").prop('disabled', true);
    $("#ndph_citybusinessothers").prop('disabled', true);
    $("#ndph_addressnotshownonthelistbusiness").prop('disabled', true);
    $("#ndph_addressnotshownonlist_citybusiness").prop('disabled', true);
    // Disable dietary info fields
    $("#ndph_foodallergies").prop('disabled', true);

    // Change color and font-style country code and mobile phone
    $("div.description.below").css( { "color" : "gray", "font-weight" : "400", "font-style" : "italic", "font-size" : "10.5" } );
    $("input#mobilephone.text.form-control").css( { "margin-top" : "24px" } );

    // Resize State/City fields
    $("#ndph_country").parent().parent().parent().attr("colspan","2");          // Home Address
    $("#ndph_country").parent().css("width","100%");
    $("#ndph_state").parent().parent().parent().attr("colspan","2");
    $("#ndph_state").parent().css("width","100%");
    $("#address1_stateorprovince").parent().parent().attr("colspan","2");
    $("#ndph_city").parent().parent().parent().attr("colspan","2");
    $("#ndph_city").parent().css("width","100%");
    $("#address1_city").parent().parent().attr("colspan","2");
    
    $("#ndph_mequestion11").parent().parent().parent().attr("colspan","2");     // Business Address
    $("#ndph_mequestion11").parent().css("width","100%");
    $("#ndph_mequestion12").parent().parent().parent().attr("colspan","2");
    $("#ndph_mequestion12").parent().css("width","100%");
    $("#ndph_statebusinessothers").parent().parent().attr("colspan","2");
    $("#ndph_mequestion13").parent().parent().parent().attr("colspan","2");
    $("#ndph_mequestion13").parent().css("width","100%");
    $("#ndph_citybusinessothers").parent().parent().attr("colspan","2");

    // Initialize Program
    //lockProgram();

    // Initialize Address (Other) fields
    toggleStateOtherHome();
    toggleCityOtherHome();
    toggleStateBusiness();
    toggleCityBusiness();
    
    // Initialize Dietary Preference (Others)

     

});