//screen for user credentials entry
/*global $*/
var databaseUrl = 'https://node-unit-project-kellator.c9users.io/clients/';
//constructor function to create client data package
function ClientDataPackage() {
    this.contact = {};
    this.prospect = {};
    this.housing = {};
    this.financials = {};
    this.medical = {};
}
//constructor components for contact data
ClientDataPackage.prototype.add_contact_name = function(lastName, firstName) {
    this.contact.contactName = {};
    this.contact.contactName.contactLastName = lastName;
    this.contact.contactName.contactFirstName = firstName;
};
ClientDataPackage.prototype.add_contact_phone = function(primPhone, secPhone) {
    this.contact.contactPrimaryPhone = primPhone;
    this.contact.contactSecondaryPhone = secPhone;
};
ClientDataPackage.prototype.add_contact_address = function(street, city, state, zip) {
    this.contact.contactAddress = {};
    this.contact.contactAddress.contactStreet = street;
    this.contact.contactAddress.contactCity = city;
    this.contact.contactAddress.contactState = state;
    this.contact.contactAddress.contactZip = zip;
};
ClientDataPackage.prototype.add_contact_email = function(email) {
    this.contact.contactEmail = email;
};
ClientDataPackage.prototype.add_contact_relationToProspect = function(relation) {
    this.contact.relationToProspect = relation;
};
ClientDataPackage.prototype.add_contact_referral = function(source, referredBy) {
    this.contact.referralSource = source;
    this.contact.referredBy = referredBy;
};
ClientDataPackage.prototype.add_first_contact = function(date) {
    this.contact.dateOfFirstContact = date;
};
//constructor components for prospect data

//constructor components for housing data

//constructor components for financial data

//constructor components for medical data

//variable to display contact form fields - used in data collection and presentation
var clientContactDisplay =
    "<div data_type='contact' id='contact_information'>" +
        "<form action='' method='post'>" +
        "<fieldset>" +
            "<legend>Contact Information</legend>" +
            "<label for='contact_last_name'>Last Name:  </label>" +
            "<input type='text' disabled='' required id='contact_last_name' placeholder='Johnson'>" +
            "<label for='contact_first_name'>First Name:  </label>" +
            "<input type='text' disabled='' required id='contact_first_name' placeholder='Milly'>" +

            "<legend>Contact Address</legend>" +
            "<label for='contact_street'>Street:  </label>" +
            "<input type='text' disabled='' id='contact_street' placeholder='123 Prospect St.'>" +
            "<label for='contact_city'>City:  </label>" +
            "<input type='text' disabled='' id='contact_city' placeholder='Brockton'>" +
            "<label for='contact_state'>State:  </label>" +
            "<input type='text' disabled='' id='contact_state' placeholder='MA'>" +
            "<label for='contact_zipcode'>Zip:  </label>" +
            "<input type='text' disabled='' id='contact_zipcode' pattern='[0-9]{5}' placeholder='02301'>" +

            "<legend>Contact Phone Numbers</legend>" +
            "<label for='contact_primary_phone'>Primary Phone:  </label>" +
            "<input type='text' disabled='' maxlength='10' required id='contact_primary_phone' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='5085885555'>" +
            "<label for='contact_alt_phone'>Alternate Phone:  </label>" +
            "<input type='text' disabled='' maxlength='10' id='contact_alt_phone' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='5085885858'>" +

            "<legend>Contact Email</legend>" +
            "<label for='contact_email'>Email:  </label>" +
            "<input type='email' disabled='' id='contact_email' placeholder='name@email.com'>" +
        "</fieldset>" +
        "</form>" +
    "</div>" +
    "<div id='contact_addl_details'>" +
        "<form action='' method='post'>" +
        "<fieldset>" +
            "<legend>Additional Details</legend>" +
            "<label for='rel_to_prospect'>Relationship to Prospect</label>" +
            "<ul>" +
                "<li><input type='radio' disabled='' required name='rel_to_prospect' value='Self' id=rel_self' checked>Self</> " +
                "<li><input type='radio' disabled='' required name='rel_to_prospect' value='Spouse' id=rel_spouse'>Spouse</> " +
                "<li><input type='radio' disabled='' required name='rel_to_prospect' value='Adult Child' id=rel_child'>Adult Child</> " +
                "<li><input type='radio' disabled='' required name='rel_to_prospect' value='Sibling' id=rel_sibling'>Sibling</> " +
                "<li><input type='radio' disabled='' required name='rel_to_prospect' value='Care Professional' id=rel_careProf'>Care Professional</> " +
                "<li><input type='radio' disabled='' required name='rel_to_prospect' value='Other' id='rel_other'>Other</><br><input type='text' placeholder='Other'/>" +
            "</ul>" +
            "<label for='referral_source'>Referral Source</label>" +
            "<ul>" +
                "<li><input type='radio' disabled='' required name='referral_source' value='Self' id='ref_self' checked>Self</>" +
                "<li><input type='radio' disabled='' required name='referral_source' value='APFM' id='ref_apfm'>A Place For Mom</>" +
                "<li><input type='radio' disabled='' required name='referral_source' value='Word of Mouth' id='ref_wom'>Word of Mouth</><br><input type='text' placeholder='Referred by'/>" +
                "<li><input type='radio' disabled='' required name='referral_source' value='Health Care Provider' id='ref_hcp'>Health Care Provider</><br><input type='text' id='referred_by' placeholder='Referred by'/>" +
            "</ul>" +
            "<label for='first_contact_date'>Date of First Contact </label>" +
            "<input type='date' disabled='' name='first_contact_date'>" +
        "</fieldset>" +
        "</form>" +
    "</div>" +
    "<label for='submit_data_button'></label>" +
    "<button name='submit_data_button' id='submit_data_button' class='hidden'>Submit</button>" +
    "<label for='edit_data_button'></label>" +
    "<button name='edit_data_button' id='edit_data_button' class=''>Edit</button>" +
    "<label for='submit_changes_button'></label>" +
    "<button name='submit_changes_button' id='submit_changes_button' class='hidden'>Submit Changes</button>" 
