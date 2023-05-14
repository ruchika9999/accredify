import axios, { Axios } from "axios";

export class API {
  protected _url: string;
  protected _network: Axios;

  constructor(endpoint: string) {
    this._url = `http://localhost:5002/api/${endpoint}`;
    this._network = axios;
  }

  protected getData() {
    return this._network.get(this._url);
  }
}
