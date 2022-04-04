exports.domain = "https://msosii.co.tz/api/v2";
exports.APP_SECRET="app_secret"; //Your app secret - same as in the .env file in your web project 
exports.APP_NAME="Msosii Vendor";
exports.LOGO="https://i.imgur.com/cEysw98.png";

exports.SINGLE_MODE=false;
exports.SINGLE_MODE_ID=1;
exports.SINGLE_MODE_NAME="Restaurant Name";

exports.MULTI_CITY=true;


//Currency
exports.currency="TZS";
exports.currencySign="/=";

//COD setup
exports.enableCOD=true;  //Cash on deliver

//Stripe settup
exports.enableStripe=false; 
exports.stripePublishKey="";

//Other payment gateways
exports.enablePayPal=false; 
exports.enableMollie=false; 
exports.enablePayStack=false; 

//Date format
exports.dateTimeFormat="MMMM Do YYYY, h:mm a";
exports.dateFormat="MMMM Do YYYY";

//OneSignal APP KEY
exports.ONESIGNAL_APP_ID="YOUR_ONESIGNAL_APP_ID";

//Google setup
exports.GOOGLE_API_KEY="AIzaSyBvwdHEEJkYcadoD4DFiCQ_44D4ZamcXQ4";
exports.queryTypes="address"
exports.queryCountries=['tz']; //{['pl', 'fr','us']}


/*
    searchRadius={500}
    searchLatitude={51.905070}
    searchLongitude={19.458834}
*/
exports.searchLatitude=null;
exports.searchLongitude=null;
exports.searchRadius=null;