;
//variable for prospect data display - used in data collection and display
var clientProspectDisplay;
//variable for housing data display - used in data collection and display
var clientHousingDisplay;
//var for financial data display - used in data collection and display
var clientFinancialDisplay;
//var for medical data display - used in data collection and display
var clientMedicalDisplay;
//var for comments display - used for displaying and adding comments
var clientCommentsDisplay;
function genClientDataPackage(client_id) {
    var client = new ClientDataPackage(client_id);
    client.add_contact_name($('#contact_last_name').val(), $('#contact_first_name').val());
    client.add_contact_phone($('#contact_primary_phone').val(), $('#contact_alt_phone').val());
    client.add_contact_address($('#contact_street').val(), $('#contact_city').val(), $('#contact_state').val(), $('#contact_zipcode').val());
    client.add_contact_email($('#contact_email').val());
    client.add_contact_relationToProspect($('rel_to_prospect').val());
    client.add_contact_referral($('.referral_source').val());
    client.add_first_contact($('#first_contact_date').val());  
    return client;
}
//API CALLS
//(CREATE) creates the new client data package by pulling form values 
function createNewClient(client_id, callback) {
    var client = genClientDataPackage(client_id);
    var settings = {
        url: 'https://node-unit-project-kellator.c9users.io/clients/',
        dataType: 'json',
        method: 'POST',
        data: JSON.stringify(client),
        processData: false,
        contentType: 'application/json',
        success: function(data) {
            callback(data);
            console.log(data);
        }
    };
    $.ajax(settings);
}
//(READ) searches complete client collection based on specified criteria and returns matching list
function getClientList(searchName, callback) {
    var settings = {
        url: databaseUrl,
        dataType: 'json',
        data: searchName,
        method: 'GET',
        success: function(data) {
            callback(data);
            console.log(data);
        }
    };
    $.ajax(settings);
}
//(READ) pulls specific client document from collection to display client data package to user
function getClientInformation(client_id, callback) {
    var settings = {
        url: databaseUrl + client_id,
        dataType: 'json',
        method: 'GET',
        success: function(data) {
            callback(data);
            console.log(data);
        }
    };
    $.ajax(settings);
}
//(UPDATE) updates components of client data document per user input
function updateClientInformation(client_id, callback) {
    console.log(client_id);
    var update = genClientDataPackage(client_id);
    var settings = {
        url: databaseUrl + client_id,
        dataType: 'json',
        method: 'PUT',
        data: JSON.stringify(update),
        processData: false,
        contentType: 'application/json',
        success: function(data) {
            callback(data);
            console.log(data);
        }
    };
    $.ajax(settings);
}
//(DELETE) removes document from collection 
function deleteClientData(client_id, callback) {
    console.log(client_id);
    var settings = {
        url: databaseUrl + client_id,
        dataType: 'json',
        method: 'DELETE',
        success: function(data) {
            callback(data);
        }
    };
    $.ajax(settings);
}
//alert callback for creation of new client document
function alertForCreatedClient() {
    alert("you have created a new client");
}
//alert callback for update of client document
function alertForUpdatedClient() {
    alert("You have changed client information.");
}
//alert callback for removal of client document
function alertForDeletedClient() {
    alert("You have deleted the data for client");
}
//triggers API call to retrieve specific client document from collection 
function getClientData(callbackFn, client_id) {
    getClientInformation(client_id, callbackFn);
}
//triggers functions to get client document and display data in DOM
function getAndDisplayClientData(client_id) {
    getClientData(displayClientData, client_id);
}
//render functions
//renders input forms to the DOM 
function enterNewClientData() {
    $("#contact_block").html(clientContactDisplay);
    $("#prospect_block").html();
    $("#housing_block").html();
    $("#financials_block").html();
    $("#medical_block").html();
    $("#comments_block").html();
}
//renders list of search results from READ call in html - client names are rendered as links to collection documents
function displayClientList(data) {
    console.log('display client list');
    var resultElement = '';
    if (data) {
        $('.client_search_results_list' ).html('<div id="search_display">Client Search Results</div>');
        $.each(data, function(index, client) {
            resultElement +=
            '<div client_id="'+ client._id + '" value="'+ index + '" class="search_result_return">' +
                '<ul>' +
                    '<li><span  class="search_link">Contact Name:  </span>' + client.contact.contactName.contactLastName + ', ' + client.contact.contactName.contactFirstName + '</li>' +
                    '<li>Contact Phone:  ' + client.contact.contactPrimaryPhone + '</li>' +
                    // '<li>Prospect Name:  ' + client.prospect.prospectLastName + ', ' + client.prospect.prospectFirstName + '</li> ' +
                    // '<li>Prospect DOB:  ' + client.prospect.date_of_birth + '</li>' +
                    // '<li>Prospect Gender:  ' + client.prospect.gender + '</li>' +
                    // '<li>Prospect Housing Type:  ' + client.housing.type_of_housing + '</li>' +
                '</ul>' +
            '</div></a>';
        $('#search_display').html(resultElement);
    });
    }
    else {
            resultElement += '<p>Sorry.  There are no results for your search.  Try again with a different name.</p.';
        }
    }
