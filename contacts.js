const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "/db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(filePath);
  const list = JSON.parse(data);
  return list;
}

async function getContactById(contactId) {
  const list = await listContacts();
  const result = list.find((item) => parseInt(item.id) === contactId);
  if (!result) {
    return null;
  }
  return result;
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  listContacts,
  getContactById,
};
