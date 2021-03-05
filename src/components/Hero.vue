<template>
    <div class="hero">
        <div class="wrapper">
            <b-navbar class="container" toggleable="lg">
                <b-navbar-brand href="#"><img src="../../assets/images/logo_header.svg" width="50" alt=""></b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto justify-content-between Navbar-collapse">
                        <b-nav-item href="#">Home</b-nav-item>
                        <b-nav-item href="#">About us</b-nav-item>
                        <b-nav-item href="#">Benefit</b-nav-item>
                        <b-nav-item href="#">Services</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown text="Lang" right>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">ES</b-dropdown-item>
                            <b-dropdown-item href="#">RU</b-dropdown-item>
                            <b-dropdown-item href="#">FA</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
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
    height: 70vh;
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
    font-family: roboto, sans-serif;
    .navbar-nav .nav-link {
        color: snow !important;
        font-size: 18px;
        margin: 0px 20px;
    }
    .navbar-nav .b-nav-dropdown{
        color: snow !important;
        font-size: 18px;
    }
}
</style>