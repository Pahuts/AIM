$(document).ready(function() {
    // FUNCTION DECLARATIONS
    // function updateSchool() {
    //     var program = $("#ndph_program").val();
    //     var schoolEntity = $("#ndph_school_entityname");
    //     var school = $("#ndph_school");
    //     var schoolName = $("#ndph_school_name");

    //     var ASITE = "804aa6bb-2217-ea11-a811-000d3a82bec6";
    //     var WSGSB = "71715890-2217-ea11-a811-000d3a82bec6";
    //     var ZSDM = "5377a1af-2217-ea11-a811-000d3a82bec6";
    //     var SEELL = "f15b7ce7-0f17-ea11-a811-000d3a82bec6";

    //     var ME = "d98e150a-2317-ea11-a811-000d3a82bec6";
    //     var MSDS = "94986f48-2317-ea11-a811-000d3a82bec6";
    //     var MSIB = "56928636-2317-ea11-a811-000d3a82bec6";
    //     var MBA = "8e8678dd-2217-ea11-a811-000d3a82bec6";
    //     var EMBA = "784fd1cf-2217-ea11-a811-000d3a82bec6";
    //     var EMDRCM = "718ad8fd-2217-ea11-a811-000d3a82bec6";
    //     var MDM = "b3df1eec-2217-ea11-a811-000d3a82bec6";
        
    //     // Cannot use switch-case because of last condition
    //     if (program == ME || program == MSDS || program == MSIB) {       // ASITE
    //         schoolEntity.val("ndph_school");
    //         school.val(ASITE);
    //         schoolName.val("Aboitiz School of Innovation, Technology and Entrepreneurship");
    //     }
    //     else if (program == MBA || program == EMBA) {                   // WSGSB
    //         schoolEntity.val("ndph_school");
    //         school.val(WSGSB);
    //         schoolName.val("Washington SyCip Graduate School of Business");
    //     }
    //     else if (program == EMDRCM || program == MDM) {                 // ZSDM
    //         schoolEntity.val("ndph_school");
    //         school.val(ZSDM);
    //         schoolName.val("Zuellig School of Development Management");
    //     }
    //     else if (program) {                                             // SEELL
    //         schoolEntity.val("ndph_school");
    //         school.val(SEELL);
    //         schoolName.val("School of Executive Education and Lifelong Learning");
    //     }
    //     else {                                                          // Default
    //         schoolEntity.val("ndph_school");
    //         school.val("");
    //         schoolName.val("");
    //     }
    // }

    // function toggleBusinessIsHomeAddress() {
    //     var businessIsHome = $("#ndph_businessaddressishomeaddress").prop("checked");
    //     var homeStreet1 = $("#address1_line1").val();
    //     var homeStreet2 = $("#address1_line2").val();
    //     var homeStreet3 = $("#address1_line3").val();
    //     var homeCountry = $("#ndph_country").val();
    //     var homeCountryName = $("#ndph_country_name").val();
    //     var homeZIPPostalCode = $("#ndph_postalzipcode").val();
    //     var homeState = $("#ndph_state").val();
    //     var homeStateName = $("#ndph_state_name").val();
    //     var homeStateOthers = $("#address1_stateorprovince").val();
    //     var homeStateNotOnList = $("#ndph_addressnotshownonthelist").prop("checked");
    //     var homeCity = $("#ndph_city").val();
    //     var homeCityName = $("#ndph_city_name").val();
    //     var homeCityOthers = $("#address1_city").val();
    //     var homeCityNotOnList = $("#ndph_addressnotshownonlist_city").prop("checked");
        
    //     if (businessIsHome) {
    //         $("#ndph_street1business").val(homeStreet1);                                            // Street 1
    //         $("#ndph_street2business").val(homeStreet2);                                            // Street 2
    //         $("#ndph_street3business").val(homeStreet3);                                            // Street 3
    //         $("#ndph_mequestion11").val(homeCountry);                                               // Country GUID
    //         $("#ndph_mequestion11_name").val(homeCountryName);                                      // Country name
    //         $("#ndph_mequestion11_entityname").val("ndph_country");                                 // Country entity
    //         $("#ndph_mequestion14").val(homeZIPPostalCode);                                         // ZIP/Postal Code
    //         $("#ndph_mequestion12").val(homeState);                                                 // State GUID
    //         $("#ndph_mequestion12_name").val(homeStateName);                                        // State name
    //         $("#ndph_mequestion12_entityname").val("ndph_state");                                   // State entity
    //         $("#ndph_statebusinessothers").val(homeStateOthers);                                    // State (others)
    //         $("#ndph_addressnotshownonthelist").prop("checked",homeStateNotOnList);                 // State not on list
    //         $("#ndph_mequestion13").val(homeCity);                                                  // City GUID
    //         $("#ndph_mequestion13_name").val(homeCityName);                                         // City name
    //         $("#ndph_mequestion13_entityname").val("ndph_city");                                    // City entity
    //         $("#ndph_citybusinessothers").val(homeCityOthers);                                      // City (others)
    //         $("#ndph_addressnotshownonlist_citybusiness").prop("checked",homeCityNotOnList);        // City not on list

    //         $(".section[data-name='business_address']").closest("fieldset").hide();                 // Hide section
    //     }
    //     else {
    //         $("#ndph_street1business").val("");                                     // Street 1
    //         $("#ndph_street2business").val("");                                     // Street 2
    //         $("#ndph_street3business").val("");                                     // Street 3
    //         $("#ndph_mequestion11").val("");                                        // Country GUID
    //         $("#ndph_mequestion11_name").val("");                                   // Country name
    //         $("#ndph_mequestion11_entityname").val("");                             // Country entity
    //         $("#ndph_mequestion14").val("");                                        // ZIP/Postal Code
    //         $("#ndph_mequestion12").val("");                                        // State GUID
    //         $("#ndph_mequestion12_name").val("");                                   // State name
    //         $("#ndph_mequestion12_entityname").val("");                             // State entity
    //         $("#ndph_statebusinessothers").val("");                                 // State (others)
    //         $("#ndph_addressnotshownonthelistbusiness").prop("checked",false);      // State not on list
    //         $("#ndph_mequestion13").val("");                                        // City GUID
    //         $("#ndph_mequestion13_name").val("");                                   // City name
    //         $("#ndph_mequestion13_entityname").val("");                             // Country entity
    //         $("#ndph_citybusinessothers").val("");                                  // City (others)
    //         $("#ndph_addressnotshownonlist_citybusiness").prop("checked",false);    // City not on list

    //         $(".section[data-name='business_address']").closest("fieldset").show();     // Hide section
    //     }
    // }

    function toggleStateHome() {
        var countryHome = $("#ndph_country").val();
        var checkedStateOtherHome = $("#ndph_addressnotshownonthelist");
        var stateHome = $("#ndph_state");
        var stateHomeName = $("#ndph_state_name");
        var stateHomeEntity = $("#ndph_state_entityname");
        var stateOtherHome = $("#address1_stateorprovince");

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
            // Clear and disable State
            stateHome.val("");
            stateHomeName.val("");
            stateHomeEntity.val("");
            stateHome.prop("disabled", true);
            stateHome.parent().find(".input-group-btn").hide();
            stateHome.parent().css("display", "block");
            // Clear and disable State (Other)
            stateOtherHome.val("");
            stateOtherHome.prop("disabled", true);
            // Untick and disable "Others"
            checkedStateOtherHome.prop("checked", false);
            checkedStateOtherHome.prop("disabled", true);
            // Update (Other) visibility 
            toggleStateOtherHome();
        }
    }
    function toggleCityHome() {
        var stateHome = $("#ndph_state").val();
        var stateOtherHome = $("#address1_stateorprovince").val();
        var checkedStateOtherHome = $("#ndph_addressnotshownonlist");
        var checkedCityOtherHome = $("#ndph_citynotshownonthelist");
        var cityHome = $("#ndph_city");
        var cityHomeName = $("#ndph_city_name");
        var cityHomeEntity = $("#ndph_city_entityname");
        var cityOtherHome = $("#address1_city");

        if (stateHome || stateOtherHome) {
            // Enable City
            cityHome.prop("disabled", false);
            cityHome.parent().find(".input-group-btn").show();
            cityHome.parent().css("display", "table");
            cityHome.parent().css("width", "100%");
            // Enable City (Other)
            cityOtherHome.prop("disabled", false);
            if (stateHome && checkedStateOtherHome.prop("checked")) {
                // Enable "Others" checkbox
                checkedCityOtherHome.prop("disabled", false);
            }
        }
        else {
            // Clear and disable City
            cityHome.val("");
            cityHomeName.val("");
            cityHomeEntity.val("");
            cityHome.prop("disabled", true);
            cityHome.parent().find(".input-group-btn").hide();
            cityHome.parent().css("display", "block");
            // Clear and disable City (Other)
            cityOtherHome.val("");
            cityOtherHome.prop("disabled", true);
            // Untick and disable "Others"
            // checkedCityOtherHome.prop("checked", false);
            // checkedCityOtherHome.prop("disabled", true);
            // Update (Other) visibility 
            toggleCityOtherHome();
        }
    }
    function toggleStateOtherHome() {
        var checkedStateOtherHome = $("#ndph_addressnotshownonthelist");
        var stateHome = $("#ndph_state");
        var stateHomeName = $("#ndph_state_name");
        var stateHomeEntity = $("#ndph_state_entityname");
        var stateHomeField = $("#ndph_state").parent().parent().parent();
        var stateOtherHome = $("#address1_stateorprovince");
        var stateOtherHomeField = stateOtherHome.parent().parent();

        var checkedCityOtherHome = $("#ndph_citynotshownonthelist");

        if (checkedStateOtherHome.prop("checked")) {
            stateHome.val("");
            stateHomeName.val("");
            stateHomeEntity.val("");
            stateHomeField.hide();
            stateOtherHomeField.show();
            // Lock City to Other
            // checkedCityOtherHome.prop("disabled", false);
            // checkedCityOtherHome.prop("checked", true);
        }
        else {
            stateOtherHome.val("");
            stateOtherHomeField.hide();
            stateHomeField.show();
            // Reset "Other" checkbox for City
            // checkedCityOtherHome.prop("checked", false);
        }
        toggleCityHome();
        toggleCityOtherHome();
    }
    function toggleCityOtherHome() {
        var checkedCityOtherHome = $("#ndph_citynotshownonthelist");
        var cityHome = $("#ndph_city");
        var cityHomeName = $("#ndph_city_name");
        var cityHomeEntity = $("#ndph_city_entityname");
        var cityHomeField = $("#ndph_city").parent().parent().parent();
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
    
    // function toggleStateBusiness() {
    //     var countryBusiness = $("#ndph_mequestion11").val();
    //     var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
    //     var stateBusiness = $("#ndph_mequestion12");
    //     var stateBusinessName = $("#ndph_mequestion12_name");
    //     var stateBusinessEntity = $("#ndph_mequestion12_entityname");
    //     var stateOtherBusiness = $("#ndph_statebusinessothers");

    //     if (countryBusiness) {
    //         // Enable State
    //         stateBusiness.prop("disabled", false);
    //         stateBusiness.parent().find(".input-group-btn").show();
    //         stateBusiness.parent().css("display", "table");
    //         stateBusiness.parent().css("width", "100%");
    //         // Enable State (Other)
    //         stateOtherBusiness.prop("disabled", false);
    //         // Enable "Other" checkbox
    //         checkedStateOtherBusiness.prop("disabled", false);
    //     }
    //     else {
    //         // Clear and disable State
    //         stateBusiness.val("");
    //         stateBusinessName.val("");
    //         stateBusinessEntity.val("");
    //         stateBusiness.prop("disabled", true);
    //         stateBusiness.parent().find(".input-group-btn").hide();
    //         stateBusiness.parent().css("display", "block");
    //         // Clear and disable State (Other)
    //         stateOtherBusiness.val("");
    //         stateOtherBusiness.prop("disabled", true);
    //         // Untick and disable "Others"
    //         checkedStateOtherBusiness.prop("checked", false);
    //         checkedStateOtherBusiness.prop("disabled", true);
    //         // Update (Other) visibility 
    //         toggleStateOtherBusiness();
    //     }
    // }
    // function toggleCityBusiness() {
    //     var stateBusiness = $("#ndph_mequestion12").val();
    //     var stateOtherBusiness = $("#ndph_statebusinessothers").val();
    //     var checkedStateOtherBusiness = $("#ndph_addressnotshownonlist_statebusiness");
    //     var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
    //     var cityBusiness = $("#ndph_mequestion13");
    //     var cityBusinessName = $("#ndph_mequestion13_name");
    //     var cityBusinessEntity = $("#ndph_mequestion13_entityname");
    //     var cityOtherBusiness = $("#ndph_citybusinessothers");

    //     if (stateBusiness || stateOtherBusiness) {
    //         // Enable City
    //         cityBusiness.prop("disabled", false);
    //         cityBusiness.parent().find(".input-group-btn").show();
    //         cityBusiness.parent().css("display", "table");
    //         stateBusiness.parent().css("width", "100%");
    //         // Enable City (Other)
    //         cityOtherBusiness.prop("disabled", false);
    //         if (stateBusiness && checkedStateOtherBusiness.prop("checked")) {
    //             // Enable "Others" checkbox
    //             checkedCityOtherBusiness.prop("disabled", false);
    //         }
    //     }
    //     else {
    //         // Clear and disable City
    //         cityBusiness.val("");
    //         cityBusinessName.val("");
    //         cityBusinessEntity.val("");
    //         cityBusiness.prop("disabled", true);
    //         cityBusiness.parent().find(".input-group-btn").hide();
    //         cityBusiness.parent().css("display", "block");
    //         // Clear and disable City (Other)
    //         cityOtherBusiness.val("");
    //         cityOtherBusiness.prop("disabled", true);
    //         // Untick and disable "Others"
    //         checkedCityOtherBusiness.prop("checked", false);
    //         checkedCityOtherBusiness.prop("disabled", true);
    //         // Update (Other) visibility 
    //         toggleCityOtherBusiness();
    //     }
    // }
    // function toggleStateOtherBusiness() {
    //     var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
    //     var stateBusiness = $("#ndph_mequestion12");
    //     var stateBusinessName = $("#ndph_mequestion12_name");
    //     var stateBusinessEntity = $("#ndph_mequestion12_entityname");
    //     var stateBusinessField = $("#ndph_mequestion12").parent().parent().parent();
    //     var stateOtherBusiness = $("#ndph_statebusinessothers");
    //     var stateOtherBusinessField = stateOtherBusiness.parent().parent()
        
    //     var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");

    //     if (checkedStateOtherBusiness.prop("checked")) {
    //         stateBusiness.val("");
    //         stateBusinessName.val("");
    //         stateBusinessEntity.val("");
    //         stateBusinessField.hide();
    //         stateOtherBusinessField.show();
    //         // Lock City to Other
    //         checkedCityOtherBusiness.prop("disabled", true);
    //         checkedCityOtherBusiness.prop("checked", true);
    //     }
    //     else {
    //         stateOtherBusiness.val("");
    //         stateOtherBusinessField.hide();
    //         stateBusinessField.show();
    //         // Reset "Other" checkbox for City
    //         checkedCityOtherHome.prop("checked", false);
    //     }
    //     toggleCityBusiness();
    //     toggleCityOtherBusiness();
    // }
    // function toggleCityOtherBusiness() {
    //     var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
    //     var cityBusiness = $("#ndph_mequestion13");
    //     var cityBusinessName = $("#ndph_mequestion13_name");
    //     var cityBusinessEntity = $("#ndph_mequestion13_entityname");
    //     var cityBusinessField = $("#ndph_mequestion13").parent().parent().parent();
    //     var cityOtherBusiness = $("#ndph_citybusinessothers");
    //     var cityOtherBusinessField = cityOtherBusiness.parent().parent();

    //     if (checkedCityOtherBusiness.prop("checked")) {
    //         cityBusiness.val("");
    //         cityBusinessName.val("");
    //         cityBusinessEntity.val("");
    //         cityBusinessField.hide();
    //         cityOtherBusinessField.show();
    //     }
    //     else {
    //         cityOtherBusiness.val("");
    //         cityOtherBusinessField.hide();
    //         cityBusinessField.show();
    //     }
    // }

    function initializeHomeAddress() {
        var countryHome = $("#ndph_country").val();

        var checkedStateOtherHome = $("#ndph_addressnotshownonthelist");
        var stateHome = $("#ndph_state");
        var stateHomeField = stateHome.parent().parent().parent();
        var stateOtherHome = $("#address1_stateorprovince");
        var stateOtherHomeField = stateOtherHome.parent().parent();

        var checkedCityOtherHome = $("#ndph_citynotshownonthelist");
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
            // cityOtherHome.prop("disabled", true);
            cityOtherHomeField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherHome.prop("checked", false);
            // checkedCityOtherHome.prop("disabled", true);
        }
        else if (checkedStateOtherHome.prop("checked")) {
            // Hide State
            stateHomeField.hide();
            // Hide City
            cityHomeField.hide();
            // Reset and disable "Other" checkbox for City 
            // checkedCityOtherHome.prop("checked", false);
            // checkedCityOtherHome.prop("disabled", false);
            if (!stateHome) {
                // Disable City
                cityHome.prop("disabled", true);
                cityHome.parent().find(".input-group-btn").hide();
                cityHome.parent().css("display", "block");
            }
            if (!stateOtherHome) {
                // Disable City (Other)
                // cityOtherHome.prop("disabled", true);
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
            // cityOtherHome.prop("disabled", true);
            cityOtherHomeField.hide();
            // Untick and disable "Others"
            // checkedCityOtherHome.prop("checked", false);
            // checkedCityOtherHome.prop("disabled", true);
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
    // function initializeBusinessAddress() {
    //     var countryBusiness = $("#ndph_mequestion11").val();

    //     var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
    //     var stateBusiness = $("#ndph_mequestion12");
    //     var stateBusinessField = stateBusiness.parent().parent().parent();
    //     var stateOtherBusiness = $("#ndph_statebusinessothers");
    //     var stateOtherBusinessField = stateOtherBusiness.parent().parent()

    //     var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
    //     var cityBusiness = $("#ndph_mequestion13");
    //     var cityBusinessField = cityBusiness.parent().parent().parent();
    //     var cityOtherBusiness = $("#ndph_citybusinessothers");
    //     var cityOtherBusinessField = cityOtherBusiness.parent().parent();

    //     if (!countryBusiness) {
    //         // Disable State
    //         stateBusiness.prop("disabled", true);
    //         stateBusiness.parent().find(".input-group-btn").hide();
    //         stateBusiness.parent().css("display", "block");
    //         // Disable and hide State (Other)
    //         stateOtherBusiness.prop("disabled", true);
    //         stateOtherBusinessField.hide();
    //         // Reset and disable "Other" checkbox for State
    //         checkedStateOtherBusiness.prop("checked", false);
    //         checkedStateOtherBusiness.prop("disabled", true);
    //         // Disable City
    //         cityBusiness.prop("disabled", true);
    //         cityBusiness.parent().find(".input-group-btn").hide();
    //         cityBusiness.parent().css("display", "block");
    //         // Disable and hide City (Other)
    //         cityOtherBusiness.prop("disabled", true);
    //         cityOtherBusinessField.hide();
    //         // Reset and disable "Other" checkbox for City 
    //         checkedCityOtherBusiness.prop("checked", false);
    //         checkedCityOtherBusiness.prop("disabled", true);
    //     }
    //     else if (checkedStateOtherBusiness.prop("checked")) {
    //         // Hide State
    //         stateBusinessField.hide();
    //         // Hide City
    //         cityBusinessField.hide();
    //         // Reset and disable "Other" checkbox for City 
    //         checkedCityOtherBusiness.prop("checked", false);
    //         checkedCityOtherBusiness.prop("disabled", true);
    //         if (!stateBusiness) {
    //             // Disable City
    //             cityBusiness.prop("disabled", true);
    //             cityBusiness.parent().find(".input-group-btn").hide();
    //             cityBusiness.parent().css("display", "block");
    //         }
    //         if (!stateOtherBusiness) {
    //             // Disable City (Other)
    //             cityOtherBusiness.prop("disabled", true);
    //         }
    //     }
    //     else if (!stateBusiness) {
    //         // Hide State (Other)
    //         stateOtherBusinessField.hide();
    //         // Disable City
    //         cityBusiness.prop("disabled", true);
    //         cityBusiness.parent().find(".input-group-btn").hide();
    //         cityBusiness.parent().css("display", "block");
    //         // Disable and hide City (Other)
    //         cityOtherBusiness.prop("disabled", true);
    //         cityOtherBusinessField.hide();
    //         // Untick and disable "Others"
    //         checkedCityOtherBusiness.prop("checked", false);
    //         checkedCityOtherBusiness.prop("disabled", true);
    //     }
    //     else if (checkedCityOtherBusiness.prop("checked")) {
    //         // Hide State (Other)
    //         stateOtherBusinessField.hide();
    //         // Hide City
    //         cityBusinessField.hide();
    //     }
    //     else {
    //         // Hide State (Other)
    //         stateOtherBusinessField.hide();
    //         // Hide City (Other)
    //         cityOtherBusinessField.hide();
    //     }
    // }

    // // Validator definition
    // if (typeof (Page_Validators) == 'undefined') return;
    // // Date of birth validator: disallow future date
    // var dateOfBirthValidator = document.createElement('span');
    // dateOfBirthValidator.style.display = "none";
    // dateOfBirthValidator.id = "dateOfBirthValidator";
    // dateOfBirthValidator.controltovalidate = "ndph_dateofbirth";
    // dateOfBirthValidator.errormessage = "<a href='#ndph_dateofbirth'>Date of Birth cannot be set to a future date.</a>";
    // dateOfBirthValidator.validationGroup = "";        // Set this if you have set ValidationGroup on the form
    // dateOfBirthValidator.initialvalue = "";
    // dateOfBirthValidator.evaluationfunction = function () {
    //     var currentDate = new Date();
    //     var dateOfBirth = $("#ndph_dateofbirth").val();
    //     if (dateOfBirth) {
    //         dateOfBirth = new Date(dateOfBirth);      // Convert to Date object if filled in
    //     }
    //     if ((dateOfBirth == "") || (dateOfBirth < currentDate)) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // };

    // // Add the new validator to the page validators array:
    // Page_Validators.push(dateOfBirthValidator);

    // // Wire-up the click event handler of the validation summary link
    // $("a[href='#ndph_dateofbirth']").on("click", function () { scrollToAndFocus('ndph_dateofbirth'); });

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

    // INITIALIZE FORM
    // Hide metadata fields
    $("#parentcontactid").parent().parent().parent().hide();
    $("#fullname").parent().parent().hide();
    $(".section[data-name='hidden_anonymous']").closest("fieldset").hide();

    // Initialize Address fields
    initializeHomeAddress();

    // FUNCTIONS TO EXECUTE ON FIELD CHANGE:
    // Update School field

    $("#ndph_country").change(toggleStateHome);
    $("#ndph_state").change(toggleCityHome);
    $("#address1_stateorprovince").change(toggleCityHome);
    $("#ndph_addressnotshownonthelist").change(toggleStateOtherHome);
    $("#ndph_citynotshownonthelist").change(toggleCityOtherHome);
    // Update Business Address fields


});