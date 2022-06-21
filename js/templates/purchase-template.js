import {WEBSITE_DESCRIPTOR, WEBSITE_PHONE, WEBSITE_EMAIL} from '../website-data.js'

export const purchaseTemplate = (products) => {
 
    let result = [];

    products.forEach(product => {

    	result.push(`<p class="text">${product.name} - <span class="bold"> $${(product.price).toFixed(2)} + $0.00 Shipping & Handling</span> - This is a one-time purchase. Shipment via USPS typically takes 3-5 days. Your credit card will be billed as ${WEBSITE_DESCRIPTOR} on your statement.</p>`);
        
    })
    
    result = result.join('');
    return result;
}