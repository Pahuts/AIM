$(document).ready(function() {
    // Function declarations
    // Update School based on Program; execute only after OData query returns "programs" variable
    function updateSchool() {
        var school = $("#ndph_school");
        var schoolName = $("#ndph_school_name");
        var schoolEntity = $("#ndph_school_entityname");
        var programType = $("#ndph_programtype");
        var degreeProgram = $("#ndph_program");
        var seellProgram = $("#ndph_seellopenprograms");

        var SEELL = schools.find(
            function(school) {
                // Search in "schools" array for SEELL element
                return school.ndph_acronym == "SEELL";
            }
        );

        var programID;  // Variable to track which program (Degree or SEELL) field should be evaluated based on Program Type

        // Set programID
        switch (programType.val()) {
            case "649840000":
                programID = degreeProgram.val();
                break;
            case "649840001":
                programID = seellProgram.val();
                break;
            default:
                programID = "";
                break;
        }

        // Get current program based on programID
        var currentProgram = {};
        if (programID) {
            currentProgram = programs.find(
                function(program) {
                    // Search in "programs" array for corresponding program element
                    return program.ndph_programid == programID;
                }
            );
        }

        // Set School
        if (currentProgram.ndph_school) {
            school.val(currentProgram.ndph_school.Id);
            schoolName.val(currentProgram.ndph_school.Name);
            schoolEntity.val("ndph_school");
        }
        else if (programType.val() == "649840002") {    // If Program Type is Custom, set school to SEELL
            school.val(SEELL.ndph_schoolid);
            schoolName.val(SEELL.ndph_name);
            schoolEntity.val("ndph_school");
        }
        else {      // Triggers if a program has no school assigned or if corresponding program field is empty
            school.val("");
            schoolName.val("");
            schoolEntity.val("");
        }
    }

    // Toggle visibility for Program fields based on Program Type
    function toggleProgramType() {
        var programType = $("#ndph_programtype");
        var degreeProgram = $("#ndph_program");
        var degreeProgramName = $("#ndph_program_name");
        var degreeProgramEntity = $("#ndph_program_entityname");
        var degreeProgramField = degreeProgram.parent().parent();
        var openProgram = $("#ndph_seellopenprograms");
        var openProgramName = $("#ndph_seellopenprograms_name");
        var openProgramEntity = $("#ndph_seellopenprograms_entityname");
        var openProgramField = openProgram.parent().parent();
        var seellProgramType = $("#ndph_seellprogramtype");
        var applicanttype = $("#ndph_seellapplicanttype");
        var applicanttypeLabel = $("#ndph_seellapplicanttype_label");
        var applicanttypeName = $("#ndph_seellapplicanttype_name");
        var applicanttypeEntity = $("#ndph_seellapplicanttype_entityname");
        var applicanttypeField = applicanttype.parent().parent().parent();
        var company = $("#ndph_company");
        var companyLabel = $("#ndph_company_label");
        var companyName = $("#ndph_company_name");
        var companyEntity = $("#ndph_company_entityname");
        var companyField = company.parent().parent();
        var industry = $("#ndph_industry");
        var industryLabel = $("#ndph_industry_label");
        var industryName = $("#ndph_industry_name");
        var industryEntity = $("#ndph_industry_entityname");
        var industryField = industry.parent().parent().parent();

        switch (programType.val()) {
            case "649840000":   // Degree
                openProgram.val("");
                openProgramName.val("");
                openProgramEntity.val("");
                openProgramField.hide();
                degreeProgramField.show();
                applicanttype.val("");
                applicanttypeName.val("");
                applicanttypeEntity.val("");
                applicanttypeField.hide();
                company.val("");
                companyName.val("");
                companyEntity.val("");
                companyField.hide();
                industry.val("");
                industryName.val("");
                industryEntity.val("");
                industryField.hide();
                seellProgramType.val("");
                $("#instructionOpenProgram").css("display", "none");
                $("#instruction").css("display", "block");
                break;
            case "649840001":    // Open
                degreeProgram.val("");
                degreeProgramName.val("");
                degreeProgramEntity.val("");
                degreeProgramField.hide();
                openProgramField.show();
                applicanttypeField.show();
                companyField.show();
                $("#ndph_company").parent().addClass("required");
                industryField.show();
                seellProgramType.val("649840000");
                $("#instructionOpenProgram").css("display", "block");
                $("#instruction").css("display", "none");
                break;
            case "649840002":   // Custom
                degreeProgram.val("");
                degreeProgramName.val("");
                degreeProgramEntity.val("");
                degreeProgramField.hide();
                openProgram.val("");
                openProgramName.val("");
                openProgramEntity.val("");
                openProgramField.hide();
                applicanttypeField.hide();
                companyField.show();
                industryField.show();
                seellProgramType.val("649840001");
                $("#instructionOpenProgram").css("display", "block");
                $("#instruction").css("display", "none");
                break;
            default:
                degreeProgram.val("");
                degreeProgramName.val("");
                degreeProgramEntity.val("");
                degreeProgramField.hide();
                openProgram.val("");
                openProgramName.val("");
                openProgramEntity.val("");
                openProgramField.hide();
                seellProgramType.val("");
                applicanttype.val("");
                applicanttypeName.val("");
                applicanttypeEntity.val(""); 
                applicanttypeField.hide();
                company.val("");
                companyName.val("");
                companyEntity.val("");
                companyField.hide();
                industry.val("");
                industryName.val("");
                industryEntity.val("");
                industryField.hide();
                $("#instructionOpenProgram").css("display", "none");
                $("#instruction").css("display", "block");
                break;
        }
        updateSchool();
    }

    // Disable Submit button unless user consents to agreement
    function checkAgreements() {
        
    }
    //   // company validator
    //   var CompanyValidator = document.createElement('span');
    //   var company = $("#ndph_company").val();
    //   var companyLabel = $("#ndph_company_label");
    //   CompanyValidator.style.display = "none";
    //   CompanyValidator.id = "ndph_company_validator";
    //   CompanyValidator.controltovalidate = "ndph_company";
    //   CompanyValidator.errormessage = "<a href='#ndph_company_label'>"+"Company"+" is a required field.</a>";
    //   CompanyValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
    //   CompanyValidator.initialvalue = "";
    //   CompanyValidator.evaluationfunction = function () {
    //       var checkIfAffliated = $("#ndph_programtype").val();
    //       if (checkIfAffliated == "649840001"){
        
    //       if (company == null) {
    //           return false;
    //       }
    //       else 
    //         {
    //           return true;
    //         }   
    //     }

    //   };
    //   // Industry validator
    //   var IndustryValidator = document.createElement('span');
    //   var industry = $("#ndph_industry").val();
    //   var industryLabel = $("#ndph_industry_label");
    //   IndustryValidator.style.display = "none";
    //   IndustryValidator.id = "ndph_industry_validator";
    //   IndustryValidator.controltovalidate = "ndph_industry";
    //   IndustryValidator.errormessage = "<a href='#ndph_industry_label'>"+"Industry"+" is a required field.</a>";
    //   IndustryValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
    //   IndustryValidator.initialvalue = "";
    //   IndustryValidator.evaluationfunction = function () {
    //       var checkIfAffliated = $("#ndph_programtype").val();
    //       if (checkIfAffliated == "649840001"){
        
    //       if (industry == null) {
    //           return false;
    //       }
    //       else 
    //       {return true;}
    //     }
    //   };

    //   // SEELL Applicant Type validator
    //   var ApplicantTypeValidator = document.createElement('span');
    //   var ApplicantType = $("#ndph_seellapplicanttype").val();
    //   var ApplicantTypeLabel = $("#ndph_seellapplicanttype_label");
    //   ApplicantTypeValidator.style.display = "none";
    //   ApplicantTypeValidator.id = "ndph_seellapplicanttype_validator";
    //   ApplicantTypeValidator.controltovalidate = "ndph_seellapplicanttype";
    //   ApplicantTypeValidator.errormessage = "<a href='#ndph_seellapplicanttype_label'>"+"Are you inquiring for yourself or for a group/company?"+" is a required field.</a>";
    //   ApplicantTypeValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
    //   ApplicantTypeValidator.initialvalue = "";
    //   ApplicantTypeValidator.evaluationfunction = function () {
    //       var checkIfAffliated = $("#ndph_programtype").val();
    //       if (checkIfAffliated == "649840001"){
        
    //       if (ApplicantType == null) {
    //           return false; 
    //       } 
    //       else 
    //       {return true;}
    //     }
    //   };

    //Company Validator
    var CompanyValidator = document.createElement('span');
    CompanyValidator.style.display = "none";
    CompanyValidator.id = "ndph_company_validator";
    CompanyValidator.controltovalidate = "ndph_company";
    CompanyValidator.errormessage = "<a href='#ndph_company'>Company is a required field.";
    CompanyValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
    CompanyValidator.initialvalue = "";
    CompanyValidator.evaluationfunction = function () {
        var checkIfAffliated = $("#ndph_programtype").val();
        if (checkIfAffliated == "649840001"){
        var company = $("#ndph_company").val();
        if (company == null || company == "") {
            return false;
        } else {
            return true;
        }
        }
        else 
        {return true;}

        };
    //Industry Validator
    var IndustryValidator = document.createElement('span');
    IndustryValidator.style.display = "none";
    IndustryValidator.id = "ndph_industry_validator";
    IndustryValidator.controltovalidate = "ndph_industry";
    IndustryValidator.errormessage = "<a href='#ndph_industry_name'>Industry is a required field.";
    IndustryValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
    IndustryValidator.initialvalue = "";
    IndustryValidator.evaluationfunction = function () {
        var checkIfAffliated = $("#ndph_programtype").val();
        if (checkIfAffliated == "649840001"){
        var industry = $("#ndph_industry").val();
        if (industry == null || industry == "") {
            return false;
        } else {
            return true;
        }
        }
        else 
        {return true;}

        };

    //ApplicantType Validator
    var ApplicantTypeValidator = document.createElement('span');
    ApplicantTypeValidator.style.display = "none";
    ApplicantTypeValidator.id = "ndph_seellapplicanttype_validator";
    ApplicantTypeValidator.controltovalidate = "ndph_seellapplicanttype";
    ApplicantTypeValidator.errormessage = "<a href='#ndph_seellapplicanttype'>Are you inquiring for yourself or for a group/company? is a required field.";
    ApplicantTypeValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
    ApplicantTypeValidator.initialvalue = "";
    ApplicantTypeValidator.evaluationfunction = function () {
        var checkIfAffliated = $("#ndph_programtype").val();
        if (checkIfAffliated == "649840001"){

        var applicant_indiv = $("#ndph_seellapplicanttype_0").prop("checked");
        var applicant_corp = $("#ndph_seellapplicanttype_1").prop("checked");

        if (!applicant_indiv && !applicant_corp){
            alert("seellapplicant type is not checked")
            alert(applicant_indiv);
            return false;
        } else {
            return true
        }
    }
    else 
    {return true;}
    };


    function addAsterisk()
    {
        var companyLabel = $("#MaximumLengthValidatorndph_company");
        var industryLabel = $("#ndph_industry_label");
        var applicanttypeLabel = $("#ndph_seellapplicanttype_label");

                //add red asterisk beside field label
                companyLabel.before('<span id="spanId" style="color: maroon;">*</span>'); 
                industryLabel.after('<span id="spanId" style="color: maroon;">&nbsp;*</span>');
                applicanttypeLabel.after('<span id="spanId" style="color: maroon;">&nbsp;*</span>');
    }

    
    // INITIALIZE FORM
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

    // Query program information from OData
    var programs = [];
    var currentProgramURL = "/_odata/Programs";
    while(currentProgramURL) {
        $.ajax({
            type: "GET",
            dataType: "json",
            async: false,
            contentType: "application/json; charset=utf-8",
            url: currentProgramURL,
            beforeSend: function(XMLHttpRequest) {
                XMLHttpRequest.setRequestHeader("Accept", "application/json");
            },
            success: function(data, textStatus, XHR) {
                programs = programs.concat(data.value);
                currentProgramURL = data["odata.nextLink"];
            }
        });
    }
    // Query school information from OData
    var schools = [];
    var currentSchoolURL = "/_odata/Schools";
    while(currentSchoolURL) {
        $.ajax({
            type: "GET",
            dataType: "json",
            async: false,
            contentType: "application/json; charset=utf-8",
            url: currentSchoolURL,
            beforeSend: function(XMLHttpRequest) {
                XMLHttpRequest.setRequestHeader("Accept", "application/json");
            },
            success: function(data, textStatus, XHR) {
                schools = schools.concat(data.value);
                currentSchoolURL = data["odata.nextLink"];
            }
        });
    }

    // Prepopulate Program field
    if (params["id"] == "custom") {
        $("#ndph_programtype").val("649840002");
        toggleProgramType();
    }
    else if (params["id"]) {
        var prepopulatedProgram = programs.find(     // Returns an object
            function(program) {
                // Search in "programs" array for element matching GUID on program lookup
                return program.ndph_programid == params["id"];
            }
        );
        
        switch (prepopulatedProgram.ndph_programtype.Value) {
            case 649840000:
                if (!$("#ndph_program").val()) {
                    $("#ndph_programtype").val("649840000");
                    toggleProgramType();
                    $("#ndph_program").val(prepopulatedProgram.ndph_programid);
                    $("#ndph_program_name").val(prepopulatedProgram.ndph_name);
                    $("#ndph_program_entityname").val("ndph_program");
                }
                break;
            case 649840001:
                if (!$("#ndph_seellopenprograms").val()) {
                    $("#ndph_programtype").val("649840001");
                    toggleProgramType();
                    $("#ndph_seellopenprograms").val(prepopulatedProgram.ndph_programid);
                    $("#ndph_seellopenprograms_name").val(prepopulatedProgram.ndph_name);
                    $("#ndph_seellopenprograms_entityname").val("ndph_program");
                }
                break;
        }
    }

   // Add the new validator to the page validators array:
    Page_Validators.push(CompanyValidator);
    Page_Validators.push(IndustryValidator);
    Page_Validators.push(ApplicantTypeValidator);

    // Hide fields
    $(".section[data-name='hidden_anonymous']").closest("fieldset").hide();
    $("#ndph_school").parent().parent().parent().hide();
    $("#ndph_seellprogramtype").parent().parent().parent().hide();
    
    // Disable School lookup
    $('#ndph_school').parent().find('.input-group-btn').hide();
    $('#ndph_school').parent().css('display', 'block');

    // Set School
    updateSchool();

    // Resize Program fields
    $("#ndph_program").parent().parent().attr("colspan","2");
    $("#ndph_program").parent().css("width","100%");
    $("#ndph_seellopenprograms").parent().parent().attr("colspan","2");
    $("#ndph_seellopenprograms").parent().css("width","100%");

    // Initialize fields
    toggleProgramType();
    checkAgreements();
    addAsterisk();

    // FUNCTIONS TO EXECUTE ON FIELD CHANGE:
    // Update School field
    $("#ndph_school").change(updateSchool);
    $("#ndph_programtype").change(updateSchool);
    $("#ndph_program").change(updateSchool);
    $("#ndph_seellopenprograms").change(updateSchool);
    // Update Program fields
    $("#ndph_programtype").change(toggleProgramType);
    // Update agreements
    $("#ndph_agreementinfocomplete").change(checkAgreements);
    $("#ndph_agreementcomplywithrules").change(checkAgreements);
    $("#ndph_agreementpersonaldata").change(checkAgreements);
    

    //Maling List Additional Info
    $('<div>')
    .addClass('mailinglist')
    .attr('id', 'mailinglist')
    .css("margin-top", "20px")
    .append('<p>You may unsubscribe and withdraw your consent to receive AIM communications at any time.</p>')
    .insertAfter('#ndph_yessignmeup');

    //Privacy Notice
    $('<div>')
    .addClass('privacynotice')
    .attr('id', 'privacynotice')
    .append('<p>We value your privacy and we uphold your rights under the 2012 Data Privacy Act of the Philippines. By voluntarily submitting this Form, you are hereby allowing AIM to collect, use, consolidate, share, store, and retain your personal data to process the information along with related activities. For more details, you may read the AIM Privacy Policy at <a style="color: rgb(0, 0, 255); font-weight: 400; text-decoration: underline;" target="_blank" href="https://aim.edu/privacy-notice">https://aim.edu/privacy-notice</a>. </p>')
    .insertAfter('[aria-label="Privacy Notice"]');

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

    //hide non-degree custom value in program type
    // $('select[id="ndph_programtype"] option[value="649840002"]').remove();
    
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
    $('input#ndph_yessignmeup_0').attr('type','checkbox');
    $('input#ndph_yessignmeup_1').attr('type','checkbox');
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