const notFound = document.createElement('div');
notFound.setAttribute("id", "p-not-found");

const SECONDS_TO_REDIRECT = 5;
let secondsToRedirect = SECONDS_TO_REDIRECT;
let interval = null;

const clear = () => {
    secondsToRedirect = SECONDS_TO_REDIRECT;
    clearInterval(interval);
}

const contador = () => {
    const em = notFound.querySelector('em');

    clearInterval(interval);

    interval = setInterval(() => {
        em.innerHTML = --secondsToRedirect;

        if(secondsToRedirect === 0) {
            clear();
            window.location.href = "/#login";
        }
    }, 1000);
}

const ancora = () => {
    const anchor = notFound.querySelector('a')
    anchor.addEventListener('click', clear)
}

const events = () => {
    contador();
    ancora();
}

export const NotFound = () => {
    notFound.innerHTML = `
    <header>
        <div class="not-found">
            <h1>Página não encontrada</h1>
        </div>
    </header>
        <p>Você será redirecionado <em>${secondsToRedirect}</em></p>
        <a href="/#login">Voltar ao início</a>
    `;

    events();
    return notFound;
}