<template>
    <div class="container-page">
        <header class="header">
            <div class="logo-container">
                <nuxt-link to="/" >
                    <img src="/images/logo-header.png" alt="Logo Picnic">
                </nuxt-link>
            </div>
            <div class="links-container">
                <nuxt-link to="/" class="link">
                    Home
                </nuxt-link>
                <nuxt-link to="/registro" class="link">
                    Registrarme
                </nuxt-link>
            </div>
        </header>

        <main>
            <nuxt/>
        </main>
        
        <footer>
            <div class="logo-container">
                <img src="/images/logo-footer.png" alt="Logo Picnic">
            </div>
        </footer>
    </div>
</template>
<style>
    .container-page {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .header {
        background-color: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 250px;     
        padding-right: 250px;  
        padding-top: 25px;
    }
    .logo-container {
        align-items: center;
        justify-items: center;

    }
    .links-container {
        display: flex;
        gap: 20px;
    }
    .link {
        text-decoration: none;    
        color: white;   
        
    }
    main {
        flex: 1;
    }
    footer {
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    
    @media (max-width: 500px) {
        .header {
            padding-left: 50px;     
            padding-right: 50px;  
        }
    }

</style>