/*global $*/
var databaseUrl = 'https://secret-castle-60887.herokuapp.com';
//constructor function to create client data package
function ClientDataPackage() {
    this.contact = {};
    this.prospect = {};
    this.housingAssistance = {};
    this.financials = {};
    this.medical = {};
    this.comments = {};
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
    this.contact.relToProspect = relation;
};
ClientDataPackage.prototype.add_contact_referral = function(source, referredBy) {
    this.contact.referralSource = source;
    this.contact.referredBy = referredBy;
};
ClientDataPackage.prototype.add_first_contact = function(date) {
    this.contact.dateOfFirstContact = date;
};
//constructor components for prospect data
ClientDataPackage.prototype.add_prospect_name = function(lastName, firstName) {
    this.prospect.prospectName = {};
    this.prospect.prospectName.prospectLastName = lastName;
    this.prospect.prospectName.prospectFirstName = firstName;
};
ClientDataPackage.prototype.add_prospect_phone = function(phone) {
    this.prospect.prospectPhone = phone;
};
ClientDataPackage.prototype.add_prospect_address = function(street, city, state, zip) {
    this.prospect.prospectAddress = {};
    this.prospect.prospectAddress.prospectStreet = street;
    this.prospect.prospectAddress.prospectCity = city;
    this.prospect.prospectAddress.prospectState = state;
    this.prospect.prospectAddress.prospectZip = zip;
};
ClientDataPackage.prototype.add_dob = function(date) {
    this.prospect.dateOfBirth = date;
};
ClientDataPackage.prototype.add_ssn = function(ssn) {
    this.prospect.socialSecurityNum = ssn;
};
ClientDataPackage.prototype.add_insurance = function(medicare, masshealth, alternate) {
    this.prospect.insuranceNums = {};
    this.prospect.insuranceNums.medicareNum = medicare;
    this.prospect.insuranceNums.massHealth = masshealth;
    this.prospect.insuranceNums.insuranceNum = alternate;
};
ClientDataPackage.prototype.add_gender = function(gender) {
    this.prospect.gender = gender;
};
ClientDataPackage.prototype.add_marital_status = function(status) {
    this.prospect.maritalStatus = status;
};
ClientDataPackage.prototype.add_veteran = function(status, branch) {
    this.prospect.veteranStatus = status;
    this.prospect.serviceBranch = branch;
};
ClientDataPackage.prototype.add_religion = function(religion) {
    this.prospect.religion = religion;
};
ClientDataPackage.prototype.add_education_level = function(education) {
    this.prospect.levelOfEducation = education;
};
ClientDataPackage.prototype.add_current_housing = function(current) {
    this.prospect.currentHousing = current;
};
ClientDataPackage.prototype.add_lead_status = function(lead) {
    this.prospect.leadStatus = lead;
};
ClientDataPackage.prototype.add_poa = function(firstName, lastName, phone, secPhone) {
    this.prospect.poa = {};
    this.prospect.poa.poaName = {};
    this.prospect.poa.poaName.poaFirstName = firstName;
    this.prospect.poa.poaName.poaLastName = lastName;
    this.prospect.poa.poaPhone = phone;
    this.prospect.poa.poaSecPhone = secPhone;
};
ClientDataPackage.prototype.add_hcp = function(firstName, lastName, phone, secPhone) {
    this.prospect.hcp = {};
    this.prospect.hcp.hcpName = {};
    this.prospect.hcp.hcpName.hcpFirstName = firstName;
    this.prospect.hcp.hcpName.hcpLastName = lastName;
    this.prospect.hcp.hcpPhone = phone;
    this.prospect.hcp.hcpSecPhone = secPhone;
};
ClientDataPackage.prototype.add_dnr = function(dnr) {
    this.prospect.dnr = dnr;
};
ClientDataPackage.prototype.add_emergency_contact = function(firstName, lastName, phone, secPhone) {
    this.prospect.eContact = {};
    this.prospect.eContact.eContactName = {};
    this.prospect.eContact.eContactName.eContactFirstName = firstName;
    this.prospect.eContact.eContactName.eContactLastName = lastName;
    this.prospect.eContact.eContactPhone = phone;
    this.prospect.eContact.eContactAltPhone = secPhone;
};
ClientDataPackage.prototype.add_alt_contact = function(firstName, lastName, phone, secPhone) {
    this.prospect.altEmergContact = {};
    this.prospect.altEmergContact.altContactName = {};
    this.prospect.altEmergContact.altContactName.altContactFirstName = firstName;
    this.prospect.altEmergContact.altContactName.altContactLastName = lastName;
    this.prospect.altEmergContact.altContactPhone = phone;
    this.prospect.altEmergContact.altContactAltPhone = secPhone;
};
ClientDataPackage.prototype.add_hospital = function(hospital) {
    this.prospect.prefHospital = hospital;
};
ClientDataPackage.prototype.add_followup_date = function(date) {
    // this.prospect.followUpDate = Date.today().add(3).months();
    this.prospect.followUpDate = date;
};
ClientDataPackage.prototype.add_date_added = function(date) {
    this.prospect.dateAddedtoDB = date;
    // Date.today().toString();
};
//constructor components for housing data
ClientDataPackage.prototype.add_housing_type = function(housing) {
    this.housingAssistance.housingType = housing;
};
ClientDataPackage.prototype.add_assistance = function(assist, bath, dress, groom, med, amb) {
    this.housingAssistance.assistanceNeeded = {};
    // var bathing = assistArray[0].value;
    // var dressing = assistArray[1].value;
    // var grooming = assistArray[2].value;
    // var medication = assistArray[3].value;
    // var ambulation = assistArray[4].value;
    // var toileting = assistArray[5].value;
    // var assistance = (bathing + ', ' + dressing + ', ' + grooming + ', ' + medication + ', ' + ambulation + ', ' + toileting);
    this.housingAssistance.assistanceNeeded.assistance_needed = assist;
    console.log(assist);
    this.housingAssistance.assistanceNeeded.bathing = bath;
    this.housingAssistance.assistanceNeeded.dressing = dress;
    this.housingAssistance.assistanceNeeded.grooming = groom;
    this.housingAssistance.assistanceNeeded.medAssist = med;
    this.housingAssistance.assistanceNeeded.ambulation = amb;
};
ClientDataPackage.prototype.add_apt_preference = function(primary, secondary) {
    this.housingAssistance.primaryAptPref = primary;
    this.housingAssistance.secondaryAptPref = secondary;
};
ClientDataPackage.prototype.add_move_date = function(date) {
    this.housingAssistance.estimatedMoveDate = date;
};
ClientDataPackage.prototype.add_additional_service = function(services) {
    this.housingAssistance.additionalServices = services;
};
//constructor components for financial data
ClientDataPackage.prototype.add_payer_source = function(payer) {
    this.financials.payerSource = payer;
};
ClientDataPackage.prototype.add_income = function(pension, social, ssi, va, other, otherSource) {
    this.financials.income = {};
    this.financials.income.monthlyIncome = parseInt(pension, 10) + parseInt(social, 10) + parseInt(ssi, 10) + parseInt(va, 10) + parseInt(other, 10);
    this.financials.income.pension = pension;
    this.financials.income.socSecMonthly = social;
    this.financials.income.ssi = ssi;
    this.financials.income.vaBenefits = va;
    this.financials.income.otherIncome = other;
    this.financials.income.otherIncomeSource = otherSource;
};
ClientDataPackage.prototype.add_assets = function(property, bank, life, other, otherSource) {
    this.financials.assets = {};
    this.financials.assets.propertyValue = property;
    this.financials.assets.bankAccounts = bank;
    this.financials.assets.lifeInsurance = life;
    this.financials.assets.otherAssets = other;
    this.financials.assets.otherAssetsSource = otherSource;
};
ClientDataPackage.prototype.add_references = function(bankName, bankNumber, llName, llNumber) {
    this.financials.bankReference = {};
    this.financials.bankReference.bankRefName = bankName;
    this.financials.bankReference.bankRefNumber = bankNumber;
    this.financials.landlordReference = {};
    this.financials.landlordReference.landlordRefName = llName;
    this.financials.landlordReference.landlordRefNum = llNumber;
};
//constructor components for medical data
ClientDataPackage.prototype.add_initial_assessment = function(schedDate, compDate, assessor) {
    this.medical.initialAssessment = {};
    this.medical.initialAssessment.assessSchedDate = schedDate;
    this.medical.initialAssessment.assessCompDate = compDate;
    this.medical.initialAssessment.assessedBy = assessor;
};
ClientDataPackage.prototype.add_alf_plan = function(planType, otherPlan) {
    this.medical.alfPlanType = planType;
    this.medical.otherPlan = otherPlan;
};
ClientDataPackage.prototype.add_allergies = function(allergies) {
    this.medical.allergies = allergies;
};
ClientDataPackage.prototype.add_oxygen = function(oxygen) {
    this.medical.oxygenStatus = oxygen;
};
ClientDataPackage.prototype.add_admit_meds = function(meds) {
    this.medical.medsOnAdmit = meds;
};
ClientDataPackage.prototype.add_health_history = function(health) {
    this.medical.healthIssues = health;
};
ClientDataPackage.prototype.add_ambulation = function(amb) {
    this.medical.ambulation = amb;
};
ClientDataPackage.prototype.add_admit_homecare = function(homecare) {
    this.medical.homeCareOnAdmit = homecare;
};
ClientDataPackage.prototype.add_diet = function(diet) {
    this.medical.diet = diet;
};
ClientDataPackage.prototype.add_pcp = function(name, num, fax, street, city, state, zip) {
    this.medical.pcp = {};
    this.medical.pcp.pcpName = name;
    this.medical.pcp.pcpNum = num;
    this.medical.pcp.pcpFax = fax;
    this.medical.pcp.pcpAddress = {};
    this.medical.pcp.pcpAddress.pcpStreet = street;
    this.medical.pcp.pcpAddress.pcpCity = city;
    this.medical.pcp.pcpAddress.pcpState = state;
    this.medical.pcp.pcpAddress.pcpZip = zip;
};
ClientDataPackage.prototype.add_physForm_received = function(date) {
    this.medical.physFormRec = date.toString();
};
ClientDataPackage.prototype.add_pharmacy = function(name) {
    this.medical.pharmacy = name;
};
//constructor function for comments
// ClientDataPackage.prototype.add_comments = function(user, text, date) {
//     this.comments.user = user;
//     this.comments.commentDate = date;
//     this.comments.commentText = text;
// };
//variable to display contact form fields - used in data collection and presentation
var clientContactDisplay =

    "<div id='contact_display' class='contact_fields ' >" +
    "<div class='contact_fields nested_containers'  data_type='contact' id='contact_information'>" +
    "<form action='' method='post'>" +
    "<fieldset >" +
    "<legend>Contact Information</legend>" +
    "<label for='contact_last_name'>Last Name:  </label>" +
    "<input type='text' disabled='' required id='contact_last_name' placeholder='Johnson'>" +
    "<label for='contact_first_name'>First Name:  </label>" +
    "<input type='text' disabled='' required id='contact_first_name' placeholder='Milly'>" +

    "<legend>Contact Address</legend>" +
    "<label for='contact_street'>Street:  </label>" +
    "<input type='text' disabled='' id='contact_street' placeholder='123 Prospect St.'>" +
    "<label for='contact_city'>City:  </label>" +
    "<input type='text' disabled='' id='contact_city' placeholder='Brockton'>" + "<br>" +
    "<label for='contact_state'>State:  </label>" +
    "<input type='text' disabled='' id='contact_state' placeholder='MA'>" +
    "<label for='contact_zipcode'>Zip:  </label>" +
    "<input type='text' disabled='' id='contact_zipcode' pattern='[0-9]{5}' placeholder='02301'>" +

    "<legend>Contact Phone Numbers</legend>" +
    "<label for='contact_primary_phone'>Primary Phone:  </label>" +
    "<input type='text' disabled='' maxlength='12' required id='contact_primary_phone' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='5085885555'>" +
    "<label for='contact_alt_phone'>Alternate Phone:  </label>" +
    "<input type='text' disabled='' maxlength='12' id='contact_alt_phone' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='5085885858'>" +

    "<legend>Contact Email</legend>" +
    "<label for='contact_email'>Email:  </label>" +
    "<input type='email' disabled='' id='contact_email' placeholder='name@email.com'>" +
    "</fieldset>" +
    "</form>" +
    "</div>" +
    "<div id='contact_addl_details' class='nested_containers'>" +
    "<form action='' method='post'>" +
    "<fieldset class=''>" +
    "<legend>Additional Details</legend>" +
    "<label for='rel_to_prospect' >Relationship to Prospect</label>" +
    "<ul class='tab_nav_display' id='relation_to_prospect_list'>" +
    "<li><input type='radio' disabled='' required name='rel_to_prospect' value='Self' id=rel_self' checked>Self</> " +
    "<li><input type='radio' disabled='' required name='rel_to_prospect' value='Spouse' id=rel_spouse'>Spouse</> " +
    "<li><input type='radio' disabled='' required name='rel_to_prospect' value='Adult Child' id=rel_child'>Adult Child</> " +
    "<li><input type='radio' disabled='' required name='rel_to_prospect' value='Sibling' id=rel_sibling'>Sibling</> " +
    "<li><input type='radio' disabled='' required name='rel_to_prospect' value='Care Professional' id=rel_careProf'>Care Professional</> " +
    "<li><input type='radio' disabled='' required name='rel_to_prospect' value='Other' id='rel_other'>Other</><br><input type='text' placeholder='Other'/>" +
    "</ul>" +
    "<label for='referral_source'>Referral Source</label>" +
    "<ul class=''>" +
    "<li><input type='radio' disabled='' required name='referral_source' value='Self' id='ref_self' checked>Self</>" +
    "<li><input type='radio' disabled='' required name='referral_source' value='APFM' id='ref_apfm'>A Place For Mom</>" +
    "<li><input type='radio' disabled='' required name='referral_source' value='Word of Mouth' id='ref_wom'>Word of Mouth</><br><input type='text' placeholder='Referred by'/>" +
    "<li><input type='radio' disabled='' required name='referral_source' value='Health Care Provider' id='ref_hcp'>Health Care Provider</><br><input type='text' id='referred_by' placeholder='Referred by'/>" +
    "</ul>" +
    "<label for='first_contact_date'>Date of First Contact </label>" +
    "<input type='date' disabled='' id='first_contact_date' name='first_contact_date'>" +
    "</fieldset>" +
    "</form>" +
    "</div>" +
    "</div>";
