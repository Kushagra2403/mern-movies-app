import http from "../http-common";

class MovieDataService {
  get() {
    return http.get("/");
  }

  postFavourites(mid) {
    return http.post("/", mid);
  }
}

export default new MovieDataService();
