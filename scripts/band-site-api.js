export class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }

  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseUrl}/comments?api_key=${this.apiKey}`);
      const comments = response.data;
      return comments
    } catch (error) {
      console.log(error);
    }
  }

  async postComments(formValues) {
    try {
      await axios.post(
        `${this.baseUrl}/comments?api_key=${this.apiKey}`, formValues);
    } catch (error) {
      console.log("We are sorry! Your review failed to post.", error);
    }
  }

  async getShows() {
    try {
      const response = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
      const shows = response.data;
      return shows
    } catch (error) {
      console.log(error);
    }
  }
}