//renders essential client data to dashboard and all of the document's data to individual display sections or form inputs
function displayClientData(data) {
    console.log(data);
    if (data) {
        console.log(data);
        console.log(data._id);
        //information display variables - contain HTML
        var clientDashDisplay =
            "<div class='client_dash_display'>" +
                "<h3 class='client_dash_head'>Client Dashboard</h3>" +
                "<div class='client_dash_info'>" +
                    "<ul>" +
                        // "<li>Prospect Name:  </li>" +
                        // "<li>DOB:  </li>" +
                        "<li id='dash_contact_name'>Contact Name:  " + data.contact.contactName.contactFirstName + " " + data.contact.contactName.contactLastName + "</li>" +
                        "<li>Contact Primary Phone:  " + data.contact.contactPrimaryPhone + "</li>" +
                        // "<li id='dash_lead_status'>Lead Status:  </li>" +
                        // "<li id='dash_hospital'>Hospital:  </li>" +
                        // "<li id='dash_dnr_status'>DNR Status:  </li>" +
                    "</ul>" +
                "</div>" +
                "<form action='' method='post'>" +
                    "<label for='delete_client_button'></label>" +
                    "<button client_id='" + data._id + "' name='delete_client' id='client_delete_button' value='Delete All Client Information'>Delete Client</button>" +
                "</form>" +
            "</div>";
        var contactDisplay = $(clientContactDisplay);
        contactDisplay.find('#contact_first_name').val(data.contact.contactName.contactFirstName);
        contactDisplay.find('#contact_last_name').val(data.contact.contactName.contactLastName);
        contactDisplay.find('#contact_street').val(data.contact.contactAddress.contactStreet);
        contactDisplay.find('#contact_city').val(data.contact.contactAddress.contactCity);
        contactDisplay.find('#contact_state').val(data.contact.contactAddress.contactState);
        contactDisplay.find('#contact_zipcode').val(data.contact.contactAddress.contactZip);
        contactDisplay.find('#contact_primary_phone').val(data.contact.contactPrimaryPhone);
        contactDisplay.find('#contact_alt_phone').val(data.contact.contactSecondaryPhone);
        contactDisplay.find('#contact_email').val(data.contact.contactEmail);
        contactDisplay.find('#rel_to_prospect').val(data.contact.relationToProspect);
        contactDisplay.find('#first_contact_date').val(data.contact.dateOfFirstContact);
        console.log(data.contact.dateOfFirstContact);
        var prospectDisplay = $(clientProspectDisplay);
        $("#contact_block").html(contactDisplay);
        $("#prospect_block").html();
        $("#housing_block").html();
        $("#financials_block").html();
        $("#medical_block").html();
        $("#comments_block").html();
        $("#client_dash").html(clientDashDisplay);
    }
}
//EVENT HANDLERS
//controls display of data entry forms to enter information for new client
function newClientHandler() {
    $('body').on('click', '#new_client_button', function(event) {
        event.preventDefault();
        enterNewClientData();
        $('.display_area :input').prop('disabled', false);
        $('#submit_data_button').removeClass('hidden');
        $('#edit_data_button').addClass('hidden');
        $('.client_search_results_list' ).empty();
        $('#client_dash').empty();
        $('#contact_block').removeClass('hidden');
        console.log('new client button pushed');
        console.log($(this));
    });
}
//triggers the CREATE API call and creates new document in the collection
function dataSubmitHandler(client_id) {
    $('body').on('click', '#submit_data_button', function(event) {
        event.preventDefault();
        createNewClient(client_id, alertForCreatedClient);
        console.log('new data submit button clicked');
    });
}
//submits client search data - generates searchName object for initial GET call
function submitClientSearchHandler() {
    $('body').on('submit', '.client_search_form', function(event) {
        event.preventDefault();
        var searchName = {firstName: $(this).find('#first_name').val(), lastName: $(this).find('#last_name').val()};
        getClientList(searchName, displayClientList);
        $('.client_search_results_list').removeClass('hidden');
        console.log('submit search button pushed');
        console.log(searchName);
    });
}
//handler for displaying specific client document data from initial results list
function clientListSelectHandler() {
    $('body').on('click', '.search_result_return', function(event) {
        event.preventDefault();
        getAndDisplayClientData($(this).attr('client_id'));
        $('.display_area :input').prop('disabled', true);
        $('#contact_block').removeClass('hidden');
        $('#submit_data_button').addClass('hidden');
        $('#edit_data_button').removeClass('hidden');
        $('.client_search_results_list').toggleClass('hidden');
        console.log('search link clicked');
    });
}
//handler for button to allow user to edit client document
function editContactHandler() {
    $('body').on('click', '#edit_data_button', function(event) {
        event.preventDefault();
        if (confirm("Are you sure you want to change client information?")) {
            console.log("you opted to change data");
            $('.display_area :input').prop('disabled', false);
            $('#submit_changes_button').removeClass('hidden');
            $('#edit_data_button').addClass('hidden');
        } else {
            console.log("you don't want to make a change");
        }
    });
}
//handler for submitChanges button
function submitChangesHandler() {
    $('body').on('click', '#submit_changes_button', function(event) {
        event.preventDefault();
        var client_id = $('#client_delete_button').attr('client_id');
        updateClientInformation(client_id, alertForUpdatedClient);
    });
}
//handler for delete client document button
function deleteClientHandler(client_id) {
    $('body').on('click', '#client_delete_button', function(event) {
        event.preventDefault();
        console.log(client_id);
        console.log('delete client pushed');
        if (confirm("Are you sure you want to delete all client information?")) {
            deleteClientData($(this).attr('client_id'), alertForDeletedClient);
        } else {
            alert("No Changes Made.");
        }
    });
}
//resets client search fields and removes any search list results
function resetClientSearchHandler() {
    $('body').on('click', '#reset_search', function(event) {
        event.preventDefault();
        $('#last_name').val('');
        $('#first_name').val('');
        $('.client_search_results_list' ).empty();
        $('#data_block').children('div').empty();
        $('#client_dash').empty();
        console.log('reset search button pushed');
    });
}
//ready function
$(function() {
    newClientHandler();
    dataSubmitHandler();
    submitChangesHandler();
    editContactHandler();
    resetClientSearchHandler();
    submitClientSearchHandler();
    clientListSelectHandler();
    deleteClientHandler();
});



//what api return data will look like: /api/client_id
// var Mock_Client_Data = {
//     "client_id": [
//         {
//             "contact": {
//                 "contactName": {
//                     "contactLastName": "Last Name",
//                     "contactFirstName": "First Name"
//                 },
//                 "contactPrimaryPhone": "5085885334", //10-digit numbers only
//                 "contactSecondaryPhone": "5085885334",
//                 "contactAddress": {
//                     "contactStreet": "Street Address",
//                     "contactCity": "City",
//                     "contactState": "State",
//                     "contactZip": "02301"
//                 },
//                 "contactEmail": "contactemail@gmail.com",
//                 "relationToProspect": "relationship to prospect", //radio with adult child, spouse, friend, guardian, etc
//                 "referralSource": "Referral Source",
//                 "referredBy": "Referred By",
//                 "dateOfFirstContact": "2017-01-01" //use date function
//             },

