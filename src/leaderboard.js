export default class LeaderBoard {
  constructor() {
    this.id = null;
    this.flag = true;
  }

  async setId(id) {
    let tokenId = id.result.substring(id.result.indexOf(":"));
    tokenId = tokenId.substring(
      tokenId.lastIndexof(":") + 1,
      tokenId.lastIndexof(" ")
    );
    this.id = tokenId;
  }

  getId() {
    return this.id;
  }

  createGame = async (name) => {
    const gameName = { name };
    const url =
      "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";
    const response = await this.fetchApi(url, "POST", gameName);
    if (this.flag === false) {
      document.getElementById("errorMessage").textContent =
        "Bad Request, Try again!!!";
      setTimeout(() => {
        document.getElementById("errorMessage").innerHTML = "";
      }, 4000);
    } else {
      this.setId(response);
    }
  };
}
