$(document).ready(function() {

    $('<div>')
    .addClass('instruction')
    .attr('id', 'instruction')
    .append('<p>Our team of expert Business Development officers can help analyze your organization’s training needs and provide you with the best customized program specially designed to address your needs.</p>')
    .append('<p><br>Fill out the Inquiry Form and one of our Business Development Officers will get in touch with you shortly. Should you wish to contact us directly, email us at <a href="mailto: seell@aim.edu" id="recruitmentEmail">seell@aim.edu</a>.</p>')
    .append('<p><br>Please be reminded that all information you submit in this Form will be recorded in AIM’s database and will be accessed only by authorized AIM personnel.</p>')
    .append('<p><i><br>* - Required fields.</i></p>')
    .insertBefore('#EntityFormControl_4f924613e59fea11a812000d3a82bde6');

     $("a#recruitmentEmail").css( { "color" : "blue", "font-weight" : "400", "text-decoration" : "underline" } );


     $('<div>')
     .addClass('privacynotice')
     .attr('id', 'privacynotice')
     .append('<p id = "privacyhead"> PRIVACY NOTICE </p>')
     .append('<p>We value your privacy and we uphold your rights under the 2012 Data Privacy Act of the Philippines. By voluntarily submitting this Form, you are hereby allowing AIM to collect, use, consolidate, share, store, and retain your personal data to process the information along with related activities. For more details, you may read the AIM Privacy Policy at <a href = "https://aim.edu/privacy-notice" id = "privacynote"> aim.edu/privacy-notice </a>. </p>')
     
     .insertBefore('#InsertButton');

     $("p#privacyhead").css( { "color" : "purple", "font-weight" : "450"} );
     $("a#privacynote").css( { "color" : "blue", "font-weight" : "400", "text-decoration" : "underline" } );


});