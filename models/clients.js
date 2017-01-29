var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
    deleted: Boolean,
    contact: {
        contactName: {
            contactFirstName: String,
            contactLastName: String
        },
        contactPrimaryPhone: String,
        contactSecondaryPhone: String,
        contactAddress: {
            contactStreet: String,
            contactCity: String,
            contactState: String,
            contactZip: String
        },
        contactEmail: String,
        relToProspect: String,
        referralSource: String,
        referredBy: String,
        dateOfFirstContact: Date
    },
    prospect: {
        prospectName: {
            prospectFirstName: String,
            prospectLastName: String
        },
        prospectPhone: String,
        prospectAddress: {
            prospectStreet: String,
            prospectCity: String,
            prospectState: String,
            prospectZip: String
        },
        dateOfBirth: Date,
        socialSecurityNum: String,
        insuranceNums: {
            medicareNum: String, //9 digit number with one or two letters
            massHealth: String,
            insuranceNum: String
        },
        gender: String, //radio male female
        maritalStatus: String,
        veteranStatus: String, //radio yes vet - text input service
        serviceBranch: String,
        religion: String,
        levelOfEducation: String,
        currentHousing: String,
        leadStatus: String,
        poa: {
            poaName: {
                poaFirstName: String,
                poaLastName: String
            },
            poaPhone: String,
            poaSecPhone: String
        },
        hcp: {
            hcpName: {
                hcpFirstName: String,
                hcpLastName: String
            },
            hcpPhone: String,
            hcpSecPhone: String
        },
        dnr: String, //should this be boolean?  then if dnr == true make display box?
        eContact: {
            eContactName: {
                eContactFirstName: String,
                eContactLastName: String
            },
            eContactPhone: String,
            eContactAltPhone: String
        },
        altEmergContact: {
            altContactName: {
                altContactFirstName: String,
                altContactLastName: String
            },
            altContactPhone: String,
            altContactAltPhone: String
        },
        prefHospital: String,
        followUpDate: Date,
        dateAddedtoDB: Date,
    },
    housingAssistance: {
        housingType: String, // radio Independent, Assisted Living, Memory Care, GAFC
        assistanceNeeded: {
            assistance_needed: Object,
            bathing: String,
            dressing: String,
            grooming: String,
            medAssist: String,
            ambulation: String
        },
        primaryAptPref: String,
        secondaryAptPref: String,
        estimatedMoveDate: Date, //8 digit date
        additionalServices: Array //this may be more than one or none, should this be array?
            //appOrDec: Boolean
    },
    financials: {
        payerSource: String, //private, LTC ins, MassHealth, Navicare, etc
        income: {
            monthlyIncome: Number, //should generate from other entries
            pension: Number, //income is numbers only
            socSecMonthly: Number,
            ssi: Number,
            vaBenefits: Number,
            otherIncome: Number,
            otherIncomeSource: String //text input    
        },
        assets: {
            propertyValue: Number,
            bankAccounts: Number,
            lifeInsurance: Number,
            otherAssets: Number,
            otherAssetsSource: String
        },
        bankReference: {
            bankRefName: String,
            bankRefNumber: String
        },
        landlordReference: {
            landlordRefName: String,
            landlordRefNum: String
        }
    },
    medical: {
        initialAssessment: {
            assessSchedDate: Date, //8 digit date of initial assessment
            assessCompDate: Date,
            assessedBy: String
        },
        alfPlanType: String,
        otherPlan: String,
        allergies: String,
        oxygenStatus: String,
        medsOnAdmit: String,
        healthIssues: String,
        ambulation: String,
        homeCareOnAdmit: String,
        diet: String,
        pcp: {
            pcpName: String,
            pcpNum: String,
            pcpFax: String,
            pcpAddress: {
                pcpStreet: String,
                pcpCity: String,
                pcpState: String,
                pcpZip: String
            },
        },
        physFormRec: Date, //8 digit date physician form received
        pharmacy: String,
        //following information is collected in prospect section
        poa: {
            poaName: {
                poaFirstName: String,
                poaLastName: String
            },
            poaPhone: String
        },
        hcp: {
            hcpName: {
                hcpFirstName: String,
                hcpLastName: String
            },
            hcpPhone: String
        },
        dnr: String, //should this be boolean?  then if dnr == true make display box?
        eContact: {
            eContactName: {
                eContactFirstName: String,
                eContactLastName: String
            },
            eContactPhone: String
        },
        altEmergContact: {
            altContactName: {
                altContactFirstName: String,
                altContactLastName: String
            },
            altContactPhone: String
        },
        prefHospital: String,
    },
    comments: {
        user: String,
        commentDate: Date, //8 digit date comment entered
        commentText: String
    }
});
var Client = mongoose.model('Client', clientSchema);
module.exports = Client;