//     }]
// };
    //         "prospect": {
    //             "prospectName": {
    //                 "prospectLastName": "Last Name",
    //                 "prospectFirstName": "First Name"
    //             },
    //             "prospectPhone": "5085885334", // 10-digit numbers only ? same as contact button?
    //             "prospectAddress": "Prospect Address",
    //             "dateOfBirth": "01011920", //8 digit date - 2 digit month, 2 digit day, 4 digit year
    //             "socialSec": "011010111", //9 digit number
    //             "insNumbers": {
    //                 "medicareNum": "011010111A", //9 digit number with one or two letters
    //                 "massHealth": "10101010101",
    //                 "insuranceNum": "XX010101010"
    //             },
    //             "gender": "Gender", //radio male female
    //             "maritalStatus": "Marital Status",
    //             "veteranStatus": "Veteran Status", //radio yes vet - text input service
    //             "religion": "Religion",
    //             "levelOfEducation": "Level of Education",
    //             "currentHousing": "Current Living Situation",
    //             "leadStatus": "Lead Status",
    //             "poa": {
    //                 "poaName": "POA Name",
    //                 "poaPhone": "POA Phone"
    //             },
    //             "hcp": {
    //                 "hcpName": "HCP Name",
    //                 "hcpPhone": "HCP Phone"
    //             },
    //             "dnr": "DNR Status", //create alert box on dashboard
    //             "eContact": {
    //                 "eContactName": "Emergency Contact Name",
    //                 "eContactPhone": "5085885334"
    //             },
    //             "altEmergContact": {
    //                 "altContactName": "Alternate Emergency Contact Name",
    //                 "altContactPhone": "5085885334"
    //             },
    //             "prefHospital": "Preferred Hospital",
    //             "followUpDate": "01012017", //8 digit date
    //             "dateAddedtoDB": "01012017"
    //         },
    //         "housingAssistance": {
    //             "housingType": "Type of Housing", // radio Independent, Assisted Living, Memory Care, GAFC
    //             "assistanceNeeded": {
    //                 "bathing": "detail of bathing assist",
    //                 "dressing": "detail of dressing assist",
    //                 "grooming": "detail of grooming assist",
    //                 "medAssist": "detail of medication assistance",
    //                 "ambulation": "detail of ambulation assistance"
    //             },
    //             "primaryAptPref": "Primary Apartment Type Preference",
    //             "secondaryAptPref": "Second Choice Apartment Preference",
    //             "estimatedMoveDate": "01012017", //8 digit date
    //             "additionalServices": "Additional Services incl. laundry, housekeeping, meals",
    //             "appOrDec": "Approved or declined"
    //         },
    //         "financials": {
    //             "appFee": "Application fee paid",
    //             "payerSource": "Payer Source", //private, LTC ins, MassHealth, Navicare, etc
    //             "income": {
    //                 "monthlyIncome": "Monthly Income", //should generate from other entries
    //                 "pension": "Monthly Pension", //income is numbers only
    //                 "socSecMonthly": "Monthly Social Security Wages",
    //                 "ssi": "SSI Income",
    //                 "vaBenefits": "Monthly VA Benefits",
    //                 "otherIncome": "Other Monthly Income",
    //                 "otherIncomeSource": "Other Income Source" //text input
    //             },
    //             "assets": {
    //                 "propertyValue": "Estimated Property Assets",
    //                 "bankAccounts": "Estimate Bank Account Amounts",
    //                 "lifeInsurance": "Estimated Value of Life Insurance",
    //                 "otherAssets": "Estimated value of other assets",
    //                 "otherAssetsSource": "Source of other assets"
    //             },
    //             "bankReference": {
    //                 "bankRefName": "Bank Reference Name",
    //                 "bankRefNumber": "Bank Reference Phone Number"
    //             },
    //             "landlordReference": {
    //                 "landlordRefName": "Landlord Reference Name",
    //                 "landlordRefNum": "Landlord Reference Number"
    //             }
    //         },
    //         "medical": {
    //             "initialAssessment": {
    //                 "assessSchedDate": "01012017", //8 digit date of initial assessment
    //                 "assessCompDate": "01012017",
    //                 "assessedBy": "Name of Assessor"
    //             },
    //             "alfPlanType": "Care Plan Level",
    //             "allergies": "Any known allergies",
    //             "oxygenStatus": "Is prospect oxygen dependent?",
    //             "medsOnAdmit": "List of medications on admission",
    //             "healthIssues": "Any major health issues or disabilities",
    //             "ambulation": "Assistance with Ambulation",
    //             "homeCareOnAdmit": "Prospect receives home care prior to admission",
    //             "diet": "Dietary needs",
    //             "pcp": {
    //                 "pcpName": "Primary Care Physician Name",
    //                 "pcpNum": "PCP Phone Number",
    //                 "pcpFax": "PCP Fax Number",
    //                 "pcpAddress": "PCP Address"
    //             },
    //             "physFormRec": "01012017", //8 digit date physician form received
    //             "pharmacy": "Name of Pharmacy",
    //             //following information is collected in prospect section
    //             "poa": {
    //                 "poaName": "POA Name",
    //                 "poaPhone": "POA Phone"
    //             },
    //             "hcp": {
    //                 "hcpName": "HCP Name",
    //                 "hcpPhone": "HCP Phone"
    //             },
    //             "dnr": "DNR", //create alert box on dashboard
    //             "eContact": {
    //                 "eContactName": "Emergency Contact Name",
    //                 "eContactPhone": "5085885334"
    //             },
    //             "altEmergContact": {
    //                 "altContactName": "Alternate Emergency Contact Name",
    //                 "altContactPhone": "5085885334"
    //             },
    //             "prefHospital": "Preferred Hospital",
    //         },
    //         "comments": {
    //             "user" : "user who creates comment",
    //             "commentDate": "01012017", //8 digit date comment entered
    //             "commentText": "Comment Text"
    //         }

