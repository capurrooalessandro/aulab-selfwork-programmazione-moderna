export default function addContacts(obj, nameList = []) {
    obj.contacts = nameList;
    return obj; 
}

export function contactsToString({contacts = []}) {
    return contacts.toString();
}

