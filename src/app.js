import { Login } from './scripts/pages/login.page.js'
import { NotFound } from './scripts/pages/not-found.page.js'

function redirectPage(){
    const root = document.querySelector('#root');

    const Router = {
        "#login": {component: Login, path: "#login"},
        "#404": {component: NotFound, path: "#404"},
    }

    let route = Router[window.location.hash];

    if (!route) {
        route = Router['#404'];
    }

    root.innerHTML = null;
    root.append(route.component());
}

window.addEventListener('load', () => {
    window.addEventListener('hashchange', redirectPage);
    window.location.href = '/#login';
});