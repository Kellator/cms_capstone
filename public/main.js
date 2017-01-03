//screen for user credentials entry
//screen for dashboard controls
//screens for client(new entry & existing): contact, prospect, housing, financials, medical. Comments = cumulative.
var databaseUrl = 'https://node-unit-project-kellator.c9users.io/clients/';

//new client entry data fields
var newContactEntryMsg = 
    "<div id='contact_information'>" +
        "<form action='' method='post'>" +
        "<fieldset>" +
            "<legend>Contact Information</legend>" +
            "<label for='contact_last_name'>Last Name:  </label>" +
            "<input type='text' required id='contact_last_name' placeholder='Johnson'>" +
            "<label for='contact_first_name'>First Name:  </label>" +
            "<input type='text' required id='contact_first_name' placeholder='Milly'>" +
            "<label class='enter_button' for='enter_contact_name_button'></label>" +
            "<button name='enter_contact_name_button' id='enter_contact_name'>Enter</button>" +

            "<legend>Contact Address</legend>" +
            "<label for='contact_street'>Street:  </label>" +
            "<input type='text' id='contact_street' placeholder='123 Prospect St.'>" +
            "<label for='contact_city'>City:  </label>" +
            "<input type='text' id='contact_city' placeholder='Brockton'>" +
            "<label for='contact_state'>State:  </label>" +
            "<input type='text' id='contact_state' placeholder='MA'>" +
            "<label for='contact_zipcode'>Zip:  </label>" +
            "<input type='number' id='contact_zipcode' placeholder='02301'>" +
            "<label class='enter_button' for='enter_contact_address_button'></label>" +
            "<button name='enter_contact_address_button' id='enter_contact_address'>Enter</button>" +

            "<legend>Contact Phone Numbers</legend>" +
            "<label for='contact_primary_phone'>Primary Phone:  </label>" +
            "<input type='number' maxlength='10' required id='contact_primary_phone' placeholder='508-588-5555'>" +
            "<label for='contact_alt_phone'>Alternate Phone:  </label>" +
            "<input type='number' maxlength='10' id='contact_alt_phone' placeholder='508-588-5858'>" +
            "<label class='enter_button' for='enter_contact_phone_button'></label>" +
            "<button name='enter_contact_phone_button' id='enter_contact_phone'>Enter</button>" +

            "<legend>Contact Email</legend>" +
            "<label for='contact_email'>Email:  </label>" +
            "<input type='email' id='contact_email' placeholder='name@email.com'>" +
            "<label class='enter_button' for='enter_contact_email_button'></label>" +
            "<button name='enter_contact_email_button' id='enter_contact_email'>Enter</button>" +
        "</fieldset>" +
        "</form>" +
    "</div>" +
    "<div id='contact_addl_details'>" +
        "<form action='' method='post'>" +
        "<fieldset>" +
            "<legend>Additional Details</legend>" +
            "<label for='rel_to_prospect'>Relationship to Prospect</label>" +
            "<ul>" +
                "<li><input type='radio' required name='rel_to_prospect' value='Self' id=rel_self' checked>Self</> " +
                "<li><input type='radio' required name='rel_to_prospect' value='Spouse' id=rel_spouse'>Spouse</> " +
                "<li><input type='radio' required name='rel_to_prospect' value='Adult Child' id=rel_child'>Adult Child</> " +
                "<li><input type='radio' required name='rel_to_prospect' value='Sibling' id=rel_sibling'>Sibling</> " +
                "<li><input type='radio' required name='rel_to_prospect' value='Care Professional' id=rel_careProf'>Care Professional</> " +
                "<li><input type='radio' required name='rel_to_prospect' value='Other' id='rel_other'>Other</><br><input type='text' placeholder='Other'/>" +
            "</ul>" +
            "<label for='referral_source'>Referral Source</label>" +
            "<ul>" + 
                "<li><input type='radio' required name='referral_source' value='Self' id='ref_self' checked>Self</>" +
                "<li><input type='radio' required name='referral_source' value='APFM' id='ref_apfm'>A Place For Mom</>" +
                "<li><input type='radio' required name='referral_source' value='Word of Mouth' id='ref_wom'>Word of Mouth</><br><input type='text' placeholder='Referred by'/>" +
                "<li><input type='radio' required name='referral_source' value='Health Care Provider' id='ref_hcp'>Health Care Provider</><br><input type='text' id='referred_by' placeholder='Referred by'/>" +
            "</ul>" +
            "<label for='first_contact_date'>Date of First Contact </label>" +
            "<input type='date' name='first_contact_date'>" +
        "</fieldset>" +
        "</form>" +
    "</div>"
    ;


//what api return data will look like: /api/client_id 
var Mock_Client_Data = {
    "client_id": [ 
        {
            "contact": {
                "contactName": {
                    "contactLastName": "Last Name",
                    "contactFirstName": "First Name"
                },
                "contactPrimaryPhone": "5085885334", //10-digit numbers only
                "contactSecondaryPhone": "5085885334",
                "contactAddress": {
                    "contactStreet": "Street Address",
                    "contactCity": "City",
                    "contactState": "State",
                    "contactZip": "02301"
                },
                "contactEmail": "contactemail@gmail.com",
                "relationToProspect": "relationship to prospect", //radio with adult child, spouse, friend, guardian, etc
                "referralSource": "Referral Source",
                "referredBy": "Referred By",
                "dateOfFirstContact": "2017-01-01" //use date function
            },

    }]
};

