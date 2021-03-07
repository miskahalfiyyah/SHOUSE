<template>
    <div class="hero" id="hero">
        <div class="wrapper">
            <b-navbar class="container" toggleable="lg">
                <b-navbar-brand href="#"><img src="../../assets/images/logo-header.png" width="150" alt=""></b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto justify-content-between Navbar-collapse">
                        <b-nav-item href="#">Home</b-nav-item>
                        <b-nav-item href="#">About us</b-nav-item>
                        <b-nav-item href="#">Benefit</b-nav-item>
                        <b-nav-item href="#">Services</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto button-lang">
                        <b-button pill variant="light">
                            <b-nav-dropdown class="lang" text="Language" right>
                                <b-dropdown-item href="#"><country-flag country='id' rounded=true size='small'/>  Indonesia</b-dropdown-item>
                                <b-dropdown-item href="#"><country-flag country='us' rounded=true size='small'/>  English</b-dropdown-item>
                            </b-nav-dropdown>
                        </b-button>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
            
            <!-- Heading Hero -->
            <div class="heading text-center text-white">
                <h1>We Are The best Consulting IT</h1>
                <p>We will provide the best solutiion for your company</p>
                <b-button pill variant="light">Contact us</b-button>
            </div>
            <!-- End Heading Hero -->

            <!-- Content Clients -->
            <!-- End Content Clients -->

            <!-- About us -->
            <div class="about">
                <div class="container">
                    <b-row>
                        <b-col lg="6">
                            <img class="float-left" src="../../assets/images/line.svg" alt="">
                            <p class="ml-3">ABOUT US</p>
                            <h1 class="heading-about">Get Right Solution<br>For Your Company</h1>
                            <p class="text-body"><span style="font-weight:500;">SHOUSE</span> adalah Perusahaan Solusi Komunikasi TI, Manajemen Sumber Daya Perusahaan, dan Platform Multimedia untuk pengembangan aplikasi digital. Fokus kami adalah pada aplikasi bisnis dan multimedia yang terintegrasi dengan beberapa sistem teknologi. Kami juga memiliki keahlian profesional untuk mengubah metode bisnis dan juga untuk mengembangkan bisnis Anda.</p>
                            <b-button pill>Learn More</b-button>
                        </b-col>
                        <b-col lg="6">
                            <img class="img-fluid" width="80%" src="../../assets/images/img-about.png" alt="gambar about">
                        </b-col>
                    </b-row>
                </div>
            </div>
            <!-- End About us -->






        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero'
}

</script>
<style lang="scss" scoped>

    .hero {
        background: url('../../assets/images/hero.svg');
        width: 100%;
        height: 80vh;
        background-size: cover;
        position: relative;
        z-index: 0;
    }
    .wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #0D1556;
        opacity: 0.8;
        z-index: 1;
    }
    .navbar {
        z-index: 2;
        font-family: 'Roboto', sans-serif;
        .navbar-nav .nav-link {
            color: snow !important;
            font-size: 14px;
            margin: 0px 20px;
            text-shadow: 1px 1px 1px rgb(0, 0, 0, 0.7) !important;
            text-transform: uppercase;
        }
        .navbar-nav .nav-link:hover {
            color: snow !important;
            font-weight: 100;
            text-shadow: 1px 1px 1px rgb(0, 0, 0, 0.7) !important;
            text-transform: uppercase;
        }
        .nav-link:hover::after {
            content: '';
            display: block;
            border-bottom: 2px solid white;
            width: 50%;
            margin: auto;
            padding-bottom: 5px;
            margin-bottom: -8px;
        }
        .navbar-nav .b-nav-dropdown{
            color: snow !important;
            font-size: 14px;
        }
        .b-navbar-nav .b-button {
            background: linear-gradient(rgba(102, 166, 255, 0.53) 0.02%, #66A6FF 100%);
            color: white;
            font-size: 14px;
            font-weight: 700;
            font-family: 'Roboto';
        }

        // .lang {
        //     color: white i !important;
        // }
    }

    .about {
            position: relative;
            margin-top: 200px;
            z-index: 0;
        }
    .heading {
        font-family: 'Montserrat', sans-serif;
        margin-top: 10rem;
    }
    .heading-about {
        color: #0D1556;
    }
    .text-body {
        color: #acacac;
    }

.hamburger div {
    width: 30px;
    height: 30px;
    background-color: white;
    margin: 5px;
    transition: all 0.3s ease;
    .hamburger {
        display: none;
    }
}

@media  screen and (max-width: 800px) {
    .hamburger {
        display: block;
        position: absolute;
        cursor: pointer;
        right: 5%;
        top: 50%;
        transform: translate(-5%, -50%);
        z-index: 2;
        transition: all 0.7s ease;
    }
    
}


</style>