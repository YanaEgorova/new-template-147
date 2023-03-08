export const dropdown = (ringSize, label) => {

    return `
    <p class="prod__size">${label}</p>
    <select class="prod__select">
    <option disabled selected>Select</option>
    ${ringSize.map(item => `<option value="${item}">${item}</option>`)}
    </select>
    `;


}