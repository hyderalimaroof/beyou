<template>
    <footer class="footer-area bg-gray">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-sm-12 text-center text-sm-left mb-4 mb-lg-0">
                    <div class="footer-logo mb-3">
                        <n-link to="/">
                            <img src="/img/logo/final-03.png" alt="logo">
                        </n-link>
                    </div>
                    <p class="footer-description">BeYou is committed to providing the best self-care products tailored to your unique beauty and wellness needs.</p>
                    <p>© 2024 <a href="#" target="_blank">BeYou</a>.<br> All Rights Reserved</p>
                </div>
                <div class="col-lg-3 col-sm-6 text-center text-sm-left mb-4 mb-lg-0">
                    <h5 class="footer-heading">Quick Links</h5>
                    <ul class="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <!-- <li><a href="#">Blog</a></li> -->
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-sm-6 text-center text-sm-left">
                    <h5 class="footer-heading">Follow Us</h5>
                    <div class="icons d-flex justify-content-center justify-content-sm-start mb-3">
                        <a href="https://www.facebook.com/profile.php?id=61565176766530&mibextid=LQQJ4d" target="_blank" class="icon">
                            <i class="fa fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/beyou.com.pk?igsh=MXh0OHNxd2h3aXQ3Yw==" target="_blank" class="icon">
                            <i class="fa fa-instagram"></i>
                        </a>
                    </div>
                    <h5 class="footer-heading">Contact</h5>
                    <p>Email: beeyouu1985@gmail.com</p>
                    <p>Phone: +92 330 2190039</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
.footer-area {
    padding: 0 0;
    background-color: #f7f7f7;
}

.footer-logo img {
    max-width: 150px;
    margin-bottom: 10px;
}

.footer-description {
    margin-bottom: 10px;
    font-size: 14px;
    color: #777;
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 8px;
}

.footer-links a {
    text-decoration: none;
    color: #1976d3;
}

.icons {
    gap: 15px;
    justify-content: center; /* Center the icons */
}

.icons a {
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 20px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    transition: transform 0.3s ease, background-position 0.5s ease, color 0.5s ease;
    background-size: 100% 200%;
    background-position: 0% 5%;
    color: #fff;
}

.icons a:nth-child(1) {
    color: #7db15c;
    background-image: linear-gradient(#fff 50%, #7db15c 50%);
}

.icons a:nth-child(2) {
    color: #7db15c;
    background-image: linear-gradient(#fff 50%, #7db15c 50%);
}

.icons a:hover {
    background-position: 0% 100%; /* Shifts the background gradient */
    color: #fff; /* Keeps text color white on hover */
    transform: scale(1.1); /* Adds the scaling effect */
}

.footer-area h5 {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: bold;
    text-align: center; /* Center the heading */
}

.footer-heading {
    margin-bottom: 15px; /* Space between heading and content */
    font-weight: bold;
    text-align: center; /* Center the heading */
}

.footer-area p, .footer-area a {
    font-size: 14px;
    color: #555;
}

.footer-area a:hover {
    color: #fff;
}

.footer-links a:hover {
    text-decoration: underline;
    color: #7db15c
}

@media (min-width: 992px) { /* For large screens like laptops */
    .footer-area .col-lg-4 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}


</style>

<script>
export default {

};
</script>