//variable for prospect data display - used in data collection and display
var clientProspectDisplay =
    "<div id='prospect_information' class='nested_containers'>" +
    "<form action='' method='post'>" +
    "<fieldset>" +
    "<legend>Prospect Contact Information</legend>" +
    "<label for='prospect_last_name'>Last Name:  </label>" +
    "<input type='text' disabled='' required id='prospect_last_name' placeholder='Johnson'>" +
    "<label for='prospect_first_name'>First Name:  </label>" +
    "<input type='text' disabled='' required id='prospect_first_name' placeholder='Joseph'>" +

    "<legend>Prospect Phone Numbers</legend>" +
    "<label for='prospect_phone'>Prospect Phone:  </label>" +
    "<input type='text' disabled='' maxlength='12' required id='prospect_primary_phone' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='508-588-5555'>" +

    "<legend>Prospect Address</legend>" +
    "<label for='prospect_street'>Street:  </label>" +
    "<input type='text' disabled='' id='prospect_street' placeholder='123 Prospect St.'>" +
    "<label for='prospect_city'>City:  </label>" +
    "<input type='text' disabled='' id='prospect_city' placeholder='Brockton'>" + "<br>" +
    "<label for='prospect_state'>State:  </label>" +
    "<input type='text' disabled='' id='prospect_state' placeholder='MA'>" +
    "<label for='prospect_zipcode'>Zip:  </label>" +
    "<input type='text' disabled='' id='prospect_zipcode' placeholder='02301'>" +
    "</fieldset>" +
    "</form>" +
    "</div>" +
    "<div id='prospect_identification' class='nested_containers'>" +
    "<form action='' method='post'>" +
    "<fieldset>" +
    "<legend>Prospect Identification</legend>" +
    "<label for='date_of_birth'>Date of Birth </label>" +
    "<input type='text' disabled='' id='date_of_birth' required name='date_of_birth'>" +
    "<label for='ssn'>Social Security Number </label>" +
    "<input type='text' disabled='' id='ssn' maxlength='9' required placeholder='000112222'> " +
    "<label for='medicare'>Medicare Number </label>" +
    "<input type='text' disabled='' id='medicare' required placeholder='000112222A'>" + "<br>" +
    "<label for='massHealth'>MassHealth Number </label>" +
    "<input type='text' disabled='' id='massHealth' placeholder='000111222333'>" + "<br>" +
    "<label for='other_ins'>Other Insurance </label>" +
    "<input type='text' disabled='' id='other_ins' placeholder='BCBS XX010101010'>" +
    "</fieldset>" +
    "</form>" +
    "</div>" +
    "<div id='prospect_addl_information' class='nested_containers'>" +
    "<form action='' method='post'>" +
    "<fieldset>" +
    "<legend>Additional Information</legend>" +
    "<label for='gender'>Gender</label>" +
    "<ul>" +
    "<li><input type='radio' disabled='' required name='gender' value='Male' id='male'>Male</>" +
    "<li><input type='radio' disabled='' required name='gender' value='Female' id='female'>Female</>" +
    "</ul>" +
    "<label for='marital_status'>Marital Status</label>" +
    "<ul>" +
    "<li><input type='radio' disabled='' required name='marital_status' value='single' id='single'>Single</>" +
    "<li><input type='radio' disabled='' required name='marital_status' value='married' id='married'>Married</>" +
    "<li><input type='radio' disabled='' required name='marital_status' value='widowed' id='widowed'>Widowed</>" +
    "<li><input type='radio' disabled='' required name='marital_status' value='separated' id='separated'>Separated</>" +
    "</ul>" +
    "<label for='veteran_status'>Veteran Status</label>" +
    "<ul>" +
    "<li><input type='radio' disabled='' required name='veteran_status' value='veteran' id='veteran'>Veteran:  </>" +
    "<label for='service_branch'>Branch of Service:  </label><input type='text' id='service_branch' placeholder='Navy'>" +
    "<li><input type='radio' disabled='' required name='veteran_status' value='Not a Veteran' id='notVet'>Not a Veteran</>" +
    "</ul>" +
    "<label id='religion'>Religion</label>" +
    "<input type='text' disabled='' id='religion' placeholder='Lutheran'><br>" +

    "<label for='education'>Highest Level of Education</label>" +
    "<ul>" +
    "<li><input type='radio' disabled='' required name='education' value='grade_school' id='grade_school'>Grade School</>" +
    "<li><input type='radio' disabled='' required name='education' value='high_school' id='high_school'>High School</>" +
    "<li><input type='radio' disabled='' required name='education' value='trade' id='trade'>Trade School</>" +
    "<li><input type='radio' disabled='' required name='education' value='college' id='college'>College</>" +
    "<li><input type='radio' disabled='' required name='education' value='post_grad' id='post_grad'>Post Graduate</>" +
    "</ul>" +
    "<label for='current_housing'>Current Housing Situation</label>" +
    "<ul>" +
    "<li><input type='radio' disabled='' required name='current_housing' value='Alone' id='housing_alone'>Alone</>" +
    "<li><input type='radio' disabled='' required name='current_housing' value='With Spouse' id='housing_spouse'>With Spouse</>" +
    "<li><input type='radio' disabled='' required name='current_housing' value='With Family' id='housing_family'>With Family</>" +
    "<li><input type='radio' disabled='' required name='current_housing' value='Skilled Nursing Facility' id='housing_snf'>Skilled Nursing Facility</>" +
    "<li><input type='radio' disabled='' required name='current_housing' value='Other Assisted Living Community' id='housing_alf'>Other Assisted Living Community</>" +
    "<li><input type='radio' disabled='' required name='current_housing' value='Senior Housing' id='housing_senior'>Senior Housing</>" +
    "</ul>" +
    "<label for='lead_status'>Lead Status</label>" +
    "<ul>" +
    "<li><input type='radio' disabled='' name='lead_status' value='hot' id='lead_hot'>Hot</>" +
    "<p class='text_left' >Move-in within 1-3 months.</p>" +
    "<li><input type='radio' disabled='' name='lead_status' value='warm' id='lead_warm'>Warm</>" +
    "<p class='text_left'>Move-in within 3-6 months.</p>" +
    "<li><input type='radio' disabled='' name='lead_status' value='cool' id='lead_cool'>Cool</>" +
    "<p class='text_left'>Move-in after 6 months.</p>" +
    "</ul>" +
    "<label for='date_to_alcis'>Date Entered in ALCIS:  </label>" +
    "<input type='date' disabled='' id='date_to_alcis' name='date_to_alcis'>" +
    "<label for='follow_up_date'>Follow-up Date:  </label>" +
    "<input type='date' disabled='' id='follow_up_date' name='follow_up_date'>" +
    "</fieldset>" +
    "</form>" +
    "</div>" +
    "<div id='prospect_emergency_info' class='nested_containers'>" +
    "<form action='' method='post'>" +
    "<fieldset>" +
    "<legend>Emergency Information</legend>" +
    "<label id='pref_hospital'>Preferred Hospital</label>" +
    "<ul>" +
    "<li><input type='radio' disabled='' required name='pref_hospital' value='Brockton' id='hospital_brockton'>Signature Healthcare | Brockton Hospital</input>" +
    "<li><input type='radio' disabled='' required name='pref_hospital' value='Good Samaritan' id='hospital_goodsam'>Steward Healthcare | Good Samaritan Hospital</input>" +
    "</ul>" +
    "<legend>DNR Status</legend>" +
    "<ul>" +
    "<li><input type='radio' disabled='' name='dnr_status' value='DNR Present' id='dnr_present'>DNR</input>" +
    "<li><input type='radio' disabled='' name='dnr_status' value='DNR Not Present' id='dnr_not_present'>No DNR</input>" +
    "</ul>" +
    "<legend>Power of Attorney</legend>" +
    "<label for='poa_last_name'>Last Name:  </label>" +
    "<input type='text' disabled='' required id='poa_last_name' placeholder='Johnson'>" +
    "<label for='poa_first_name'>First Name:  </label>" +
    "<input type='text' disabled='' required id='poa_first_name' placeholder='Milly'>" +
    "<label for='poa_primary_phone'>Primary Phone:  </label>" +
    "<input type='text' disabled='' maxlength='12' required id='poa_primary_phone'pattern='\d{3}[\-]\d{3}[\-]\d{4}'  placeholder='508-588-5555'>" +
    "<label for='poa_alt_phone'>Alternate Phone:  </label>" +
    "<input type='text' disabled='' maxlength='12' id='poa_alt_phone' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='508-588-5858'>" +

    "<legend>Health Care Proxy</legend>" +
    "<label for='hcp_last_name'>Last Name:  </label>" +
    "<input type='text' disabled='' required id='hcp_last_name' placeholder='Johnson'>" +
    "<label for='hcp_first_name'>First Name:  </label>" +
    "<input type='text' disabled='' required id='hcp_first_name' placeholder='Milly'>" +
    "<label for='hcp_primary_phone'>Primary Phone:  </label>" +
    "<input type='text' disabled='' maxlength='12' required id='hcp_primary_phone' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='508-588-5555'>" +
    "<label for='hcp_alt_phone'>Alternate Phone:  </label>" +
    "<input type='text' disabled='' maxlength='12' id='hcp_alt_phone' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='508-588-5858'>" +

    "<legend>Primary Emergency Contact</legend>" +
    "<label for='pec_last_name'>Last Name:  </label>" +
    "<input type='text' disabled='' required id='pec_last_name' placeholder='Johnson'>" +
    "<label for='pec_first_name'>First Name:  </label>" +
    "<input type='text' disabled='' required id='pec_first_name' placeholder='Milly'>" +
    "<label for='pec_primary_phone'>Primary Phone:  </label>" +
    "<input type='text' disabled='' maxlength='12' required id='pec_primary_phone' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='508-588-5555'>" +
    "<label for='pec_alt_phone'>Alternate Phone:  </label>" +
    "<input type='text' disabled='' maxlength='12' id='pec_alt_phone' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='508-588-5858'>" +

    "<legend>Secondary Emergency Contact</legend>" +
    "<label for='sec_last_name'>Last Name:  </label>" +
    "<input type='text' disabled='' required id='sec_last_name' placeholder='Johnson'>" +
    "<label for='sec_first_name'>First Name:  </label>" +
    "<input type='text' disabled='' required id='sec_first_name' placeholder='Milly'>" +
    "<label for='sec_primary_phone'>Primary Phone:  </label>" +
    "<input type='text'disabled=''  maxlength='12' required id='sec_primary_phone' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='508-588-5555'>" +
    "<label for='sec_alt_phone'>Alternate Phone:  </label>" +
    "<input type='text' disabled='' maxlength='12' id='sec_alt_phone' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='508-588-5858'>" +
    "</fieldset>" +
    "</form>" +
    "</div>";
