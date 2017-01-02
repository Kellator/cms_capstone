var mongoose = require('mongoose');


    var clientSchema = new mongoose.Schema({
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
            referredBy: String,
            dateOfFirstContact: Date
        }
    });
    var Client = mongoose.model('Client', clientSchema);
    module.exports = Client;

    // var create = function(ClientDataPackage) {
    //     console.log(ClientDataPackage);
    //     var client = ClientDataPackage
    //             //constructor function - outside of this code - whereever calling create from - new client
    //             //specific data like id? contact name? contact number? etc
    //     ;
    //     Client.create(client, function(err, client) {
    //         if (err || !client) {
    //             console.error("could not create client"); //example has , name
    //             mongoose.disconnect();
    //             return res.status(500).json({message: 'Internal Server Error'});
    //         }
    //         console.log("created client"); //example has snippet.name
    //         res.status(201).json(client);
    //         mongoose.disconnect();
    //     });
    // };
    // var read = function(ClientDataPackage) {
    //     Client.findOne({contactLastName: contactLastName}, function(err, client) {
    //         if(err || !client) {
    //             console.error('Could not read client', contactLastName);
    //             mongoose.disconnect();
    //             return;
    //         }
    //         console.log('Created Client', client.contactLastName);
    //         mongoose.disconnect();
    //     });
    // };
    // var update = function(ClientDataPackage) {
    //     Client.findOneAndUpdate({contactLastName: contactLastName}, function(err, client) {
    //         if(err || !client) {
    //             console.error('Could not update client', contactLastName);
    //             mongoose.disconnect();
    //             return;
    //         }
    //         console.log('Updated client', client.contactLastName);
    //         mongoose.disconnet();
    //     });
    // };
    // var del = function(ClientDataPackage) {
    //     Client.findOneAndRemove({contactLastName: contactLastName}, function(err, client) {
    //         if(err || !client) {
    //             console.error('Could not delete client', contactLastName);
    //             mongoose.disconnect();
    //             return;
    //         }
    //         console.log('Deleted client', client.contactLastName);
    //     });
    // };
 //use api request  to pass in object express api endpoint which calls this create function - calls the client.create (mongoose model)


                
                // prospect: {
                //     prospectName: {
                //         prospectFirstName: String,
                //         prospectLastName: String
                //     },
                //     prospectPhone: Number,
                //     prospectAddress: {
                //         prospectStreet: String, 
                //         prospectCity: String, 
                //         prospectState: String, 
                //         prospectZip: Number
                //     },
                //     dateOfBirth: Date,
                //     socialSecurityNum: Date,
                //     insuranceNums: {
                //         medicareNum: String, //9 digit number with one or two letters
                //         massHealth: String,
                //         insuranceNum: String   
                //     },
                //     gender: String,//radio male female
                //     maritalStatus: String,
                //     veteranStatus: String, //radio yes vet - text input service
                //     serviceBranch: String,
                //     religion: String,
                //     levelOfEducation: String,
                //     currentHousing: String, 
                //     leadStatus: String,
                //     poa: {
                //         poaName: {
                //             poaFirstName: String,
                //             poaLastName: String
                //         },
                //         poaPhone: Number 
                //     },
                //     hcp: {
                //         hcpName: {
                //             hcpFirstName: String,
                //             hcpLastName: String
                //         },
                //         hcpPhone: Number
                //     },
                //     dnr: String, //should this be boolean?  then if dnr == true make display box?
                //     eContact: {
                //         eContactName: {
                //             eContactFirstName: String,
                //             eContactLastName: String
                //         },
                //         eContactPhone: Number
                //     },
                //     altEmergContact: {
                //         altContactName: {
                //             altContactFirstName: String,
                //             altContactLastName: String
                //         },
                //         altContactPhone: Number
                //     },
                //     prefHospital: String,
                //     followUpDate: Date,
                //     dateAddedtoDB: Date,
                // },
                // housingAssistance: {
                //     housingType: String, // radio Independent, Assisted Living, Memory Care, GAFC
                //     assistanceNeeded: {
                //         bathing: String,
                //         dressing: String,
                //         grooming: String,
                //         medAssist: String,
                //         ambulation: String
                //     },
                //     primaryAptPref: String, 
                //     secondaryAptPref: String,
                //     estimatedMoveDate: Date, //8 digit date
                //     additionalServices: String //this may be more than one or none, should this be array?
                //     //appOrDec: Boolean
                // },
                // financials: {
                //     payerSource: String, //private, LTC ins, MassHealth, Navicare, etc
                //     income: {
                //         monthlyIncome: Number, //should generate from other entries
                //         pension: Number, //income is numbers only
                //         socSecMonthly: Number,
                //         ssi: Number,
                //         vaBenefits: Number,
                //         otherIncome: Number,
                //         otherIncomeSource: String//text input    
                //     },
                //     assets: {
                //         propertyValue: Number,
                //         bankAccounts: Number,
                //         lifeInsurance: Number,
                //         otherAssets: Number,
                //         otherAssetsSource: String   
                //     },
                //     bankReference: {
                //         bankRefName: String,
                //         bankRefNumber: Number   
                //     },
                //     landlordReference: {
                //         landlordRefName: String,
                //         landlordRefNum: Number   
                //     }
                // },
                // medical: {
                //     initialAssessment: {
                //         assessSchedDate: Date, //8 digit date of initial assessment
                //         assessCompDate: Date,  
                //         assessedBy: String
                //     },
                //     alfPlanType: String,
                //     allergies: String,
                //     oxygenStatus: String,
                //     medsOnAdmit: String,
                //     healthIssues: String,
                //     ambulation: String,
                //     homeCareOnAdmit: String,
                //     diet: String,
                //     pcp: {
                //         pcpName: String,
                //         pcpNum: Number,
                //         pcpFax: Number,
                //         pcpAddress: {
                //             pcpStreet: String,
                //             pcpCity: String,
                //             pcpState: String,
                //             pcpZip: Number
                //         },
                //     },
                //     physFormRec: Date, //8 digit date physician form received
                //     pharmacy: String,
                //     //following information is collected in prospect section
                //     poa: {
                //         poaName: {
                //             poaFirstName: String,
                //             poaLastName: String
                //         },
                //         poaPhone: Number 
                //     },
                //     hcp: {
                //         hcpName: {
                //             hcpFirstName: String,
                //             hcpLastName: String
                //         },
                //         hcpPhone: Number
                //     },
                //     dnr: String, //should this be boolean?  then if dnr == true make display box?
                //     eContact: {
                //         eContactName: {
                //             eContactFirstName: String,
                //             eContactLastName: String
                //         },
                //         eContactPhone: Number
                //     },
                //     altEmergContact: {
                //         altContactName: {
                //             altContactFirstName: String,
                //             altContactLastName: String
                //         },
                //         altContactPhone: Number
                //     },
                //     prefHospital: String,
                // },
                // comments: [{
                //     user : String,
                //     commentDate: Date, //8 digit date comment entered
                //     commentText: String
                // }]
 