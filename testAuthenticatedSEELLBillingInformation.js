$(document).ready(function() {
    // Show/hide sections on load
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

    function updateAddressSections() { //hide addresses
           var addressType = $("#ndph_addresssameas").val();
           var homeAddress = $(".section[data-name='blling_information_home_address_section']").closest("fieldset");
           var businessAddress = $(".section[data-name='blling_information_business_address_section']").closest("fieldset");
           var billingAddress = $(".section[data-name='blling_information_billing_address_section']").closest("fieldset");
           var homeCity = $("#ndph_city").val();
           var homeCityName = $("#ndph_city_name").val();
           var homeCityOthers = $("#address1_city").val();
           var businessCity = $("#ndph_mequestion13").val();
           var businessCityName = $("#ndph_mequestion13_name").val();
           var businessCityOthers = $("#ndph_citybusinessothers").val();
           // CHECKBOXES
           var homeCityNotOnList = $("#ndph_addressnotshownonlist_city").prop("checked");
           var businessCityNotOnList = $("#ndph_addressnotshownonlist_citybusiness").prop("checked");   
   
           switch (addressType) {
               case "649840000":
                   homeAddress.show();
                   businessAddress.hide();
                   clearBillingAddress();
                   billingAddress.hide();
                    
                    // $("#ndph_countrybilling").off("change", toggleStateBilling);     // Country
                    // $("#ndph_statebilling").off("change", toggleCityBilling);      // State
                    // $("#ndph_stateotherbilling").off("change", toggleCityBilling);       // State (Others)
                    // $("#ndph_statenotshownlist").off("change", toggleStateOtherBilling);        // State "Others" checkbox
                    // $("#ndph_citynotshownonlist").off("change", toggleCityOtherBilling);       // City "Others" checkbox
                        // enable billing address fields
                    $("#ndph_countrybilling").prop("disabled", false);
                    $("#ndph_statebilling").prop("disabled", false);
                    $("#ndph_citybilling").prop("disabled", false);
                    $("#ndph_statenotshownlist").prop("disabled", false);
                    $("#ndph_citynotshownonlist").prop("disabled", false);
                    $("#ndph_stateotherbilling").prop("disabled", false);
                    $("#ndph_cityotherbilling").prop("disabled", false);
                        // copy home address
                    $("#ndph_citynotshownonlist").prop("checked", homeCityNotOnList);
                    $("#ndph_cityotherbilling").val(homeCityOthers);
                    $("#ndph_citybilling").val(homeCity);
                    $("#ndph_citybilling_name").val(homeCityName);
                    $("#ndph_citybilling_entityname").val("ndph_city");   
                   break;

               case "649840001":
                clearBillingAddress();        
                homeAddress.hide();
                businessAddress.show();
                // $("#ndph_countrybilling").off("change", toggleStateBilling);     // Country
                // $("#ndph_statebilling").off("change", toggleCityBilling);      // State
                // $("#ndph_stateotherbilling").off("change", toggleCityBilling);       // State (Others)
                // $("#ndph_statenotshownlist").off("change", toggleStateOtherBilling);        // State "Others" checkbox
                // $("#ndph_citynotshownonlist").off("change", toggleCityOtherBilling);       // City "Others" checkbox
                    // enable billing address fields
                $("#ndph_countrybilling").prop("disabled", false);
                $("#ndph_statebilling").prop("disabled", false);
                $("#ndph_citybilling").prop("disabled", false);
                $("#ndph_statenotshownlist").prop("disabled", false);
                $("#ndph_citynotshownonlist").prop("disabled", false);
                $("#ndph_stateotherbilling").prop("disabled", false);
                $("#ndph_cityotherbilling").prop("disabled", false);
                       // copy business address
                $("#ndph_citynotshownonlist").prop("checked", businessCityNotOnList);
                $("#ndph_cityotherbilling").val(businessCityOthers);
                $("#ndph_citybilling").val(businessCity);
                $("#ndph_citybilling_name").val(businessCityName);
                $("#ndph_citybilling_entityname").val("ndph_city");                     
                billingAddress.hide();
                break;

               case "649840002":
                clearBillingAddress();
                // initializeBillingAddress();
                //activate fields
                toggleStateBilling();
                $("#ndph_citynotshownonlist").prop("disabled", false);
                // $("#ndph_countrybilling").change(toggleStateBilling);     // Country
                // $("#ndph_statebilling").change(toggleCityBilling);      // State
                // $("#ndph_stateotherbilling").change(toggleCityBilling);       // State (Others)
                // $("#ndph_statenotshownlist").change(toggleStateOtherBilling);        // State "Others" checkbox
                // $("#ndph_citynotshownonlist").change(toggleCityOtherBilling);       // City "Others" checkbox
                // hide fields
                businessAddress.hide();
                homeAddress.hide();
                billingAddress.show();
                break;

               default:
                clearBillingAddress();
                // activate fields
                // initializeBillingAddress();
                toggleStateBilling();
                // $("#ndph_countrybilling").change(toggleStateBilling);     // Country
                // $("#ndph_statebilling").change(toggleCityBilling);      // State
                // $("#ndph_stateotherbilling").change(toggleCityBilling);       // State (Others)
                // $("#ndph_statenotshownlist").change(toggleStateOtherBilling);        // State "Others" checkbox
                // $("#ndph_citynotshownonlist").change(toggleCityOtherBilling);       // City "Others" checkbox
                // show and hide address sections
                homeAddress.hide();
                businessAddress.hide();
                billingAddress.show();

                break;
           }
       }
   
       function clearBillingAddress() { // clear billing address
           $("#ndph_street1").val("");
           $("#ndph_street2").val("");
           $("#ndph_street3").val("");
           $("#ndph_citybilling").val("");
           $("#ndph_citybilling_name").val("");
           $("#ndph_citybilling_entityname").val("");
           $("#ndph_cityotherbilling").val("");
           $("#ndph_citynotshownonlist").prop("checked",false);
           $("#ndph_statebilling").val("");
           $("#ndph_statebilling_name").val("");
           $("#ndph_statebilling_entityname").val("");
           $("#ndph_stateotherbilling").val("");
           $("#ndph_statenotshownlist").prop("checked",false);
           $("#ndph_postalzipcodebilling").val("");
           $("#ndph_countrybilling").val("");
           $("#ndph_countrybilling_name").val("");
           $("#ndph_countrybilling_entityname").val("");
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
            //    cityHome.val("");
            //    cityHomeName.val("");
            //    cityHomeEntity.val("");
               cityHome.prop("disabled", true);
               cityHome.parent().find(".input-group-btn").hide();
               cityHome.parent().css("display", "block");
               // Clear and disable City (Other)
            //    cityOtherHome.val("");
            //    cityOtherHome.prop("disabled", true);
               // Untick and disable "Others"
            //    checkedCityOtherHome.prop("checked", false);
            //    checkedCityOtherHome.prop("disabled", true);
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
               checkedCityOtherHome.prop("disabled", false);
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
            //    cityHome.val("");
            //    cityHomeName.val("");
            //    cityHomeEntity.val("");
               cityHomeField.hide();
               cityOtherHomeField.show();
           }
           else {
            //    cityOtherHome.val("");
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
            //    cityBusiness.val("");
            //    cityBusinessName.val("");
            //    cityBusinessEntity.val("");
               cityBusiness.prop("disabled", true);
               cityBusiness.parent().find(".input-group-btn").hide();
               cityBusiness.parent().css("display", "block");
               // Clear and disable City (Other)
            //    cityOtherBusiness.val("");
               cityOtherBusiness.prop("disabled", true);
               // Untick and disable "Others"
            //    checkedCityOtherBusiness.prop("checked", false);
            //    checkedCityOtherBusiness.prop("disabled", true);
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
               checkedCityOtherBusiness.prop("disabled", false);
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
            //    cityBusiness.val("");
            //    cityBusinessName.val("");
            //    cityBusinessEntity.val("");
               cityBusinessField.hide();
               cityOtherBusinessField.show();
           }
           else {
            //    cityOtherBusiness.val("");
               cityOtherBusinessField.hide();
               cityBusinessField.show();
           }
       }
       // INITIALIZE ADDRESS FIELDS
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
   
   
    //    function mirrorHomeAddress() {
    //        var homeStreet1 = $("#address1_line1").val();
    //        var homeStreet2 = $("#address1_line2").val();
    //        var homeStreet3 = $("#address1_line3").val();
    //        var homeCountry = $("#ndph_country").val();
    //        var homeCountryName = $("#ndph_country_name").val();
   
    //        var homeZIPPostalCode = $("#address1_postalcode").val();
    //        var homeState = $("#ndph_state").val();
    //        var homeStateName = $("#ndph_state_name").val();
   
    //        var homeStateOthers = $("#address1_stateorprovince").val();
    //        var homeStateNotOnList = $("#ndph_addressnotshownonthelist").prop("checked");
    //        $("#ndph_addressnotshownonthelist").prop("disabled", false);
    //        $("#ndph_addressnotshownonthelist").parent().parent().parent().hide();
    //        var homeCity = $("#ndph_city").val();
    //        var homeCityName = $("#ndph_city_name").val();
   
    //        var homeCityOthers = $("#address1_city").val();
    //        var homeCityNotOnList = $("#ndph_addressnotshownonlist_city").prop("checked");
    //        $("#ndph_addressnotshownonlist_city").prop("disabled", false);
    //        $("#ndph_addressnotshownonlist_city").parent().parent().parent().hide();
           
           
    //        $("#ndph_street1business").val(homeStreet1);                                            // Street 1
    //        $("#ndph_street2business").val(homeStreet2);                                            // Street 2
    //        $("#ndph_street3business").val(homeStreet3);                                            // Street 3
   
    //        $("#ndph_mequestion11").val(homeCountry);                                               // Country GUID
    //        $("#ndph_mequestion11_name").val(homeCountryName);                                      // Country name
    //        $("#ndph_mequestion11_entityname").val("ndph_country");                                 // Country entity
   
    //        $("#ndph_mequestion14").val(homeZIPPostalCode);                                         // ZIP/Postal Code
   
    //        $("#ndph_mequestion12").val(homeState);                                                 // State GUID
    //        $("#ndph_mequestion12_name").val(homeStateName);                                        // State name
    //        $("#ndph_mequestion12_entityname").val("ndph_state");                                   // State entity
   
    //        $("#ndph_statebusinessothers").val(homeStateOthers);                                    // State (others)
    //        $("#ndph_addressnotshownonthelistbusiness").prop("checked", homeStateNotOnList);        // State not on list
    //        $("#ndph_addressnotshownonthelistbusiness").parent().parent().parent().hide();
    //        $("#ndph_addressnotshownonthelistbusiness").prop("disabled", false);

    //        $("#ndph_mequestion13").val(homeCity);                                                  // City GUID
    //        $("#ndph_mequestion13_name").val(homeCityName);                                         // City name
    //        $("#ndph_mequestion13_entityname").val("ndph_city");                                    // City entity
   
    //        $("#ndph_citybusinessothers").val(homeCityOthers);                                      // City (others)
    //        $("#ndph_addressnotshownonlist_citybusiness").prop("checked", homeCityNotOnList);       // City not on list
    //        $("#ndph_addressnotshownonlist_citybusiness").parent().parent().parent().hide();
    //        $("#ndph_addressnotshownonlist_citybusiness").prop("disabled", false);   

    //        // Update (Other) fields
    //        if ($("#ndph_addressnotshownonthelistbusiness").prop("checked")) {      // State
    //            $("#ndph_mequestion12").parent().parent().parent().hide();
    //            $("#ndph_statebusinessothers").parent().parent().show();
    //        }
    //        else {
    //            $("#ndph_statebusinessothers").parent().parent().hide();
    //            $("#ndph_mequestion12").parent().parent().parent().show();
    //        }
    //        if ($("#ndph_addressnotshownonlist_citybusiness").prop("checked")) {      // City
    //            $("#ndph_mequestion13").parent().parent().parent().hide();
    //            $("#ndph_citybusinessothers").parent().parent().show();
    //        }
    //        else {
    //            $("#ndph_citybusinessothers").parent().parent().hide();
    //            $("#ndph_mequestion13").parent().parent().parent().show();
    //        }        
    //    }
   
       // initialize functions
       // updatePersonICOTraining();
       // updateAddressSections();
       toggleStateBilling();
       toggleStateOtherBilling();
       toggleCityBilling();
       toggleCityOtherBilling();
       toggleStateHome();
    //    mirrorHomeAddress();
   
           // INITIALIZE FORM
       // Set default field and section visibility
       // updateAddressSections(); // don't run this onload
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
       
       // enable fields to ensure it is saved
       $("#ndph_addressnotshownonthelist").prop("disabled", false);
       $("#ndph_addressnotshownonlist_city").prop("disabled", false);
       $("#ndph_addressnotshownonthelistbusiness").prop("disabled", false);
       $("#ndph_addressnotshownonlist_citybusiness").prop("disabled", false);
       $("#address1_city").prop("disabled", false);
       $("#ndph_citybusinessothers").prop("disabled", false);
    //    hide fields
       $("#ndph_addressnotshownonthelist").parent().parent().parent().hide();
       $("#ndph_addressnotshownonlist_city").parent().parent().parent().hide();
       $("#ndph_addressnotshownonthelistbusiness").parent().parent().parent().hide();
       $("#ndph_addressnotshownonlist_citybusiness").parent().parent().parent().hide();
   
       // start function on change
       // show/hide PICOT
       $("#ndph_otherpersoninchargeoftraining").change(updatePersonICOTraining);
       // show hide address sections
       $("#ndph_addresssameas").change(updateAddressSections);

   
       // disable fields
       //    $("#ndph_addressnotshownonthelist").prop("disabled", true);
       
   
       // update home address fields 
       // $("#ndph_country").change(toggleStateHome);
       // disable or enable billing address sections
       // $("#ndph_countrybilling").change(toggleStateBilling);
       // $("#ndph_statebilling").change(toggleCityBilling);
       // $("#ndph_stateotherbilling").change(toggleCityBilling);
       // $("#ndph_statenotshownlist").change(toggleStateOtherBilling);
       // $("#ndph_citynotshownonlist").change(toggleCityOtherBilling);
       
   });