// other code for when it actually does something
//var newProspectEntryMsg =
//     "<div id='prospect_information'>" +
//         "<form action='' method='post'>" +
//         "<fieldset>" +
//             "<legend>Prospect Contact Information</legend>" +
//             "<label for='prospect_last_name'>Last Name:  </label>" +
//             "<input type='text' required id='prospect_last_name' placeholder='Johnson'>" +
//             "<label for='prospect_first_name'>First Name:  </label>" +
//             "<input type='text' required id='prospect_first_name' placeholder='Joseph'>" +
//             "<label class='enter_button' for='enter_prospect_name_button'></label>" +
//             "<button name='enter_prospect_name_button' id='enter_prospect_name'>Enter</button>" +
//             "<legend>Prospect Phone Numbers</legend>" +
//             "<label for='prospect_primary_phone'>Primary Phone:  </label>" +
//             "<input type='number' maxlength='10' required id='contact_primary_phone' placeholder='508-588-5555'>" +
//             "<label for='prospect_alt_phone'>Alternate Phone:  </label>" +
//             "<input type='number' maxlength='10' id='contact_alt_phone' placeholder='508-588-5858'>" +
//             "<label class='enter_button' for='enter_prospect_phone_button'></label>" +
//             "<button name='enter_prospect_phone_button' id='enter_prospect_phone'>Enter</button>" +
//             "<legend>Prospect Address</legend>" +
//             "<label for='prospect_street'>Street:  </label>" +
//             "<input type='text' id='prospect_street' placeholder='123 Prospect St.'>" +
//             "<label for='prospect_city'>City:  </label>" +
//             "<input type='text' id='prospect_city' placeholder='Brockton'>" +
//             "<label for='prospect_state'>State:  </label>" +
//             "<input type='text' id='prospect_state' placeholder='MA'>" +
//             "<label for='prospect_zipcode'>Zip:  </label>" +
//             "<input type='number' id='prospect_zipcode' placeholder='02301'>" +
//             "<label class='enter_button' for='enter_prospect_address_button'></label>" +
//             "<button name='enter_prospect_address_button' id='enter_prospect_address'>Enter</button>" +
//         "</fieldset>" +
//         "</form>" +
//     "</div>" +
//     "<div id='prospect_identification'>" +
//         "<form action='' method='post'>" +
//         "<fieldset>" +
//             "<legend>Prospect Identification</legend>" +
//             "<label for='date_of_birth'>Date of Birth </label>" +
//             "<input type='date' id='date_of_birth' required name='date_of_birth'>" +
//             "<label for='ssn'>Social Security Number </label>" +
//             "<input type='number' id='ssn' maxlength='9' required placeholder='000112222'> " +
//             "<label for='medicare'>Medicare Number </label>" +
//             "<input type='text' id='medicare' required placeholder='000112222A'>" +
//             "<label for='massHealth'>MassHealth Number </label>" +
//             "<input type='text' id='massHealth' placeholder='000111222333'>" +
//             "<label for='other_ins'>Other Insurance </label>" +
//             "<input type='text' id='other_ins' placeholder='BCBS XX010101010'>" +
//         "</fieldset>" +
//         "</form>" +
//     "</div>" +
//     "<div id='prospect_addl_information'>" +
//         "<form action='' method='post'>" +
//         "<fieldset>" +
//             "<legend>Additional Information</legend>" +
//             "<label for='gender'>Gender</label>" +
//             "<ul>" +
//                 "<li><input type='radio' required name='gender' value='Male' id='male'>Male</>" +
//                 "<li><input type='radio' required name='gender' value='Female' id='female'>Female</>" +
//             "</ul>" +
//             "<label for='marital_status'>Marital Status</label>" +
//             "<ul>" +
//                 "<li><input type='radio' required name='marital_status' value='single' id='single'>Single</>" +
//                 "<li><input type='radio' required name='marital_status' value='married' id='married'>Married</>" +
//                 "<li><input type='radio' required name='marital_status' value='widowed' id='widowed'>Widowed</>" +
//                 "<li><input type='radio' required name='marital_status' value='separated' id='separated'>Separated</>" +
//             "</ul>" +
//             "<label for='veteran_status'>Veteran Status</label>" +
//             "<ul>" +
//                 "<li><input type='radio' required name='veteran_status' value='veteran' id='veteran'>Veteran:  </>" +
//                 "<label for='service_branch'>Branch of Service:  </label><input type='text' id='service_branch' placeholder='Navy'>" +
//                 "<li><input type='radio' required name='veteran_status' value='Not a Veteran' id='notVet'>Not a Veteran</>" +
//             "</ul>" +
//             "<label id='religion'>Religion</label>" +
//             "<input type='text' id='religion' placeholder='Lutheran'><br>" +

//             "<label for='education'>Highest Level of Education</label>" +
//             "<ul>" +
//                 "<li><input type='radio' required name='education' value='grade_school' id='grade_school'>Grade School</>" +
//                 "<li><input type='radio' required name='education' value='high_school' id='high_school'>High School</>" +
//                 "<li><input type='radio' required name='education' value='trade' id='trade'>Trade School</>" +
//                 "<li><input type='radio' required name='education' value='college' id='college'>College</>" +
//                 "<li><input type='radio' required name='education' value='post_grad' id='post_grad'>Post Graduate</>" +
//             "</ul>" +
//             "<label for='current_housing'>Current Housing Situation</label>" +
//             "<ul>" +
//                 "<li><input type='radio' required name='current_housing' value='Alone' id='housing_alone'>Alone</>" +
//                 "<li><input type='radio' required name='current_housing' value='With Spouse' id='housing_spouse'>With Spouse</>" +
//                 "<li><input type='radio' required name='current_housing' value='With Family' id='housing_family'>With Family</>" +
//                 "<li><input type='radio' required name='current_housing' value='Skilled Nursing Facility' id='housing_snf'>Skilled Nursing Facility</>" +
//                 "<li><input type='radio' required name='current_housing' value='Other Assisted Living Community' id='housing_alf'>Other Assisted Living Community</>" +
//                 "<li><input type='radio' required name='current_housing' value='Senior Housing' id='housing_senior'>Senior Housing</>" +
//             "</ul>" +
//             "<label for='lead_status'>Lead Status</label>" +
//             "<ul>" +
//                 "<li><input type='radio' name='lead_status' value='hot' id='lead_hot'>Hot</>" +
//                 "<p>Move-in within 1-3 months.</p>" +
//                 "<li><input type='radio' name='lead_status' value='warm' id='lead_warm'>Warm</>" +
//                 "<p>Move-in within 3-6 months.</p>" +
//                 "<li><input type='radio' name='lead_status' value='cool' id='lead_cool'>Cool</>" +
//                 "<p>Move-in after 6 months.</p>" +
//             "</ul>" +
//             "<label for='date_to_alcis'>Date Entered in ALCIS:  </label>" + //can date be entered by server not user?
//             "<input type='date' name='date_to_alcis'>" +
//             "<label for='follow_up_date'>Follow-up Date:  </label>" + //follow up assigned by server -e.g. dated added plus 3 months
//             "<input type='date' name='follow_up_date'>" +
//         "</fieldset>" +
//         "</form>" +
//     "</div>" +
//     "<div id='prospect_emergency_info'>" +
//         "<form action='' method='post'>" +
//         "<fieldset>" +
//             "<legend>Emergency Information</legend>" +
//             "<label id='pref_hospital'>Preferred Hospital</label>" +
//             "<ul>" +
//                 "<li><input type='radio' required name='pref_hospital' value='Brockton' id='hospital_brockton'>Signature Healthcare | Brockton Hospital</input>" +
//                 "<li><input type='radio' required name='pref_hospital' value='Good Samaritan id='hospital_goodsam'>Steward Healthcare | Good Samaritan Hospital</input>" +
//             "</ul>" +
//             "<legend>DNR Status</legend>" +
//             "<ul>" +
//                 "<li><input type='radio' value='DNR Present' id='dnr_present'>DNR</input>" +
//                 "<li><input type='radio' value='DNR Not Present' id='dnr_not_present'>No DNR</input>" +
//             "</ul>" +
//             "<legend>Power of Attorney</legend>" + //need to include buttons for same as (econtact, poa, hcp, etc)
//             "<label for='poa_last_name'>Last Name:  </label>" +
//             "<input type='text' required id='poa_last_name' placeholder='Johnson'>" +
//             "<label for='poa_first_name'>First Name:  </label>" +
//             "<input type='text' required id='poa_first_name' placeholder='Milly'>" +
//             "<label class='enter_button' for='enter_poa_name_button'></label>" +
//             "<button name='enter_poa_name_button' id='enter_poa_name'>Enter</button><br>" +
//             "<label for='poa_primary_phone'>Primary Phone:  </label>" +
//             "<input type='number' maxlength='10' required id='poa_primary_phone' placeholder='508-588-5555'>" +
//             "<label for='poa_alt_phone'>Alternate Phone:  </label>" +
//             "<input type='number' maxlength='10' id='poa_alt_phone' placeholder='508-588-5858'>" +
//             "<label class='enter_button' for='enter_poa_phone_button'></label>" +
//             "<button name='enter_poa_phone_button' id='enter_poa_phone'>Enter</button>" +

