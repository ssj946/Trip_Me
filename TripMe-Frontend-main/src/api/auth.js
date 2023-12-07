import http from "./http";

async function login(user, success, fail) {
  await http
    .post("/login", {
      email: user.email,
      password: user.password,
    })
    .then(success)
    .catch(fail);
}
 function logout(success) {//success, fail
  // http.defaults.headers["Authorization"] = sessionStorage.getItem("accessToken"); //axios header에 refresh-token 셋팅
  // await http.get("/logout").then(success).catch(fail);
  success();
  console.log("LOGOUT IN AUHT>JS");
}
async function findById(userId, success, fail) {
  http.defaults.headers["Authorization"] = sessionStorage.getItem("accessToken");
  await http.get(`/users/${userId}`).then(success).catch(fail);
}

async function tokenRegeneration(success, fail) {
  http.defaults.headers["Authorization"] = sessionStorage.getItem("refreshToken"); //axios header에 refresh-token 셋팅
  await http.post(`/refresh-token`).then(success).catch(fail);
}
export { login, logout, findById, tokenRegeneration };
