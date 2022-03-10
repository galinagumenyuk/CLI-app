const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "/db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(filePath);
  const list = JSON.parse(data);
  return list;
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  listContacts,
};
