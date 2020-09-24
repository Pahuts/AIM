$(document).ready(function() {
  // Custom Inquiry Instructions
    $('<div>')
    .addClass('instruction')
    .attr('id', 'instruction')
    .append('<p>Our team of expert Business Development officers can help analyze your organization’s training needs and provide you with the best customized program specially designed to address your needs.</p>')
    .append('<p><br>Fill out the Inquiry Form and one of our Business Development Officers will get in touch with you shortly. Should you wish to contact us directly, email us at <a href="mailto: seell@aim.edu" id="recruitmentEmail">seell@aim.edu</a>.</p>')
    .append('<p><br>Please be reminded that all information you submit in this Form will be recorded in AIM’s database and will be accessed only by authorized AIM personnel.</p>')
    .append('<p><i><br>* - Required fields.</i></p>')
    .insertBefore('#EntityFormControl_4f924613e59fea11a812000d3a82bde6');

     $("a#recruitmentEmail").css( { "color" : "blue", "font-weight" : "400", "text-decoration" : "underline" } );
// Mailing List Unsubscribe info
    $('<div>')
    .addClass('mailinglist')
    .attr('id', 'mailinglist')
    .css("margin-top", "20px")
    .append('<p>You may unsubscribe and withdraw your consent to receive AIM communications at any time.</p>')
    .insertAfter('#ndph_yessignmeup');
// Custom Inquiry Privacy Notice
     $('<div>')
     .addClass('privacynotice')
     .append('<p>We value your privacy and we uphold your rights under the 2012 Data Privacy Act of the Philippines. By voluntarily submitting this Form, you are hereby allowing AIM to collect, use, consolidate, share, store, and retain your personal data to process the information along with related activities. For more details, you may read the AIM Privacy Policy at <a href = "https://aim.edu/privacy-notice" id = "privacynote" target="_blank"> https://aim.edu/privacy-notice</a>. </p>')
     .insertAfter('[aria-label="Privacy Notice"]');
    //  .insertBefore('#InsertButton');

     $("p#privacyhead").css( { "color" : "purple", "font-weight" : "450"} );
     $("a#privacynote").css( { "color" : "blue", "font-weight" : "400", "text-decoration" : "underline" } );


    //autopopulate seell program type
    $("#ndph_seellprogramtype").val("649840001");
    //school variables
    var school = $("#ndph_school");
    var schoolName = $("#ndph_school_name");
    var schoolEntity = $("#ndph_school_entityname");
    //autopopulate school field
    school.val("f15b7ce7-0f17-ea11-a811-000d3a82bec6");
    schoolName.val("School of Executive Education and Lifelong Learning")
    schoolEntity.val("ndph_school");
    //hide fields
    $("#ndph_seellprogramtype").parent().parent().hide();
    $("#ndph_school").parent().parent().parent().hide();

    //Display Counter
    $('#description').after('<div class="pull-right" style="display: inline"><i><span id="description_charNum">0</span><span> out of 1000 Max Characters</span></i></div>');
    //Character Counter for Inquiry/Message field
    $('#description').keyup(function () {
        var max = 1000;
          var len = $(this).val().length;
          if (len > max) {
            console.log('You have reached the limit');
          } else {
            $('#description_charNum').text(len);
          }
    });

    // Disable applicant info fields
    $("#firstname").prop('disabled', true);
    $("#middlename").prop('disabled', true);
    $("#lastname").prop('disabled', true);
    $("#ndph_suffix").prop('disabled', true);
    $("#emailaddress1").prop('disabled', true);
    $("#ndph_countrycodemobilenew").prop('disabled', true);
    $("#ndph_countrycodemobilenew_name").parent().find('.input-group-btn').hide();
    $("#mobilephone").prop('disabled', true);

    //rearrange optionset values of sign me up
    option1 = $('#ndph_yessignmeup_0'); //no
    option2 = $('#ndph_yessignmeup_1'); //yes
    label1 = $("label[for='ndph_yessignmeup_0']");
    label2 = $("label[for='ndph_yessignmeup_1']");

    copyOption1 = option1.clone();
    copyOption2 = option2.clone();
    copyLabel1 = label1.clone();
    copyLabel2 = label2.clone();

    option1.replaceWith(copyOption2);
    option2.replaceWith(copyOption1);
    label1.replaceWith(copyLabel2);
    label2.replaceWith(copyLabel1);

    //change radiobutton into checkbox
    $(':radio').attr('type','checkbox');
    //edit with css
    $("#ndph_yessignmeup_0").css({"margin-left": "20px", "margin-right": "5px"}); //yes
    $("#ndph_yessignmeup_1").css({"margin-left": "20px", "margin-right": "5px"}); //no
    //make checkbox behave like radio button
    $("input:checkbox").click(function(){
        var group = "input:checkbox[name='"+$(this).attr("name")+"']";
        $(group).attr("checked",false);
        $(this).attr("checked",true);
    });

    /*Add a div for separating the two options for the mailing list */
    $("#ndph_yessignmeup_0").before('<div id="hideOnMin" class="hideOnMin">'); 
});