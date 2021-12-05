export default class API {
  constructor(options) {
    this.baseUrl = options.baseUrl;
  }

  postOAuth(endpoint, params) {
    return this.httpRequestOAuth(this.baseUrl + endpoint, params);
  }

  get(endpoint, params, header) {
    return this.httpRequest("GET", this.baseUrl + endpoint, params, header);
  }

  post(endpoint, params, header) {
    return this.httpRequest("POST", this.baseUrl + endpoint, params, header);
  }

  update(endpoint, params, header) {
    return this.httpRequest("PATCH", this.baseUrl + endpoint, params, header);
  }

  postForm(endpoint, params, header) {
    return this.httpRequestForFormData(
      "POST",
      this.baseUrl + endpoint,
      params,
      header
    );
  }

  upload(endpoint, params) {
    return this.httpRequestForFormData(
      "PATCH",
      this.baseUrl + endpoint,
      params
    );
  }

  async httpRequestOAuth(url, params) {
    return new Promise((resolve, reject) => {
      const options = {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
      };

      console.log("api -> " + url);
      console.log("params -> ", options);

      fetch(url, options)
        .then((response) => {
          // console.log("____response____ ", response);
          response.json().then((responseJson) => {
            console.log("_response__", responseJson);
            resolve(responseJson);
          });
        })
        .catch((error) => {
          console.log("error: ", error);
          reject(error);
        }); //to catch the errors if any
    });
  }

  async httpRequest(method, url, params, header = null) {
    // let token = JSON.parse(await AsyncStorage.getItem("userToken"));

    return new Promise((resolve, reject) => {
      let options;
      if (method === "GET") {
        const urlParams = new URLSearchParams(params);
        url = `${url}?${urlParams.toString()}`;
        options = {
          headers: header
            ? header
            : {
                // Authorization:
                //   token !== null && `${token.token_type} ${token.access_token}`,
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
              },
          method: method,
        };
      } else {
        options = {
          headers: header
            ? header
            : {
                Authorization: "Bearer " + localStorage.getItem("token"),

                // Authorization: `${token.token_type} ${token.access_token}`,
                "Content-Type": "application/json",
              },
          method: method,
          body: JSON.stringify(params),
        };
      }

      console.log("api -> " + url);
      console.log("params -> ", options);
      fetch(url, options)
        .then((response) => {
          response.json().then((responseJson) => {
            resolve(responseJson);
          });
        })
        .catch((error) => {
          // console.log("error: ", error);
          reject(error);
        }); //to catch the errors if any
    });
  }

  async httpRequestForFormData(method, url, params) {
    // let token = JSON.parse(await AsyncStorage.getItem("userToken"));

    return new Promise((resolve, reject) => {
      let options = {
        headers: {
          // "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
          //   Authorization: `${token.token_type} ${token.access_token}`,
        },
        method: method,
        body: params,
      };

      console.log("api -> " + url);
      console.log("params -> ", options);
      fetch(url, options)
        .then((response) => {
          console.log("_response_ ", response);

          response.json().then((responseJson) => {
            resolve(responseJson);
          });
        })
        .catch((error) => {
          console.log("error: ", error);
          reject(error);
        }); //to catch the errors if any
    });
  }
}
