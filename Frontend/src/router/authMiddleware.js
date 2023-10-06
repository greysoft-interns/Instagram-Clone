export default async function authMiddleware(to, from, next) {
    const fetchStorage = await localStorage.getItem("userTokens");
    if(!fetchStorage){
        next('/login')
    }
    const fetchToken = JSON.parse(fetchStorage);
    const { value, expiry } = fetchToken;
    if(!value || !expiry){
        next('/login')
    } else if (expiry > new Date().getTime()) {
        next();
    } else {
        next('/login');
    }
  }
  