const notifyByEmail = (email) => {
    return 'Email sent to: ' + email;
}

const notifyByText = (number) => {
    return 'Text sent to: ' + number;
}

const notify = (contact, notifyFunction) => {
    return notifyFunction(contact);
}

console.log(notify('07123456789', notifyByText))
console.log(notify('alice.email@email.alice', notifyByEmail))