//variable for housing data display - used in data collection and display
var clientHousingDisplay =
    "<div id='housingAndAssist' class='nested_containers'>" +
    "<form action='' method='post'>" +
    "<fieldset>" +
    "<legend>Housing Type and Assistance Needed</legend>" +
    "<label for='type_of_housing'>Type of Housing</label>" +
    "<ul>" +
    "<li><input type='radio' required name='type_of_housing' value='Independent' id='housing_ind'>Independent</input></li>" +
    "<li><input type='radio' required name='type_of_housing' value='Assisted Living' id='housing_al'>Assisted Living</input></li>" +
    "<li><input type='radio' required name='type_of_housing' value='Memory Care' id='housing_mc'>Memory Care</input></li>" +
    "<li><input type='radio' required name='type_of_housing' value='GAFC' id='housing_gafc'>GAFC</input></li>" +
    "</ul>" +
    "<label for='assistance_needed'>Assistance Needed</label>" +
    "<ul>" +
    "<li><input type='checkbox' name='assistance_needed' value='bathing'>Bathing: </input></li>" +
    "<input type='text' id='bathing_detail' disabled=''  placeholder='Needs hands on assistance, lower body washing.'>" +
    "<li><input type='checkbox' name='assistance_needed' value='dressing'>Dressing: </input></li>" +
    "<input type='text' id='dressing_detail' disabled=''  placeholder='Needs assistance with lower body dressing and buttons.'>" +
    "<li><input type='checkbox' name='assistance_needed' value='grooming'>Grooming: </input></li>" +
    "<input type='text' id='grooming_detail' disabled='' placeholder='Needs cueing to soak dentures at night.'>" +
    "<li><input type='checkbox' name='assistance_needed' value='medication assistance'>Medication Assistance: </input></li>" +
    "<input type='text' id='med_assist_detail' disabled='' placeholder='Needs SAMM reminders'>" +
    "<li><input type='checkbox' name='assistance_needed' value='ambulation'>Ambulation: </input></li>" +
    "<input type='text' id='ambulation_detail' disabled='' placeholder='Needs escorts to meals and activities.'>" +
    "<li><input type='checkbox' name='assistance_needed' value='toileting'>Toileting: </input></li>" +
    "<input type='text' id='toileting_detail' disabled='' placeholder='Occasional incontinence of bladder; needs cueing to change depends.'>" +
    "</ul>" +
    "<label for='prim_apt_pref'>Primary Apartment Preference</label>" +
    "<ul>" +
    "<li><input type='radio' disabled='' required name='prim_apt_pref' value='Studio' id='prim_pref_studio'>Studio</input></li>" +
    "<li><input type='radio' disabled='' required name='prim_apt_pref' value='One Bedroom' id='prim_pref_onebed'>One Bedroom</input></li>" +
    "<li><input type='radio' disabled='' required name='prim_apt_pref' value='One Bedroom Center' id='prim_pref_onebedcenter'>One Bedroom Center</input></li>" +
    "<li><input type='radio' disabled='' required name='prim_apt_pref' value='One Bedroom Delux' id='prim_pref_onebeddelux'>One Bedroom Delux</input></li>" +
    "<li><input type='radio' disabled='' required name='prim_apt_pref' value='Two Bedroom' id='prim_pref_twobed'>Two Bedroom</input></li>" +
    "<li><input type='radio' disabled='' required name='prim_apt_pref' value='Cooperative Living' id='prim_pref_coop'>Cooperative Living</input></li>" +
    "</ul>" +
    "<label for='sec_apt_pref'>Secondary Apartment Preference</label>" +
    "<ul>" +
    "<li><input type='radio' disabled='' name='sec_apt_pref' value='Studio' id='sec_pref_studio'>Studio</input></li>" +
    "<li><input type='radio' disabled='' name='sec_apt_pref' value='One Bedroom' id='sec_pref_onebed'>One Bedroom</input></li>" +
    "<li><input type='radio' disabled='' name='sec_apt_pref' value='One Bedroom Center' id='sec_pref_onebedcenter'>One Bedroom Center</input></li>" +
    "<li><input type='radio' disabled='' name='sec_apt_pref' value='One Bedroom Delux' id='sec_pref_onebeddelux'>One Bedroom Delux</input></li>" +
    "<li><input type='radio' disabled='' name='sec_apt_pref' value='Two Bedroom' id='sec_pref_twobed'>Two Bedroom</input></li>" +
    "<li><input type='radio' disabled='' name='sec_apt_pref' value='Cooperative Living' id='sec_pref_coop'>Cooperative Living</input></li>" +
    "</ul>" +
    "<label for='additional_services'>Additional Services</label>" +
    "<ul>" +
    "<li><input type='checkbox' disabled='' name='additional_services' value='Laundry' id='addt_laundry'>Laundry</input></li>" +
    "<li><input type='checkbox' disabled='' name='additional_services' value='Housekeeping' id='addt_housekeeping'>Housekeeping</input></li>" +
    "<li><input type='checkbox' disabled='' name='additional_services' value='Meals' id='addt_meals'>Meals</input></li>" +
    "</ul>" +
    "<label for='est_move_date'>Estimated Move-in Date: </label>" +
    "<input type='text' id='est_move_date'>" +
    "</fieldset>" +
    "</form>" +
    "</div>";
