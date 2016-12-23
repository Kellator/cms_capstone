//screen for user credentials entry
//screen for dashboard controls
//screens for client(new entry & existing): contact, prospect, housing, financials, medical. Comments = cumulative.

//what api return data will look like:
var Mock_Client_Data = {
    "client_id": [ //should this be a separate client id?  one generated and stored by api/socket?
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
                "followUpDate": "01012017" //8 digit date
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