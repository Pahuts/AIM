$(document).ready(function() {

    $('<div>')
    .addClass('enrollmentprocess')
    .attr('id', 'enrollmentprocess')
    .append('<p id = "enrollhead"> Enrollment Process for Open Enrollment</p>')
    .append('<p><b class = "enrollstep">STEP 1:</b> Submit your Open Enrollment application form.​</p>')
    .append('<p><b class = "enrollstep">STEP 2:</b> An AIM Officer will review your application and get in touch with you to assess your qualification further.​</p>')
    .append('<p><b class = "enrollstep">STEP 3:</b> An invite link from AIM will be emailed to you to create an account to the AIM Portal.​</p>')
    .append('<p><b class = "enrollstep">STEP 4:</b> Once you have an account to the AIM Portal and are logged in, you will be able to access the application form you submitted and continue with the other requirements to complete your enrollment.​</p>')
    .append('<p><b class = "enrollstep">STEP 5:</b> Pay the required fees.</p>')


    .insertBefore('#WebFormPanel');
     $("p#enrollhead").css( { "color" : "purple", "font-weight" : "600"})
     $("a#recruitmentEmail").css( { "color" : "blue", "font-weight" : "400", "text-decoration" : "underline" } );
     $("b.enrollstep").css( { "color" : "purple" , "font-weight" : "550"} );

});