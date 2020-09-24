$(document).ready(function() {

    if($("#ndph_addresssameas").val() == "" || "649840002") {
        var homeAddress = $(".section[data-name='blling_information_home_address_section']").closest("fieldset");
        var businessAddress = $(".section[data-name='blling_information_business_address_section']").closest("fieldset");
        var billingAddress = $(".section[data-name='blling_information_billing_address_section']").closest("fieldset");
        // only show billing address
        homeAddress.hide();
        businessAddress.hide();
        billingAddress.show();
    } else if($("#ndph_addresssameas").val() == "649840000") {
        homeAddress.show();
        businessAddress.hide();
        billingAddress.hide();
    } else if($("#ndph_addresssameas").val() == "649840001") {
        homeAddress.hide();
        businessAddress.show();
        billingAddress.hide();
    }

    // hide dev sections
    $(".section[data-name='hidden_dev']").closest("fieldset").hide();
    if($("#ndph_otherpersoninchargeoftraining").prop("checked")){
         $(".section[data-name='Billing_information_section_3']").closest("fieldset").show();
    } else {
         $(".section[data-name='Billing_information_section_3']").closest("fieldset").hide();
    }
   

    // Billing Address Javascript
        function updateAddressSections() { //hide addresses
           var addressType = $("#ndph_addresssameas").val();
           var homeAddress = $(".section[data-name='blling_information_home_address_section']").closest("fieldset");
           var businessAddress = $(".section[data-name='blling_information_business_address_section']").closest("fieldset");
           var billingAddress = $(".section[data-name='blling_information_billing_address_section']").closest("fieldset");
   
           switch (addressType) {
               case "649840000":
                   homeAddress.show();
                   businessAddress.hide();
                   billingAddress.hide();
                   break;
               case "649840001":
                   homeAddress.hide();
                   businessAddress.show();
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
                   billingAddress.show();
                   break;
           }
       }
   
       function updatePersonICOTraining() { // hide PICOT
           var checkedPICOT = $("#ndph_otherpersoninchargeoftraining").prop("checked");
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
        var stateHomeField = $("#ndph_state").parent().parent().parent();
        var stateOtherHome = $("#address1_stateorprovince");
        var stateOtherHomeField = $("#address1_stateorprovince").parent().parent();
        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
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
        // cityHome.val("");
        // cityHomeName.val("");
        // cityHomeEntity.val("");
        // Clear City (Other)
        // cityOtherHome.val("");
        // Untick "Others" checkbox
        // checkedCityOtherHome.prop("checked", false);

        if (countryHome) {
            // Enable State
            // stateHome.prop("disabled", false);
            stateHome.parent().find(".input-group-btn").show();
            stateHome.parent().css("display", "table");
            stateHome.parent().css("width", "100%");
            // Enable State (Other)
            stateOtherHome.prop("disabled", false);
            // Enable "Other" checkbox
            checkedStateOtherHome.prop("disabled", false);
        }
        else if (!countryHome) {
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
            checkedCityOtherHome.prop("disabled", true);
            checkedCityOtherHome.parent().parent().parent().hide();
            // Update (Other) visibility 
            cityOtherHomeField.hide();
            cityHomeField.show();
        }
    }
    // Toggle Home City based on whether Home State has a value
    function toggleCityHome() {
        var stateHome = $("#ndph_state").val();
        var stateOtherHome = $("#address1_stateorprovince").val();
        var checkedStateOtherHome = $("#ndph_addressnotshownonlist");
        var checkedCityOtherHome = $("#ndph_addressnotshownonlist_city");
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
        if (checkedStateOtherHome.prop("checked")) {
            checkedCityOtherHome.prop("checked", true);
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
                checkedCityOtherHome.prop("disabled", false);
                checkedCityOtherHome.parent().parent().parent().show();
            }
        }
        else {
            // Disable City
            cityHome.prop("disabled", true);
            cityHome.parent().find(".input-group-btn").hide();
            cityHome.parent().css("display", "block");
            // Disable City (Other)
            cityOtherHome.prop("disabled", true);
            // // Disable "Others" checkbox
            checkedCityOtherHome.prop("disabled", true);
            checkedCityOtherHome.parent().parent().parent().hide();
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

        if (checkedStateOtherHome.prop("checked")) {
            stateHome.val("");
            stateHomeName.val("");
            stateHomeEntity.val("");
            stateHomeField.hide();
            stateOtherHomeField.show();
            // Lock City to Other
            checkedCityOtherHome.prop("disabled", false);
            checkedCityOtherHome.parent().parent().parent().hide();
            checkedCityOtherHome.prop("checked", true);
            // Disable City (Other) until State is filled in
            cityOtherHome.prop("disabled", false);
        }
        else if (!checkedStateOtherHome.prop("checked")) {
            stateOtherHome.val("");
            stateOtherHomeField.hide();
            stateHomeField.show();
            // Reset "Other" checkbox for City
            checkedCityOtherHome.prop("checked", false);
            // Disable City until State is filled in
            cityHome.prop("disabled", true);
            checkedCityOtherHome.parent().parent().parent().show();
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
            // checkedCityOtherHome.parent().parent().parent().hide();
        }
        else if (checkedStateOtherHome.prop("checked")) {
            // Hide State
            stateHomeField.hide();
            // Hide City
            cityHomeField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherHome.prop("checked", true);
            // checkedCityOtherHome.prop("checked", false); // this command removes the check from the checkbox
            checkedCityOtherHome.prop("disabled", false);
            checkedCityOtherHome.parent().parent().parent().hide();
            if (!stateHome) {
                // Disable City
                // cityHome.prop("disabled", true);
                cityHome.parent().find(".input-group-btn").hide();
                cityHome.parent().css("display", "block");
            }
            if (!stateOtherHome) {
                // Disable City (Other)
                cityOtherHome.prop("disabled", true);
            }
        }
        else if (!stateHome || !stateOtherHome) {
            // Hide State (Other)
            stateOtherHomeField.hide();
            // Disable City
            // cityHome.prop("disabled", true);
            cityHome.parent().find(".input-group-btn").hide();
            cityHome.parent().css("display", "block");
            // Disable and hide City (Other)
            cityOtherHome.prop("disabled", true);
            cityOtherHomeField.hide();
            // Untick and disable "Others"
            checkedCityOtherHome.prop("checked", false);
            // checkedCityOtherHome.prop("disabled", true);
            checkedCityOtherHome.parent().parent().parent().hide();
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

        // Clear City
        // cityBusiness.val("");
        // cityBusinessName.val("");
        // cityBusinessEntity.val("");
        // Clear City (Other)
        // cityOtherBusiness.val("");
        // Untick "Others" checkbox
        // checkedCityOtherBusiness.prop("checked", false);

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
            checkedCityOtherBusiness.prop("disabled", true);
            // Update (Other) visibility 
            cityOtherBusinessField.hide();
            cityBusinessField.show();
        }
    }
    // Toggle Business City based on whether Business State has a value
    function toggleCityBusiness() {
        var stateBusiness = $("#ndph_mequestion12").val();
        var stateOtherBusiness = $("#ndph_statebusinessothers").val();
        var checkedStateOtherBusiness = $("#ndph_addressnotshownonlist_statebusiness");
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");
        var cityBusiness = $("#ndph_mequestion13");
        var cityBusinessName = $("#ndph_mequestion13_name");
        var cityBusinessEntity = $("#ndph_mequestion13_entityname");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessothers");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();

        // Clear City
        // cityBusiness.val("");
        // cityBusinessName.val("");
        // cityBusinessEntity.val("");
        // // Clear City (Other)
        // // cityOtherBusiness.val("");
        // // Untick City "Others" checkbox if State "Others" is not ticked
        // if (checkedStateOtherBusiness.prop("checked")) {
        //     // checkedCityOtherBusiness.prop("checked", false);
        // }

        if (stateBusiness || stateOtherBusiness) {
            // Enable City
            // cityBusiness.prop("disabled", false);
            cityBusiness.parent().find(".input-group-btn").show();
            cityBusiness.parent().css("display", "table");
            cityBusiness.parent().css("width", "100%");
            // Enable City (Other)
            // cityOtherBusiness.prop("disabled", false);
            if (stateBusiness && !checkedStateOtherBusiness.prop("checked")) {
                // Enable "Others" checkbox only if State is populated and not locked to "Other"
                checkedCityOtherBusiness.prop("disabled", false);
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
            checkedCityOtherBusiness.prop("disabled", true);
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
        var stateOtherBusinessField = stateOtherBusiness.parent().parent();
        
        var cityBusiness = $("#ndph_mequestion13");
        var cityOtherBusiness = $("#ndph_citybusinessothers");
        var checkedCityOtherBusiness = $("#ndph_addressnotshownonlist_citybusiness");

        if (checkedStateOtherBusiness.prop("checked")) {
            stateBusiness.val("");
            stateBusinessName.val("");
            stateBusinessEntity.val("");
            stateBusinessField.hide();
            stateOtherBusinessField.show();
            // Lock City to Other
            checkedCityOtherBusiness.prop("disabled", false);
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
        var cityBusiness = $("#ndph_mequestion13");
        var cityBusinessField = cityBusiness.parent().parent().parent();
        var cityOtherBusiness = $("#ndph_citybusinessothers");
        var cityOtherBusinessField = cityOtherBusiness.parent().parent();


        // checkboxes
        var toggleStateOther = $("#ndph_addressnotshownonthelistbusiness").prop("checked");
        var toggleCityOther = $("#ndph_addressnotshownonlist_citybusiness").prop("checked");

        // if (businessIsHome) {
        //     // alert("nasa if");
        //     // toggleBusinessIsHomeAddress();
        //     // $(".section[data-name='seell_business_address']").closest("fieldset").hide();
        //     if(toggleStateOther) {
        //         $("#ndph_statebusinessothers").parent().parent().show();                                // Hide State (Other)
        //         $("#ndph_mequestion12").parent().parent().parent().hide();  
        //         $("#ndph_citybusinessothers").parent().parent().show();                                 // Hide City (Other)
        //         $("#ndph_mequestion13").parent().parent().parent().hide();   
        //     } else if (!toggleStateOther) {
        //         $("#ndph_statebusinessothers").parent().parent().hide();                                // Hide State (Other)
        //         $("#ndph_mequestion12").parent().parent().parent().show();  
        //         // $("#ndph_citybusinessothers").parent().parent().show();                                 // Hide City (Other)
        //         // $("#ndph_mequestion13").parent().parent().hide();   
        //     }

        //     if(toggleCityOther) {
        //         $("#ndph_citybusinessothers").parent().parent().show();                                 // Hide City (Other)
        //         $("#ndph_mequestion13").parent().parent().parent().hide(); 
        //     } else if(!toggleCityOther) {
        //         $("#ndph_citybusinessothers").parent().parent().hide();                                 // Hide City (Other)
        //         $("#ndph_mequestion13").parent().parent().parent().show(); 
        //     }
        // }
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
            checkedCityOtherBusiness.prop("checked", true);
            checkedCityOtherBusiness.prop("disabled", false);
            if (!stateBusiness) {
                // Disable City
                // cityBusiness.prop("disabled", true);
                cityBusiness.parent().find(".input-group-btn").hide();
                cityBusiness.parent().css("display", "block");
            }
            if (!stateOtherBusiness) {
                // Disable City (Other)
                cityOtherBusiness.prop("disabled", true);
            }
        }
        else if (!stateBusiness || !stateOtherBusiness) {
            // Hide State (Other)
            stateOtherBusinessField.hide();
            // Disable City
            // cityBusiness.prop("disabled", true);
            cityBusiness.parent().find(".input-group-btn").hide();
            cityBusiness.parent().css("display", "block");
            // Disable and hide City (Other)
            // cityOtherBusiness.prop("disabled", true);
            cityOtherBusinessField.hide();
            // Untick and disable "Others"
            checkedCityOtherBusiness.prop("checked", false);
            // checkedCityOtherBusiness.prop("disabled", true);
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
                   checkedCityOtherBilling.show();
               }
           }
           else {
               // Clear and disable City
            //    cityBilling.val("");
            //    cityBillingName.val("");
            //    cityBillingEntity.val("");
               cityBilling.prop("disabled", true);
               cityBilling.parent().find(".input-group-btn").hide();
               cityBilling.parent().css("display", "block");
               // Clear and disable City (Other)
            //    cityOtherBilling.val("");
               cityOtherBilling.prop("disabled", true);
               // Untick and disable "Others"
               // checkedCityOtherBilling.prop("checked", false);
               checkedCityOtherBilling.hide();
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
              $("#ndph_citynotshownonlist").prop("disabled", false);
              $("#ndph_citynotshownonlist").prop("checked", true);
           }
           else {
               stateOtherBilling.val("");
               stateOtherBillingField.hide();
               stateBillingField.show();
               // alert for debugging purposes
               // alert("nandito sa else");
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
            //    cityBilling.val("");
            //    cityBillingName.val("");
               cityBillingField.hide();
               cityOtherBillingField.show();
           }
           else {
            //    cityOtherBilling.val("");
               cityOtherBillingField.hide();
               cityBillingField.show();
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
            checkedCityOtherBilling.parent().parent().parent().hide();
            
        }
        else if (checkedStateOtherBilling.prop("checked")) {
            // Hide State
            stateBillingField.hide();
            // Hide City
            cityBillingField.hide();
            // Reset and disable "Other" checkbox for City 
            checkedCityOtherBilling.prop("checked", false);
            checkedCityOtherBilling.hide();
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
            checkedCityOtherBilling.hide();
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
   
       // start function on change
       // show/hide PICOT
       $("#ndph_otherpersoninchargeoftraining").change(updatePersonICOTraining);
       // show hide address sections
       $("#ndph_addresssameas").change(updateAddressSections);
       // disable fields
       $("#ndph_addressnotshownonthelist").prop("disabled", true);

    // Other Information Javascript

      // Functions for How did you find out about this program field.

        function participantSource() {
          var pSource = $("#ndph_firstfoundoutaboutthisprogram").val();
          var online = $("#ndph_findoutaboutprogram_ifonline");
          var traditionalMedia = $("#ndph_findoutaboutprogram_iftraditional");
          var wordOfMouth = $("#ndph_findoutaboutprogram_ifwordofmouth");

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



    // CALL FUNCTIONS
    participantSource()

    // CALL FUNTIONS ON CHANGE
    $("#ndph_firstfoundoutaboutthisprogram").change(participantSource);
    
    $("#ndph_school").parent().parent().parent().hide(); //hide school

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
        .append('<p class = "oep_instruct">Fill out the Enrollment Form and one of our Business Development Officers will get in touch with you shortly. Should you wish to contact us directly, email us at <a href="mailto: seell@aim.edu" id="recruitmentEmail">SEELL@aim.edu</a>.</p>')
        .append('<p class = "oep_instruct">Please be reminded that all information you submit in this Form will be recorded in AIM’s database and will be accessed only by authorized AIM personnel. </p>')
        .append('<p class = "oep_instruct"><a href = "/enrollment-guide/" target = "_blank" id = "enrollmentprocess"> Click here to read the step-by-step guide to this online process. </a></p>')
        .append('<p class = "oep_instruct"><i>* - Required fields.</i></p>')
        .insertAfter('.page-header');

        // edit css
        $("p.oep_instruct").css( { "margin-left" : "96px", "margin-right" : "30px" });
        $("#enrollmentprocess").attr("onclick", "return !window.open(this.href, undefined, 'width=800,height=600')");
        $("a#enrollmentprocess").css( { "color" : "blue", "text-decoration" : "underline" });
        $("a#recruitmentEmail").css( { "color" : "blue", "font-weight" : "500" } );


    // Change color and font-style country code and mobile phone
    $("div.description.below").css( { "color" : "gray", "font-weight" : "400", "font-style" : "italic", "font-size" : "10.5" } );
    $("input#mobilephone.text.form-control").css( { "margin-top" : "24px" } );

    // Initialize Program
    //lockProgram();

    // initialize functions
    // updatePersonICOTraining();
    // updateAddressSections();

    // INITIALIZE FORM
    // Set default field and section visibility
    updateAddressSections();
    updatePersonICOTraining();
    initializeHomeAddress();
    initializeBusinessAddress();
    initializeBillingAddress();

    // toggleStateBilling();
    // toggleStateOtherBilling();
    // toggleCityBilling();
    // toggleCityOtherBilling();
    // toggleStateHome();

    // activate checkbox
    $("#ndph_addressnotshownonthelist").prop("disabled", false);
    $("#ndph_addressnotshownonthelist").parent().parent().parent().hide();
    $("#ndph_addressnotshownonlist_city").prop("disabled", false);
    $("#ndph_addressnotshownonlist_city").parent().parent().parent().hide();
    $("#ndph_addressnotshownonthelistbusiness").prop("disabled", false);
    $("#ndph_addressnotshownonthelistbusiness").parent().parent().parent().hide();
    $("#ndph_addressnotshownonlist_citybusiness").prop("disabled", false);
    $("#ndph_addressnotshownonlist_citybusiness").parent().parent().parent().hide();

    // hide and activate fields
    $("#ndph_statenotshownlist").prop("disabled", false);
    $("#ndph_statenotshownlist").parent().parent().parent().hide();
    $("#ndph_citynotshownonlist").prop("disabled", false);
    $("#ndph_citynotshownonlist").parent().parent().parent().hide();

});