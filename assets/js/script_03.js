import student from "./script.js";
import addContacts, { contactsToString } from "./script_02.js";

const studentWithContacts = addContacts(student, ["Fabrizio", "Gabriele", "Roberto", "Antonio", "Andrea"]);

const contactsList = contactsToString(studentWithContacts);

console.log('Oggetto "student" con proprietà "contatti":', studentWithContacts,"\nStringa contatti:", contactsList);
