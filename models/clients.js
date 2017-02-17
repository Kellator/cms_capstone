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
        dateOfBirth: String,
        socialSecurityNum: String,
        insuranceNums: {
            medicareNum: String,
            massHealth: String,
            insuranceNum: String
        },
        gender: String,
        maritalStatus: String,
        veteranStatus: String,
        serviceBranch: String,
        religion: String,
        levelOfEducation: String,
        currentHousing: String,
        leadStatus: String,
        poa: {
            poaName: {
                poaLastName: String,
                poaFirstName: String
            },
            poaPhone: String,
            poaSecPhone: String
        },
        hcp: {
            hcpName: {
                hcpLastName: String,
                hcpFirstName: String
            },
            hcpPhone: String,
            hcpSecPhone: String
        },
        dnr: String,
        eContact: {
            eContactName: {
                eContactLastName: String,
                eContactFirstName: String
            },
            eContactPhone: String,
            eContactAltPhone: String
        },
        altEmergContact: {
            altContactName: {
                altContactLastName: String,
                altContactFirstName: String
            },
            altContactPhone: String,
            altContactAltPhone: String
        },
        prefHospital: String,
        followUpDate: Date,
        dateAddedtoDB: Date,
    },
    housingAssistance: {
        housingType: String,
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
        estimatedMoveDate: String,
        additionalServices: Array
    },
    financials: {
        payerSource: String,
        income: {
            monthlyIncome: Number,
            pension: Number,
            socSecMonthly: Number,
            ssi: Number,
            vaBenefits: Number,
            otherIncome: Number,
            otherIncomeSource: String
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
            assessSchedDate: String,
            assessComp: String,
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
        physFormRec: String,
        pharmacy: String,
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
        dnr: String,
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
        commentDate: Date,
        commentText: String
    }
});
var Client = mongoose.model('Client', clientSchema);
module.exports = Client;
