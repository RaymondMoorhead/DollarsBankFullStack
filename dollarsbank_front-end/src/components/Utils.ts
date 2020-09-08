import axios from "axios";

// ! URL endpoint for database server
const API = "http://localhost:8080";

export class Customer {
  username: String;
  name: String;
  password: String;
  contactNumber: String;
  address: String;

  constructor(
    username: String,
    name: String,
    password: String,
    contactNumber: String,
    address: String
  ) {
    this.username = username;
    this.name = name;
    this.password = password;
    this.contactNumber = contactNumber;
    this.address = address;
  }
}

export class Credentials {
  username: String;
  password: String;

  constructor(username: String, password: String) {
    this.username = username;
    this.password = password;
  }
}

export class Account {
  id: Number;
  custID: Number;
  accountName: String;
  accType: Number;
  balance: Number;
  transactions: Array<String>;

  constructor(
    id: Number,
    custID: Number,
    acctName: String,
    accType: Number,
    bal: Number,
    trans: Array<String>
  ) {
    this.id = id;
    this.custID = custID;
    this.accountName = acctName;
    this.accType = accType;
    this.balance = bal;
    this.transactions = trans;
  }
}

export async function register(user: Customer) {
  const res = await axios.post(API + "/signup", user);
  // If the user could not be created, return false.
  if (res.data.id === 0) return false;
  return res.data;
}

/**
 * 
 * @param user An object containing username & password.
 */
export async function login(user: Credentials) {
  // TODO logic for updating the global application state upon successful login.
  const res = await axios.post(API + "/login", user);
  return res.data;
}

export function logout() {
  // TODO logout logic.
  return null;
}

/**
 * POSTs an Account object to the server.
 * @param {Account} account The account to be sent.
 * @returns The created account. If already exists, returns with null values.
 */
export async function createAccount(account: Account) {
  const res = await axios.post(API + "/addacct", account);
  // TODO verification logic.
  return res.data;
}

export async function getAccounts() {
  // TODO when endpoint exists...
}
