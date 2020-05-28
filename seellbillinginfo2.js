$(document).ready(function() {


    function updateAddressSections() { //hide addresses
           var addressType = $("#ndph_addresssameas").val();
           var homeAddress = $(".section[data-name='blling_information_home_address_section']").closest("fieldset");
           var businessAddress = $(".section[data-name='blling_information_business_address_section']").closest("fieldset");
           var billingAddress = $(".section[data-name='blling_information_billing_address_section']").closest("fieldset");
   
           switch (addressType) {
               case "649840000":
                   homeAddress.show();
                   businessAddress.hide();
                   clearBillingAddress()
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
               // checkedCityOtherBilling.prop("checked", false);
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
              $("#ndph_citynotshownonlist").prop("disabled", true);
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
   
   
       // initialize funtions
       updatePersonICOTraining();
       updateAddressSections();
       toggleStateBilling();
       toggleStateOtherBilling();
       toggleCityBilling();
       toggleCityOtherBilling();
       
       // start function on change
       // show/hide PICOT
       $("#ndph_otherpersoninchargeoftraining").change(updatePersonICOTraining);
       // show hide address sections
       $("#ndph_addresssameas").change(updateAddressSections);
       // disable or enable billing address sections
       $("#ndph_countrybilling").change(toggleStateBilling);
       $("#ndph_statebilling").change(toggleCityBilling);
       $("#ndph_stateotherbilling").change(toggleCityBilling);
       $("#ndph_statenotshownlist").change(toggleStateOtherBilling);
       $("#ndph_citynotshownonlist").change(toggleCityOtherBilling);
       
   });