//var for financial data display - used in data collection and display
var clientFinancialDisplay =
    "<div id='gen_financial' class='nested_containers'>" +
    "<form action='' method='post'>" +
    "<fieldset>" +
    "<legend>Financial Information</legend>" +
    "<label for='payer_source'>Payer Source</label>" +
    "<ul>" +
    "<li><input type='radio' disabled='' required name='payer_source' value='Private' id='payer_private'>Private</input></li>" +
    "<li><input type='radio' disabled='' required name='payer_source' value='MassHealth' id='payer_masshealth'>MassHealth | GAFC</input></li>" +
    "<li><input type='radio' disabled='' required name='payer_source' value='SCP' id='payer_sco'>SCO: <span class='fade_text'>(Navicare, Senior Whole Health, Tufts, etc)</span></input></li>" +
    "<li><input type='radio' disabled='' required name='payer_source' value='Long Term Care Insurance' id='payer_ltc'>Long Term Care Insurance</input></li>" +
    "</ul>" +
    "</fieldset>" +
    "</form>" +
    "</div>" +
    "<div id='detail_financial' class='nested_containers'>" +
    "<form action='' method='post'>" +
    "<fieldset>" +
    "<legend>Income and Assets</legend>" +
    "<label for='total_monthly_income'>Total Monthly Income:  $</label>" +
    "<input type='number' disabled=''  min='0.00' step='0.01' value='' id='income_monthly'></input><br>" +
    "<label for='income_social'>Monthly Social Security Income:  $</label>" +
    "<input type='number'disabled=''  min='0.00' step='0.01' value='' id='income_social' placeholder='2000'></input><br>" +
    "<label for='income_pension'>Monthly Pension Income:  $</label>" +
    "<input type='number' disabled='' min='0.00' step='0.01' value='' id='income_pension' placeholder='2000'></input><br>" +
    "<label for='income_ssi'>Monthly Supplemental Security (SSI) Income:  $</label>" +
    "<input type='number' disabled='' min='0.00' step='0.01' value='' id='income_ssi' placeholder='2000'></input><br>" +
    "<label for='income_va'>Monthly VA Benefits Income:  $</label>" +
    "<input type='number' disabled='' min='0.00' step='0.01' value='' id='income_va' placeholder='2000'></input><br>" +
    "<label for='income_other'>Other Monthly Income:  $</label>" +
    "<input type='number' disabled='' min='0.00' step='0.01' value='' id='income_other' placeholder='2000'></input><br>" +
    "<label for='income_other_source'>Source:  </label><input type='text' id='income_other_source' placeholder='alimony'></input><br>" +
    "<label for='property_value'>Estimated Property Value: $</label>" +
    "<input type='number' disabled='' min='0.00' step='0.01' value='' id='property_value' placeholder='2000'></input><br>" +
    "<label for='bank_value'>Estimated Bank Accounts Value: $</label>" +
    "<input type='number' disabled='' min='0.00' step='0.01' value='' id='bank_value' placeholder='2000'></input><br>" +
    "<label for='life_ins_value'>Estimated Life Insurance Value: $</label>" +
    "<input type='number' disabled='' min='0.00' step='0.01' value='' id='life_ins_value' placeholder='2000'></input><br>" +
    "<label for='other_value'>Other Estimated Assets: $</label>" +
    "<input type='number' disabled='' min='0.00' step='0.01' value='' id='other_value' placeholder='2000'></input><br>" +
    "<label for='other_value_source'>Source:  </label><input type='text' id='other_value_source' placeholder='rental income'></input>" +
    "</fieldset>" +
    "</form>" +
    "</div>" +
    "<div id='references_financial' class='nested_containers'>" +
    "<form action='' method='post'>" +
    "<fieldset>" +
    "<legend>Financial References</legend>" +
    "<label for='bank_ref_name'>Bank Name:  </label>" +
    "<input type='text' disabled='' id='bank_ref_name' placeholder='HarborOne'></input><br>" +
    "<label for='bank_ref_text'>Bank Phone Number:  </label>" +
    "<input type='text' disabled='' id=bank_ref_number' maxlength='12' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='5085885858'></input><br>" +
    "<label for='landlord_ref_name'>Landlord Name:  </label>" +
    "<input type='text' disabled='' id='landlord_ref_name' placeholder='Jim Smith'></input><br>" +
    "<label for='landlord_ref_number'>Landlord Phone Number:  </label>" +
    "<input type='text' disabled='' id=landlord_ref_number' maxlength='12' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='5085885858'></input>" +
    "</fieldset>" +
    "</form>" +
    "</div>";
