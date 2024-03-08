//nested arrays for navigation
var navMenu = [
    { title: "Home", url: "index.html", dropdown: [] },
    { title: "Account Management", url: "w1_AboutUs.php", dropdown: [
            { title: "Add User", url: "create_user.html" },
            { title: "Edit User", url: "edit_user.html" },
                    ]
    },
    { title: "Response Management", url: "response_mgt.html", dropdown: [] },
    { title: "Role Management", url: "role_mgt.html", dropdown: [] },
    { title: "Incident Management", url: "", dropdown: [
            { title: "New Incident Type", url: "Create_Incident_Types.html"},
            { title: "Edit Incident Type", url: "Edit_Incident_Types.html"},
        ] },
    { title: "Dispatch", url: "", dropdown: [
            {title: "New Incident", url: "create_incident.html"},
            {title: "Case History", url: "case_history.html"},
            {title: "Dispatch Units", url: "dispatch_units.html"},
            {title: "Reopen Case", url: "reopen_case.html"},
            {title: "Assign Report Numbers", url: "assign_rpt_num.html"},
            {title: "Case Reporting", url: "open_case_reporting.html"},
        ],},
    {title: "CAD Reporting", url: "", dropdown: [
            {title: "Prebuilt Reports", url: "prebuilt_reports.html"},
            {title: "Create Report", url: "create_report.html"},
            {title: "Generate Custom Report", url: "custom_report.html"},
            {title: "Manage Report Permissions", url: "manage_report_permissions.html"},
            {title: "Create Dashboards", url: "create_dashboard.html"},
            {title: "Schedule Reports", url: "schedule_reports.html"},
        ]}

];

//Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
//What is this doing?: dynamically generating the navigation bar across all of my pages
//and is referenced in each of the html files using the 'DOMContentLoaded', followed by
//referencing the .navigation-container, which creates the links.
document.addEventListener('DOMContentLoaded', function() {
    var navigationContainer = document.querySelector('.navigation-container');
//https://www.w3schools.com/jsref/met_document_createelement.asp
    if (navigationContainer) {
        var navDiv = document.createElement('div');
        navDiv.className = 'navigation';

        navMenu.forEach(function(item) {
            var link = document.createElement('a');
            link.href = item.url;
            link.textContent = item.title;

            // checking if this link has a dropdown, if value is 0 then move on
            if (item.dropdown.length > 0) {
                var dropdown = document.createElement('div');
                dropdown.className = 'dropdown-content';
                //reference: https://stackoverflow.com/questions/53482604/dropdown-in-a-foreach-loop
                item.dropdown.forEach(function(dItem) {
                    var dLink = document.createElement('a');
                    dLink.href = dItem.url;
                    dLink.textContent = dItem.title;
                    dropdown.appendChild(dLink);
                });
                //ref: https://stackoverflow.com/questions/68239926/appendchild-to-multiple-dropdowns
                var dropdownContainer = document.createElement('div');
                dropdownContainer.className = 'dropdown';
                dropdownContainer.appendChild(link);
                dropdownContainer.appendChild(dropdown);
                navDiv.appendChild(dropdownContainer);
            } else {
                navDiv.appendChild(link);
            }
        });

        navigationContainer.appendChild(navDiv);
    }
});