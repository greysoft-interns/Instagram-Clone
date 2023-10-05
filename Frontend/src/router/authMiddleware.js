export default async function authMiddleware(to, from, next) {
    const fetchStorage = await localStorage.getItem("userTokens");
    const fetchToken = JSON.parse(fetchStorage);
    const { value, expiry } = fetchToken;
    if (expiry > new Date().getTime()) {
        next();
    } else {
        next('/login');
    }
  }
  