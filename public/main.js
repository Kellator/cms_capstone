//screen for user credentials entry
//screen for dashboard controls
//screens for client(new entry & existing): contact, prospect, housing, financials, medical. Comments = cumulative.
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
                    "<label id='rel_to_prospect'>Relationship to Prospect</label>" +
                    "<ul>" +
                        "<li><input type='radio' value='Self' id=rel_self' checked>Self</> " +
                        "<li><input type='radio' value='Spouse' id=rel_spouse'>Spouse</> " +
                        "<li><input type='radio' value='Adult Child' id=rel_child'>Adult Child</> " +
                        "<li><input type='radio' value='Sibling' id=rel_sibling'>Sibling</> " +
                        "<li><input type='radio' value='Care Professional' id=rel_careProf'>Care Professional</> " +
                        "<li><input type='radio' value='Other' id='rel_other'>Other</><br><input type='text' placeholder='Other'/>" +
                    "</ul>" +
                    "<label id='referral_source'>Referral Source</label>" +
                    "<ul>" + 
                        "<li><input type='radio' value='Self' id='ref_self' checked>Self</>" +
                        "<li><input type='radio' value='APFM' id='ref_apfm'>A Place For Mom</>" +
                        "<li><input type='radio' value='Word of Mouth' id='ref_wom'>Word of Mouth</><br><input type='text' placeholder='Referred by'/>" +
                        "<li><input type='radio' value='Health Care Provider' id='ref_hcp'>Health Care Provider</><br><input type='text' placeholder='Referred by'/>" +
                    "</ul>" +
                    "<label for='first_contact_date'>Date of First Contact </label>" +
                    "<input type='date' name='first_contact_date'>" +
                "</fieldset>" +
                "</form>" +
            "</div>"
            ;

