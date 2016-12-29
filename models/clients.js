var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/');

mongoose.connection.on('error', function(err) {
    console.error('Could not connect.  Error:', err);
});
//can build into the Schema required, min/max validators, 
//cannot make nested validators unless using nested schemas eg create new name schema with first and last name as values
//would this whole schema be under client_id: _id?
mongoose.connection.once('open', function() {
    var clientSchema = mongoose.Schema({
        contact: {
            contactName: {
                contactFirstName: String, 
                contactLastName: String
            },
            contactPrimaryPhone: Number,
            contactSecondaryPhone: Number,
            contactAddress: {
                contactStreet: String, 
                contactCity: String, 
                contactState: String, 
                contactZip: Number
            },
            contactEmail: String,
            relToProspect: String,
            referralSource: String,
            dateOfFirstContact: Date
        },
        prospect: {
            prospectName: {
                prospectFirstName: String,
                prospectLastName: String
            },
            prospectPhone: Number,
            prospectAddress: {
                prospectStreet: String, 
                prospectCity: String, 
                prospectState: String, 
                prospectZip: Number
            },
            dateOfBirth: Date,
            socialSecurityNum: Date,
            insuranceNums: {
                medicareNum: String, //9 digit number with one or two letters
                massHealth: String,
                insuranceNum: String   
            },
            gender: String,//radio male female
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
                poaPhone: Number 
            },
            hcp: {
                hcpName: {
                    hcpFirstName: String,
                    hcpLastName: String
                },
                hcpPhone: Number
            },
            dnr: String, //should this be boolean?  then if dnr == true make display box?
            eContact: {
                eContactName: {
                    eContactFirstName: String,
                    eContactLastName: String
                },
                eContactPhone: Number
            },
            altEmergContact: {
                altContactName: {
                    altContactFirstName: String,
                    altContactLastName: String
                },
                altContactPhone: Number
            },
            prefHospital: String,
            followUpDate: Date,
            dateAddedtoDB: Date,
        },
        housingAssistance: {
            housingType: String, // radio Independent, Assisted Living, Memory Care, GAFC
            assistanceNeeded: {
                bathing: String,
                dressing: String,
                grooming: String,
                medAssist: String,
                ambulation: String
            },
            primaryAptPref: String, 
            secondaryAptPref: String,
            estimatedMoveDate: Date, //8 digit date
            additionalServices: String //this may be more than one or none, should this be array?
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
                otherIncomeSource: String//text input    
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
                bankRefNumber: Number   
            },
            landlordReference: {
                landlordRefName: String,
                landlordRefNum: Number   
            }
        },
        medical: {
            initialAssessment: {
                assessSchedDate: Date, //8 digit date of initial assessment
                assessCompDate: Date,  
                assessedBy: String
            },
            alfPlanType: String,
            allergies: String,
            oxygenStatus: String,
            medsOnAdmit: String,
            healthIssues: String,
            ambulation: String,
            homeCareOnAdmit: String,
            diet: String,
            pcp: {
                pcpName: String,
                pcpNum: Number,
                pcpFax: Number,
                pcpAddress: {
                    pcpStreet: String,
                    pcpCity: String,
                    pcpState: String,
                    pcpZip: Number
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
                poaPhone: Number 
            },
            hcp: {
                hcpName: {
                    hcpFirstName: String,
                    hcpLastName: String
                },
                hcpPhone: Number
            },
            dnr: String, //should this be boolean?  then if dnr == true make display box?
            eContact: {
                eContactName: {
                    eContactFirstName: String,
                    eContactLastName: String
                },
                eContactPhone: Number
            },
            altEmergContact: {
                altContactName: {
                    altContactFirstName: String,
                    altContactLastName: String
                },
                altContactPhone: Number
            },
            prefHospital: String,
        },
        comments: [{
            user : String,
            commentDate: Date, //8 digit date comment entered
            commentText: String
        }]
    });

    var Client = mongoose.model('Client', clientSchema);
    
    module.exports = Client;
//what would be passed as the arguments to the create function? - example is name, content 2 keys in schema 
    var create = function() {
        var client = {

            //constructor function - outside of this code - whereever calling create from - new client
            //specific data like id? contact name? contact number? etc
        };
        Client.create(client, function(err, client) {
            if (err || !client) {
                console.error("could not create client"); //example has , name
                mongoose.disconnect();
                return;
            }
            console.log("created client"); //example has snippet.name
            mongoose.disconnect();
        });
 
    };
    //find and findOne methods - specify query type

});