//constructor function to create client data package
function ClientDataPackage(_id) {
    this.client_id = _id;
}
ClientDataPackage.prototype.add_contact_name = function(lastName, firstName) { 
    this.contactName.contactLastName = lastName;
    this.contactName.contactFirstName = firstName;
};
ClientDataPackage.prototype.add_contact_phone = function(primPhone, secPhone) {
    this.contactPrimaryPhone = primPhone;
    this.contactSecondaryPhone = secPhone;
};
ClientDataPackage.prototype.add_contact_address = function(street, city, state, zip) {
    this.contactAddress.contactStreet = street;
    this.contactAddress.contactCity = city;
    this.contactAddress.contactState = state;
    this.contactAddress.contactZip = zip;
};
ClientDataPackage.prototype.add_contact_email = function(email) {
    this.contactEmail = email;
};
ClientDataPackage.prototype.add_contact_relationToProspect = function(relation) {
    this.relationToProspect = relation;
};
ClientDataPackage.prototype.add_contact_referral = function(source, referredBy) {
    this.referralSource = source;
    this.referredBy = referredBy;
};
ClientDataPackage.prototype.add_first_contact = function(date) {
    this.dateOfFirstContact = date;
};

var contactDisplay = $(clientContactDisplay); //jquery object that has the HTML in it. contactDisplay.find('#contactLastName').val(data that you want to put in it)
//this variable can be used to collect and display
var clientContactDisplay =
            "<div id='contact_information'>" +
                    "<form action='' method='post'>" +
                    "<fieldset>" +
                        "<legend>Contact Information</legend>" +
                        "<label for='contact_last_name'>Last Name:  </label>" + 
                        "<input type='text' required id='contact_last_name' disabled='true' value=''>" +
                        "<label for='contact_first_name'>First Name:  </label>" +
                        "<input type='text' required id='contact_first_name' disabled='true' value=''>" +
            
                        "<legend>Contact Address</legend>" +
                        "<label for='contact_street'>Street:  </label>" +
                        "<input type='text' id='contact_street' disabled='true' value=''>" +
                        "<label for='contact_city'>City:  </label>" +
                        "<input type='text' id='contact_city' disabled='true' value=''>" +
                        "<label for='contact_state'>State:  </label>" +
                        "<input type='text' id='contact_state' disabled='true' value=''>" +
                        "<label for='contact_zipcode'>Zip:  </label>" +
                        "<input type='number' id='contact_zipcode' disabled='true' value=''>" +
    
                        "<legend>Contact Phone Numbers</legend>" +
                        "<label for='contact_primary_phone'>Primary Phone:  </label>" +
                        "<input type='number' maxlength='10' required id='contact_primary_phone' disabled='true' value=''>" +
                        "<label for='contact_alt_phone'>Alternate Phone:  </label>" +
                        "<input type='number' maxlength='10' id='contact_alt_phone' disabled='true' value=''>" +
            
                        "<legend>Contact Email</legend>" +
                        "<label for='contact_email'>Email:  </label>" +
                        "<input type='email' id='contact_email' disabled='true' value=''><br>" +
                        "<input type='button' id='edit_contact_button' class='edit_button' value='Edit Contact Information'></input>" +
                    "</fieldset>" +
                    "</form>" +
                "</div>" +
                "<div id='contact_addl_details'>" +
                    "<form action='' method='post'>" +
                    "<fieldset>" +
                        "<legend>Additional Details</legend>" +
                        "<label for='rel_to_prospect'>Relationship to Prospect</label>" +
                        "<ul>" +
                            "<li><input type='radio' required name='rel_to_prospect' value='Self' id=rel_self' checked>Self</> " +
                            "<li><input type='radio' required name='rel_to_prospect' value='Spouse' id=rel_spouse'>Spouse</> " +
                            "<li><input type='radio' required name='rel_to_prospect' value='Adult Child' id=rel_child'>Adult Child</> " +
                            "<li><input type='radio' required name='rel_to_prospect' value='Sibling' id=rel_sibling'>Sibling</> " +
                            "<li><input type='radio' required name='rel_to_prospect' value='Care Professional' id=rel_careProf'>Care Professional</> " +
                            "<li><input type='radio' required name='rel_to_prospect' value='Other' id='rel_other'>Other</><br><input type='text' placeholder='Other'/>" +
                        "</ul>" +
                        "<label for='referral_source'>Referral Source</label>" +
                        "<ul>" + 
                            "<li><input type='radio' required name='referral_source' value='Self' id='ref_self' checked>Self</>" +
                            "<li><input type='radio' required name='referral_source' value='APFM' id='ref_apfm'>A Place For Mom</>" +
                            "<li><input type='radio' required name='referral_source' value='Word of Mouth' id='ref_wom'>Word of Mouth</><br><input type='text' placeholder='Referred by'/>" +
                            "<li><input type='radio' required name='referral_source' value='Health Care Provider' id='ref_hcp'>Health Care Provider</><br><input type='text' placeholder='Referred by'/>" +
                        "</ul>" +
                        "<label for='first_contact_date'>Date of First Contact </label>" +
                        "<input type='date' name='first_contact_date' disabled='true' value=''>" +
                    "</fieldset>" +
                    "</form>" +
                "</div>"
                ;