//var for medical data display - used in data collection and display
var clientMedicalDisplay =
    "<div id='assessment_data' class='nested_containers'>" +
    "<form action='' method='post'>" +
    "<fieldset>" +
    "<legend>Assessment Information</legend>" +
    "<label for='assess_date'>Initial Assessment Scheduled:  </label>" +
    "<input type='text' disabled='' id='assess_date'></input><br>" +
    "<label for='assess_date_completed'>Initial Assessment Completed:  </label>" +
    "<input type='text' disabled='' id='assess_date_completed'></input><br>" +
    "<label for='assessed_by'>Initial Assessment Completed By:  </label>" +
    "<input type='text' disabled='' id='assessed_by' placeholder='Jane Smith, R.N.'></input><br>" +
    "<label for='level_of_care'>Level Of Care</label>" +
    "<ul>" +
    "<li><input type='radio' disabled='' required name='level_of_care' id='care_ind' value='Independent'>Independent</input></li>" +
    "<li><input type='radio' disabled='' required name='level_of_care' id='care_traditional' value='Traditional'>Traditional</input></li>" +
    "<li><input type='radio' disabled='' required name='level_of_care' id='care_enhanced' value='Enhanced'>Enhanced</input></li>" +
    "<li><input type='radio' disabled='' required name='level_of_care' id='care_comprehensive' value='Comprehensive'>Comprehensive</input></li>" +
    "</ul>" +
    "<label for='other_plans'>Special Plans</label>" +
    "<ul>" +
    "<li><input type='radio' disabled='' name='other_plans' id='care_memory' value='Memory Care'>Memory Care</input></li>" +
    "<li><input type='radio' disabled='' name='other_plans' id='care_gafc' value='GAFC'>GAFC</input></li>" +
    "</ul>" +
    "</fieldset>" +
    "</form>" +
    "</div>" +
    "<div id='allergies_data' class='nested_containers'>" +
    "<form action='' method='post'>" +
    "<fieldset>" +
    "<legend>Allergy Information</legend>" +
    "<input type='checkbox' disabled='' value='nkda' id='allergies_check'>No Known Drug Allergies</input><br>" +
    "<label for='allergies'>Allergies:  </label>" +
    "<input type='text' disabled='' id='allergies' placeholder='penicillin'></input><br>" +
    "</fieldset>" +
    "</form>" +
    "</div>" +
    "<div id='medical_data' class='nested_containers'>" +
    "<form action='' method='post'>" +
    "<fieldset>" +
    "<legend>Medical Information</legend>" +
    "<label for='meds_on_admit'>Medications Currently Taken:  </input>" +
    "<input type='text' disabled='' id='meds_on_admit' placeholder='tylenol 500mg BID, lasix 40mg once daily'></input><br>" +
    "<label for='health_issues'>Major Health Issues:  </input>" +
    "<input type='text' disabled='' id='health_issues' placeholder='h/o TIA, s/p hip replacement, COPD'></input><br>" +
    "</fieldset>" +
    "</form>" +
    "</div>" +
    "<div id='dietary_data' class='nested_containers'>" +
    "<form action='' method='post'>" +
    "<fieldset>" +
    "<legend>Dietary Needs</legend>" +
    "<label for='dietary'>Diet and Consistency</label>" +
    "<ul>" +
    "<li><input type='checkbox' disabled='' required name='dietary' value='Regular' id='dietary_regular'>Regular</input></li>" +
    "<li><input type='checkbox' disabled='' required name='dietary' value='No Added Salt' id='dietary_nas'>No Added Salt</input></li>" +
    "<li><input type='checkbox' disabled='' required name='dietary' value='House Concentrated Carbohydrate' id='dietary_hcc'>House Concentrated Carbohydrate</input></li>" +
    "<li><input type='checkbox' disabled='' required name='dietary' value='Cut Up' id='dietary_cut'>Cut Up</input></li>" +
    "<li><input type='checkbox' disabled='' required name='dietary' value='Ground' id='dietary_ground'>Ground</input></li>" +
    "<li><input type='checkbox' disabled='' required name='dietary' value='Puree' id='dietary_puree'>Puree</input></li>" +
    "<li><input type='checkbox' disabled='' required name='dietary' value='Soft' id='dietary_soft'>Soft</input></li>" +
    "</ul>" +
    "</fieldset>" +
    "</form>" +
    "</div>" +
    "<div id='pcp_data' class='nested_containers'>" +
    "<form action='' method='post'>" +
    "<fieldset>" +
    "<legend>Primary Care Provider Information</legend>" +
    "<label for='pcp_name'>Primary Care Physician:  </label>" +
    "<input type='text' disabled='' id='pcp_name' placeholder='Dr.John Smith'></input><br>" +
    "<label for='pcp_phone'>PCP Phone Number:  </label>" +
    "<input type='text' disabled='' id='pcp_phone' maxlength='12' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='5085558888'></input><br>" +
    "<label for='pcp_fax'>PCP Fax Number:  </label>" +
    "<input type='text' disabled='' id='pcp_fax' maxlength='12' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='5088885555'></input><br>" +
    "<label for='pcp_street'>Street:  </label>" +
    "<input type='text' disabled='' id='pcp_street' placeholder='123 Prospect St.'>" +
    "<label for='pcp_city'>City:  </label>" +
    "<input type='text' disabled='' id='pcp_city' placeholder='Brockton'>" + "<br>" +
    "<label for='pcp_state'>State:  </label>" +
    "<input type='text' disabled='' id='pcp_state' placeholder='MA'>" +
    "<label for='pcp_zipcode'>Zip:  </label>" +
    "<input type='text' disabled='' id='pcp_zipcode' placeholder='02301'>" + "<br>" +
    "<label for='phys_form'>Physician Form Received</input>" + 
    "<input type='checkbox' disabled='' name='phys_form' id='phys_form_box' value='Physician Form Received'></input>" +
    "<input type='text' disabled='' name='phys_form' id='phys_form_date'></input>" +
    "</fieldset>" +
    "</form>" +
    "</div>" +
    "<div id='pharmacy_data' class='nested_containers'>" +
    "<form action='' method='post'>" +
    "<fieldset>" +
    "<legend>Pharmacy</legend>" +
    "<label for='pharmacy_choice'>Pharmacy</label>" +
    "<ul>" +
    "<li><input type='radio' disabled='' required name='pharmacy_choice' id='pharmacy_gb' value='Greater Boston LTC'>Greater Boston</input></li>" +
    "<li><input type='radio' disabled='' required name='pharmacy_choice' id='pharmacy_apothecare' value='Apothecare'>Apothecare</input></li>" +
    "<li><input type='radio' disabled='' required name='pharmacy_choice' id='pharmacy_va' value='VA'>VA</input></li>" +
    "<li><input type='radio' disabled='' required name='pharmacy_choice' id='pharmacy_mail' value='Mail Order Pharmacy'>Mail Order Pharmacy</input></li>" +
    "<li><input type='radio' disabled='' required name='pharmacy_choice' id='pharmacy_other' value='Other Pharmacy'>Other Pharmacy</input></li>" +
    "</ul>" +
    "</fieldset>" +
    "</form>" +
    "</div>";
//var for comments display - used for displaying and adding comments
var clientCommentsDisplay;
//display as username: date: <br> comment:
var submitNewButtonDisplay =
    "<label for='submit_data_button'></label>" +
    "<button name='submit_data_button' id='submit_data_button' class='flex_button'>Submit</button>";
var editButtonDisplay =
    "<label for='edit_data_button'></label>" +
    "<button name='edit_data_button' id='edit_data_button' class='flex_button'>Edit</button>";
var submitChangesButtonDisplay =
    "<label for='submit_changes_button'></label>" +
    "<button name='submit_changes_button' id='submit_changes_button' class='flex_button'>Submit Changes</button>";
//used for update commands to document for contact data
function generateClientPackage(client_id) {
    var client = new ClientDataPackage(client_id);
    genContactPackage(client);
    genProspectPackage(client);
    genHousingPackage(client);
    genFinancialPackage(client);
    genMedicalPackage(client);
    return client;
}

function genContactPackage(client) {
    client.add_contact_name($('#contact_last_name').val(), $('#contact_first_name').val());
    client.add_contact_phone($('#contact_primary_phone').val(), $('#contact_alt_phone').val());
    client.add_contact_address($('#contact_street').val(), $('#contact_city').val(), $('#contact_state').val(), $('#contact_zipcode').val());
    client.add_contact_email($('#contact_email').val());
    client.add_contact_relationToProspect($('input[name="rel_to_prospect"]:checked').val());
    client.add_contact_referral($('input[name="referral_source"]:checked').val());
    client.add_first_contact($('#first_contact_date').val());
}