//             "<legend>Health Care Proxy</legend>" +
//             "<label for='hcp_last_name'>Last Name:  </label>" +
//             "<input type='text' required id='hcp_last_name' placeholder='Johnson'>" +
//             "<label for='hcp_first_name'>First Name:  </label>" +
//             "<input type='text' required id='hcp_first_name' placeholder='Milly'>" +
//             "<label class='enter_button' for='enter_hcp_name_button'></label>" +
//             "<button name='enter_hcp_name_button' id='enter_hcp_name'>Enter</button><br>" +
//             "<label for='hcp_primary_phone'>Primary Phone:  </label>" +
//             "<input type='number' maxlength='10' required id='hcp_primary_phone' placeholder='508-588-5555'>" +
//             "<label for='hcp_alt_phone'>Alternate Phone:  </label>" +
//             "<input type='number' maxlength='10' id='hcp_alt_phone' placeholder='508-588-5858'>" +
//             "<label class='enter_button' for='enter_hcp_phone_button'></label>" +
//             "<button name='enter_hcp_phone_button' id='enter_hcp_phone'>Enter</button>" +

//             "<legend>Primary Emergency Contact</legend>" +
//             "<label for='pec_last_name'>Last Name:  </label>" +
//             "<input type='text' required id='pec_last_name' placeholder='Johnson'>" +
//             "<label for='pec_first_name'>First Name:  </label>" +
//             "<input type='text' required id='pec_first_name' placeholder='Milly'>" +
//             "<label class='enter_button' for='enter_pec_name_button'></label>" +
//             "<button name='enter_pec_name_button' id='enter_pec_name'>Enter</button><br>" +
//             "<label for='pec_primary_phone'>Primary Phone:  </label>" +
//             "<input type='number' maxlength='10' required id='pec_primary_phone' placeholder='508-588-5555'>" +
//             "<label for='pec_alt_phone'>Alternate Phone:  </label>" +
//             "<input type='number' maxlength='10' id='pec_alt_phone' placeholder='508-588-5858'>" +
//             "<label class='enter_button' for='enter_pec_phone_button'></label>" +
//             "<button name='enter_pec_phone_button' id='enter_pec_phone'>Enter</button>" +

//             "<legend>Secondary Emergency Contact</legend>" +
//             "<label for='sec_last_name'>Last Name:  </label>" +
//             "<input type='text' required id='sec_last_name' placeholder='Johnson'>" +
//             "<label for='sec_first_name'>First Name:  </label>" +
//             "<input type='text' required id='sec_first_name' placeholder='Milly'>" +
//             "<label class='enter_button' for='enter_sec_name_button'></label>" +
//             "<button name='enter_sec_name_button' id='enter_sec_name'>Enter</button><br>" +
//             "<label for='sec_primary_phone'>Primary Phone:  </label>" +
//             "<input type='number' maxlength='10' required id='sec_primary_phone' placeholder='508-588-5555'>" +
//             "<label for='sec_alt_phone'>Alternate Phone:  </label>" +
//             "<input type='number' maxlength='10' id='sec_alt_phone' placeholder='508-588-5858'>" +
//             "<label class='enter_button' for='enter_sec_phone_button'></label>" +
//             "<button name='enter_sec_phone_button' id='enter_sec_phone'>Enter</button>" +

//         "</fieldset>" +
//         "</form>" +
//     "</div>"
//     ;
// var newHousingEntryMsg =
//     "<div id='housingAndAssist>" +
//         "<form action='' method='post'>" +
//         "<fieldset>" +
//             "<legend>Housing Type and Assistance Needed</legend>" +
//             "<label for='type_of_housing'>Type of Housing</label>" +
//             "<ul>" +
//                 "<li><input type='radio' required name='type_of_housing' value='Independent' id='housing_ind'>Independent</input></li>" +
//                 "<li><input type='radio' required name='type_of_housing' value='Assisted Living' id='housing_al'>Assisted Living</input></li>" +
//                 "<li><input type='radio' required name='type_of_housing' value='Memory Care' id='housing_mc'>Memory Care</input></li>" +
//                 "<li><input type='radio' required name='type_of_housing' value='GAFC' id='housing_gafc'>GAFC</input></li>" +
//             "</ul>" +
//             "<label id='assistance_needed'>Assistance Needed</label>" +
//             "<ul>" +
//                 "<li><input type='checkbox' value='bathing'>Bathing: </input></li>" +
//                 "<input type='text' id='bathing_detail' disabled='true' placeholder='Needs hands on assistance, lower body washing.'>" +
//                 "<li><input type='checkbox' value='dressing'>Dressing: </input></li>" +
//                 "<input type='text' id='dressing_detail' disabled='true' placeholder='Needs assistance with lower body dressing and buttons.'>" +
//                 "<li><input type='checkbox' value='grooming'>Grooming: </input></li>" +
//                 "<input type='text' id='grooming_detail' disabled='true' placeholder='Needs cueing to soak dentures at night.'>" +
//                 "<li><input type='checkbox' value='medication assistance'>Medication Assistance: </input></li>" +
//                 "<input type='text' id='med_assist_detail' disabled='true' placeholder='Needs SAMM reminders'>" +
//                 "<li><input type='checkbox' value='ambulation'>Ambulation: </input></li>" +
//                 "<input type='text' id='Ambulation_detail' disabled='true' placeholder='Needs escorts to meals and activities.'>" +
//                 "<li><input type='checkbox' value='toileting'>Toileting: </input></li>" +
//                 "<input type='text' id='toileting_detail' disabled='true' placeholder='Occasional incontinence of bladder; needs cueing to change depends.'>" +
//             "</ul>" +
//             "<label for='prim_apt_pref'>Primary Apartment Preference</label>" +
//             "<ul>" +
//                 "<li><input type='radio' required name='prim_apt_pref' value='Studio' id='prim_pref_studio'>Studio</input></li>" +
//                 "<li><input type='radio' required name='prim_apt_pref' value='One Bedroom' id='prim_pref_onebed'>One Bedroom</input></li>" +
//                 "<li><input type='radio' required name='prim_apt_pref' value='One Bedroom Center' id='prim_pref_onebedcenter'>One Bedroom Center</input></li>" +
//                 "<li><input type='radio' required name='prim_apt_pref' value='One Bedroom Delux' id='prim_pref_onebeddelux'>One Bedroom Delux</input></li>" +
//                 "<li><input type='radio' required name='prim_apt_pref' value='Two Bedroom' id='prim_pref_twobed'>Two Bedroom</input></li>" +
//                 "<li><input type='radio' required name='prim_apt_pref' value='Cooperative Living' id='prim_pref_coop'>Cooperative Living</input></li>" +
//             "</ul>" +
//             "<label for='sec_apt_pref'>Secondary Apartment Preference</label>" +
//             "<ul>" +
//                 "<li><input type='radio' name='sec_apt_pref' value='Studio' id='sec_pref_studio'>Studio</input></li>" +
//                 "<li><input type='radio' name='sec_apt_pref' value='One Bedroom' id='sec_pref_onebed'>One Bedroom</input></li>" +
//                 "<li><input type='radio' name='sec_apt_pref' value='One Bedroom Center' id='sec_pref_onebedcenter'>One Bedroom Center</input></li>" +
//                 "<li><input type='radio' name='sec_apt_pref' value='One Bedroom Delux' id='sec_pref_onebeddelux'>One Bedroom Delux</input></li>" +
//                 "<li><input type='radio' name='sec_apt_pref' value='Two Bedroom' id='sec_pref_twobed'>Two Bedroom</input></li>" +
//                 "<li><input type='radio' name='sec_apt_pref' value='Cooperative Living' id='sec_pref_coop'>Cooperative Living</input></li>" +
//             "</ul>" +
//             "<label id='additional_services'>Additional Services</label>" +
//             "<ul>" +
//                 "<li><input type='checkbox' value='Laundry' id='addt_laundry'>Laundry</input></li>" +
//                 "<li><input type='checkbox' value='Housekeeping' id='addt_housekeeping'>Housekeeping</input></li>" +
//                 "<li><input type='checkbox' value='Meals' id='addt_meals'>Meals</input></li>" +
//             "</ul>" +
//             "<label for='est_move_date'>Estimated Move-in Date: </label>" +
//             "<input type='date' id='est_move_date'>" +
//         "</fieldset>" +
//         "</form>" +
//     "</div>";