var newProspectEntryMsg = 
            "<div id='prospect_information'>" +
                "<form action='' method='post'>" +
                "<fieldset>" +
                    "<legend>Prospect Contact Information</legend>" +
                    "<label for='prospect_last_name'>Last Name:  </label>" +
                    "<input type='text' required id='prospect_last_name' placeholder='Johnson'>" +
                    "<label for='prospect_first_name'>First Name:  </label>" +
                    "<input type='text' required id='prospect_first_name' placeholder='Joseph'>" +
                    "<label class='enter_button' for='enter_prospect_name_button'></label>" +
                    "<button name='enter_prospect_name_button' id='enter_prospect_name'>Enter</button>" +
                    "<legend>Prospect Phone Numbers</legend>" +
                    "<label for='prospect_primary_phone'>Primary Phone:  </label>" +
                    "<input type='number' maxlength='10' required id='contact_primary_phone' placeholder='508-588-5555'>" +
                    "<label for='prospect_alt_phone'>Alternate Phone:  </label>" +
                    "<input type='number' maxlength='10' id='contact_alt_phone' placeholder='508-588-5858'>" +
                    "<label class='enter_button' for='enter_prospect_phone_button'></label>" +
                    "<button name='enter_prospect_phone_button' id='enter_prospect_phone'>Enter</button>" +
                    "<legend>Prospect Address</legend>" +
                    "<label for='prospect_street'>Street:  </label>" +
                    "<input type='text' id='prospect_street' placeholder='123 Prospect St.'>" +
                    "<label for='prospect_city'>City:  </label>" +
                    "<input type='text' id='prospect_city' placeholder='Brockton'>" +
                    "<label for='prospect_state'>State:  </label>" +
                    "<input type='text' id='prospect_state' placeholder='MA'>" +
                    "<label for='prospect_zipcode'>Zip:  </label>" +
                    "<input type='number' id='prospect_zipcode' placeholder='02301'>" +
                    "<label class='enter_button' for='enter_prospect_address_button'></label>" +
                    "<button name='enter_prospect_address_button' id='enter_prospect_address'>Enter</button>" +
                "</fieldset>" +
                "</form>" +
            "</div>" +
            "<div id='prospect_identification'>" +
                "<form action='' method='post'>" +
                "<fieldset>" +
                    "<legend>Prospect Identification</legend>" +
                    "<label for='date_of_birth'>Date of Birth </label>" +
                    "<input type='date' id='date_of_birth' required name='date_of_birth'>" +
                    "<label for='ssn'>Social Security Number </label>" +
                    "<input type='number' id='ssn' maxlength='9' required placeholder='000112222'> " +
                    "<label for='medicare'>Medicare Number </label>" +
                    "<input type='text' id='medicare' required placeholder='000112222A'>" +
                    "<label for='massHealth'>MassHealth Number </label>" +
                    "<input type='text' id='massHealth' placeholder='000111222333'>" +
                    "<label for='other_ins'>Other Insurance </label>" +
                    "<input type='text' id='other_ins' placeholder='BCBS XX010101010'>" +
                "</fieldset>" +
                "</form>" +
            "</div>" +
            "<div id='prospect_addl_information'>" +
                "<form action='' method='post'>" +
                "<fieldset>" +
                    "<legend>Additional Information</legend>" +
                    "<label id='gender'>Gender</label>" +
                    "<ul>" + 
                        "<li><input type='radio' value='Male' id='male'>Male</>" +
                        "<li><input type='radio' value='Female' id='female'>Female</>" +
                    "</ul>" +
                    "<label id='marital_status'>Marital Status</label>" +
                    "<ul>" +
                        "<li><input type='radio' value='single' id='single'>Single</>" +
                        "<li><input type='radio' value='married' id='married'>Married</>" +
                        "<li><input type='radio' value='widowed' id='widowed'>Widowed</>" +
                        "<li><input type='radio' value='separated' id='separated'>Separated</>" +
                    "</ul>" +
                    "<label id='veteran_status'>Veteran Status</label>" +
                    "<ul>" +
                        "<li><input type='radio' value='veteran' id='veteran'>Veteran:  </>" + 
                        "<label for='service_branch'>Branch of Service:  </label><input type='text' id='service_branch' placeholder='Navy'>" +
                        "<li><input type='radio' value='Not a Veteran' id='notVet'>Not a Veteran</>" +
                    "</ul>" +
                    "<label id='religion'>Religion</label>" +
                    "<input type='text' id='religion' placeholder='Lutheran'>" +
                    
                    "<label id='education'>Highest Level of Education</label>" +
                    "<ul>" +
                        "<li><input type='radio' value='grade_school' id='grade_school'>Grade School</>" +
                        "<li><input type='radio' value='high_school' id='high_school'>High School</>" +
                        "<li><input type='radio' value='trade' id='trade'>Trade School</>" +
                        "<li><input type='radio' value='college' id='college'>College</>" +
                        "<li><input type='radio' value='post_grad' id='post_grad'>Post Graduate</>" +
                    "</ul>" +
                    "<label id='current_housing'>Current Housing Situation</label>" +
                    "<ul>" +
                        "<li><input type='radio' value='Alone' id='housing_alone'>Alone</>" +
                        "<li><input type='radio' value='With Spouse' id='housing_spouse'>With Spouse</>" +
                        "<li><input type='radio' value='With Family' id='housing_family'>With Family</>" +
                        "<li><input type='radio' value='Skilled Nursing Facility' id='housing_snf'>Skilled Nursing Facility</>" +
                        "<li><input type='radio' value='Other Assisted Living Community' id='housing_alf'>Other Assisted Living Community</>" +
                        "<li><input type='radio' value='Senior Housing' id='housing_senior'>Senior Housing</>" +
                    "</ul>" +
                    "<label id='lead_status'>Lead Status</label>" +
                    "<ul>" +
                        "<li><input type='radio' value='hot' id='lead_hot'>Hot</>" +
                        "<p>Move-in within 1-3 months.</p>" +
                        "<li><input type='radio' value='warm' id='lead_warm'>Warm</>" +
                        "<p>Move-in within 3-6 months.</p>" +
                        "<li><input type='radio' value='cool' id='lead_cool'>Cool</>" +
                        "<p>Move-in after 6 months.</p>" +
                    "</ul>" +
                    "<label for='date_to_alcis'>Date Entered in ALCIS:  </label>" + //can date be entered by server not user?
                    "<input type='date' name='date_to_alcis'>" +
                    "<label for='follow_up_date'>Follow-up Date:  </label>" + //follow up assigned by server -e.g. dated added plus 3 months
                    "<input type='date' name='follow_up_date'>" +
                "</fieldset>" +
                "</form>" +
            "</div>" +
            "<div id='prospect_emergency_info'>" +
                "<form action='' method='post'>" +
                "<fieldset>" +
                    "<legend>Emergency Information</legend>" +
                    "<label id='pref_hospital'>Preferred Hospital</label>" +
                    "<ul>" +
                        "<li><input type='radio' value='Brockton' id='hospital_brockton'>Signature Healthcare | Brockton Hospital</input>" +
                        "<li><input type='radio' value='Good Samaritan id='hospital_goodsam'>Steward Healthcare | Good Samaritan Hospital</input>" +
                    "</ul>" +
                    "<legend>DNR Status</legend>" +
                    "<ul>" +
                        "<li><input type='radio' value='DNR Present' id='dnr_present'>DNR</input>" +
                        "<li><input type='radio' value='DNR Not Present' id='dnr_not_present'>No DNR</input>" +
                    "</ul>" +
                    "<legend>Power of Attorney</legend>" + //need to include buttons for same as (econtact, poa, hcp, etc)
                    "<label for='poa_last_name'>Last Name:  </label>" +
                    "<input type='text' required id='poa_last_name' placeholder='Johnson'>" +
                    "<label for='poa_first_name'>First Name:  </label>" +
                    "<input type='text' required id='poa_first_name' placeholder='Milly'>" +
                    "<label class='enter_button' for='enter_poa_name_button'></label>" +
                    "<button name='enter_poa_name_button' id='enter_poa_name'>Enter</button>" +
                    "<label for='poa_primary_phone'>Primary Phone:  </label>" +
                    "<input type='number' maxlength='10' required id='poa_primary_phone' placeholder='508-588-5555'>" +
                    "<label for='poa_alt_phone'>Alternate Phone:  </label>" +
                    "<input type='number' maxlength='10' id='poa_alt_phone' placeholder='508-588-5858'>" +
                    "<label class='enter_button' for='enter_poa_phone_button'></label>" +
                    "<button name='enter_poa_phone_button' id='enter_poa_phone'>Enter</button>" +
                    
                    "<legend>Health Care Proxy</legend>" +
                    "<label for='hcp_last_name'>Last Name:  </label>" +
                    "<input type='text' required id='hcp_last_name' placeholder='Johnson'>" +
                    "<label for='hcp_first_name'>First Name:  </label>" +
                    "<input type='text' required id='hcp_first_name' placeholder='Milly'>" +
                    "<label class='enter_button' for='enter_hcp_name_button'></label>" +
                    "<button name='enter_hcp_name_button' id='enter_hcp_name'>Enter</button>" +
                    "<label for='hcp_primary_phone'>Primary Phone:  </label>" +
                    "<input type='number' maxlength='10' required id='hcp_primary_phone' placeholder='508-588-5555'>" +
                    "<label for='hcp_alt_phone'>Alternate Phone:  </label>" +
                    "<input type='number' maxlength='10' id='hcp_alt_phone' placeholder='508-588-5858'>" +
                    "<label class='enter_button' for='enter_hcp_phone_button'></label>" +
                    "<button name='enter_hcp_phone_button' id='enter_hcp_phone'>Enter</button>" +
                   
                    "<legend>Primary Emergency Contact</legend>" +
                    "<label for='pec_last_name'>Last Name:  </label>" +
                    "<input type='text' required id='pec_last_name' placeholder='Johnson'>" +
                    "<label for='pec_first_name'>First Name:  </label>" +
                    "<input type='text' required id='pec_first_name' placeholder='Milly'>" +
                    "<label class='enter_button' for='enter_pec_name_button'></label>" +
                    "<button name='enter_pec_name_button' id='enter_pec_name'>Enter</button>" +
                    "<label for='pec_primary_phone'>Primary Phone:  </label>" +
                    "<input type='number' maxlength='10' required id='pec_primary_phone' placeholder='508-588-5555'>" +
                    "<label for='pec_alt_phone'>Alternate Phone:  </label>" +
                    "<input type='number' maxlength='10' id='pec_alt_phone' placeholder='508-588-5858'>" +
                    "<label class='enter_button' for='enter_pec_phone_button'></label>" +
                    "<button name='enter_pec_phone_button' id='enter_pec_phone'>Enter</button>" +
                    
                    "<legend>Secondary Emergency Contact</legend>" +
                    "<label for='sec_last_name'>Last Name:  </label>" +
                    "<input type='text' required id='sec_last_name' placeholder='Johnson'>" +
                    "<label for='sec_first_name'>First Name:  </label>" +
                    "<input type='text' required id='sec_first_name' placeholder='Milly'>" +
                    "<label class='enter_button' for='enter_sec_name_button'></label>" +
                    "<button name='enter_sec_name_button' id='enter_sec_name'>Enter</button>" +
                    "<label for='sec_primary_phone'>Primary Phone:  </label>" +
                    "<input type='number' maxlength='10' required id='sec_primary_phone' placeholder='508-588-5555'>" +
                    "<label for='sec_alt_phone'>Alternate Phone:  </label>" +
                    "<input type='number' maxlength='10' id='sec_alt_phone' placeholder='508-588-5858'>" +
                    "<label class='enter_button' for='enter_sec_phone_button'></label>" +
                    "<button name='enter_sec_phone_button' id='enter_sec_phone'>Enter</button>" +
                    
                "</fieldset>" +
                "</form>" +
            "</div>"
            ;