function genProspectPackage(client) {
    client.add_prospect_name($('#prospect_last_name').val(), $('#prospect_first_name').val());
    client.add_prospect_phone($('#prospect_primary_phone').val());
    client.add_prospect_address($('#prospect_street').val(), $('#prospect_city').val(), $('#prospect_state').val(), $('#prospect_zipcode').val());
    client.add_dob($('#date_of_birth').val());
    client.add_ssn($('#ssn').val());
    client.add_insurance($('#medicare').val(), $('#massHealth').val(), $('#other_ins').val());
    client.add_gender($('input[name="gender"]:checked').val());
    client.add_marital_status($('input[name="marital_status"]:checked').val());
    client.add_veteran($('input[name="veteran_status"]:checked').val(), $('#service_branch').val());
    client.add_religion($('#religion').val());
    client.add_education_level($('input[name="education"]:checked').val());
    client.add_current_housing($('input[name="current_housing"]:checked').val());
    client.add_lead_status($('input[name="lead_status"]:checked').val());
    client.add_poa($('#poa_last_name').val(), $('#poa_first_name').val(), $('#poa_primary_phone').val(), $('#poa_alt_phone').val());
    client.add_hcp($('#hcp_last_name').val(), $('#hcp_first_name').val(), $('#hcp_primary_phone').val(), $('#hcp_alt_phone').val());
    client.add_dnr($('input[name="dnr_status"]:checked').val());
    client.add_emergency_contact($('#pec_last_name').val(), $('#pec_first_name').val(), $('#pec_primary_phone').val(), $('#pec_alt_phone').val());
    client.add_alt_contact($('#sec_last_name').val(), $('#sec_first_name').val(), $('#sec_primary_phone').val(), $('#sec_alt_phone').val());
    client.add_hospital($('input[name="pref_hospital"]:checked').val());
    client.add_followup_date($('#follow_up_date').val());
    client.add_date_added($('#date_to_alcis').val());
}

function genHousingPackage(client) {
    client.add_housing_type($('input[name="type_of_housing"]:checked').val());
    client.add_assistance($('input[name="assistance_needed"]').on('change', function() {
            var values = [];
            console.log('here');
            var items = $('input(name="assistance_needed"]');
            $.each(items, function(index, item) {
                if ($(item).prop('checked')) {
                    values.push($(item).val());
                }
            });
        }),
        $('#bathing_detail').val(), $('#dressing_detail').val(), $('#grooming_detail').val(), $('#med_assist_detail').val(),
        $('#ambulation_detail').val(), $('#toileting_detail').val());
    client.add_apt_preference($('input[name="prim_apt_pref"]:checked').val(), $('input[name="sec_apt_pref"]:checked').val());
    client.add_move_date($('#est_move_date').val());
    client.add_additional_service($('input[name="additional_services"]:checked').val());
}

function genFinancialPackage(client) {
    client.add_payer_source($('input[name="payer_source"]:checked').val());
    client.add_income($('#income_social').val(), $('#income_pension').val(), $('#income_ssi').val(), $('#income_va').val(), $('#income_other').val(), $('#income_other_source').val());
    client.add_assets($('#property_value').val(), $('#bank_value').val(), $('#life_ins_value').val(), $('#other_value').val());
    client.add_references($('#bank_ref_name').val(), $('#bank_ref_number').val(), $('#landlord_ref_name').val(), $('#landlord_ref_number').val());
}

