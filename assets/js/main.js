/*==================================================
    DREAMS AQUATIC
    Main JavaScript
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initSmoothScroll();

    initNavbar();

    initScrollProgress();

    initRevealAnimation();

    initParallax();

    initRippleEffect();

    initMobileMenu();

    initProductRedirect();

    initBackToTop();

    initWhatsappMessage();
    
});


/*==========================================
    SMOOTH SCROLL
==========================================*/

function initSmoothScroll() {

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function (e) {

                const target = document.querySelector(
                    this.getAttribute("href")
                );

                if (!target) return;

                e.preventDefault();

                window.scrollTo({

                    top: target.offsetTop - 80,

                    behavior: "smooth"

                });

            });

        });

}


/*==========================================
    NAVBAR
==========================================*/

function initNavbar() {

    const header = document.getElementById("header");

    const links = document.querySelectorAll(".nav-menu a");

    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 150;

            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.getAttribute("id");

            }

        });

        links.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}


/*==========================================
    SCROLL PROGRESS BAR
==========================================*/

function initScrollProgress() {

    const progress = document.querySelector(".progress-bar");

    if (!progress) return;

    window.addEventListener("scroll", () => {

        const total =

            document.documentElement.scrollHeight -

            window.innerHeight;

        const percent =

            (window.scrollY / total) * 100;

        progress.style.width = percent + "%";

    });

}


/*==========================================
    REVEAL ANIMATION
==========================================*/

function initRevealAnimation() {

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    document.querySelectorAll(

        ".section-title," +
        ".about-wrapper," +
        ".product-card," +
        ".feature-box," +
        ".contact-card," +
        ".dimension-item"

    ).forEach(item => {

        item.classList.add("hidden");

        observer.observe(item);

    });

}


/*==========================================
    HERO PARALLAX
==========================================*/

function initParallax() {

    const heroImage =

        document.querySelector(".hero-visual");

    if (!heroImage) return;

    window.addEventListener("mousemove", e => {

        const x =

            (window.innerWidth / 2 - e.clientX) / 45;

        const y =

            (window.innerHeight / 2 - e.clientY) / 45;

        heroImage.style.transform =

            `translate(${x}px,${y}px)`;

    });

}


/*==========================================
    RIPPLE BUTTON
==========================================*/

function initRippleEffect() {

    document.querySelectorAll(

        ".btn"

    ).forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple =

                document.createElement("span");

            ripple.className = "ripple";

            const rect =

                this.getBoundingClientRect();

            ripple.style.left =

                e.clientX - rect.left + "px";

            ripple.style.top =

                e.clientY - rect.top + "px";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

}

/*==========================================
    MOBILE MENU
==========================================*/

function initMobileMenu(){

    const toggle=document.querySelector(".menu-toggle");

    const menu=document.querySelector(".nav-menu");

    if(!toggle || !menu) return;

    toggle.addEventListener("click",()=>{

        menu.classList.toggle("active");

    });

    document.querySelectorAll(".nav-menu a").forEach(link=>{

        link.addEventListener("click",()=>{

            menu.classList.remove("active");

        });

    });

}

/*==========================================
    PRODUCT → CONTACT
==========================================*/

function initProductRedirect(){

    const products=document.querySelectorAll(".product-card");

    const contact=document.getElementById("contact");

    if(!products.length || !contact) return;

    products.forEach(product=>{

        product.style.cursor="pointer";

        product.addEventListener("click",()=>{

            contact.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

            highlightWhatsapp();

        });

    });

}

function highlightWhatsapp(){

    const wa=document.querySelector(

        '.contact-card a[href*="wa.me"]'

    );

    if(!wa) return;

    wa.classList.add("highlight-contact");

    setTimeout(()=>{

        wa.classList.remove("highlight-contact");

    },1800);

}

/*==========================================
    BACK TO TOP
==========================================*/

function initBackToTop(){

    const button = document.getElementById("backToTop");

    const hero = document.getElementById("hero");

    if(!button || !hero) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY > hero.offsetHeight * 0.6){

            button.classList.add("show");

        }else{

            button.classList.remove("show");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*==========================================
    WHATSAPP TEMPLATE MESSAGE
==========================================*/

function initWhatsappMessage(){

    const waLinks = document.querySelectorAll('a[href*="wa.me"]');

    const message =
`Halo Admin, saya menemukan produk Anda dari website Dreams Aquatic.

Mohon informasi harga, spesifikasi, dan cara pemesanannya.

Terima kasih.`;

    waLinks.forEach(link=>{

        link.addEventListener("click",function(e){

            e.preventDefault();

            const phone = "6282240290583";

            const url =
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

            window.open(url,"_blank");

        });

    });

}

/*==========================================
    PRELOADER
==========================================*/

window.addEventListener("load",()=>{

    const preloader=document.getElementById("preloader");

    setTimeout(()=>{

        preloader.classList.add("hide");

        setTimeout(()=>{

            preloader.remove();

        },450);

    },500);

});