var clientProspectDisplay;
var clientHousingDisplay;
var clientFinancialDisplay;
var clientMedicalDisplay;
var clientCommentsDisplay;

//functions to search for and display list of names (hook up to get clients endpoint)
//call to endpoint and render data in html - when you click on name then to clientdata function - use client_id to retrieve data\
//called at submit handler - displayClientList is callback function 
function getClientList(query, type, callback) {
    var settings = {
        url: 'https://node-unit-project-kellator.c9users.io/clients/',
        dataType: 'json',
        success: function(data) {
            callback(data, type);
            console.log(data);
        }
    };
    $.ajax(settings);
}
//displays list of search results in html - names as links to perform get of specific client information
function displayClientList(data, type) {
    console.log('display list of names and id');
    var resultElement = '';
    if (data) {
        $('.client_search_results_list' ).append('<div id="search_display">Client Search Results</div>'); 
        $.each(data, function(index, client) {
            console.log(index);
            console.log(client);
            console.log(client._id);
            resultElement = 
            '<div value="'+ index + '" class="search_result_return">' + '<a href= "' + databaseUrl + client._id +  '">' + 
                '<ul>' +
                    '<li>Contact Name:  ' + client.contact.contactName.contactLastName + ', ' + client.contact.contactName.contactFirstName + '</li>' +
                    '<li>Contact Phone:  ' + client.contact.contactPrimaryPhone + '</li>' +
                    // '<li>Prospect Name:  ' + client.prospect.prospectLastName + ', ' + client.prospect.prospectFirstName + '</li> ' +
                    // '<li>Prospect DOB:  ' + client.prospect.date_of_birth + '</li>' +
                    // '<li>Prospect Gender:  ' + client.prospect.gender + '</li>' +
                    // '<li>Prospect Housing Type:  ' + client.housing.type_of_housing + '</li>' +
                '</ul>' +
            '</div></a>';
        
        $('#search_display').append(resultElement);
    });
    }
    else {
            resultElement += '<p>Sorry.  There are no results for your search.  Try again with a different name.</p.';
        }
    }


//function to retrieve client_id data
function getClientData(callbackFn) {
    setTimeout(function(){ callbackFn(Mock_Client_Data)}, 100);
}

//would this function instead need to be multiple functions ?  displayClientDataContact, displayClientDataPropsect, displayClientDataFinancials etc?
function displayClientData(data) {
    console.log(data.client_id);
    if (data) {
        for (var index in data.client_id) {
            var returnData = data.client_id[index];
            //variables separate returned data for API  - 
            var contactData = returnData.contact;
            // var contactDataName = contactData.contactName;
            //console.log(contactData);
            var prospectData = returnData.prospect;
            var housingData = returnData.housingAssistance;
            var financialsData = returnData.financials;
            var medicalData = returnData.medical;
            $("#contact_block").append();
            $("#prospect_block").append();
            $("#housing_block").append();
            $("#financials_block").append();
            $("#medical_block").append();
            $("#comments_block").append();
        } 
    }
        else {
            function enterNewClientData() {
            //variables separate returned data for API
            $("#contact_block").append(newContactEntryMsg);
            $("#prospect_block").append(newProspectEntryMsg);
            $("#housing_block").append(newHousingEntryMsg);
            $("#financials_block").append(newFinancialsEntryMsg);
            $("#medical_block").append(newMedicalEntryMsg);
            $("#comments_block").append();
        }
    }
}
//retrieves and displays client data
function getAndDisplayClientData() {
    getClientData(displayClientData);
}

//button handlers
//new client entry button
function newClientHandler() {
    $('body').on('click', '#new_client_button', function(event) {
        event.preventDefault();
        console.log('new client button pushed');
    });
}
//allows user to enter previously entered contact information
function editContactHandler() {
    $('body').on('click', '#edit_contact_button', function(event) {
        event.preventDefault();
        console.log('edit contact button pushed');
    });
}
//resets client search fields
function resetClientSearchHandler() {
    $('body').on('click', '#reset_search', function(event) {
        event.preventDefault();
        console.log('reset search button pushed');
        $('#last_name').val('');
        $('#first_name').val('');
    });
}
//submits client search data
function submitClientSearchHandler() {
    $('body').on('click', '#submit_search', function(event) {
        event.preventDefault();
        console.log('submit search button pushed');
        var query;
        var type;
        console.log(query);
        getClientList(query, type, displayClientList);
    });
}
$(function() {
    getAndDisplayClientData();
    newClientHandler();
    editContactHandler();
    resetClientSearchHandler();
    submitClientSearchHandler();
});


//rest of mock data for when the code actually works
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