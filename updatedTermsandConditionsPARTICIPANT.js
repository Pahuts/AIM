$(document).ready(function() {
// Mailing List Unsubcribe Info
    $('<div>')
    .addClass('mailinglist')
    .attr('id', 'mailinglist')
    // .css("margin-top", "20px")
    .append('<p>You may unsubscribe and withdraw your consent to receive AIM communications at any time.</p>')
    .insertAfter('#ndph_joinourmalilinglist');

        // TERMS AND CONDITIONS
    $('<div>')
    .addClass('termsandconditions')
    .attr('id', 'termsandconditions')
    // .append('<p id = "enrollhead"> Enrollment Process for Open Enrollment</p>')
    //.append('<p class = "termshead"> By submitting this Program Enrollment Form, you are agreeing to the following statements: ​</p> <br />')
    .append('<p class = "termshead"> By submitting this Program Enrollment Form, you are agreeing to the following statements: ​</p>')
        .append('<li class = "termslist"> Participants are required to accomplish and submit this Program Enrollment Form at least 15 working days before program start date to reserve a slot. Those who submit after the deadline may be accommodated pending available slots upon submission of the Program Enrollment Form and payment of the Program fee. </li>')
        .append('<li class = "termslist"> Participants may avail of early bird and/ or group discount. Please contact our Executive Education Office for details.​</li>')
        .append('<li class = "termslist"> Cancellations made by fully-paid participants will be honored only through a written letter of request addressed to:​</li>')
                .append('<p class = "termsrequest"> Office of the School Head </p>')
                .append('<p class = "termsrequest"> School of Executive Education and Lifelong Learning, Asian Institute of Management</p>')
                .append('<p class = "termsrequest"> E-mail: <a href = "seell@aim.edu" id = "termemail">seell@aim.edu</a> (Please state in the subject line: "Cancellation-[Program Name]") <br /></p>')
        .append('<li class = "termslist"> The refund scheme is as follows:</li>')
                .append('<ul class = "refund">1. 100% refund, cancellations made at least 15 working days before program start date.​ </li> ')
                .append('<ul class = "refund">2. 75% refund, cancellations made at least 10 working days before program start date.​ </li> ')
                .append('<ul class = "refund">3. 50% refund, cancellations made at least 5 working days before program start date.​ </li> ')
                .append('<ul class = "refund">4. No refund, cancellations made less than 5 working days before program start date/ No show participants.​ </li> ')
        .append('<li class = "termslist"> AIM reserves the right to postpone or cancel any of its programs. AIM will not be held liable for any direct or indirect losses incurred by participants such as, but not limited to, travel arrangements made prior to the program’s cancellation or postponement. Final confirmation of the program will be announced no later than 10 working days before program start date. Refund of program fees, or possible enrollment in other AIM Executive Education programs may be arranged.</li>')
        .append('<li class = "termslist"> Program certificates will only be awarded to fully-paid participants who have completed the program requirements.​</li>')
        .insertAfter('[aria-label = "Terms and Conditions"]');

        // PRIVACY NOTICE
     $('<div>')
     .addClass('privacynotice')
     .attr('id', 'privacynotice')
     .append('<p>We value your privacy and we uphold your rights under the 2012 Data Privacy Act of the Philippines. By voluntarily submitting this Form, you are hereby allowing AIM to collect, use, consolidate, share, store, and retain your personal data to process the information along with related activities. For more details, you may read the AIM Privacy Policy at <a href = "https://aim.edu/privacy-notice" id = "privacynote" target=”_blank”> aim.edu/privacy-notice</a>. </p>')
     
     .insertAfter('[aria-label = "Privacy Notice"]');
     
    // Privacy Notice CSS
     
     $("a#privacynote").css( {"font-weight" : "400", "text-decoration" : "underline" } );

//     // append Join Our Mailing List
//      $('<div>')
//      .addClass('joinmail')
//      .attr('id', 'joinmail')
//      .append('<p>By joining our mailing list, you may receive emails, calls, or text messages on programs, news, and events from AIM. Would you like to sign up?​</p>')
     
//      .insertAfter('[aria-label = "JOIN OUR MAILING LIST"]');    

        // Terms and Conditions CSS
    //  $("p#enrollhead").css( { "color" : "purple", "font-weight" : "600"});
     $("p.termsrequest").css( {"margin-left" : "80px", "margin-bottom" : "2.5px"} );
     //$("ul.refund").css({ "margin-left" : "45px"});
     $("ul.refund").css({ "margin-left" : "40px", "margin-bottom" : "0px"});
     //$("li.termslist").css( { "margin-left" : "15px", "text-align" : "justify", "padding" : "10px 0 10px 20px", "text-indent" : "-1.5em"});
     $("li.termslist").css( { "margin-left" : "0px", "text-align" : "justify", "padding" : "10px 0 0px 25px", "text-indent" : "-1.5em"});
     $("a#termemail").css( { "font-weight" : "400", "text-decoration" : "underline" } );
     $("b.enrollstep").css( {"font-weight" : "550", "font-size" : "15"} );

    function checkAgreements(){
        var agreement1 = $("#ndph_agreement1").prop("checked");
        var agreement2 = $("#ndph_agreement2").prop("checked");
        var agreement3 = $("#ndph_agreement3").prop("checked");
        
        if (agreement1 && agreement2 && agreement3) {
            $('#NextButton').removeAttr("disabled");
        } else {
            $('#NextButton').attr('disabled', 'disabled');
        }
    }
    
    checkAgreements();

    $("#ndph_agreement1").change(checkAgreements);
    $("#ndph_agreement2").change(checkAgreements);
    $("#ndph_agreement3").change(checkAgreements);

     // Change radio button to checkbox
     $("#ndph_joinourmalilinglist_1").attr('type','checkbox');
     $("#ndph_joinourmalilinglist_0").attr('type','checkbox');
     $("input#ndph_joinourmalilinglist_1").css("margin-left","1em");
     $("legend.section-title.show-bar").css("margin-bottom","-10px");

        //rearrange optionset values of sign me up
        option1 = $('#ndph_joinourmalilinglist_0'); //no
        option2 = $('#ndph_joinourmalilinglist_1'); //yes
        label1 = $("label[for='ndph_joinourmalilinglist_0']");
        label2 = $("label[for='ndph_joinourmalilinglist_1']");

        copyOption1 = option1.clone();
        copyOption2 = option2.clone();
        copyLabel1 = label1.clone();
        copyLabel2 = label2.clone();

        option1.replaceWith(copyOption2);
        option2.replaceWith(copyOption1);
        label1.replaceWith(copyLabel2);
        label2.replaceWith(copyLabel1);
        
        //edit with css
        $("#ndph_joinourmalilinglist_0").css({"margin-left": "20px", "margin-right": "5px"}); //yes
        $("#ndph_joinourmalilinglist_0").addClass("convertCheckbox");

    $("#ndph_joinourmalilinglist_1").css({"margin-left": "20px", "margin-right": "5px"}); //no
    $("#ndph_joinourmalilinglist_1").addClass("convertCheckbox");
    //make checkbox behave like radio button
    $("input:checkbox[class='convertCheckbox']").click(function(){
        var group = "input:checkbox[class='convertCheckbox']";
        $(group).attr("checked",false);
        $(this).attr("checked",true);
    });


    // Terms and Conditions CSS   
    //  $("p#enrollhead").css( { "font-weight" : "600"});
    //  $("p.termsrequest").css( {"margin-left" : "80px", "margin-bottom" : "2.5px"} );
    //  $("ul.refund").css({ "margin-left" : "45px"});
    //  $("li.termslist").css( { "margin-left" : "15px", "text-align" : "justify", "padding" : "10px 0 10px 20px", "text-indent" : "-1.5em"});
    //  $("a#termemail").css( { "font-weight" : "400", "text-decoration" : "underline" } );
    //  $("b.enrollstep").css( { "font-weight" : "550", "font-size" : "15"} );



}); 