// var newFinancialsEntryMsg =
//     "<div id='gen_financial'>" +
//         "<form action='' method='post'>" +
//         "<fieldset>" +
//             "<legend>Financial Information</legend>" +
//             "<label for='payer_source'>Payer Source</label>" +
//             "<ul>" +
//                 "<li><input type='radio' required name='payer_source' value='Private' id='payer_private'>Private</input></li>" +
//                 "<li><input type='radio' required name='payer_source' value='MassHealth' id='payer_masshealth'>MassHealth | GAFC</input></li>" +
//                 "<li><input type='radio' required name='payer_source' value='SCP' id='payer_sco'>SCO: <span class='fade_text'>(Navicare, Senior Whole Health, Tufts, etc)</span></input></li>" +
//                 "<li><input type='radio' required name='payer_source' value='Long Term Care Insurance' id='payer_ltc'>Long Term Care Insurance</input></li>" +
//             "</ul>" +
//             "</fieldset>" +
//         "</form>" +
//     "</div>"+
//     "<div id='detail_financial'>" +
//         "<form action='' method='post'>" +
//         "<fieldset>" +
//             "<legend>Income and Assets</legend>" +
//             "<label for='income_social'>Monthly Social Security Income:  $</label>" +
//             "<input type='number' min='0.00' step='0.01' value='' id='income_social' placeholder='2000'></input><br>" +
//             "<label for='income_pension'>Monthly Pension Income:  $</label>" +
//             "<input type='number' min='0.00' step='0.01' value='' id='income_pension' placeholder='2000'></input><br>" +
//             "<label for='income_ssi'>Monthly Supplemental Security (SSI) Income:  $</label>" +
//             "<input type='number' min='0.00' step='0.01' value='' id='income_ssi' placeholder='2000'></input><br>" +
//             "<label for='income_va'>Monthly VA Benefits Income:  $</label>" +
//             "<input type='number' min='0.00' step='0.01' value='' id='income_va' placeholder='2000'></input><br>" +
//             "<label for='income_other'>Other Monthly Income:  $</label>" +
//             "<input type='number' min='0.00' step='0.01' value='' id='income_other' placeholder='2000'></input><br>" +
//             "<label for='income_other_source'>Source:  </label><input type='text' id='income_other_source' placeholder='alimony'></input><br>"+
//             "<label for='property_value'>Estimated Property Value: $</label>" +
//             "<input type='number' min='0.00' step='0.01' value='' id='property_value' placeholder='2000'></input><br>" +
//             "<label for='bank_value'>Estimated Bank Accounts Value: $</label>" +
//             "<input type='number' min='0.00' step='0.01' value='' id='bank_value' placeholder='2000'></input><br>" +
//             "<label for='life_ins_value'>Estimated Life Insurance Value: $</label>" +
//             "<input type='number' min='0.00' step='0.01' value='' id='life_ins_value' placeholder='2000'></input><br>" +
//             "<label for='other_value'>Other Estimated Assets: $</label>" +
//             "<input type='number' min='0.00' step='0.01' value='' id='other_value' placeholder='2000'></input><br>" +
//             "<label for='other_value_source'>Source:  </label><input type='text' id='other_value_source' placeholder='rental income'></input>"+
//         "</fieldset>" +
//         "</form>" +
//     "</div>" +
//         "<div id='references_financial'>" +
//         "<form action='' method='post'>" +
//         "<fieldset>" +
//             "<legend>Financial References</legend>" +
//             "<label for='bank_ref_name'>Bank Name:  </label>" +
//             "<input type='text' id='bank_ref_name' placeholder='HarborOne'></input><br>" +
//             "<label for='bank_ref_number'>Bank Phone Number:  </label>" +
//             "<input type='number' id=bank_ref_number' maxlength='10' placeholder='5085885858'></input><br>" +
//             "<label for='landlord_ref_name'>Landlord Name:  </label>" +
//             "<input type='text' id='landlord_ref_name' placeholder='Jim Smith'></input><br>" +
//             "<label for='landlord_ref_number'>Landlord Phone Number:  </label>" +
//             "<input type='number' id=landlord_ref_number' maxlength='10' placeholder='5085885858'></input>" +
//         "</fieldset>" +
//         "</form>" +
//     "</div>"
//     ;

