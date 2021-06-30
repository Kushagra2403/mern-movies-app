import http from "../http-common";

class MovieDataService {
  get() {
    return http.get("/");
  }
}

export default new MovieDataService();
