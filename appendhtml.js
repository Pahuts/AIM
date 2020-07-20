function appendHTML(){
var programtype = $("#ndph_programtypeapplication");

    if (programtype == "649840000") 
    {
    $('<div>')
    .addClass('instruction')
    .attr('id', 'instruction')
    .append('<p>Fill out the application form below and one of our Recruitment Officers will get in touch with you shortly. Should you wish to contact us directly, email us at <a href="mailto: recruitment@aim.edu" id="recruitmentEmail">recruitment@aim.edu</a>.</p>')
    .append('<p>Please be reminded that all information you submit in this Form will be recorded in AIM’s database and will be accessed only by authorized AIM personnel.</p>')
    .append('<p><a href="" id="applicationGuide">Click here to read the step-by-step guide to this online graduate degree application process.</a></p>')
    .append('<p><i>* - Required fields.</i></p>')
    .insertBefore('#WebFormControl_0b2e4feb8d69ea11a812000d3a82bec6_ProgressIndicator');
     $("a#applicationGuide").css( { "color" : "blue", "font-weight" : "400", "text-decoration" : "underline" } );
     $("a#recruitmentEmail").css( { "color" : "blue", "font-weight" : "400", "text-decoration" : "underline" } );
 
     } else if (programtype == "649840001")
     {
 // seell
     $('<div>')
     .addClass('seellinstruction')
     .attr('id', 'seellinstruction')
     .append('<p>Our team of expert Business Development officers can help analyze your organization’s training needs and provide you with the best customized program specially designed to address your needs.</p>')
     .append('Please fill out the form below and one of our Business Development officers will get in touch with you shortly. Should you wish to contact us directly, email us at <a href="mailto: seell@aim.edu" id="recruitmentEmail">seell@aim.edu.</a></p>')
     .append('<p><i>* - Required fields.</i></p>')
     .insertBefore('#WebFormControl_0b2e4feb8d69ea11a812000d3a82bec6_ProgressIndicator');
        
     $("a#recruitmentEmail").css( { "color" : "blue", "font-weight" : "400", "text-decoration" : "underline" } );
     }
 }
 