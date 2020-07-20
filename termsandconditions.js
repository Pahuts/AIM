$(document).ready(function() {
// TERMS AND CONDITIONS
    $('<div>')
    .addClass('termsandconditions')
    .attr('id', 'termsandconditions')
    // .append('<p id = "enrollhead"> Enrollment Process for Open Enrollment</p>')
    .append('<p class = "termshead"> By submitting this Program Enrollment Form, you are agreeing to the following statements: ​</p> <br />')
        .append('<li class = "termslist"> Participants are required to accomplish and submit this Program Enrollment Form at least 15 working days before program start date to reserve a slot. Those who submit after the deadline may be accommodated pending available slots upon submission of the Program Enrollment Form and payment of the Program fee. </li>')
        .append('<li class = "termslist"> Participants may avail of early bird and/ or group discount. Please contact our Executive Education Office for details.<br />​</li>')
        .append('<li class = "termslist"> Cancellations made by fully-paid participants will be honored only through a written letter of request addressed to:​<br /></li>')
                .append('<p class = "termsrequest"> Office of the School Head </p>')
                .append('<p class = "termsrequest"> School of Executive Education and Lifelong Learning, Asian Institute of Management</p>')
                .append('<p class = "termsrequest"> E-mail: <a href = "seell@aim.edu" id = "termemail">seell@aim.edu</a> (Please state in the subject line: "Cancellation-[Program Name]") <br /><br /></p>')
        .append('<li class = "termslist"> The refund scheme is as follows:</li>')
                .append('<ul class = "refund">1. 100% refund, cancellations made at least 15 working days before program start date.​ </li> ')
                .append('<ul class = "refund">2. 75% refund, cancellations made at least 10 working days before program start date.​ </li> ')
                .append('<ul class = "refund">3. 50% refund, cancellations made at least 5 working days before program start date.​ </li> ')
                .append('<ul class = "refund">4. No refund, cancellations made less than 5 working days before program start date/ No show participants.​ </li> ')

        .append('<br><li class = "termslist"> AIM reserves the right to postpone or cancel any of its programs. AIM will not be held liable for any direct or indirect losses incurred by participants such as, but not limited to, travel arrangements made prior to the program’s cancellation or postponement. Final confirmation of the program will be announced no later than 10 working days before program start date. Refund of program fees, or possible enrollment in other AIM Executive Education programs may be arranged.​ <br></li>')
        .append('<br><li class = "termslist"> Program certificates will only be awarded to fully-paid participants who have completed the program requirements.​</li>')
        .insertAfter('.tab-title');

// PRIVACY NOTICE

     $('<div>')
     .addClass('privacynotice')
     .attr('id', 'privacynotice')
     .append('<p id = "privacyhead"> PRIVACY NOTICE </p>')
     .append('<p>We value your privacy and we uphold your rights under the 2012 Data Privacy Act of the Philippines. By voluntarily submitting this Form, you are hereby allowing AIM to collect, use, consolidate, share, store, and retain your personal data to process the information along with related activities. For more details, you may read the AIM Privacy Policy at <a href = "https://aim.edu/privacy-notice" id = "privacynote"> aim.edu/privacy-notice </a>. </p>')
     
     .insertAfter('[aria-label = "PRIVACY NOTICE"]');
    //javascript css
     $("p#privacyhead").css( { "color" : "purple", "font-weight" : "450"} );
     $("a#privacynote").css( { "color" : "blue", "font-weight" : "400", "text-decoration" : "underline" } );



// JS CSS
    //  $("p#enrollhead").css( { "color" : "purple", "font-weight" : "600"});
     $("p.termsrequest").css( {"margin-left" : "80px", "margin-bottom" : "2.5px"} );
     $("li.termslist").css( { "margin-left" : "15px", "text-align" : "justify"});
     $("a#termemail").css( { "color" : "blue", "font-weight" : "400", "text-decoration" : "underline" } );
     $("b.enrollstep").css( { "color" : "purple" , "font-weight" : "550", "font-size" : "15"} );

});