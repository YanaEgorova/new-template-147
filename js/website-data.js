export const WEBSITE_NAME = 'Pieces Of Charm Gem Store';
export const WEBSITE_URL = 'piecesofcharmgemstore.com';
export const WEBSITE_CORP = 'Sage Arrow Inc';
export const WEBSITE_PHONE = '844 926 3651';
export const WEBSITE_EMAIL = 'support@piecesofcharmgemstore.com';
export const WEBSITE_ADDRESS = '9 Camp Bal Place, Little Falls, NJ 07424, USA';
export const WEBSITE_RETURN_ADDRESS = '1025 Industry Rd Harrodsburg, KY 40330, USA';
export const WEBSITE_DESCRIPTOR = '8449263651piecesofchar';
export const WEBSITE_FULFILLMENT = 'Fulfill Brokerage Inc.';

let websiteName = document.querySelectorAll('.js_website-name');
let websiteUrl = document.querySelectorAll('.js_website-url');
let websiteCorp = document.querySelectorAll('.js_website-corp');
let websitePhone = document.querySelectorAll('.js_website-phone');
let websiteEmail = document.querySelectorAll('.js_website-email');
let websiteAddress = document.querySelectorAll('.js_website-address');
let websiteReturnAddress = document.querySelectorAll('.js_website-return-address');
let websiteDescriptor = document.querySelectorAll('.js_website-desc');
let websiteFulfillment = document.querySelectorAll('.js_website-fulfill');


const mainPageTitle = document.querySelector('.js_main-title');
const mainPageSubTitle = document.querySelector('.js_sub-title');
const MAIN_TAGLINE = 'Must have it? We’ve got it.';
const SECONDARY_TAGLINE = 'Online shopping is the best way to buy jewelry you need in two clicks.';
if(mainPageTitle) {
    mainPageTitle.textContent = MAIN_TAGLINE;
}
if(mainPageSubTitle) {
    mainPageSubTitle.textContent = SECONDARY_TAGLINE;
}


websiteName = [...websiteName];
websiteUrl = [...websiteUrl];
websiteCorp = [...websiteCorp];
websitePhone = [...websitePhone];
websiteAddress = [...websiteAddress];
websiteDescriptor = [...websiteDescriptor];
websiteFulfillment = [...websiteFulfillment];

// SET WEBSITE TITLE
document.title = WEBSITE_NAME;

if(!(websiteName.length === 0)) {
    setInformation(websiteName, WEBSITE_NAME);
}

if(!(websiteUrl.length === 0)) {
    setInformation(websiteUrl, WEBSITE_URL);
    setWebsiteHref(websiteUrl, WEBSITE_URL);
}

if(!(websiteCorp.length === 0)) {
    setInformation(websiteCorp, WEBSITE_CORP);
}

if(!(websitePhone.length === 0)) {
    setInformation(websitePhone, WEBSITE_PHONE);
    setPhoneHref(websitePhone, WEBSITE_PHONE);
}

if(!(websiteEmail.length === 0)) {
    setInformation(websiteEmail, WEBSITE_EMAIL);
    setEmailHref(websiteEmail, WEBSITE_EMAIL);
}

if(!(websiteAddress.length === 0)) {
    setInformation(websiteAddress, WEBSITE_ADDRESS);
}

if(!(websiteReturnAddress.length === 0)) {
    setInformation(websiteReturnAddress, WEBSITE_RETURN_ADDRESS);
}

if(!(websiteDescriptor.length === 0)) {
    setInformation(websiteDescriptor, WEBSITE_DESCRIPTOR);
}

if(!(websiteFulfillment.length === 0)){
    setInformation(websiteFulfillment, WEBSITE_FULFILLMENT);
} 

function setInformation(array, info) {
    array.forEach(item => {
        item.textContent = info;
    });
}

function setWebsiteHref(array, info) {
    array.forEach(item => {
        item.hasAttribute('href') && item.setAttribute('href', `http://${info}`);
    });
}

function setPhoneHref(array, info) {
    array.forEach(item => {
       const href = `tel:${info}`;
       item.hasAttribute('href') && item.setAttribute('href', href);
    });
}

function setEmailHref(array, info) {
    array.forEach(item => {
        const href = `mailto:${info}`
        item.setAttribute('href', href);
    });
}

