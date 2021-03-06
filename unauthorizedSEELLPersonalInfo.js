$(document).ready(function() {
    $("#ndph_school").parent().parent().hide();
    // $("#ndph_seellopenprograms").parent().find('.input-group-btn').hide(); 
    // $("#ndph_seellopenprograms").prop("disabled", true);
    // autopopulate school
        // var school = $("#ndph_school");
        // var schoolName = $("#ndph_school_name");
        // var schoolEntity = $("#ndph_school_entityname")
        
    //hide school
    $("#ndph_school").parent().parent().parent().hide();


    function autopopulateSchool() //autopopulates school
    {
        //DON'T FORGET THE HASHTAG!!!
        var school = $("#ndph_school");
        var schoolName = $("#ndph_school_name");
        var schoolEntity = $("#ndph_school_entityname");
        //autopopulate school
        school.val("f15b7ce7-0f17-ea11-a811-000d3a82bec6");
        schoolName.val("School of Executive Education and Lifelong Learning");
        schoolEntity.val("ndph_school");

    }

    //initiate function 
    autopopulateSchool();

    // Append program instructions
    $('<div>')
        .addClass('seellinstruction')
        .attr('id', 'seellinstruction')
        .append('<p class = "oep_instruct">Fill out the Enrollment Form and one of our Business Development Officers will get in touch with you shortly. Should you wish to contact us directly, email us at <a href="mailto: seell@aim.edu" id="recruitmentEmail">SEELL@aim.edu</a>.</p>')
        .append('<p class = "oep_instruct">Please be reminded that all information you submit in this Form will be recorded in AIM’s database and will be accessed only by authorized AIM personnel. </p>')
        .append('<p class = "oep_instruct"><a href = "/enrollment-guide/" target = "_blank" id = "enrollmentprocess"> Click here to read the step-by-step guide to this online process. </a></p>')

        .append('<p class = "oep_instruct"><i>* - Required fields.</i></p>')
        .insertAfter('.page-header');

    // edit css
    $("p.oep_instruct").css( { "margin-left" : "96px", "margin-right" : "30px" });
    $("a#enrollmentprocess").css( { "color" : "blue", "text-decoration" : "underline" });
    $("a#recruitmentEmail").css( { "color" : "blue" } );
        
    // FUNCTION DECLARATIONS

    // Update School based on Program; execute only after OData query returns "programs" variable
    // Update the program
    function updateProgram() {
        var seellProgram = $("#ndph_seellopenprograms");
        var programID = seellProgram.val();  // Variable to track which program (Degree or SEELL) field should be evaluated based on Program Type
        // Get current program based on programID
        var currentProgram = {};
        if (programID) {
            currentProgram = programs.find(
                function(program) {
                    // Search in "programs" array for corresponding program element
                    return program.ndph_programid == programID;
                }
            );
    }
}

function toggleBusinessIsHomeAddress() {
    var businessIsHome = $("#ndph_businessaddressishomeaddress").prop("checked");
    
    if (businessIsHome) {
        // Unbind enable/disable functions for Business Address
        $("#ndph_mequestion11").off("change", toggleStateBusiness);
        $("#ndph_mequestion12").off("change", toggleCityBusiness);
        $("#ndph_statebusinessothers").off("change", toggleCityBusiness);
        $("#ndph_addressnotshownonthelistbusiness").off("change", toggleStateOtherBusiness);
        $("#ndph_addressnotshownonlist_citybusiness").off("change", toggleCityOtherBusiness);

        // Enable fields; needed to ensure fields are saved upon advancing form
        $("#address1_line1").prop("disabled", false);
        $("#address1_line2").prop("disabled", false);
        $("#address1_line3").prop("disabled", false);
        $("#ndph_country").prop("disabled", false);
        $("#ndph_country_name").prop("disabled", false);
        $("#ndph_postalzipcode").prop("disabled", false);
        $("#ndph_state").prop("disabled", false);
        $("#ndph_state_name").prop("disabled", false);
        $("#address1_stateorprovince").prop("disabled", false);
        $("#ndph_addressnotshownonthelist").prop("disabled", false);
        $("#ndph_city").prop("disabled", false);
        $("#ndph_city_name").prop("disabled", false);        
        $("#address1_city").prop("disabled", false);
        $("#ndph_addressnotshownonlist_city").prop("disabled", false);

        // enable business fields
        $("#ndph_mequestion11").prop("disabled", false);
        $("#ndph_mequestion12").prop("disabled", false);
        $("#ndph_mequestion13").prop("disabled", false);
        $("#ndph_mequestion14").prop("disabled", false);
        $("#ndph_statebusinessothers").prop("disabled", false);
        $("#ndph_citybusinessothers").prop("disabled", false);
        $("#ndph_addressnotshownonthelistbusiness").prop("disabled", false);
        $("#ndph_addressnotshownonlist_citybusiness").prop("disabled", false);

        // Set values for Business Address to Home Address
        // mirrorHomeAddress();

        // Set Business Address to update on Home Address change
        // $("#address1_line1").change(mirrorHomeAddress);
        // $("#address1_line2").change(mirrorHomeAddress);
        // $("#address1_line3").change(mirrorHomeAddress);
        // $("#ndph_country").change(mirrorHomeAddress);
        // $("#ndph_country_name").change(mirrorHomeAddress);
        // $("#ndph_postalzipcode").change(mirrorHomeAddress);
        // $("#ndph_state").change(mirrorHomeAddress);
        // $("#address1_stateorprovince").change(mirrorHomeAddress);
        // $("#ndph_addressnotshownonthelist").change(mirrorHomeAddress);
        // $("#ndph_city").change(mirrorHomeAddress);
        // $("#address1_city").change(mirrorHomeAddress);
        // $("#ndph_addressnotshownonlist_city").change(mirrorHomeAddress);
        
        //show/hide fields
        $("#ndph_statebusinessothers").parent().parent().parent().show();                                // Hide State (Other)
        $("#ndph_mequestion12").parent().parent().parent().hide();   
        $("#ndph_citybusinessothers").parent().parent().parent().show();                                 // Hide City (Other)
        $("#ndph_mequestion13").parent().parent().parent().hide();    
        // Hide Business Address section
        $(".section[data-name='seell_business_address']").closest("fieldset").hide();
    }
    else {
        // Clear "Same as home address" change event handlers for Business Address
        // $("#address1_line1").off("change", mirrorHomeAddress);
        // $("#address1_line2").off("change", mirrorHomeAddress);
        // $("#address1_line3").off("change", mirrorHomeAddress);
        // $("#ndph_country").off("change", mirrorHomeAddress);
        // $("#ndph_country_name").off("change", mirrorHomeAddress);
        // $("#ndph_postalzipcode").off("change", mirrorHomeAddress);
        // $("#ndph_state").off("change", mirrorHomeAddress);
        // $("#address1_stateorprovince").off("change", mirrorHomeAddress);
        // $("#ndph_addressnotshownonthelist").off("change", mirrorHomeAddress);
        // $("#ndph_city").off("change", mirrorHomeAddress);
        // $("#address1_city").off("change", mirrorHomeAddress);
        // $("#ndph_addressnotshownonlist_city").off("change", mirrorHomeAddress);

        // Clear values for Business Address
        $("#ndph_street1business").val("");                                                     // Street 1
        $("#ndph_street2business").val("");                                                     // Street 2
        $("#ndph_street3business").val("");                                                     // Street 3
        $("#ndph_mequestion11").val("");                                                        // Country GUID
        $("#ndph_mequestion11_name").val("");                                                   // Country name
        $("#ndph_mequestion11_entityname").val("");                                             // Country entity
        $("#ndph_mequestion14").val("");                                                        // ZIP/Postal Code
        $("#ndph_mequestion12").val("");                                                        // State GUID
        $("#ndph_mequestion12_name").val("");                                                   // State name
        $("#ndph_mequestion12_entityname").val("");                                             // State entity
        $("#ndph_statebusinessothers").val("");                                                 // State (others)
        $("#ndph_addressnotshownonthelistbusiness").prop("checked", false);                     // State not on list
        $("#ndph_statebusinessothers").parent().parent().hide();                                // Hide State (Other)
        $("#ndph_mequestion12").parent().parent().parent().show();                                       // Show State
        $("#ndph_mequestion13").val("");                                                        // City GUID
        $("#ndph_mequestion13_name").val("");                                                   // City name
        $("#ndph_mequestion13_entityname").val("");                                             // Country entity
        $("#ndph_citybusinessothers").val("");                                                  // City (others)
        $("#ndph_addressnotshownonlist_citybusiness").prop("checked", false);                   // City not on list
        $("#ndph_citybusinessothers").parent().parent().hide();                                 // Hide City (Other)
        $("#ndph_mequestion13").parent().parent().parent().show();                                       // Show City

        // Show Business Address section
        $(".section[data-name='seell_business_address']").closest("fieldset").show();

        // Re-initialize fields: call initialization function
        initializeBusinessAddress();

        // Re-bind enable/disable functions for Business Address
        $("#ndph_mequestion11").change(toggleStateBusiness);
        $("#ndph_mequestion12").change(toggleCityBusiness);
        $("#ndph_statebusinessothers").change(toggleCityBusiness);
        $("#ndph_addressnotshownonthelistbusiness").change(toggleStateOtherBusiness);
        $("#ndph_addressnotshownonlist_citybusiness").change(toggleCityOtherBusiness);
    }
}
// function mirrorHomeAddress() {      // Function to copy Home Address fields to Business Address
//     var homeStreet1 = $("#address1_line1").val();
//     var homeStreet2 = $("#address1_line2").val();
//     var homeStreet3 = $("#address1_line3").val();
//     var homeCountry = $("#ndph_country").val();
//     var homeCountryName = $("#ndph_country_name").val();
//     var homeZIPPostalCode = $("#address1_postalcode").val();
//     var homeState = $("#ndph_state").val();
//     var homeStateName = $("#ndph_state_name").val();
//     var homeStateOthers = $("#address1_stateorprovince").val();
//     var homeStateNotOnList = $("#ndph_addressnotshownonthelist").prop("checked");
//     var homeCity = $("#ndph_city").val();
//     var homeCityName = $("#ndph_city_name").val();
//     var homeCityOthers = $("#address1_city").val();
//     var homeCityNotOnList = $("#ndph_addressnotshownonlist_city").prop("checked");

//     $("#ndph_street1business").val(homeStreet1);                                            // Street 1
//     $("#ndph_street2business").val(homeStreet2);                                            // Street 2
//     $("#ndph_street3business").val(homeStreet3);                                            // Street 3
//     $("#ndph_mequestion11").val(homeCountry);                                               // Country GUID
//     $("#ndph_mequestion11_name").val(homeCountryName);                                      // Country name
//     $("#ndph_mequestion11_entityname").val("ndph_country");                                 // Country entity
//     $("#ndph_mequestion14").val(homeZIPPostalCode);                                         // ZIP/Postal Code
//     $("#ndph_mequestion12").val(homeState);                                                 // State GUID
//     $("#ndph_mequestion12_name").val(homeStateName);                                        // State name
//     $("#ndph_mequestion12_entityname").val("ndph_state");                                   // State entity
//     $("#ndph_statebusinessothers").val(homeStateOthers);                                    // State (others)
//     $("#ndph_addressnotshownonthelistbusiness").prop("checked", homeStateNotOnList);        // State not on list
//     $("#ndph_mequestion13").val(homeCity);                                                  // City GUID
//     $("#ndph_mequestion13_name").val(homeCityName);                                         // City name
//     $("#ndph_mequestion13_entityname").val("ndph_city");                                    // City entity
//     $("#ndph_citybusinessothers").val(homeCityOthers);                                      // City (others)
//     $("#ndph_addressnotshownonlist_citybusiness").prop("checked", homeCityNotOnList);       // City not on list

//     // Update (Other) fields
//     if ($("#ndph_addressnotshownonthelistbusiness").prop("checked")) {      // State
//         $("#ndph_mequestion12").parent().parent().parent().hide();
//         $("#ndph_statebusinessothers").parent().parent().show();
//     }
//     else {
//         $("#ndph_statebusinessothers").parent().parent().hide();
//         $("#ndph_mequestion12").parent().parent().parent().show();
//     }
//     if ($("#ndph_addressnotshownonlist_citybusiness").prop("checked")) {      // City
//         $("#ndph_mequestion13").parent().parent().parent().hide();
//         $("#ndph_citybusinessothers").parent().parent().show();
//     }
//     else {
//         $("#ndph_citybusinessothers").parent().parent().hide();
//         $("#ndph_mequestion13").parent().parent().parent().show();
//     }
// }

    // Toggle Home State based on whether Home Country has a value
    function toggleStateHome() {
        var countryHome = $("#ndph_country").val();
        var checkedStateOtherHome = $("#ndph_addressnotshownonthelist");
        var stateHome = $("#ndph_state");
        var stateHomeName = $("#ndph_state_name");
        var stateHomeEntity = $("#ndph_state_entityname");
        var stateHomeField = $("#ndph_state").parent().parent().parent();
        var stateOtherHome = $("#address1_stateorprovince");
        var stateOtherHomeField = $("#address1_stateorprovince").parent().parent();
        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
        var checkedCityOtherHomeField = checkedCityOtherHome.closest("td");
        var cityHome = $("#ndph_city");
        var cityHomeName = $("#ndph_city_name");
        var cityHomeEntity = $("#ndph_city_entityname");
        var cityHomeField = $("#ndph_city").parent().parent().parent();
        var cityOtherHome = $("#address1_city");
        var cityOtherHomeField = $("#address1_city").parent().parent();

        // Clear State
        stateHome.val("");
        stateHomeName.val("");
        stateHomeEntity.val("");
        // Clear State (Other)
        stateOtherHome.val("");
        // Untick "Others" checkbox
        checkedStateOtherHome.prop("checked", false);
        // Update (Other) visibility
        stateOtherHomeField.hide();
        stateHomeField.show();

        // Clear City
        cityHome.val("");
        cityHomeName.val("");
        cityHomeEntity.val("");
        // Clear City (Other)
        cityOtherHome.val("");
        // Untick "Others" checkbox
        checkedCityOtherHome.prop("checked", false);

        if (countryHome) {
            // Enable State
            stateHome.prop("disabled", false);
            stateHome.parent().find(".input-group-btn").show();
            stateHome.parent().css("display", "table");
            stateHome.parent().css("width", "100%");
            // Enable State (Other)
            stateOtherHome.prop("disabled", false);
            // Enable "Other" checkbox
            checkedStateOtherHome.prop("disabled", false);
        }
        else {
            // Disable State
            stateHome.prop("disabled", true);
            stateHome.parent().find(".input-group-btn").hide();
            stateHome.parent().css("display", "block");
            // Disable State (Other)
            stateOtherHome.prop("disabled", true);
            // Disable "Others" checkbox
            checkedStateOtherHome.prop("disabled", true);
            // Update (Other) visibility 
            stateOtherHomeField.hide();
            stateHomeField.show();
            
            // Disable City
            cityHome.prop("disabled", true);
            cityHome.parent().find(".input-group-btn").hide();
            cityHome.parent().css("display", "block");
            // Disable City (Other)
            cityOtherHome.prop("disabled", true);
            // Disable "Others" checkbox
            checkedCityOtherHomeField.hide();
            // Update (Other) visibility 
            cityOtherHomeField.hide();
            cityHomeField.show();
        }
    }
    // Toggle Home City based on whether Home State has a value
    function toggleCityHome() {
        var stateHome = $("#ndph_state").val();
        var stateOtherHome = $("#address1_stateorprovince").val();
        var checkedStateOtherHome = $("#ndph_addressnotshownonthelist");
        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
        var checkedCityOtherHomeField = checkedCityOtherHome.closest("td");
        var cityHome = $("#ndph_city");
        var cityHomeName = $("#ndph_city_name");
        var cityHomeEntity = $("#ndph_city_entityname");
        var cityHomeField = $("#ndph_city").parent().parent().parent();
        var cityOtherHome = $("#address1_city");
        var cityOtherHomeField = $("#address1_city").parent().parent();

        // Clear City
        cityHome.val("");
        cityHomeName.val("");
        cityHomeEntity.val("");
        // Clear City (Other)
        cityOtherHome.val("");
        // Untick City "Others" checkbox if State "Others" is not ticked
        if (!checkedStateOtherHome.prop("checked")) {
            checkedCityOtherHome.prop("checked", false);
        }

        if (stateHome || stateOtherHome) {
            // Enable City
            cityHome.prop("disabled", false);
            cityHome.parent().find(".input-group-btn").show();
            cityHome.parent().css("display", "table");
            cityHome.parent().css("width", "100%");
            // Enable City (Other)
            cityOtherHome.prop("disabled", false);
            if (stateHome && !checkedStateOtherHome.prop("checked")) {
                // Enable "Others" checkbox only if State is populated and not locked to "Other"
                checkedCityOtherHomeField.show();
            }
        }
        else {
            // Disable City
            cityHome.prop("disabled", true);
            cityHome.parent().find(".input-group-btn").hide();
            cityHome.parent().css("display", "block");
            // Disable City (Other)
            cityOtherHome.prop("disabled", true);
            // Disable "Others" checkbox
            checkedCityOtherHomeField.hide();
            // Update (Other) visibility 
            cityOtherHomeField.hide();
            cityHomeField.show();
        }
    }
    // Hide/show Home State (Other) based on "Others" checkbox
    function toggleStateOtherHome() {
        var checkedStateOtherHome = $("#ndph_addressnotshownonthelist");
        var stateHome = $("#ndph_state");
        var stateHomeName = $("#ndph_state_name");
        var stateHomeEntity = $("#ndph_state_entityname");
        var stateHomeField = stateHome.parent().parent().parent();
        var stateOtherHome = $("#address1_stateorprovince");
        var stateOtherHomeField = stateOtherHome.parent().parent();

        var cityHome = $("#ndph_city");
        var cityOtherHome = $("#address1_city");
        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
        var checkedCityOtherHomeField = checkedCityOtherHome.closest("td");

        if (checkedStateOtherHome.prop("checked")) {
            stateHome.val("");
            stateHomeName.val("");
            stateHomeEntity.val("");
            stateHomeField.hide();
            stateOtherHomeField.show();
            // Lock City to Other
            checkedCityOtherHomeField.hide();
            checkedCityOtherHome.prop("checked", true);
            // Disable City (Other) until State is filled in
            cityOtherHome.prop("disabled", true);
        }
        else {
            stateOtherHome.val("");
            stateOtherHomeField.hide();
            stateHomeField.show();
            // Reset "Other" checkbox for City
            checkedCityOtherHome.prop("checked", false);
            // Disable City until State is filled in
            cityHome.prop("disabled", true);
            cityHome.parent().find(".input-group-btn").hide();
            cityHome.parent().css("display", "block");
        }
        toggleCityOtherHome();
    }
    // Hide/show Home City (Other) based on "Others" checkbox
    function toggleCityOtherHome() {
        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
        var cityHome = $("#ndph_city");
        var cityHomeName = $("#ndph_city_name");
        var cityHomeEntity = $("#ndph_city_entityname");
        var cityHomeField = cityHome.parent().parent().parent();
        var cityOtherHome = $("#address1_city");
        var cityOtherHomeField = cityOtherHome.parent().parent();

        if (checkedCityOtherHome.prop("checked")) {
            cityHome.val("");
            cityHomeName.val("");
            cityHomeEntity.val("");
            cityHomeField.hide();
            cityOtherHomeField.show();
        }
        else {
            cityOtherHome.val("");
            cityOtherHomeField.hide();
            cityHomeField.show();
        }
    }
    function initializeHomeAddress() {
        var countryHome = $("#ndph_country").val();
    
        var checkedStateOtherHome = $("#ndph_addressnotshownonthelist");
        var stateHome = $("#ndph_state");
        var stateHomeField = stateHome.parent().parent().parent();
        var stateOtherHome = $("#address1_stateorprovince");
        var stateOtherHomeField = stateOtherHome.parent().parent();
    
        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
        var checkedCityOtherHomeField = checkedCityOtherHome.closest("td");
        var cityHome = $("#ndph_city");
        var cityHomeField = cityHome.parent().parent().parent();
        var cityOtherHome = $("#address1_city");
        var cityOtherHomeField = cityOtherHome.parent().parent();
    
        if (!countryHome) {
            // Disable State
            stateHome.prop("disabled", true);
            stateHome.parent().find(".input-group-btn").hide();
            stateHome.parent().css("display", "block");
            // Disable and hide State (Other)
            stateOtherHome.prop("disabled", true);
            stateOtherHomeField.hide();
            // Reset and disable "Other" checkbox for State
            checkedStateOtherHome.prop("checked", false);
            checkedStateOtherHome.prop("disabled", true);
            // Disable City
            cityHome.prop("disabled", true);
            cityHome.parent().find(".input-group-btn").hide();
            cityHome.parent().css("display", "block");
            // Disable and hide City (Other)
            cityOtherHome.prop("disabled", true);
            cityOtherHomeField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherHome.prop("checked", false);
            checkedCityOtherHomeField.hide();
        }
        else if (checkedStateOtherHome.prop("checked")) {
            // Hide State
            stateHomeField.hide();
            // Hide City
            cityHomeField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherHome.prop("checked", false);
            checkedCityOtherHomeField.hide();
            if (!stateHome) {
                // Disable City
                cityHome.prop("disabled", true);
                cityHome.parent().find(".input-group-btn").hide();
                cityHome.parent().css("display", "block");
            }
            if (!stateOtherHome) {
                // Disable City (Other)
                cityOtherHome.prop("disabled", true);
            }
        }
        else if (!stateHome) {
            // Hide State (Other)
            stateOtherHomeField.hide();
            // Disable City
            cityHome.prop("disabled", true);
            cityHome.parent().find(".input-group-btn").hide();
            cityHome.parent().css("display", "block");
            // Disable and hide City (Other)
            cityOtherHome.prop("disabled", true);
            cityOtherHomeField.hide();
            // Untick and disable "Others"
            checkedCityOtherHome.prop("checked", false);
            checkedCityOtherHomeField.hide();
        }
        else if (checkedCityOtherHome.prop("checked")) {
            // Hide State (Other)
            stateOtherHomeField.hide();
            // Hide City
            cityHomeField.hide();
        }
        else {
            // Hide State (Other)
            stateOtherHomeField.hide();
            // Hide City (Other)
            cityOtherHomeField.hide();
        }
    }
    
    // Toggle Business State based on whether Business Country has a value
    function toggleStateBusiness() {
        var countryBusiness = $("#ndph_mequestion11").val();
        var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
        var stateBusiness = $("#ndph_mequestion12");
        var stateBusinessName = $("#ndph_mequestion12_name");
        var stateBusinessEntity = $("#ndph_mequestion12_entityname");
        var stateBusinessField = stateBusiness.parent().parent().parent();
        var stateOtherBusiness = $("#ndph_statebusinessothers");
        var stateOtherBusinessField = stateOtherBusiness.parent().parent();
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
        var checkedCityOtherBusinessField = checkedCityOtherBusiness.closest("td");
        var cityBusiness = $("#ndph_mequestion13");
        var cityBusinessName = $("#ndph_mequestion13_name");
        var cityBusinessEntity = $("#ndph_mequestion13_entityname");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessothers");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();

        // Clear State
        stateBusiness.val("");
        stateBusinessName.val("");
        stateBusinessEntity.val("");
        // Clear State (Other)
        stateOtherBusiness.val("");
        // Untick "Others" checkbox
        checkedStateOtherBusiness.prop("checked", false);
        // Update (Other) visibility
        stateOtherBusinessField.hide();
        stateBusinessField.show();

        // Clear City
        cityBusiness.val("");
        cityBusinessName.val("");
        cityBusinessEntity.val("");
        // Clear City (Other)
        cityOtherBusiness.val("");
        // Untick "Others" checkbox
        checkedCityOtherBusiness.prop("checked", false);

        if (countryBusiness) {
            // Enable State
            stateBusiness.prop("disabled", false);
            stateBusiness.parent().find(".input-group-btn").show();
            stateBusiness.parent().css("display", "table");
            stateBusiness.parent().css("width", "100%");
            // Enable State (Other)
            stateOtherBusiness.prop("disabled", false);
            // Enable "Other" checkbox
            checkedStateOtherBusiness.prop("disabled", false);
        }
        else {
            // Disable State
            stateBusiness.prop("disabled", true);
            stateBusiness.parent().find(".input-group-btn").hide();
            stateBusiness.parent().css("display", "block");
            // Disable State (Other)
            stateOtherBusiness.prop("disabled", true);
            // Disable "Others" checkbox
            checkedStateOtherBusiness.prop("disabled", true);
            // Update (Other) visibility 
            stateOtherBusinessField.hide();
            stateBusinessField.show();
            
            // Disable City
            cityBusiness.prop("disabled", true);
            cityBusiness.parent().find(".input-group-btn").hide();
            cityBusiness.parent().css("display", "block");
            // Disable City (Other)
            cityOtherBusiness.prop("disabled", true);
            // Disable "Others" checkbox
            checkedCityOtherBusinessField.hide();
            // Update (Other) visibility 
            cityOtherBusinessField.hide();
            cityBusinessField.show();
        }
    }
    // Toggle Business City based on whether Business State has a value
    function toggleCityBusiness() {
        var stateBusiness = $("#ndph_mequestion12").val();
        var stateOtherBusiness = $("#ndph_statebusinessothers").val();
        var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
        var checkedCityOtherBusinessField = checkedCityOtherBusiness.closest("td");
        var cityBusiness = $("#ndph_mequestion13");
        var cityBusinessName = $("#ndph_mequestion13_name");
        var cityBusinessEntity = $("#ndph_mequestion13_entityname");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessothers");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();

        // Clear City
        cityBusiness.val("");
        cityBusinessName.val("");
        cityBusinessEntity.val("");
        // Clear City (Other)
        cityOtherBusiness.val("");
        // Untick City "Others" checkbox if State "Others" is not ticked
        if (!checkedStateOtherBusiness.prop("checked")) {
            checkedCityOtherBusiness.prop("checked", false);
        }

        if (stateBusiness || stateOtherBusiness) {
            // Enable City
            cityBusiness.prop("disabled", false);
            cityBusiness.parent().find(".input-group-btn").show();
            cityBusiness.parent().css("display", "table");
            cityBusiness.parent().css("width", "100%");
            // Enable City (Other)
            cityOtherBusiness.prop("disabled", false);
            if (stateBusiness && !checkedStateOtherBusiness.prop("checked")) {
                // Enable "Others" checkbox only if State is populated and not locked to "Other"
                checkedCityOtherBusinessField.show();
            }
        }
        else {
            // Disable City
            cityBusiness.prop("disabled", true);
            cityBusiness.parent().find(".input-group-btn").hide();
            cityBusiness.parent().css("display", "block");
            // Disable City (Other)
            cityOtherBusiness.prop("disabled", true);
            // Disable "Others" checkbox
            checkedCityOtherBusinessField.hide();
            // Update (Other) visibility 
            cityOtherBusinessField.hide();
            cityBusinessField.show();
        }
    }
    // Hide/show Business State (Other) based on "Others" checkbox
    function toggleStateOtherBusiness() {
        var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
        var stateBusiness = $("#ndph_mequestion12");
        var stateBusinessName = $("#ndph_mequestion12_name");
        var stateBusinessEntity = $("#ndph_mequestion12_entityname");
        var stateBusinessField = stateBusiness.parent().parent().parent();
        var stateOtherBusiness = $("#ndph_statebusinessothers");
        var stateOtherBusinessField = stateOtherBusiness.parent().parent()
        
        var cityBusiness = $("#ndph_mequestion13");
        var cityOtherBusiness = $("#ndph_citybusinessothers");
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
        var checkedCityOtherBusinessField = checkedCityOtherBusiness.closest("td");

        if (checkedStateOtherBusiness.prop("checked")) {
            stateBusiness.val("");
            stateBusinessName.val("");
            stateBusinessEntity.val("");
            stateBusinessField.hide();
            stateOtherBusinessField.show();
            // Lock City to Other
            checkedCityOtherBusinessField.hide();
            checkedCityOtherBusiness.prop("checked", true);
            // Disable City (Other) until State is filled in
            cityOtherBusiness.prop("disabled", true);
        }
        else {
            stateOtherBusiness.val("");
            stateOtherBusinessField.hide();
            stateBusinessField.show();
            // Reset "Other" checkbox for City
            checkedCityOtherBusiness.prop("checked", false);
            // Disable City until State is filled in
            cityBusiness.prop("disabled", true);
            cityBusiness.parent().find(".input-group-btn").hide();
            cityBusiness.parent().css("display", "block");
        }
        toggleCityOtherBusiness();
    }
    // Hide/show Business State (Other) based on "Others" checkbox
    function toggleCityOtherBusiness() {
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
        var cityBusiness = $("#ndph_mequestion13");
        var cityBusinessName = $("#ndph_mequestion13_name");
        var cityBusinessEntity = $("#ndph_mequestion13_entityname");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessothers");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();

        if (checkedCityOtherBusiness.prop("checked")) {
            cityBusiness.val("");
            cityBusinessName.val("");
            cityBusinessEntity.val("");
            cityBusinessField.hide();
            cityOtherBusinessField.show();
        }
        else {
            cityOtherBusiness.val("");
            cityOtherBusinessField.hide();
            cityBusinessField.show();
        }
    }
    // Initialize Business Address
    function initializeBusinessAddress() {
        var businessIsHome = $("#ndph_businessaddressishomeaddress").prop("checked");
    
        var countryBusiness = $("#ndph_mequestion11").val();
    
        var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
        var stateBusiness = $("#ndph_mequestion12");
        var stateBusinessField = stateBusiness.parent().parent().parent();
        var stateOtherBusiness = $("#ndph_statebusinessothers");
        var stateOtherBusinessField = stateOtherBusiness.parent().parent()
    
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
        var checkedCityOtherBusinessField = checkedCityOtherBusiness.closest("td");
        var cityBusiness = $("#ndph_mequestion13");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessothers");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();
    
        if (businessIsHome) {
            $(".section[data-name='seell_business_address']").closest("fieldset").hide();
        }
        else if (!countryBusiness) {
            // Disable State
            stateBusiness.prop("disabled", true);
            stateBusiness.parent().find(".input-group-btn").hide();
            stateBusiness.parent().css("display", "block");
            // Disable and hide State (Other)
            stateOtherBusiness.prop("disabled", true);
            stateOtherBusinessField.hide();
            // Reset and disable "Other" checkbox for State
            checkedStateOtherBusiness.prop("checked", false);
            checkedStateOtherBusiness.prop("disabled", true);
            // Disable City
            cityBusiness.prop("disabled", true);
            cityBusiness.parent().find(".input-group-btn").hide();
            cityBusiness.parent().css("display", "block");
            // Disable and hide City (Other)
            cityOtherBusiness.prop("disabled", true);
            cityOtherBusinessField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherBusiness.prop("checked", false);
            checkedCityOtherBusinessField.hide();
        }
        else if (checkedStateOtherBusiness.prop("checked")) {
            // Hide State
            stateBusinessField.hide();
            // Hide City
            cityBusinessField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherBusiness.prop("checked", false);
            checkedCityOtherBusinessField.hide();
            if (!stateBusiness) {
                // Disable City
                cityBusiness.prop("disabled", true);
                cityBusiness.parent().find(".input-group-btn").hide();
                cityBusiness.parent().css("display", "block");
            }
            if (!stateOtherBusiness) {
                // Disable City (Other)
                cityOtherBusiness.prop("disabled", true);
            }
        }
        else if (!stateBusiness) {
            // Hide State (Other)
            stateOtherBusinessField.hide();
            // Disable City
            cityBusiness.prop("disabled", true);
            cityBusiness.parent().find(".input-group-btn").hide();
            cityBusiness.parent().css("display", "block");
            // Disable and hide City (Other)
            cityOtherBusiness.prop("disabled", true);
            cityOtherBusinessField.hide();
            // Untick and disable "Others"
            checkedCityOtherBusiness.prop("checked", false);
            checkedCityOtherBusinessField.hide();
        }
        else if (checkedCityOtherBusiness.prop("checked")) {
            // Hide State (Other)
            stateOtherBusinessField.hide();
            // Hide City
            cityBusinessField.hide();
        }
        else {
            // Hide State (Other)
            stateOtherBusinessField.hide();
            // Hide City (Other)
            cityOtherBusinessField.hide();
        }
    }

    // INITIALIZE FORM
    // Validator definition
    if (typeof (Page_Validators) == 'undefined') return;
    // Date of birth validator: disallow future date
    var dateOfBirthValidator = document.createElement('span');
    dateOfBirthValidator.style.display = "none";
    dateOfBirthValidator.id = "ndph_dateofbirthValidator";
    dateOfBirthValidator.controltovalidate = "ndph_dateofbirth";
    dateOfBirthValidator.errormessage = "<a href='#ndph_dateofbirth'>Date of Birth cannot be set to a future date.</a>";
    dateOfBirthValidator.validationGroup = "";        // Set this if you have set ValidationGroup on the form
    dateOfBirthValidator.initialvalue = "";
    dateOfBirthValidator.evaluationfunction = function () {
        var currentDate = new Date();
        var dateOfBirth = $("#ndph_dateofbirth").val();
        if (dateOfBirth) {
            dateOfBirth = new Date(dateOfBirth);      // Convert to Date object if filled in
        }
        if ((dateOfBirth == "") || (dateOfBirth < currentDate)) {
            return true;
        }
        else {
            return false;
        }
    };

    // Program validator: check if either a degree program or an open program is selected
    var programValidator = document.createElement('span');
    programValidator.style.display = "none";
    programValidator.id = "ndph_programValidator";
    programValidator.controltovalidate = "ndph_program";
    programValidator.errormessage = "Please select a program to apply for.";
    programValidator.validationGroup = "";        // Set this if you have set ValidationGroup on the form
    programValidator.initialvalue = "";
    programValidator.evaluationfunction = function () {
        var degreeProgram = $("#ndph_program");
        var openProgram = $("#ndph_seellopenprograms");
        
        if (degreeProgram.val() || openProgram.val()) {
            return true;
        }
        else {
            return false;
        }
    };

    // Add the new validators to the page validators array:
    Page_Validators.push(dateOfBirthValidator);
    Page_Validators.push(programValidator);

    // Wire-up the click event handler of the validation summary link
    $("a[href='#ndph_dateofbirth']").on("click", function () { scrollToAndFocus('ndph_dateofbirth'); });
    // *End of validator code*

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

    // Query program information from OData
    var programs = [];
    var currentURL = "/_odata/Programs";
    while(currentURL) {
        $.ajax({
            type: "GET",
            dataType: "json",
            async: false,
            contentType: "application/json; charset=utf-8",
            url: currentURL,
            beforeSend: function(XMLHttpRequest) {
                XMLHttpRequest.setRequestHeader("Accept", "application/json");
            },
            success: function(data, textStatus, XHR) {
                programs = programs.concat(data.value);
                currentURL = data["odata.nextLink"];
            }
        });
    }

    // Prepopulate Program fields
    if (params["id"]) {
        var prepopulatedProgram = programs.find(     // Returns an object
            function(program) {
                // Search in "programs" array for element matching GUID on program lookup
                return program.ndph_programid == params["id"];
            }
        );
        
    //     switch (prepopulatedProgram.ndph_programtype.Value) {
    //         // When option set field values are retrieved from the DOM via jQuery, they are retrieved as strings
    //         // But when they're retrieved from a JSON object as the response from an OData feed, they are retrieved as integers
    //         case 649840000:
    //             if (!$("#ndph_program").val()) {
    //                 $("#ndph_programtypeapplication").val("649840000");
                
    //                 $("#ndph_program").val(prepopulatedProgram.ndph_programid);
    //                 $("#ndph_program_name").val(prepopulatedProgram.ndph_name);
    //                 $("#ndph_program_entityname").val("ndph_program");
    //             }
    //             break;
    //         case 649840001:
    //             if (!$("#ndph_seellopenprograms").val()) {
    //                 $("#ndph_programtypeapplication").val("649840001");

    //                 $("#ndph_seellopenprograms").val(prepopulatedProgram.ndph_programid);
    //                 $("#ndph_seellopenprograms_name").val(prepopulatedProgram.ndph_name);
    //                 $("#ndph_seellopenprograms_entityname").val("ndph_program");
    //             }
    //             break;
    //     }
    }


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

    // Query program information from OData
    var programs = [];
    var currentURL = "/_odata/Programs";
    while(currentURL) {
        $.ajax({
            type: "GET",
            dataType: "json",
            async: false,
            contentType: "application/json; charset=utf-8",
            url: currentURL,
            beforeSend: function(XMLHttpRequest) {
                XMLHttpRequest.setRequestHeader("Accept", "application/json");
            },
            success: function(data, textStatus, XHR) {
                programs = programs.concat(data.value);
                currentURL = data["odata.nextLink"];
            }
        });
    }

    // Prepopulate Program fields
    if(!$("#ndph_seellopenprograms").val()){
        if (params["id"]) 
        {
            var prepopulatedProgram = programs.find(
                    // Returns an object
                function(program) {
                    $("#ndph_seellopenprograms").val(prepopulatedProgram.ndph_programid);
                    $("#ndph_seellopenprograms_name").val(prepopulatedProgram.ndph_name);
                    $("#ndph_seellopenprograms_entityname").val("ndph_program");
                    // Search in "programs" array for element matching GUID on program lookup
                    return program.ndph_programid == params["id"];
                }
            );
        }
    }

    // Hide metadata fields
    $(".section[data-name='hidden']").closest("fieldset").hide();

    // Mark Program fields as required
    $("#ndph_program_label").parent().attr("class", "info required");
    $("#ndph_seellopenprograms_label").parent().attr("class", "info required");

    // Resize Program fields

    $("#ndph_seellopenprograms").parent().parent().attr("colspan","3");
    $("#ndph_seellopenprograms").parent().css("width","100%");

    // Resize State/City fields
    $("#ndph_country").parent().parent().parent().attr("colspan","3");          // Home Address
    $("#ndph_country").parent().css("width","100%");
    $("#ndph_state").parent().parent().parent().attr("colspan","3");
    $("#ndph_state").parent().css("width","100%");
    $("#address1_stateorprovince").parent().parent().attr("colspan","3");
    $("#ndph_city").parent().parent().parent().attr("colspan","3");
    $("#ndph_city").parent().css("width","100%");
    $("#address1_city").parent().parent().attr("colspan","3");
    
    $("#ndph_mequestion11").parent().parent().parent().attr("colspan","3");     // Business Address
    $("#ndph_mequestion11").parent().css("width","100%");
    $("#ndph_mequestion12").parent().parent().parent().attr("colspan","3");
    $("#ndph_mequestion12").parent().css("width","100%");
    $("#ndph_statebusinessothers").parent().parent().attr("colspan","3");
    $("#ndph_mequestion13").parent().parent().parent().attr("colspan","3");
    $("#ndph_mequestion13").parent().css("width","100%");
    $("#ndph_citybusinessothers").parent().parent().attr("colspan","3");

    // Initialize Address fields
    initializeHomeAddress();
    initializeBusinessAddress();

    


    // FUNCTIONS TO EXECUTE ON FIELD CHANGE:
    // Update School field);
    $("#ndph_program").change(updateProgram);


    // Update Business Address section
    $("#ndph_businessaddressishomeaddress").change(toggleBusinessIsHomeAddress);    // Toggle Business Address
    // Update Home Address fields
    $("#ndph_country").change(toggleStateHome);
    $("#ndph_state").change(toggleCityHome);
    $("#address1_stateorprovince").change(toggleCityHome);
    $("#ndph_addressnotshownonthelist").change(toggleStateOtherHome);
    $("#ndph_addressnotshownonlist_city").change(toggleCityOtherHome);
    // Update Business Address fields
    $("#ndph_mequestion11").change(toggleStateBusiness);
    $("#ndph_mequestion12").change(toggleCityBusiness);
    $("#ndph_statebusinessothers").change(toggleCityBusiness);
    $("#ndph_addressnotshownonthelistbusiness").change(toggleStateOtherBusiness);
    $("#ndph_addressnotshownonlist_citybusiness").change(toggleCityOtherBusiness);


});