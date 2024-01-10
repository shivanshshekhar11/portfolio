import { Account, Client as Appwrite, Databases } from 'appwrite';
import { Env } from './config';

export class Api {
  private static sdk: { account: Account; database: Databases } | null;

  static appwrite() {
    if (this.sdk) return this.sdk;
    let client = new Appwrite();
    client
      .setEndpoint(Env.endpoint)
      .setProject(Env.projectID)
      .setLocale('en-US');

    const database = new Databases(client);
    const account = new Account(client);
    this.sdk = { account, database };
    return this.sdk;
  }
}
