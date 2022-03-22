export const dropdown = (ringSize) => {

    return `
    <p class="prod__size">Ring Size:</p>
    <select class="prod__select">
    <option disabled selected>Select</option>
    ${ringSize.map(item => `<option value="${item}">${item}</option>`)}
    </select>
    `;


}