//screen for user credentials entry
//screen for dashboard controls
//screens for client(new entry & existing): contact, prospect, housing, financials, medical. Comments = cumulative.
var newContactEntryMsg = 
            "<div id='contact_name'>" +
                "<form action='' method='post'>" +
                "<fieldset>" +
                    "<legend>Contact Name</legend>" +
                    "<label id='contact_last_name'>Last Name:  </label>" +
                    "<input type='text' required id='contact_last_name' placeholder='Johnson'>" +
                    "<label id='contact_first_name'>First Name:  </label>" +
                    "<input type='text' required id='contact_first_name' placeholder='Milly'>" +
                    "<label class='enter_button' id='enter_contact_name_button'></label>" +
                    "<button name='enter_contact_name_button' id='enter_contact_name'>Enter</button>" +
                "</fieldset>" +
                "</form>" +
            "</div>" +
            "<div id='contact_address'>" +
                "<form action='' method='post'>" +
                "<fieldset>" +
                    "<legend>Contact Address</legend>" +
                    "<label id='contact_street'>Street:  </label>" +
                    "<input type='text' id='contact_street' placeholder='123 Prospect St.'>" +
                    "<label id='contact_city'>City:  </label>" +
                    "<input type='text' id='contact_city' placeholder='Brockton'>" +
                    "<label id='contact_state'>State:  </label>" +
                    "<input type='text' id='contact_state' placeholder='MA'>" +
                    "<label id='contact_zipcode'>Zip:  </label>" +
                    "<input type='number' id='contact_zipcode' placeholder='02301'>" +
                    "<label class='enter_button' id='enter_contact_address_button'></label>" +
                    "<button name='enter_contact_address_button' id='enter_contact_address'>Enter</button>" +
                "</fieldset>" +
                "</form>" +
            "</div>" +
            "<div id='contact_phone'>" +
                "<form action='' method='post'>" +
                "<fieldset>" +
                    "<legend>Contact Phone Numbers</legend>" +
                    "<label id='contact_primary_phone'>Primary Phone:  </label>" +
                    "<input type='number' maxlength='10' required id='contact_primary_phone' placeholder='508-588-5555'>" +
                    "<label id='contact_alt_phone'>Alternate Phone:  </label>" +
                    "<input type='number' maxlength='10' id='contact_alt_phone' placeholder='508-588-5858'>" +
                    "<label class='enter_button' id='enter_contact_phone_button'></label>" +
                    "<button name='enter_contact_phone_button' id='enter_contact_phone'>Enter</button>" +
                "</fieldset>" +
                "</form>" + 
            "</div>" +
            "<div id='contact_email'>" +
                "<form action='' method='post'>" +
                "<fieldset>" +
                    "<legend>Contact Email</legend>" +
                    "<label id='contact_email'>Email:  </label>" +
                    "<input type='email' id='contact_email' placeholder='name@email.com'>" +
                    "<label class='enter_button' id='enter_contact_email_button'></label>" +
                    "<button name='enter_contact_email_button' id='enter_contact_email'>Enter</button>" +
                "</fieldset>" +
                "</form>" +
            "</div>" +
            "<div id='contact_addl_details'>" +
                "<form action='' method='post'>" +
                "<fieldset>" +
                    "<legend>Additional Details</legend>" +
                    "<label id='rel_to_prospect'>Relationship to Prospect</label>" +
                    "<ul>" +
                        "<li><input type='radio' value='Self' id=rel_self' checked>Self</> " +
                        "<li><input type='radio' value='Spouse' id=rel_spouse'>Spouse</> " +
                        "<li><input type='radio' value='Adult Child' id=rel_child'>Adult Child</> " +
                        "<li><input type='radio' value='Sibling' id=rel_sibling'>Sibling</> " +
                        "<li><input type='radio' value='Care Professional' id=rel_careProf'>Care Professional</> " +
                        "<li><input type='radio' value='Other' id='rel_other'>Other</><br><input type='text' placeholder='other relationship'/>" +
                    "</ul>" +
                    "<label id='referra_source'>Referral Source</label>" +
                    "<ul>" + 
                        "<li><input type='radio' value='Self' id='ref_self' checked>Self</>" +
                        "<li><input type='radio' value='APFM' id='ref_apfm'>A Place For Mom</>" +
                        "<li><input type='radio' value='Word of Mouth' id='ref_wom'>Word of Mouth</><br><input type='text' placeholder='Referred by'/>" +
                        "<li><input type='radio' value='Health Care Provider' id='ref_hcp'>Health Care Provider</><br><input type='text' placeholder='Referred by'/>" +
                    "</ul>" +
                    "<label id='first_contact_date'>Date of First Contact </label>" +
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
                "contactName": "Contact Name",
                "contactPrimaryPhone": "5085885334", //10-digit numbers only
                "contactSecondaryPhone": "5085885334",
                "contactAddress": "Contact Address",
                "contactEmail": "contactemail@gmail.com",
                "relationToProspect": "relationship to prospect", //radio with adult child, spouse, friend, guardian, etc
                "referralSource": "Referral Source", //radio with APFM, SNF : "detail", VNA : "detail", WOM : "detail", etc
                "dateOfFirstContact": "Date of first contact" //use date function
            },
            "prospect": {
                "prospectName": "Prospective Resident Name",
                "prospectPhone": "5085885334", // 10-digit numbers only ? same as contact button?
                "prospectAddress": "Prospect Address",
                "dateOfBirth": "01011920", //8 digit date - 2 digit month, 2 digit day, 4 digit year
                "socialSec": "011010111", //9 digit number
                "insNumbers": {
                    "medicareNum": "011010111A", //9 digit number with one or two letters
                    "massHealth": "10101010101",
                    "insuranceNum": "XX010101010"   
                },
                "gender": "Gender", //radio male female
                "maritalStatus": "Marital Status",
                "veteranStatus": "Veteran Status", //radio yes vet - text input service
                "religion": "Religion",
                "levelOfEducation": "Level of Education",
                "currentHousing": "Current Living Situation", 
                "leadStatus": "Lead Status",
                "poa": {
                    "poaName": "POA Name",
                    "poaPhone": "POA Phone"
                },
                "hcp": {
                    "hcpName": "HCP Name",
                    "hcpPhone": "HCP Phone"
                },
                "dnr": "DNR Status", //create alert box on dashboard
                "eContact": {
                    "eContactName": "Emergency Contact Name",
                    "eContactPhone": "5085885334"
                },
                "altEmergContact": {
                    "altContactName": "Alternate Emergency Contact Name",
                    "altContactPhone": "5085885334"
                },
                "prefHospital": "Preferred Hospital",
                "followUpDate": "01012017", //8 digit date
                "dateAddedtoDB": "01012017"
            },
            "housingAssistance": {
                "housingType": "Type of Housing", // radio Independent, Assisted Living, Memory Care, GAFC
                "assistanceNeeded": {
                    "bathing": "detail of bathing assist",
                    "dressing": "detail of dressing assist",
                    "grooming": "detail of grooming assist",
                    "medAssist": "detail of medication assistance",
                    "ambulation": "detail of ambulation assistance"
                },
                "primaryAptPref": "Primary Apartment Type Preference", 
                "secondaryAptPref": "Second Choice Apartment Preference",
                "estimatedMoveDate": "01012017", //8 digit date
                "additionalServices": "Additional Services incl. laundry, housekeeping, meals",
                "appOrDec": "Approved or declined"
            },
            "financials": {
                "appFee": "Application fee paid",
                "payerSource": "Payer Source", //private, LTC ins, MassHealth, Navicare, etc
                "income": {
                    "monthlyIncome": "Monthly Income", //should generate from other entries
                    "pension": "Monthly Pension", //income is numbers only
                    "socSecMonthly": "Monthly Social Security Wages",
                    "ssi": "SSI Income",
                    "vaBenefits": "Monthly VA Benefits",
                    "otherIncome": "Other Monthly Income", 
                    "otherIncomeSource": "Other Income Source" //text input    
                },
                "assets": {
                    "propertyValue": "Estimated Property Assets",
                    "bankAccounts": "Estimate Bank Account Amounts",
                    "lifeInsurance": "Estimated Value of Life Insurance",
                    "otherAssets": "Estimated value of other assets",
                    "otherAssetsSource": "Source of other assets"   
                },
                "bankReference": {
                    "bankRefName": "Bank Reference Name",
                    "bankRefNumber": "Banke Reference Phone Number"   
                },
                "landlordReference": {
                    "landlordRefName": "Landlord Reference Name",
                    "landlordRefNum": "Landlord Reference Number"   
                }
            },
            "medical": {
                "initialAssessment": {
                    "assessSchedDate": "01012017", //8 digit date of initial assessment
                    "assessCompDate": "01012017",  
                    "assessedBy": "Name of Assessor"
                },
                "alfPlanType": "Care Plan Level",
                "allergies": "Any known allergies",
                "oxygenStatus": "Is prospect oxygen dependent?",
                "medsOnAdmit": "List of medications on admission",
                "healthIssues": "Any major health issues or disabilities",
                "ambulation": "Assistance with Ambulation",
                "homeCareOnAdmit": "Prospect receives home care prior to admission",
                "diet": "Dietary needs",
                "pcp": {
                    "pcpName": "Primary Care Physician Name",
                    "pcpNum": "PCP Phone Number",
                    "pcpFax": "PCP Fax Number",
                    "pcpAddress": "PCP Address"
                },
                "physFormRec": "01012017", //8 digit date physician form received
                "pharmacy": "Name of Pharmacy",
                //following information is collected in prospect section
                "poa": {
                    "poaName": "POA Name",
                    "poaPhone": "POA Phone"
                },
                "hcp": {
                    "hcpName": "HCP Name",
                    "hcpPhone": "HCP Phone"
                },
                "dnr": "DNR", //create alert box on dashboard
                "eContact": {
                    "eContactName": "Emergency Contact Name",
                    "eContactPhone": "5085885334"
                },
                "altEmergContact": {
                    "altContactName": "Alternate Emergency Contact Name",
                    "altContactPhone": "5085885334"
                },
                "prefHospital": "Preferred Hospital",
            },
            "comments": {
                "user" : "user who creates comment",
                "commentDate": "01012017", //8 digit date comment entered
                "commentText": "Comment Text"
            }
    }]
};

//function to retrieve client_id data
function getClientData(callbackFn) {
    setTimeout(function(){ callbackFn(Mock_Client_Data)}, 100);
}

//would this function instead need to be multiple functions ?  displayClientDataContact, displayClientDataPropsect, displayClientDataFinancials etc?
function displayClientData(data) {
    console.log(data.client_id);
    for (var index in data.client_id) {
        var returnData = data.client_id[index];
        //variables separate returned data for API
        var contactData = returnData.contact;
        var prospectData = returnData.prospect;
        var housingData = returnData.housingAssistance;
        var financialsData = returnData.financials;
        var medicalData = returnData.medical;
        $("#contact_block").append(newContactEntryMsg);
        $("#prospect_block").append();
        $("#housing_block").append();
        $("#financials_block").append();
        $("#medical_block").append();
        $("#comments_block").append();
            //"<p>" + contactData.contactName + "</p>");
        //target area to append information e.g. contacts_block    
    }
}

function getAndDisplayClientData() {
    getClientData(displayClientData);
}

$(function() {
    getAndDisplayClientData();
});