function genMedicalPackage(client) {
    client.add_initial_assessment($('#assess_date').val(), $('assess_date_completed').val(), $('#assessed_by').val());
    client.add_alf_plan($('input[name="level_of_care"]:checked').val(), $('input[name="other_plans"]:checked').val());
    client.add_allergies($('#allergies').val(), $('#allergies_check'));
    client.add_oxygen();
    client.add_admit_meds($('#meds_on_admit').val());
    client.add_health_history($('#health_issues').val());
    client.add_ambulation();
    client.add_admit_homecare();
    client.add_diet($('input[name="dietary"]:checked').val());
    client.add_pcp($('#pcp_name').val(), $('#pcp_phone').val(), $('#pcp_fax').val(), $('#pcp_street').val(), $('#pcp_city').val(), $('#pcp_state').val(), $('#pcp_zipcode').val());
    client.add_physForm_received($('#phys_form_date').val(), $('input[name="phys_form_box"]:checked').val());
    client.add_pharmacy($('input[name="pharmacy_choice"]:checked').val());
}
//comments
// client.add_comments();
//API CALLS
//(CREATE) creates the new client data package by pulling form values 
function createNewClient(client_id, callback) {
    var client = generateClientPackage(client_id);
    console.log(client);
    var settings = {
        url: databaseUrl + '/alcis/clients/',
        dataType: 'json',
        method: 'POST',
        data: JSON.stringify(client),
        processData: false,
        contentType: 'application/json',
        success: function(data) {
            callback(data);
        }
    };
    $.ajax(settings);
}
//(READ) searches complete client collection based on specified criteria and returns matching list
function getClientList(searchName, callback) {
    var settings = {
        url: databaseUrl + '/alcis/clients/',
        dataType: 'json',
        data: searchName,
        method: 'GET',
        success: function(data) {
            callback(data);
        }
    };
    $.ajax(settings);
}
//(READ) pulls specific client document from collection to display client data package to user
function getClientInformation(client_id, callback) {
    var settings = {
        url: databaseUrl + '/alcis/clients/' + client_id,
        dataType: 'json',
        method: 'GET',
        success: function(data) {
            callback(data);
        }
    };
    $.ajax(settings);
}
//(UPDATE) updates components of client data document per user input
function updateClientInformation(client_id, callback) {
    var update = generateClientPackage(client_id);
    var settings = {
        url: databaseUrl + '/alcis/clients/' + client_id,
        dataType: 'json',
        method: 'PUT',
        data: JSON.stringify(update),
        processData: false,
        contentType: 'application/json',
        success: function(data) {
            callback(data);
        }
    };
    $.ajax(settings);
}
//(DELETE) removes document from collection 
function deleteClientData(client_id, callback) {
    console.log(client_id);
    var settings = {
        url: databaseUrl + '/alcis/clients/' + client_id,
        dataType: 'json',
        method: 'DELETE',
        success: function(data) {
            callback(data);
        }
    };
    $.ajax(settings);
}
// (READ) searches user database to retrieve login credentials
function loginRequest(username, password, callback) {
    var settings = {
        url: databaseUrl + '/alcis/login?username=' + username + '&password=' + password,
        dataType: 'json',
        method: 'POST',
        success: function(data) {
            callback(data);
            $('#login_page').hide();
            $('#dashboard').show();
        }
    };
    $.ajax(settings);
}
//create login credentials
function createLoginCredentials(username, password, callback) {
    console.log('login create ajax');
    console.log(username + ' ' + password);
    var settings = {
        url: databaseUrl + '/alcis/users',
        dataType: 'json',
        method: 'POST',
        data: JSON.stringify({
            username: username,
            password: password
        }),
        processData: false,
        contentType: 'application/json',
        success: function(data) {
            callback(data);
        }
    };
    $.ajax(settings);
}
//log out of alcis
function logoutRequest(callback) {
    var settings = {
        url: databaseUrl + '/alcis/logout',
        dataType: 'json',
        method: 'GET',
        success: function() {
            callback();
            console.log('completed');
        }
    };
    $.ajax(settings);
}
//callback function for log out
function logoutCallback() {
    alert("Thank you for using ALCIS");
    $('#dashboard').hide();
    $('#login_page').show();
    $('#client_dash').empty();
    $('#manip_data_buttons').empty();
    $('#contact_block').empty();
    $('#prospect_block').empty();
    $('#housing_block').empty();
    $('#financials_block').empty();
    $('#medical_block').empty();
    $('.client_search_results_list').empty();
    $('#username').val('');
    $('#password').val('');
}
//alert callback for creation of new client document
function alertForCreatedClient() {
    alert("You have created a new client.");
    $('.display_area :input').prop('disabled', true);
}
//alert callback for update of client document
function alertForUpdatedClient() {
    alert("You have changed client information.");
    $('.display_area :input').prop('disabled', true);
    $('#edit_data_button').prop('disabled', false);
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
    $("#prospect_block").html(clientProspectDisplay);
    $("#housing_block").html(clientHousingDisplay);
    $("#financials_block").html(clientFinancialDisplay);
    $("#medical_block").html(clientMedicalDisplay);
    $("#comments_block").html();
    $("#manip_data_buttons").html(submitNewButtonDisplay);
}
//renders list of search results from READ call in html - client names are rendered as links to collection documents
function displayClientList(data) {
    var resultElement = '';
    if (data) {
        $('.client_search_results_list').html('<div id="search_display">Client Search Results</div>');
        $.each(data, function(index, client) {
            resultElement +=
                '<div client_id="' + client._id + '" value="' + index + '" class="search_result_return search_link">' +
                '<ul>' +
                '<li>Contact Name:  ' + client.contact.contactName.contactFirstName + ' ' + client.contact.contactName.contactLastName + '</li>' +
                '<li>Contact Phone:  ' + client.contact.contactPrimaryPhone + '</li>' +
                '<li>Prospect Name:  ' + client.prospect.prospectName.prospectFirstName + ' ' + client.prospect.prospectName.prospectLastName + '</li> ' +
                '<li>DOB:  ' + client.prospect.dateOfBirth + '</li>' +
                '<li>Gender:  ' + client.prospect.gender + '</li>' +
                '<li>Housing Type:  ' + client.housingAssistance.housingType + '</li>' +
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
    if (data) {
        //information display variables - contain HTML
        var clientDashDisplay =
            "<div class='client_dash_display'>" +
            // "<div class='dash_top'>" +
            "<div class='dash_1 dash'>" +
            "<h3 class='client_dash_head'>Client Dashboard</h3>" +
            "</div>" +
            // "</div>" + 
            "<div class='client_dash_info dash_bottom'>" +
            "<ul class='dash_3 dash'>" +
            "<li>Prospect:  " + data.prospect.prospectName.prospectFirstName + " " + data.prospect.prospectName.prospectLastName + "</li>" +
            "<li>DOB:  " + data.prospect.dateOfBirth + "</li>" +
            "</ul>" +
            "<ul class='dash_4 dash'>" +
            "<li id='dash_contact_name'>Contact:  " + data.contact.contactName.contactFirstName + " " + data.contact.contactName.contactLastName + "</li>" +
            "<li>Contact Phone:  " + data.contact.contactPrimaryPhone + "</li>" +
            "</ul>" +
            "<ul class='dash_5 dash'>" +
            "<li id='dash_lead_status'>Lead Status:  " + data.prospect.leadStatus + "</li>" +
            "<li id='dash_hospital'>Hospital:  " + data.prospect.prefHospital + "</li>" +
            "<li id='dash_dnr_status'>DNR Status:  " + data.prospect.dnr + "</li>" +
            "</ul>" +
            "</div>" +
            "<form action='' method='post' id='dash_delete'>" +
            "<label for='delete_client_button'></label>" +
            "<button class='dash_2' client_id='" + data._id + "' name='delete_client' id='client_delete_button' value='Delete All Client Information'>Delete Client</button>" +
            "</form>" +
            "</div>";
        var contactDisplay = $(clientContactDisplay);
        var prospectDisplay = $(clientProspectDisplay);
        var housingDisplay = $(clientHousingDisplay);
        var financialDisplay = $(clientFinancialDisplay);
        var medicalDisplay = $(clientMedicalDisplay);
        contactDisplay.find('#contact_first_name').val(data.contact.contactName.contactFirstName);
        contactDisplay.find('#contact_last_name').val(data.contact.contactName.contactLastName);
        contactDisplay.find('#contact_street').val(data.contact.contactAddress.contactStreet);
        contactDisplay.find('#contact_city').val(data.contact.contactAddress.contactCity);
        contactDisplay.find('#contact_state').val(data.contact.contactAddress.contactState);
        contactDisplay.find('#contact_zipcode').val(data.contact.contactAddress.contactZip);
        contactDisplay.find('#contact_primary_phone').val(data.contact.contactPrimaryPhone);
        contactDisplay.find('#contact_alt_phone').val(data.contact.contactSecondaryPhone);
        contactDisplay.find('#contact_email').val(data.contact.contactEmail);
        contactDisplay.find('input[name="rel_to_prospect"][value="' + data.contact.relToProspect + '"]').attr('checked', true);
        contactDisplay.find('#first_contact_date').val(toString(data.contact.dateOfFirstContact));

        prospectDisplay.find('#prospect_first_name').val(data.prospect.prospectName.prospectFirstName);
        prospectDisplay.find('#prospect_last_name').val(data.prospect.prospectName.prospectLastName);
        prospectDisplay.find('#prospect_phone').val(data.prospect.prospectPhone);
        prospectDisplay.find('#prospect_street').val(data.prospect.prospectAddress.prospectStreet);
        prospectDisplay.find('#prospect_city').val(data.prospect.prospectAddress.prospectCity);
        prospectDisplay.find('#prospect_state').val(data.prospect.prospectAddress.prospectState);
        prospectDisplay.find('#prospect_zipcode').val(data.prospect.prospectAddress.prospectZip);
        prospectDisplay.find('#date_of_birth').val(data.prospect.dateOfBirth);
        prospectDisplay.find('#ssn').val(data.prospect.socialSecurityNum);
        prospectDisplay.find('#medicare').val(data.prospect.insuranceNums.medicareNum);
        prospectDisplay.find('#masshealth').val(data.prospect.insuranceNums.massHealth);
        prospectDisplay.find('#other_ins').val(data.prospect.insuranceNums.insuranceNum);
        prospectDisplay.find('input[name="gender"][value="' + data.prospect.gender + '"]').attr('checked', true);
        prospectDisplay.find('input[name="marital_status"][value="' + data.prospect.maritalStatus + '"]').attr('checked', true);
        prospectDisplay.find('input[name="veteran_status"][value="' + data.prospect.veteranStatus + '"]').attr('checked', true);
        prospectDisplay.find('#service_branch').val(data.prospect.serviceBranch);
        prospectDisplay.find('#religion').val(data.prospect.religion);
        prospectDisplay.find('input[name="education"][value="' + data.prospect.levelOfEducation + '"]').attr('checked', true);
        prospectDisplay.find('input[name="current_housing"][value="' + data.prospect.currentHousing + '"]').attr('checked', true);
        prospectDisplay.find('input[name="lead_status"][value="' + data.prospect.leadStatus + '"]').attr('checked', true);
        prospectDisplay.find('#poa_first_name').val(data.prospect.poa.poaName.poaFirstName);
        prospectDisplay.find('#poa_last_name').val(data.prospect.poa.poaName.poaLastName);
        prospectDisplay.find('#poa_primary_phone').val(data.prospect.poa.poaPhone);
        prospectDisplay.find('#poa_alt_phone').val(data.prospect.poa.poaSecPhone);
        prospectDisplay.find('#hcp_first_name').val(data.prospect.hcp.hcpName.hcpFirstName);
        prospectDisplay.find('#hcp_last_name').val(data.prospect.hcp.hcpName.hcpLastName);
        prospectDisplay.find('#hcp_primary_phone').val(data.prospect.hcp.hcpPhone);
        prospectDisplay.find('#hcp_alt_phone').val(data.prospect.hcp.hcpSecPhone);
        prospectDisplay.find('#pec_first_name').val(data.prospect.eContact.eContactName.eContactFirstName);
        prospectDisplay.find('#pec_last_name').val(data.prospect.eContact.eContactName.eContactLastName);
        prospectDisplay.find('#pec_primary_phone').val(data.prospect.eContact.eContacPhone);
        prospectDisplay.find('#pec_alt_phone').val(data.prospect.eContact.eContactAltPhone);
        prospectDisplay.find('#sec_first_name').val(data.prospect.altEmergContact.altContactName.altContactFirstName);
        prospectDisplay.find('#sec_last_name').val(data.prospect.altEmergContact.altContactName.altContactLastName);
        prospectDisplay.find('#sec_primary_phone').val(data.prospect.altEmergContact.altContactPhone);
        prospectDisplay.find('#sec_alt_phone').val(data.prospect.altEmergContact.altContactAltPhone);

        housingDisplay.find('input[name="type_of_housing"][value="' + data.housingAssistance.housingType + '"]').attr('checked', true);
        housingDisplay.find('input[name="assistance_needed"]:checked').val();
        housingDisplay.find('#bathing_detail').val(data.housingAssistance.assistanceNeeded.bathing);
        housingDisplay.find('#dressing_detail').val(data.housingAssistance.assistanceNeeded.dressing);
        housingDisplay.find('#grooming_detail').val(data.housingAssistance.assistanceNeeded.grooming);
        housingDisplay.find('#ambulation_detail').val(data.housingAssistance.assistanceNeeded.ambulation);
        housingDisplay.find('#toileting_detail').val(data.housingAssistance.assistanceNeeded.toileting);
        housingDisplay.find('input[name="prim_apt_pref"][value="' + data.housingAssistance.primaryAptPref + '"]').attr('checked', true);
        housingDisplay.find('input[name="sec_apt_pref"][value="' + data.housingAssistance.secondaryAptPref + '"]').attr('checked', true);
        housingDisplay.find('input[name="additional_services"][value="' + data.housingAssistance.additionalServices + '"]').attr('checked', true);
        housingDisplay.find('#est_move_date');

        financialDisplay.find('input[name="payer_source"][value=" ' + data.financials.payerSource + '"]').attr('checked', true);
        financialDisplay.find('#income_monthly').val(data.financials.income.monthlyIncome);
        financialDisplay.find('#income_social').val(data.financials.income.socSecMonthly);
        financialDisplay.find('#income_pension').val(data.financials.income.pension);
        financialDisplay.find('#income_ssi').val(data.financials.income.ssi);
        financialDisplay.find('#income_va').val(data.financials.income.vaBenefits);
        financialDisplay.find('#income_other').val(data.financials.income.otherIncome);
        financialDisplay.find('#income_other_source').val(data.financials.income.otherIncomeSource);
        financialDisplay.find('#property_value').val(data.financials.assets.propertyValue);
        financialDisplay.find('#bank_value').val(data.financials.assets.bankAccounts);
        financialDisplay.find('#life_ins_value').val(data.financials.assets.lifeInsurance);
        financialDisplay.find('#other_value').val(data.financials.assets.otherAssets);
        financialDisplay.find('#other_value_source').val(data.financials.assets.otherAssetsSource);
        financialDisplay.find('#bank_ref_name').val(data.financials.bankReference.bankRefName);
        financialDisplay.find('#bank_ref_number').val(data.financials.bankReference.bankRefNumber);
        financialDisplay.find('#landlord_ref_name').val(data.financials.landlordReference.landlordRefName);
        financialDisplay.find('#landlord_ref_number').val(data.financials.landlordReference.landlordRefNum);

        medicalDisplay.find('#assess_date').val(data.medical.initialAssessment.assessSchedDate);
        medicalDisplay.find('#assess_date_comepleted').val(data.medical.initialAssessment.assessCompDate);
        medicalDisplay.find('#assessed_by').val(data.medical.initialAssessment.assessedBy);
        medicalDisplay.find('input[name="level_of_care"][value="' + data.medical.alfPlanType + '"]').attr('checked', true);
        medicalDisplay.find('input[name="other_plans"][value="' + data.medical.otherPlan + '"]').attr('checked', true);
        medicalDisplay.find('#allergies').val(data.medical.allergies);
        medicalDisplay.find('#meds_on_admit').val(data.medical.medsOnAdmit);
        medicalDisplay.find('#health_issues').val(data.medical.healthIssues);
        medicalDisplay.find('').val(data.medical.ambulation);
        medicalDisplay.find('').val(data.medical.homeCareOnAdmit);
        medicalDisplay.find('input[name="dietary"][value="' + data.medical.diet + '"]').attr('checked', true);
        medicalDisplay.find('#pcp_name').val(data.medical.pcp.pcpName);
        medicalDisplay.find('#pcp_phone').val(data.medical.pcp.pcpNum);
        medicalDisplay.find('#pcp_fax').val(data.medical.pcp.pcpFax);
        medicalDisplay.find('#pcp_street').val(data.medical.pcp.pcpAddress.pcpStreet);
        medicalDisplay.find('#pcp_city').val(data.medical.pcp.pcpAddress.pcpCity);
        medicalDisplay.find('#pcp_state').val(data.medical.pcp.pcpAddress.pcpState);
        medicalDisplay.find('#pcp_zipcode').val(data.medical.pcp.pcpAddress.pcpZip);
        medicalDisplay.find('#phys_form_date').val(data.medical.physFormRec);
        medicalDisplay.find('input[name="pharmacy_choice"][value="' + data.medical.pharmacy + '"]').attr('checked', true);
        var commentsDisplay;
        $('#contact_block').html(contactDisplay);
        $('#prospect_block').html(prospectDisplay);
        $('#housing_block').html(housingDisplay);
        $('#financials_block').html(financialDisplay);
        $('#medical_block').html(medicalDisplay);
        $('#comments_block').html(commentsDisplay);
        $('#client_dash').html(clientDashDisplay);
        $("#manip_data_buttons").html(editButtonDisplay);
    }
}
//EVENT HANDLERS
//controls display of data entry forms to enter information for new client
function newClientHandler() {
    $('body').on('click', '#new_client_button', function(event) {
        event.preventDefault();
        enterNewClientData();
        $('.display_area :input').prop('disabled', false);
        $('manip_data_buttons').show();
        $('#submit_data_button').show();
        $('#edit_data_button').addClass('hidden');
        $('.client_search_results_list').empty();
        $('#client_dash').empty();
        $('#data_block').removeClass('hidden');
        $('#data_block').children('div').hide();
        $('#data_nav_bar').removeClass('hidden');
        $('#contact_block').show();
        $('span').removeClass('onclick');
        $('span[js_display="contact_block"]').addClass('onclick');
    });
}
//submits username and password for authentication
function loginSubmitHandler() {
    $('body').on('submit', '.login_form', function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        loginRequest(username, password, function() {
            alert("Welcome to Alcis");
        });
    });
}

function logOutHandler() {
    $('body').on('click', '#logout_button', function(event) {
        event.preventDefault();
        logoutRequest(logoutCallback());
    });
}
//triggers the CREATE API call and creates new document in the collection
function dataSubmitHandler(client_id) {
    $('body').on('click', '#submit_data_button', function(event) {
        event.preventDefault();
        createNewClient(client_id, alertForCreatedClient);
    });
}
//submits client search data - generates searchName object for initial GET call
function submitClientSearchHandler() {
    $('body').on('submit', '.client_search_form', function(event) {
        event.preventDefault();
        var searchName = {
            firstName: $(this).find('#first_name').val(),
            lastName: $(this).find('#last_name').val()
        };
        getClientList(searchName, displayClientList);
        $('.client_search_results_list').removeClass('hidden');
    });
}
//handler for displaying specific client document data from initial results list
function clientListSelectHandler() {
    $('body').on('click', '.search_result_return', function(event) {
        event.preventDefault();
        getAndDisplayClientData($(this).attr('client_id'));
        // $('#manip_data_buttons').html(dataManipButtons);
        $('.display_area :input').prop('disabled', true);
        $('#data_block').removeClass('hidden');
        $('#data_block').children('div').hide();
        $('#contact_block').show();
        $('#data_nav_bar').removeClass('hidden');
        $('#submit_data_button').addClass('hidden');
        $('#edit_data_button').removeClass('hidden');
        $('.client_search_results_list').toggleClass('hidden');
        $('#manip_data_buttons').show();
        $('#client_dash').removeClass('hidden');
        $('span').removeClass('onclick');
        $('span[js_display="contact_block"]').addClass('onclick');
    });
}
//handler for button to allow user to edit client document
function editContactHandler() {
    $('body').on('click', '#edit_data_button', function(event) {
        event.preventDefault();
        if (confirm("Are you sure you want to change client information?")) {
            $('.display_area :input').prop('disabled', false);
            $('#manip_data_buttons').empty();
            $('#manip_data_buttons').html(submitChangesButtonDisplay);
            $('#edit_data_button').addClass('hidden');
        }
        else {
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
        $('#manip_data_buttons').empty();
        $('#manip_data_buttons').html(editButtonDisplay);
        $('#client_dash').removeClass('hidden');
    });
}
//handler for delete client document button
function deleteClientHandler(client_id) {
    $('body').on('click', '#client_delete_button', function(event) {
        event.preventDefault();
        if (confirm("Are you sure you want to delete all client information?")) {
            deleteClientData($(this).attr('client_id'), alertForDeletedClient);
        }
        else {
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
        $('.client_search_results_list').empty();
        $('#data_block').children('div').empty();
        $('#data_block').children('div').addClass('hidden');
        $('#data_block').addClass('hidden');
        $('#client_dash').empty().addClass('hidden');
        $('#data_nav_bar').addClass('hidden');
        $('#manip_data_buttons').empty();
    });
}
//navigation tabs handler
function tabNavHandler() {
    $('div').on('click', '.tab_nav', function(event) {
        event.preventDefault();
        event.stopPropagation();
        var displayDiv = $(this).attr('js_display');
        $('#data_block').children('div').hide();
        $('.tab_nav').removeClass('onclick');
        $('#data_block').find('#' + displayDiv).show();
        $('span[js_display="' + displayDiv + '"]').addClass('onclick');
        $('#manip_data_buttons').show();
    });
}
//for development only
// function bypassLoginHandler() {
//     $('body').on('click', '#bypass_login', function(event) {
//         event.preventDefault();
//         $('#login_page').addClass('hidden');
//         $('#dashboard').removeClass('hidden');
//     });
// }
//allows creation of user credentials
// function devCredCreationHandler() {
//     $('body').on('click', '#dev_create_login', function(event) {
//         event.preventDefault();
//         var username = $('#username').val();
//         var password = $('#password').val();
//         createLoginCredentials(username, password, function() {
//             alert("user create");
//         });
//     });
// }
//ready function
$(function() {
    loginSubmitHandler();
    // bypassLoginHandler();
    newClientHandler();
    dataSubmitHandler();
    submitChangesHandler();
    editContactHandler();
    resetClientSearchHandler();
    submitClientSearchHandler();
    clientListSelectHandler();
    deleteClientHandler();
    devCredCreationHandler();
    tabNavHandler();
    logOutHandler();
});
