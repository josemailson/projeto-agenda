const login = document.createElement('form');
login.setAttribute('id', 'p-login');

const events = () => {
    login.addEventListener('submit', (e) => {
        e.preventDefault();

        const fd = new FormData(login);
        const dados = Object.fromEntries(fd);

        console.log(dados);
    })
}

export const Login = () => {
    login.innerHTML = `
    
    <section id="login">
    <header>
        <div class="title">
            <h1>Login</h1>
        </div>
    </header>
    <div class="auth-container">
    <section class="forms">
        <p>Email</p>
        <input type="email" name="Email" id="email">
        <p>Senha</p>
        <input type="password" name="Senha" id="password">
    </section>
    <section class="buttons">
        <input type="submit" id="login-button" value="Login"/>
        <div>
            <p>Não possui conta?</p><span><input type="button" id="show-register-button"
                    value="Cadastre-se!" /></span>
        </div>
    </section>                
    </div>
    </section>
    `;

    events();

    return login;
}