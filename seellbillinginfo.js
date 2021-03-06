$(document).ready(function() {
    // I!!!
    // DECLARE!!!
    // BANKRUPTCY!!!
    // ay functions pala
    // i declare functions:
    function updateAddressSections() {
        var addressType = $("#ndph_addresssameas").val();
        var homeAddress = $(".section[data-name='blling_information_home_address_section']").closest("fieldset");
        var businessAddress = $(".section[data-name='blling_information_business_address_section']").closest("fieldset");
        var billingAddress = $(".section[data-name='blling_information_billing_address_section']").closest("fieldset");

        switch (addressType) {
            case "649840000":
                homeAddress.show();
                businessAddress.hide();
                clearBillingAddress();
                billingAddress.hide();
                break;
            case "649840001":
                homeAddress.hide();
                businessAddress.show();
                clearBillingAddress();
                billingAddress.hide();
                break;
            case "649840002":
                homeAddress.hide();
                businessAddress.hide();
                billingAddress.show();
                break;
            default:
                homeAddress.hide();
                businessAddress.hide();
                clearBillingAddress();
                billingAddress.hide();
                break;
        }
    }

    function clearBillingAddress() {
        $("#ndph_street1").val("");
        $("#ndph_street2").val("");
        $("#ndph_street3").val("");
        $("#ndph_citybilling").val("");
        $("#ndph_citybilling_name").val("");
        $("#ndph_citybilling_entityname").val("");
        $("#ndph_cityotherbilling").val("");
        $("#ndph_citynotshownonlist").prop("checked",true);
        $("#ndph_statebilling").val("");
        $("#ndph_statebilling_name").val("");
        $("#ndph_statebilling_entityname").val("");
        $("#ndph_stateotherbilling").val("");
        $("#ndph_statenotshownlist").prop("checked",true);
        $("#ndph_postalzipcodebilling").val("");
        $("#ndph_countrybilling").val("");
        $("#ndph_countrybilling_name").val("");
        $("#ndph_countrybilling_entityname").val("");
    }

    function updatePersonICOTraining() {
        var checkedPICOT = $("#ndph_otherpersoninchargeoftraining_1").prop("checked");
        var PICOT = $(".section[data-name='person_in_charge_of_training_section']").closest("fieldset");

        if (checkedPICOT) {
            PICOT.show();
        }
        else {
            PICOT.hide();
        }
    }

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
        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
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
            checkedCityOtherHome.prop("checked", false);
            checkedCityOtherHome.prop("disabled", true);
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

        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");

        if (checkedStateOtherHome.prop("checked")) {
            stateHome.val("");
            stateHomeName.val("");
            stateHomeEntity.val("");
            stateHomeField.hide();
            stateOtherHomeField.show();
            // Lock City to Other
            checkedCityOtherHome.prop("disabled", true);
            checkedCityOtherHome.prop("checked", true);
        }
        else {
            stateOtherHome.val("");
            stateOtherHomeField.hide();
            stateHomeField.show();
            // Reset "Other" checkbox for City
            checkedCityOtherHome.prop("checked", false);
        }
        toggleCityHome();
        toggleCityOtherHome();
    }
    function toggleCityOtherHome() {
        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
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
    
    function toggleStateBusiness() {
        var countryBusiness = $("#ndph_mequestion11").val();
        var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
        var stateBusiness = $("#ndph_mequestion12");
        var stateBusinessName = $("#ndph_mequestion12_name");
        var stateBusinessEntity = $("#ndph_mequestion12_entityname");
        var stateOtherBusiness = $("#ndph_statebusinessothers");

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
            // Clear and disable State
            stateBusiness.val("");
            stateBusinessName.val("");
            stateBusinessEntity.val("");
            stateBusiness.prop("disabled", true);
            stateBusiness.parent().find(".input-group-btn").hide();
            stateBusiness.parent().css("display", "block");
            // Clear and disable State (Other)
            stateOtherBusiness.val("");
            stateOtherBusiness.prop("disabled", true);
            // Untick and disable "Others"
            checkedStateOtherBusiness.prop("checked", false);
            checkedStateOtherBusiness.prop("disabled", true);
            // Update (Other) visibility 
            toggleStateOtherBusiness();
        }
    }
    function toggleCityBusiness() {
        var stateBusiness = $("#ndph_mequestion12").val();
        var stateOtherBusiness = $("#ndph_statebusinessothers").val();
        var checkedStateOtherBusiness = $("#ndph_addressnotshownonlist_statebusiness");
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
        var cityBusiness = $("#ndph_mequestion13");
        var cityBusinessName = $("#ndph_mequestion13_name");
        var cityBusinessEntity = $("#ndph_mequestion13_entityname");
        var cityOtherBusiness = $("#ndph_citybusinessothers");

        if (stateBusiness || stateOtherBusiness) {
            // Enable City
            cityBusiness.prop("disabled", false);
            cityBusiness.parent().find(".input-group-btn").show();
            cityBusiness.parent().css("display", "table");
            stateBusiness.parent().css("width", "100%");
            // Enable City (Other)
            cityOtherBusiness.prop("disabled", false);
            if (stateBusiness && checkedStateOtherBusiness.prop("checked")) {
                // Enable "Others" checkbox
                checkedCityOtherBusiness.prop("disabled", false);
            }
        }
        else {
            // Clear and disable City
            cityBusiness.val("");
            cityBusinessName.val("");
            cityBusinessEntity.val("");
            cityBusiness.prop("disabled", true);
            cityBusiness.parent().find(".input-group-btn").hide();
            cityBusiness.parent().css("display", "block");
            // Clear and disable City (Other)
            cityOtherBusiness.val("");
            cityOtherBusiness.prop("disabled", true);
            // Untick and disable "Others"
            checkedCityOtherBusiness.prop("checked", false);
            checkedCityOtherBusiness.prop("disabled", true);
            // Update (Other) visibility 
            toggleCityOtherBusiness();
        }
    }
    function toggleStateOtherBusiness() {
        var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
        var stateBusiness = $("#ndph_mequestion12");
        var stateBusinessName = $("#ndph_mequestion12_name");
        var stateBusinessEntity = $("#ndph_mequestion12_entityname");
        var stateBusinessField = $("#ndph_mequestion12").parent().parent().parent();
        var stateOtherBusiness = $("#ndph_statebusinessothers");
        var stateOtherBusinessField = stateOtherBusiness.parent().parent()
        
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");

        if (checkedStateOtherBusiness.prop("checked")) {
            stateBusiness.val("");
            stateBusinessName.val("");
            stateBusinessEntity.val("");
            stateBusinessField.hide();
            stateOtherBusinessField.show();
            // Lock City to Other
            checkedCityOtherBusiness.prop("disabled", true);
            checkedCityOtherBusiness.prop("checked", true);
        }
        else {
            stateOtherBusiness.val("");
            stateOtherBusinessField.hide();
            stateBusinessField.show();
            // Reset "Other" checkbox for City
            checkedCityOtherHome.prop("checked", false);
        }
        toggleCityBusiness();
        toggleCityOtherBusiness();
    }
    function toggleCityOtherBusiness() {
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
        var cityBusiness = $("#ndph_mequestion13");
        var cityBusinessName = $("#ndph_mequestion13_name");
        var cityBusinessEntity = $("#ndph_mequestion13_entityname");
        var cityBusinessField = $("#ndph_mequestion13").parent().parent().parent();
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

    function toggleStateBilling() {
        var countryBilling = $("#ndph_countrybilling").val();
        var checkedStateOtherBilling = $("#ndph_statenotshownlist");
        var stateBilling = $("#ndph_statebilling");
        var stateBillingName = $("#ndph_statebilling_name");
        var stateBillingEntity = $("#ndph_statebilling_entityname");
        var stateOtherBilling = $("#ndph_stateotherbilling");

        if (countryBilling) {
            // Enable State
            stateBilling.prop("disabled", false);
            stateBilling.parent().find(".input-group-btn").show();
            stateBilling.parent().css("display", "table");
            stateBilling.parent().css("width", "100%");
            // Enable State (Other)
            stateOtherBilling.prop("disabled", false);
            // Enable "Other" checkbox
            checkedStateOtherBilling.prop("disabled", false);
        }
        else {
            // Clear and disable State
            stateBilling.val("");
            stateBillingName.val("");
            stateBillingEntity.val("");
            stateBilling.prop("disabled", true);
            stateBilling.parent().find(".input-group-btn").hide();
            stateBilling.parent().css("display", "block");
            // Clear and disable State (Other)
            stateOtherBilling.val("");
            stateOtherBilling.prop("disabled", true);
            // Untick and disable "Others"
            checkedStateOtherBilling.prop("checked", false);
            checkedStateOtherBilling.prop("disabled", true);
            // Update (Other) visibility 
            toggleStateOtherBilling();
        }
    }
    function toggleCityBilling() {
        var stateBilling = $("#ndph_statebilling").val();
        var stateOtherBilling = $("#ndph_stateotherbilling").val();
        var checkedCityOtherBilling = $("#ndph_citynotshownonlist");
        var cityBilling = $("#ndph_citybilling");
        var cityBillingName = $("#ndph_citybilling_name");
        var cityBillingEntity = $("#ndph_citybilling_entityname");
        var cityOtherBilling = $("#ndph_cityotherbilling");

        if (stateBilling || stateOtherBilling) {
            // Enable City
            cityBilling.prop("disabled", false);
            cityBilling.parent().find(".input-group-btn").show();
            cityBilling.parent().css("display", "table");
            cityBilling.parent().css("width", "100%");
            // Enable City (Other)
            cityOtherBilling.prop("disabled", false);
            if (stateBilling) {
                // Enable "Others" checkbox
                checkedCityOtherBilling.prop("disabled", false);
            }
        }
        else {
            // Clear and disable City
            cityBilling.val("");
            cityBillingName.val("");
            cityBillingEntity.val("");
            cityBilling.prop("disabled", true);
            cityBilling.parent().find(".input-group-btn").hide();
            cityBilling.parent().css("display", "block");
            // Clear and disable City (Other)
            cityOtherBilling.val("");
            cityOtherBilling.prop("disabled", true);
            // Untick and disable "Others"
            checkedCityOtherBilling.prop("checked", false);
            checkedCityOtherBilling.prop("disabled", true);
            // Update (Other) visibility
            toggleCityOtherBilling();
        }
    }
    function toggleStateOtherBilling() {
        var checkedStateOtherBilling = $("#ndph_statenotshownlist");
        var stateBilling = $("#ndph_statebilling");
        var stateBillingName = $("#ndph_statebilling_name");
        var stateBillingEntity = $("#ndph_statebilling_entityname");
        var stateBillingField = stateBilling.parent().parent().parent();
        var stateOtherBilling = $("#ndph_stateotherbilling");
        var stateOtherBillingField = stateOtherBilling.parent().parent()
        
        var checkedCityOtherBilling = $("#ndph_citynotshownonlist");

        if (checkedStateOtherBilling.prop("checked")) {
            stateBilling.val("");
            stateBillingName.val("");
            stateBillingEntity.val("");
            stateBillingField.hide();
            stateOtherBillingField.show();
            // Lock City to Other
            checkedCityOtherBilling.prop("disabled", true);
            checkedCityOtherBilling.prop("checked", true);
        }
        else {
            stateOtherBilling.val("");
            stateOtherBillingField.hide();
            stateBillingField.show();
            // Reset "Other" checkbox for City
            checkedCityOtherBilling.prop("checked", false);
        }
        toggleCityBilling();
        toggleCityOtherBilling();
    }
    function toggleCityOtherBilling() {
        var checkedCityOtherBilling = $("#ndph_citynotshownonlist");
        var cityBilling = $("#ndph_citybilling");
        var cityBillingName = $("#ndph_citybilling_name");
        var cityBillingEntity = $("#ndph_citybilling_entityname");
        var cityBillingField = cityBilling.parent().parent().parent();
        var cityOtherBilling = $("#ndph_cityotherbilling");
        var cityOtherBillingField = cityOtherBilling.parent().parent();

        if (checkedCityOtherBilling.prop("checked")) {
            cityBilling.val("");
            cityBillingName.val("");
            cityBillingField.hide();
            cityOtherBillingField.show();
        }
        else {
            cityOtherBilling.val("");
            cityOtherBillingField.hide();
            cityBillingField.show();
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
            checkedCityOtherHome.prop("disabled", true);
        }
        else if (checkedStateOtherHome.prop("checked")) {
            // Hide State
            stateHomeField.hide();
            // Hide City
            cityHomeField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherHome.prop("checked", false);
            checkedCityOtherHome.prop("disabled", true);
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
            checkedCityOtherHome.prop("disabled", true);
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
    function initializeBusinessAddress() {
        var countryBusiness = $("#ndph_mequestion11").val();

        var checkedStateOtherBusiness = $("#ndph_addressnotshownonthelistbusiness");
        var stateBusiness = $("#ndph_mequestion12");
        var stateBusinessField = stateBusiness.parent().parent().parent();
        var stateOtherBusiness = $("#ndph_statebusinessothers");
        var stateOtherBusinessField = stateOtherBusiness.parent().parent()

        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
        var cityBusiness = $("#ndph_mequestion13");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessothers");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();

        if (!countryBusiness) {
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
            checkedCityOtherBusiness.prop("disabled", true);
        }
        else if (checkedStateOtherBusiness.prop("checked")) {
            // Hide State
            stateBusinessField.hide();
            // Hide City
            cityBusinessField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherBusiness.prop("checked", false);
            checkedCityOtherBusiness.prop("disabled", true);
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
            checkedCityOtherBusiness.prop("disabled", true);
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
    function initializeBillingAddress() {
        var countryBilling = $("#ndph_countrybilling").val();

        var checkedStateOtherBilling = $("#ndph_statenotshownlist");
        var stateBilling = $("#ndph_statebilling");
        var stateBillingField = stateBilling.parent().parent().parent();
        var stateOtherBilling = $("#ndph_stateotherbilling");
        var stateOtherBillingField = stateOtherBilling.parent().parent()

        var checkedCityOtherBilling = $("#ndph_citynotshownonlist");
        var cityBilling = $("#ndph_citybilling");
        var cityBillingField = cityBilling.parent().parent().parent();
        var cityOtherBilling = $("#ndph_cityotherbilling");
        var cityOtherBillingField = cityOtherBilling.parent().parent();

        if (!countryBilling) {
            // Disable State
            stateBilling.prop("disabled", true);
            stateBilling.parent().find(".input-group-btn").hide();
            stateBilling.parent().css("display", "block");
            // Disable and hide State (Other)
            stateOtherBilling.prop("disabled", true);
            stateOtherBillingField.hide();
            // Reset and disable "Other" checkbox for State
            checkedStateOtherBilling.prop("checked", false);
            checkedStateOtherBilling.prop("disabled", true);
            // Disable City
            cityBilling.prop("disabled", true);
            cityBilling.parent().find(".input-group-btn").hide();
            cityBilling.parent().css("display", "block");
            // Disable and hide City (Other)
            cityOtherBilling.prop("disabled", true);
            cityOtherBillingField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherBilling.prop("checked", false);
            checkedCityOtherBilling.prop("disabled", true);
        }
        else if (checkedStateOtherBilling.prop("checked")) {
            // Hide State
            stateBillingField.hide();
            // Hide City
            cityBillingField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherBilling.prop("checked", false);
            checkedCityOtherBilling.prop("disabled", true);
            if (!stateBilling) {
                // Disable City
                cityBilling.prop("disabled", true);
                cityBilling.parent().find(".input-group-btn").hide();
                cityBilling.parent().css("display", "block");
            }
            if (!stateOtherBilling) {
                // Disable City (Other)
                cityOtherBilling.prop("disabled", true);
            }
        }
        else if (!stateBilling) {
            // Hide State (Other)
            stateOtherBillingField.hide();
            // Disable City
            cityBilling.prop("disabled", true);
            cityBilling.parent().find(".input-group-btn").hide();
            cityBilling.parent().css("display", "block");
            // Disable and hide City (Other)
            cityOtherBilling.prop("disabled", true);
            cityOtherBillingField.hide();
            // Untick and disable "Others"
            checkedCityOtherBilling.prop("checked", false);
            checkedCityOtherBilling.prop("disabled", true);
        }
        else if (checkedCityOtherBilling.prop("checked")) {
            // Hide State (Other)
            stateOtherBillingField.hide();
            // Hide City
            cityBillingField.hide();
        }
        else {
            // Hide State (Other)
            stateOtherBillingField.hide();
            // Hide City (Other)
            cityOtherBillingField.hide();
        }
    }

    // INITIALIZE FORM
    // Set default field and section visibility
    updateAddressSections();
    updatePersonICOTraining();
    initializeHomeAddress();
    initializeBusinessAddress();
    initializeBillingAddress();

    // Resize State/City fields
    $("#ndph_country").parent().parent().parent().attr("colspan","2");
    $("#ndph_country").parent().css("width","100%");
    $("#ndph_state").parent().parent().parent().attr("colspan","2");
    $("#ndph_state").parent().css("width","100%");
    $("#address1_stateorprovince").parent().parent().attr("colspan","2");
    $("#ndph_city").parent().parent().parent().attr("colspan","2");
    $("#ndph_city").parent().css("width","100%");
    $("#address1_city").parent().parent().attr("colspan","2");
    
    $("#ndph_mequestion11").parent().parent().parent().attr("colspan","2");
    $("#ndph_mequestion11").parent().css("width","100%");
    $("#ndph_mequestion12").parent().parent().parent().attr("colspan","2");
    $("#ndph_mequestion12").parent().css("width","100%");
    $("#ndph_statebusinessothers").parent().parent().attr("colspan","2");
    $("#ndph_mequestion13").parent().parent().parent().attr("colspan","2");
    $("#ndph_mequestion13").parent().css("width","100%");
    $("#ndph_citybusinessothers").parent().parent().attr("colspan","2");
    
    $("#ndph_countrybilling").parent().parent().parent().attr("colspan","2");
    $("#ndph_countrybilling").parent().css("width","100%");
    $("#ndph_statebilling").parent().parent().parent().attr("colspan","2");
    $("#ndph_statebilling").parent().css("width","100%");
    $("#ndph_stateotherbilling").parent().parent().attr("colspan","2");
    $("#ndph_citybilling").parent().parent().parent().attr("colspan","2");
    $("#ndph_citybilling").parent().css("width","100%");
    $("#ndph_cityotherbilling").parent().parent().attr("colspan","2");
    
    // FUNCTIONS TO EXECUTE UPON FIELD CHANGE
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
    // Update Business Address fields
    $("#ndph_countrybilling").change(toggleStateBilling);
    $("#ndph_statebilling").change(toggleCityBilling);
    $("#ndph_stateotherbilling").change(toggleCityBilling);
    $("#ndph_statenotshownlist").change(toggleStateOtherBilling);
    $("#ndph_citynotshownonlist").change(toggleCityOtherBilling);
});