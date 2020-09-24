$(document).ready(function() {

    // ################################################################
    // FUNCTION DECLARATIONS
    // ################################################################

    // Update School based on Program; execute only after OData query returns "programs" variable
    
    function toggleBusinessIsHomeAddress() {
        var businessIsHome = $("#ndph_ndph_businessaddressishomeaddress").prop("checked");
        
        if (businessIsHome) {
            // Unbind enable/disable functions for Business Address
            $("#ndph_ndph_mequestion11").off("change", toggleStateBusiness);
            $("#ndph_ndph_mequestion12").off("change", toggleCityBusiness);
            $("#ndph_ndph_statebusinessothers").off("change", toggleCityBusiness);
            $("#ndph_ndph_addressnotshownonthelistbusiness").off("change", toggleStateOtherBusiness);
            $("#ndph_ndph_addressnotshownonlist_citybusiness").off("change", toggleCityOtherBusiness);
    
            // Enable fields; needed to ensure fields are saved upon advancing form
            $("#ndph_address").prop("disabled", false);
            $("#ndph_country").prop("disabled", false);
            $("#ndph_country_name").prop("disabled", false);
            $("#ndph_zippostalcode").prop("disabled", false);
            $("#ndph_state").prop("disabled", false);
            $("#ndph_state_name").prop("disabled", false);
            $("#ndph_address1_stateorprovince").prop("disabled", false);
            $("#ndph_ndph_addressnotshownonthelist").prop("disabled", false);
            $("#ndph_city").prop("disabled", false);
            $("#ndph_city_name").prop("disabled", false);        
            $("#ndph_address1_city").prop("disabled", false);
            $("#ndph_ndph_addressnotshownonlist_city").prop("disabled", false);
    
            //enable business fields
            $("#ndph_ndph_mequestion12").prop("disabled", false);
            $("#ndph_ndph_mequestion13").prop("disabled", false);
            $("#ndph_ndph_statebusinessothers").prop("disabled", false);
            $("#ndph_ndph_citybusinessothers").prop("disabled", false);
            $("#ndph_ndph_addressnotshownonthelistbusiness").prop("disabled", false);
            $("#ndph_ndph_addressnotshownonlist_citybusiness").prop("disabled", false);
    
            // Set values for Business Address to Home Address
            mirrorHomeAddress();
    
            // Set Business Address to update on Home Address change
            $("#ndph_address").change(mirrorHomeAddress);

            $("#ndph_country").change(mirrorHomeAddress);
            $("#ndph_country_name").change(mirrorHomeAddress);
            $("#ndph_zippostalcode").change(mirrorHomeAddress);
            $("#ndph_state").change(mirrorHomeAddress);
            $("#ndph_address1_stateorprovince").change(mirrorHomeAddress);
            $("#ndph_ndph_addressnotshownonthelist").change(mirrorHomeAddress);
            $("#ndph_city").change(mirrorHomeAddress);
            $("#ndph_address1_city").change(mirrorHomeAddress);
            $("#ndph_ndph_addressnotshownonlist_city").change(mirrorHomeAddress);
    
            // Hide Business Address section
            $(".section[data-name='Business_Address_Participant_2']").closest("fieldset").hide();
        }
        else {
            // Clear "Same as home address" change event handlers for Business Address
            $("#ndph_address").off("change", mirrorHomeAddress);

            $("#ndph_country").off("change", mirrorHomeAddress);
            $("#ndph_country_name").off("change", mirrorHomeAddress);
            $("#ndph_zippostalcode").off("change", mirrorHomeAddress);
            $("#ndph_state").off("change", mirrorHomeAddress);
            $("#ndph_address1_stateorprovince").off("change", mirrorHomeAddress);
            $("#ndph_ndph_addressnotshownonthelist").off("change", mirrorHomeAddress);
            $("#ndph_city").off("change", mirrorHomeAddress);
            $("#ndph_address1_city").off("change", mirrorHomeAddress);
            $("#ndph_ndph_addressnotshownonlist_city").off("change", mirrorHomeAddress);
    
            // Clear values for Business Address
            $("#ndph_postalzipcodebusiness").val("");
            $("#ndph_ndph_street1business").val("");                                                     // Street 1
            $("#ndph_street2business").val("");                                                     // Street 2
            $("#ndph_street3business").val("");                                                     // Street 3
            $("#ndph_ndph_mequestion11").val("");                                                        // Country GUID
            $("#ndph_ndph_mequestion11_name").val("");                                                   // Country name
            $("#ndph_ndph_mequestion11_entityname").val("");                                             // Country entity
            $("#ndph_mequestion14").val("");                                                        // ZIP/Postal Code
            $("#ndph_ndph_mequestion12").val("");                                                        // State GUID
            $("#ndph_ndph_mequestion12_name").val("");                                                   // State name
            $("#ndph_ndph_mequestion12_entityname").val("");                                             // State entity
            $("#ndph_ndph_statebusinessothers").val("");                                                 // State (others)
            $("#ndph_ndph_addressnotshownonthelistbusiness").prop("checked", false);                     // State not on list
            $("#ndph_ndph_statebusinessothers").parent().parent().hide();                                // Hide State (Other)
            $("#ndph_ndph_mequestion12").parent().parent().parent().show();                                       // Show State
            $("#ndph_ndph_mequestion13").val("");                                                        // City GUID
            $("#ndph_ndph_mequestion13_name").val("");                                                   // City name
            $("#ndph_ndph_mequestion13_entityname").val("");                                             // Country entity
            $("#ndph_ndph_citybusinessothers").val("");                                                  // City (others)
            $("#ndph_ndph_addressnotshownonlist_citybusiness").prop("checked", false);                   // City not on list
            $("#ndph_ndph_citybusinessothers").parent().parent().hide();                                 // Hide City (Other)
            $("#ndph_ndph_mequestion13").parent().parent().parent().show();                                       // Show City
    
            // Show Business Address section
            $(".section[data-name='Business_Address_Participant_2']").closest("fieldset").show();
    
            // Re-initialize fields: call initialization function
            initializeBusinessAddress();
    
            // Re-bind enable/disable functions for Business Address
            $("#ndph_ndph_mequestion11").change(toggleStateBusiness);
            $("#ndph_ndph_mequestion12").change(toggleCityBusiness);
            $("#ndph_ndph_statebusinessothers").change(toggleCityBusiness);
            $("#ndph_ndph_addressnotshownonthelistbusiness").change(toggleStateOtherBusiness);
            $("#ndph_ndph_addressnotshownonlist_citybusiness").change(toggleCityOtherBusiness);
        }
    }
    
    function mirrorHomeAddress() {      // Function to copy Home Address fields to Business Address
        var homeStreet1 = $("#ndph_address").val();
        var homeCountry = $("#ndph_country").val();
        var homeCountryName = $("#ndph_country_name").val();
        var homeZIPPostalCode = $("#ndph_zippostalcode").val();
        var homeState = $("#ndph_state").val();
        var homeStateName = $("#ndph_state_name").val();
        var homeStateOthers = $("#ndph_address1_stateorprovince").val();
        var homeStateNotOnList = $("#ndph_ndph_addressnotshownonthelist").prop("checked");
        var homeCity = $("#ndph_city").val();
        var homeCityName = $("#ndph_city_name").val();
        var homeCityOthers = $("#ndph_address1_city").val();
        var homeCityNotOnList = $("#ndph_ndph_addressnotshownonlist_city").prop("checked");

        $("#ndph_ndph_street1business").val(homeStreet1);                                            // Street 1                                         // Street 3
        $("#ndph_ndph_mequestion11").val(homeCountry);                                               // Country GUID
        $("#ndph_ndph_mequestion11_name").val(homeCountryName);                                      // Country name
        $("#ndph_ndph_mequestion11_entityname").val("ndph_country");                                 // Country entity
        $("#ndph_postalzipcodebusiness").val(homeZIPPostalCode);                                         // ZIP/Postal Code
        $("#ndph_ndph_mequestion12").val(homeState);                                                 // State GUID
        $("#ndph_ndph_mequestion12_name").val(homeStateName);                                        // State name
        $("#ndph_ndph_mequestion12_entityname").val("ndph_state");                                   // State entity
        $("#ndph_ndph_statebusinessothers").val(homeStateOthers);                                    // State (others)
        $("#ndph_ndph_addressnotshownonthelistbusiness").prop("checked", homeStateNotOnList);        // State not on list
        $("#ndph_ndph_mequestion13").val(homeCity);                                                  // City GUID
        $("#ndph_ndph_mequestion13_name").val(homeCityName);                                         // City name
        $("#ndph_ndph_mequestion13_entityname").val("ndph_city");                                    // City entity
        $("#ndph_ndph_citybusinessothers").val(homeCityOthers);                                      // City (others)
        $("#ndph_ndph_addressnotshownonlist_citybusiness").prop("checked", homeCityNotOnList);       // City not on list

        // Update (Other) fields
        if ($("#ndph_ndph_addressnotshownonthelistbusiness").prop("checked")) {      // State
            $("#ndph_ndph_mequestion12").parent().parent().parent().hide();
            $("#ndph_ndph_statebusinessothers").parent().parent().show();
        }
        else {
            $("#ndph_ndph_statebusinessothers").parent().parent().hide();
            $("#ndph_ndph_mequestion12").parent().parent().parent().show();
        }
        if ($("#ndph_ndph_addressnotshownonlist_citybusiness").prop("checked")) {      // City
            $("#ndph_ndph_mequestion13").parent().parent().parent().hide();
            $("#ndph_ndph_citybusinessothers").parent().parent().show();
        }
        else {
            $("#ndph_ndph_citybusinessothers").parent().parent().hide();
            $("#ndph_ndph_mequestion13").parent().parent().parent().show();
        }
    }

    // Mirror home address function

    // Toggle Home State based on whether Home Country has a value
    function toggleStateHome() {
        // participant fields
        var countryHome = $("#ndph_country").val();
        var checkedStateOtherHome = $("#ndph_ndph_addressnotshownonthelist");
        var checkedStateOtherHomeField = checkedStateOtherHome.closest("td");
        var stateHome = $("#ndph_state");
        var stateHomeName = $("#ndph_state_name");
        var stateHomeEntity = $("#ndph_state_entityname");
        var stateHomeField = $("#ndph_state").parent().parent().parent();
        var stateOtherHome = $("#ndph_address1_stateorprovince");
        var stateOtherHomeField = $("#ndph_address1_stateorprovince").parent().parent();
        var checkedCityOtherHome = $("#ndph_ndph_addressnotshownonlist_city");
        var checkedCityOtherHomeField = checkedCityOtherHome.closest("td");
        var cityHome = $("#ndph_city");
        var cityHomeName = $("#ndph_city_name");
        var cityHomeEntity = $("#ndph_city_entityname");
        var cityHomeField = $("#ndph_city").parent().parent().parent();
        var cityOtherHome = $("#ndph_address1_city");
        var cityOtherHomeField = $("#ndph_address1_city").parent().parent();

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
        // Update (Other) visibility
        cityOtherHomeField.hide();
        cityHomeField.show();
            
        // Disable City
        cityHome.prop("disabled", true);
        cityHome.parent().find(".input-group-btn").hide();
        cityHome.parent().css("display", "block");
        // Disable City (Other)
        cityOtherHome.prop("disabled", true);
        // Hide "Others" checkbox
        checkedCityOtherHomeField.hide();

        if (countryHome) {
            // Enable State
            stateHome.prop("disabled", false);
            stateHome.parent().find(".input-group-btn").show();
            stateHome.parent().css("display", "table");
            stateHome.parent().css("width", "100%");
            // Enable State (Other)
            stateOtherHome.prop("disabled", false);
            // Enable "Other" checkbox
            checkedStateOtherHomeField.show();
        }
        else {
            // Disable State
            stateHome.prop("disabled", true);
            stateHome.parent().find(".input-group-btn").hide();
            stateHome.parent().css("display", "block");
            // Disable State (Other)
            stateOtherHome.prop("disabled", true);
            // Hide "Others" checkbox
            checkedStateOtherHomeField.hide();
            // Update (Other) visibility 
            stateOtherHomeField.hide();
            stateHomeField.show();
        }
    }
    // Toggle Home City based on whether Home State has a value
    function toggleCityHome() {
        // participant fields
        var stateHome = $("#ndph_state").val();
        var stateOtherHome = $("#ndph_address1_stateorprovince").val();
        var checkedStateOtherHome = $("#ndph_addressnotshownonlist");
        var checkedCityOtherHome = $("#ndph_ndph_addressnotshownonlist_city");
        var checkedCityOtherHomeField = checkedCityOtherHome.closest("td");
        var cityHome = $("#ndph_city");
        var cityHomeName = $("#ndph_city_name");
        var cityHomeEntity = $("#ndph_city_entityname");
        var cityHomeField = $("#ndph_city").parent().parent().parent();
        var cityOtherHome = $("#ndph_address1_city");
        var cityOtherHomeField = $("#ndph_address1_city").parent().parent();

        // Clear City
        cityHome.val("");
        cityHomeName.val("");
        cityHomeEntity.val("");
        // Clear City (Other)
        cityOtherHome.val("");
        // Untick City "Others" checkbox if State "Others" is not ticked
        if (!checkedStateOtherHome.prop("checked")) {
            checkedCityOtherHome.prop("checked", false);
            // Update (Other) visibility 
            cityOtherHomeField.hide();
            cityHomeField.show();
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
            // Hide "Others" checkbox
            checkedCityOtherHomeField.hide();
            // Update (Other) visibility 
            cityOtherHomeField.hide();
            cityHomeField.show();
        }
    }
    // Hide/show Home State (Other) based on "Others" checkbox
    function toggleStateOtherHome() {
        var checkedStateOtherHome = $("#ndph_ndph_addressnotshownonthelist");
        var stateHome = $("#ndph_state");
        var stateHomeName = $("#ndph_state_name");
        var stateHomeEntity = $("#ndph_state_entityname");
        var stateHomeField = stateHome.parent().parent().parent();
        var stateOtherHome = $("#ndph_address1_stateorprovince");
        var stateOtherHomeField = stateOtherHome.parent().parent();

        var cityHome = $("#ndph_city");
        var cityOtherHome = $("#ndph_address1_city");
        var checkedCityOtherHome = $("#ndph_ndph_addressnotshownonlist_city");
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
        var checkedCityOtherHome = $("#ndph_ndph_addressnotshownonlist_city");
        var cityHome = $("#ndph_city");
        var cityHomeName = $("#ndph_city_name");
        var cityHomeEntity = $("#ndph_city_entityname");
        var cityHomeField = cityHome.parent().parent().parent();
        var cityOtherHome = $("#ndph_address1_city");
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
        
        var checkedStateOtherHome = $("#ndph_ndph_addressnotshownonthelist");
        var checkedStateOtherHomeField = checkedStateOtherHome.closest("td");
        var stateHome = $("#ndph_state");
        var stateHomeField = stateHome.parent().parent().parent();
        var stateOtherHome = $("#ndph_address1_stateorprovince");
        var stateOtherHomeField = stateOtherHome.parent().parent();
    
        var checkedCityOtherHome = $("#ndph_ndph_addressnotshownonlist_city");
        var checkedCityOtherHomeField = checkedCityOtherHome.closest("td");
        var cityHome = $("#ndph_city");
        var cityHomeField = cityHome.parent().parent().parent();
        var cityOtherHome = $("#ndph_address1_city");
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
            checkedStateOtherHomeField.hide();
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
            checkedCityOtherHome.prop("checked", true);
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
        var countryBusiness = $("#ndph_ndph_mequestion11").val();
        var checkedStateOtherBusiness = $("#ndph_ndph_addressnotshownonthelistbusiness");
        var checkedStateOtherBusinessField = checkedStateOtherBusiness.closest("td");
        var stateBusiness = $("#ndph_ndph_mequestion12");
        var stateBusinessName = $("#ndph_ndph_mequestion12_name");
        var stateBusinessEntity = $("#ndph_ndph_mequestion12_entityname");
        var stateBusinessField = stateBusiness.parent().parent().parent();
        var stateOtherBusiness = $("#ndph_ndph_statebusinessothers");
        var stateOtherBusinessField = stateOtherBusiness.parent().parent();
        var checkedCityOtherBusiness = $("#ndph_ndph_addressnotshownonlist_citybusiness");
        var checkedCityOtherBusinessField = checkedCityOtherBusiness.closest("td");
        var cityBusiness = $("#ndph_ndph_mequestion13");
        var cityBusinessName = $("ndph_ndph_mequestion13_name");
        var cityBusinessEntity = $("#ndph_ndph_mequestion13_entityname");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_ndph_citybusinessothers");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent(); 
        // degree fields

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
        // Update (Other) visibility
        cityOtherBusinessField.hide();
        cityBusinessField.show();
        
        // Disable City
        cityBusiness.prop("disabled", true);
        cityBusiness.parent().find(".input-group-btn").hide();
        cityBusiness.parent().css("display", "block");
        // Disable City (Other)
        cityOtherBusiness.prop("disabled", true);
        // Hide "Others" checkbox
        checkedCityOtherBusinessField.hide();

        if (countryBusiness) {
            // Enable State
            stateBusiness.prop("disabled", false);
            stateBusiness.parent().find(".input-group-btn").show();
            stateBusiness.parent().css("display", "table");
            stateBusiness.parent().css("width", "100%");
            // Enable State (Other)
            stateOtherBusiness.prop("disabled", false);
            // Enable "Other" checkbox
            checkedStateOtherBusinessField.show();
        }
        else {
            // Disable State
            stateBusiness.prop("disabled", true);
            stateBusiness.parent().find(".input-group-btn").hide();
            stateBusiness.parent().css("display", "block");
            // Disable State (Other)
            stateOtherBusiness.prop("disabled", true);
            // Hide "Others" checkbox
            checkedStateOtherBusinessField.hide();
            // Update (Other) visibility 
            stateOtherBusinessField.hide();
            stateBusinessField.show();
        }
    }
    // Toggle Business City based on whether Business State has a value
    function toggleCityBusiness() {
        var stateBusiness = $("#ndph_ndph_mequestion12").val();
        var stateOtherBusiness = $("#ndph_ndph_statebusinessothers").val();
        var checkedStateOtherBusiness = $("#ndph_addressnotshownonlist_statebusiness");
        var checkedCityOtherBusiness = $("#ndph_ndph_addressnotshownonlist_citybusiness");
        var checkedCityOtherBusinessField = checkedCityOtherBusiness.closest("td");
        var cityBusiness = $("#ndph_ndph_mequestion13");
        var cityBusinessName = $("#ndph_ndph_mequestion13_name");
        var cityBusinessEntity = $("#ndph_ndph_mequestion13_entityname");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_ndph_citybusinessothers");
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
            // Update (Other) visibility 
            cityOtherBusinessField.hide();
            cityBusinessField.show();
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
            // Hide "Others" checkbox
            checkedCityOtherBusinessField.hide();
            // Update (Other) visibility 
            cityOtherBusinessField.hide();
            cityBusinessField.show();
        }
    }
    // Hide/show Business State (Other) based on "Others" checkbox
    function toggleStateOtherBusiness() {

        var checkedStateOtherBusiness = $("#ndph_ndph_addressnotshownonthelistbusiness");
        var stateBusiness = $("#ndph_ndph_mequestion12");
        var stateBusinessName = $("#ndph_ndph_mequestion12_name");
        var stateBusinessEntity = $("#ndph_ndph_mequestion12_entityname");
        var stateBusinessField = stateBusiness.parent().parent().parent();
        var stateOtherBusiness = $("#ndph_ndph_statebusinessothers");
        var stateOtherBusinessField = stateOtherBusiness.parent().parent()
        
        var cityBusiness = $("#ndph_ndph_mequestion13");
        var cityOtherBusiness = $("#ndph_ndph_citybusinessothers");
        var checkedCityOtherBusiness = $("#ndph_ndph_addressnotshownonlist_citybusiness");
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
       
        var checkedCityOtherBusiness = $("#ndph_ndph_addressnotshownonlist_citybusiness");
        var cityBusiness = $("#ndph_ndph_mequestion13");
        var cityBusinessName = $("#ndph_ndph_mequestion13_name");
        var cityBusinessEntity = $("#ndph_ndph_mequestion13_entityname");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_ndph_citybusinessothers");
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
        var businessIsHome = $("#ndph_ndph_businessaddressishomeaddress").prop("checked");
        
        var countryBusiness = $("#ndph_ndph_mequestion11").val();
    
        var checkedStateOtherBusiness = $("#ndph_ndph_addressnotshownonthelistbusiness");
        var checkedStateOtherBusinessField = checkedStateOtherBusiness.closest("td");
        var stateBusiness = $("#ndph_ndph_mequestion12");
        var stateBusinessField = stateBusiness.parent().parent().parent();
        var stateOtherBusiness = $("#ndph_ndph_statebusinessothers");
        var stateOtherBusinessField = stateOtherBusiness.parent().parent()
    
        var checkedCityOtherBusiness = $("#ndph_ndph_addressnotshownonlist_citybusiness");
        var checkedCityOtherBusinessField = checkedCityOtherBusiness.closest("td");
        var cityBusiness = $("#ndph_ndph_mequestion13");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_ndph_citybusinessothers");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();

    
        if (businessIsHome) {
            $(".section[data-name='Business_Address_Participant_2']").closest("fieldset").hide();
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
            checkedStateOtherBusinessField.hide();
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
            checkedCityOtherBusiness.prop("checked", true);
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

    // ################################################################
    // FUNCTIONS TO EXECUTE ON FIELD CHANGE:
    // ################################################################

    // Update Business Address section
    $("#ndph_ndph_businessaddressishomeaddress").change(toggleBusinessIsHomeAddress);    // Toggle Business Address
    // Update Home Address fields
    $("#ndph_country").change(toggleStateHome);
    $("#ndph_state").change(toggleCityHome);
    $("#ndph_address1_stateorprovince").change(toggleCityHome);
    $("#ndph_ndph_addressnotshownonthelist").change(toggleStateOtherHome);
    $("#ndph_ndph_addressnotshownonlist_city").change(toggleCityOtherHome);
    // Update Business Address fields
    $("#ndph_ndph_mequestion11").change(toggleStateBusiness);
    $("#ndph_ndph_mequestion12").change(toggleCityBusiness);
    $("#ndph_ndph_statebusinessothers").change(toggleCityBusiness);
    $("#ndph_ndph_addressnotshownonthelistbusiness").change(toggleStateOtherBusiness);
    $("#ndph_ndph_addressnotshownonlist_citybusiness").change(toggleCityOtherBusiness);

    // ################################################################
    // INITIALIZE FORM
    // ################################################################

    // *** DEFINE VALIDATORS ***

    // Validator definition
    if (typeof (Page_Validators) == 'undefined') return;
    // Date of birth validator: disallow future and current date
    var dateOfBirthValidator = document.createElement('span');
    dateOfBirthValidator.style.display = "none";
    dateOfBirthValidator.id = "ndph_dateofbirthValidator";
    dateOfBirthValidator.controltovalidate = "ndph_dateofbirth";
    dateOfBirthValidator.errormessage = "<a href='#ndph_dateofbirth'>Date of Birth must be valid.</a>";
    dateOfBirthValidator.validationGroup = "";        // Set this if you have set ValidationGroup on the form
    dateOfBirthValidator.initialvalue = "";
    dateOfBirthValidator.evaluationfunction = function () {
        var currentDate = new Date();
        var dateOfBirth = $("#ndph_dateofbirth").val();
        if (dateOfBirth) {
            dateOfBirth = new Date(dateOfBirth);      // Convert to Date object if filled in
        }
        if (dateOfBirth < currentDate) {
            return true;
        }
        else {
            return false;
        }
    };

    // Add the new validators to the page validators array:
    Page_Validators.push(dateOfBirthValidator);

    // Wire-up the click event handler of the validation summary link
    $("a[href='#ndph_dateofbirth']").on("click", function () { scrollToAndFocus('ndph_dateofbirth'); });

    // *** END OF VALIDATOR CODE***


    // Resize State/City fields
    $("#ndph_country").parent().parent().parent().attr("colspan","2");          // Home Address
    $("#ndph_country").parent().css("width","100%");
    $("#ndph_state").parent().parent().parent().attr("colspan","2");
    $("#ndph_state").parent().css("width","100%");
    $("#ndph_address1_stateorprovince").parent().parent().attr("colspan","2");
    $("#ndph_city").parent().parent().parent().attr("colspan","2");
    $("#ndph_city").parent().css("width","100%");
    $("#ndph_address1_city").parent().parent().attr("colspan","2");
    
    $("#ndph_ndph_mequestion11").parent().parent().parent().attr("colspan","2");     // Business Address
    $("#ndph_ndph_mequestion11").parent().css("width","100%");
    $("#ndph_ndph_mequestion12").parent().parent().parent().attr("colspan","2");
    $("#ndph_ndph_mequestion12").parent().css("width","100%");
    $("#ndph_ndph_statebusinessothers").parent().parent().attr("colspan","2");
    $("#ndph_ndph_mequestion13").parent().parent().parent().attr("colspan","2");
    $("#ndph_ndph_mequestion13").parent().css("width","100%");
    $("#ndph_ndph_citybusinessothers").parent().parent().attr("colspan","2");

    // Add class to adjust top padding on mobile field
    $("input#mobilephone.text.form-control").closest("td").css("padding-top", "26px");

    // Initialize Address appearance
    initializeHomeAddress();
    initializeBusinessAddress();


});