// var newMedicalEntryMsg =
//     "<div id='assessment_data'>" +
//         "<form action='' method='post'>" +
//         "<fieldset>" +
//             "<legend>Assessment Information</legend>" +
//             "<label for='assess_date'>Initial Assessment Scheduled:  </label>" +
//             "<input type='date' id='assess_date'></input><br>" +
//             "<label for='assess_date_completed'>Initial Assessment Completed:  </label>" +
//             "<input type='date' id='assess_dat_completed'></input><br>" +
//             "<label for='assessed_by'>Initial Assessment Completed By:  </label>" +
//             "<input type='text' id='assessed_by' placeholder='Jane Smith, R.N.'></input><br>" +
//             "<label for='level_of_care'>Level Of Care</label>" +
//             "<ul>" +
//                 "<li><input type='radio' required name='level_of_care' id='care_ind' value='Independent'>Independent</input></li>" +
//                 "<li><input type='radio' required name='level_of_care' id='care_traditional' value='Traditional'>Traditional</input></li>" +
//                 "<li><input type='radio' required name='level_of_care' id='care_enhanced' value='Enhanced'>Enhanced</input></li>" +
//                 "<li><input type='radio' required name='level_of_care' id='care_comprehensive' value='Comprehensive'>Comprehensive</input></li>" +
//             "</ul>" +
//             "<label for='other_plans'>Special Plans</label>" +
//             "<ul>" +
//                 "<li><input type='radio' name='other_plans' id='care_memory' value='Memory Care'>Memory Care</input></li>" +
//                 "<li><input type='radio' name='other_plans' id='care_gafc' value='GAFC'>GAFC</input></li>" +
//             "</ul>" +
//         "</fieldset>" +
//         "</form>" +
//     "</div>" +
//     "<div id='allergies_data'>" +
//         "<form action='' method='post'>" +
//         "<fieldset>" +
//             "<legend>Allergy Information</legend>" +
//             "<input type='checkbox' value='nkda' id='allergies_check'>No Known Drug Allergies</input><br>" +
//             "<label for='allergies'>Allergies:  </label>" +
//             "<input type='text' id='allergies' placeholder='penicillin'></input><br>" +
//         "</fieldset>" +
//         "</form>" +
//     "</div>" +
//     "<div id='medical_data'>" +
//         "<form action='' method='post'>" +
//         "<fieldset>" +
//             "<legend>Medical Information</legend>" +
//             "<label for='meds_on_admit'>Medications Currently Taken:  </input>" +
//             "<input type='text' id='meds_on_admit' placeholder='tylenol 500mg BID, lasix 40mg once daily'></input><br>" +
//             "<label for='health_issues'>Major Health Issues:  </input>" +
//             "<input type='text' id='health_issues' placeholder='h/o TIA, s/p hip replacement, COPD'></input><br>" +
//         "</fieldset>" +
//         "</form>" +
//     "</div>" +
//     "<div id='dietary_data'>" +
//         "<form action='' method='post'>" +
//         "<fieldset>" +
//         "<legend>Dietary Needs</legend>" +
//         "<label for='dietary'>Diet and Consistency</label>" +
//         "<ul>" +
//             "<li><input type='checkbox' required name='dietary' value='Regular' id='dietary_regular'>Regular</input></li>" +
//             "<li><input type='checkbox' required name='dietary' value='No Added Salt' id='dietary_nas'>No Added Salt</input></li>" +
//             "<li><input type='checkbox' required name='dietary' value='House Concentrated Carbohydrate' id='dietary_hcc'>House Concentrated Carbohydrate</input></li>" +
//             "<li><input type='checkbox' required name='dietary' value='Cut Up' id='dietary_cut'>Cut Up</input></li>" +
//             "<li><input type='checkbox' required name='dietary' value='Ground' id='dietary_ground'>Ground</input></li>" +
//             "<li><input type='checkbox' required name='dietary' value='Puree' id='dietary_puree'>Puree</input></li>" +
//             "<li><input type='checkbox' required name='dietary' value='Soft' id='dietary_soft'>Soft</input></li>" +
//         "</ul>" +
//         "</fieldset>" +
//         "</form>" +
//     "</div>" +
//     "<div id='pcp_data'>" +
//         "<form action='' method='post'>" +
//         "<fieldset>" +
//         "<legend>Primary Care Provider Information</legend>" +
//         "<label for='pcp_name'>Primary Care Physician:  </label>" +
//         "<input type='text' id='pcp_name' placeholder='Dr.John Smith'></input><br>" +
//         "<label for='pcp_phone'>PCP Phone Number:  </label>" +
//         "<input type='number' id='pcp_phone' maxlength='10' placeholder='5085558888'></input>" +
//         "<label for='pcp_fax'>PCP Fax Number:  </label>" +
//         "<input type='number' id='pcp_fax' maxlength='10' placeholder='5088885555'></input><br>" +
//         "<label for='pcp_street'>Street:  </label>" +
//         "<input type='text' id='pcp_street' placeholder='123 Prospect St.'>" +
//         "<label for='pcp_city'>City:  </label>" +
//         "<input type='text' id='pcp_city' placeholder='Brockton'>" +
//         "<label for='pcp_state'>State:  </label>" +
//         "<input type='text' id='pcp_state' placeholder='MA'>" +
//         "<label for='pcp_zipcode'>Zip:  </label>" +
//         "<input type='number' id='pcp_zipcode' placeholder='02301'>" +
//         "<label class='enter_button' for='enter_pcp_address_button'></label>" +
//         "<button name='enter_pcp_address_button' id='enter_pcp_address'>Enter</button><br>" +
//         "<label for='phys_form'>Physician Form Received</input>" +
//         "<input type='checkbox' name='phys_form' id='phys_form_box' value='Physician Form Received'></input>" +
//         "<input type='date' name='phys_form' id='phys_form_date'></input>" +
//         "</fieldset>" +
//         "</form>" +
//     "</div>" +
//     "<div id='pcp_data'>" +
//         "<form action='' method='post'>" +
//         "<fieldset>" +
//             "<legend>Pharmacy</legend>" +
//             "<label for='pharmacy_choice'>Pharmacy</label>" +
//             "<ul>" +
//                 "<li><input type='radio' required name='pharmacy_choice' id='pharmacy_gb' value='Greater Boston LTC'>Greater Boston</input></li>" +
//                 "<li><input type='radio' required name='pharmacy_choice' id='pharmacy_apothecare' value='Apothecare'>Apothecare</input></li>" +
//                 "<li><input type='radio' required name='pharmacy_choice' id='pharmacy_va' value='VA'>VA</input></li>" +
//                 "<li><input type='radio' required name='pharmacy_choice' id='pharmacy_mail' value='Mail Order Pharmacy'>Mail Order Pharmacy</input></li>" +
//                 "<li><input type='radio' required name='pharmacy_choice' id='pharmacy_other' value='Other Pharmacy'>Other Pharmacy</input></li>" +
//             "</ul>" +
//         "</fieldset>" +
//         "</form>" +
//     "</div>"
//     ;