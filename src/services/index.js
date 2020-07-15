import api from "../utils/request";

export async function getRecommendList() {
  return await api.get({
    url: "/personalized",
  });
}
