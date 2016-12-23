exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://<dbuser>:<dbpassword>@ds141078.mlab.com:41078/cms_capstone' :
                            'mongodb://localhost/cms_capstone-dev');
exports.PORT = process.env.PORT || 8080;

//'mongodb://<dbuser>:<dbpassword>@ds141078.mlab.com:41078/cms_capstone' :