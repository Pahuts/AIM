$(document).ready(function () {
    $(".tab[data-name='seell_background_information']").prev().hide(); 

    $('<div>')
    .addClass('educational_bg')
    .attr('id', 'educ_bg')
    .append('To update this section, go to My Profile > <a href = "https://aimdevelopmentportal.powerappsportals.com/profile/StudentInfo/">Student Information</a>.')
    .insertBefore('.view-grid');
});