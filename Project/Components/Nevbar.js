const Navbar = () => {
    let isLogin = localStorage.getItem('isLogin') || false
    let username = localStorage.getItem('username')
    return `
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/Project/Home.html">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/Project/Home.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page"" href="/Project/Pages/Product.html">product</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page"" href="/Project/Pages/addProduct.html">addProduct</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page"" href="/Project/Pages/Cart.html">cart</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page"" href="/Project/Pages/Login.html">${isLogin ? "Logout" : "Login"}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page"" href="/Project/Pages/SignUp.html">${isLogin ? username : "signup"}</a>
                    </li>
                </ul>
                <form class="d-flex" role="search" id="searching">
              <input class="form-control me-2"  type="search" placeholder="Search" aria-label="Search" id="search"/>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            </div>
        </div>
    </nav>
    `
}

export default Navbar