var newHousingEntryMsg = 
    "<div id='housingAndAssist>" +
        "<form action='' method='post'>" +
        "<fieldset>" +
            "<legend>Housing Type and Assistance Needed</legend>" +
            "<label id='type_of_housing'>Type of Housing</label>" +
            "<ul>" +
                "<li><input type='radio' value='Independent' id='housing_ind'>Independent</input>" +
                "<li><input type='radio' value='Assisted Living' id='housing_al'>Assisted Living</input>" +
                "<li><input type='radio' value='Memory Care' id='housing_mc'>Memory Care</input>" +
                "<li><input type='radio' value='GAFC' id='housing_gafc'>GAFC</input>" +
            "</ul>" +
            "<label id='assistance_needed'>Assistance Needed</label>" +
            "<ul>" +
                "<li><input type='checkbox' value='bathing'>Bathing: </input>" + 
                "<input type='text' id='bathing_detail' placeholder='Needs hands on assistance, lower body washing.'>" +
                "<li><input type='checkbox' value='dressing'>Dressing: </input>" + 
                "<input type='text' id='dressing_detail' placeholder='Needs assistance with lower body dressing and buttons.'>" +  
                "<li><input type='checkbox' value='grooming'>Grooming: </input>" + 
                "<input type='text' id='grooming_detail' placeholder='Needs cueing to soak dentures at night.'>" +
                "<li><input type='checkbox' value='medication assistance'>Medication Assistance: </input>" + 
                "<input type='text' id='med_assist_detail' placeholder='Needs SAMM reminders'>" +
                "<li><input type='checkbox' value='ambulation'>Ambulation: </input>" + 
                "<input type='text' id='Ambulation_detail' placeholder='Needs escorts to meals and activities.'>" +
                "<li><input type='checkbox' value='toileting'>Toileting: </input>" + 
                "<input type='text' id='toileting_detail' placeholder='Occasional incontinence of bladder; needs cueing to change depends.'>" +
            "</ul>" +
            "<label id='prim_apt_pref'>Primary Apartment Preference</label>" +
            "<ul>" +
                "<li><input type='radio' value='Studio' id='prim_pref_studio'>Studio</input>" +
                "<li><input type='radio' value='One Bedroom' id='prim_pref_onebed'>One Bedroom</input>" +
                "<li><input type='radio' value='One Bedroom Center' id='prim_pref_onebedcenter'>One Bedroom Center</input>" +
                "<li><input type='radio' value='One Bedroom Delux' id='prim_pref_onebeddelux'>One Bedroom Delux</input>" +
                "<li><input type='radio' value='Two Bedroom' id='prim_pref_twobed'>Two Bedroom</input>" +
                "<li><input type='radio' value='Cooperative Living' id='prim_pref_coop'>Cooperative Living</input>" +
            "</ul>" +
            "<label id='sec_apt_pref'>Secondary Apartment Preference</label>" +
            "<ul>" +
                "<li><input type='radio' value='Studio' id='sec_pref_studio'>Studio</input>" +
                "<li><input type='radio' value='One Bedroom' id='sec_pref_onebed'>One Bedroom</input>" +
                "<li><input type='radio' value='One Bedroom Center' id='sec_pref_onebedcenter'>One Bedroom Center</input>" +
                "<li><input type='radio' value='One Bedroom Delux' id='sec_pref_onebeddelux'>One Bedroom Delux</input>" +
                "<li><input type='radio' value='Two Bedroom' id='sec_pref_twobed'>Two Bedroom</input>" +
                "<li><input type='radio' value='Cooperative Living' id='sec_pref_coop'>Cooperative Living</input>" +
            "</ul>" +
            "<label id='additional_services'>Additional Services</label>" +
            "<ul>" +
                "<li><input type='checkbox' value='Laundry' id='addt_laundry'>Laundry</input>" +
                "<li><input type='checkbox' value='Housekeeping' id='addt_housekeeping'>Housekeeping</input>" +
                "<li><input type='checkbox' value='Meals' id='addt_meals'>Meals</input>" +
            "</ul>" +
            "<label for='est_move_date'>Estimated Move-in Date: </label>" +
            "<input type='date' id='est_move_date'>" +
        "</fieldset>" +
        "</form>" +
    "</div>";


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
        $("#prospect_block").append(newProspectEntryMsg);
        $("#housing_block").append(newHousingEntryMsg);
        $("#financials_block").append();
        $("#medical_block").append();
        $("#comments_block").append();
            //"<p>" + contactData.contactName + "</p>");
        //target area to append information e.g. contacts_block    
    }
}
//display entry fields
// function enterNewClientData() {
//     //variables separate returned data for API
//     $("#contact_block").append(newContactEntryMsg);
//     $("#prospect_block").append(newProspectEntryMsg);
//     $("#housing_block").append();
//     $("#financials_block").append();
//     $("#medical_block").append();
//     $("#comments_block").append();
//         //"<p>" + contactData.contactName + "</p>");
//     //target area to append information e.g. contacts_block    
//     };

function getAndDisplayClientData() {
    getClientData(displayClientData);
}

$("#new_client_button").on("click", function(event) {
    console.log('hello, you have made the button work');
});

$(function() {
    getAndDisplayClientData();
});