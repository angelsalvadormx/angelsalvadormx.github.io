<!DOCTYPE html>
<html>
    <head>
        <title>PLASTICSEEN</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="https://coddy.com.mx/favicon.ico"/>
        <link rel="stylesheet" href="assets/css/animation.css"/>
        <link rel="stylesheet" href="assets/css/main.css" />
        <link rel="stylesheet" href="assets/css/responsive.css"/>

        <!-- Icons -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        
    </head>
    <body>
        <article id="loader" class='animated'>
            <?php
                include_once 'logo.php';
            ?>
        </article>

        <script src="assets/js/loader.js"></script>
        
        <!-- BEGIN Header -->
        <header id="header" class="menu container">
            <picture>
                <img src="assets/image/logos/logo1_white.svg" alt="">
            </picture>
            <section id="btnMenu">
                <span></span>
                <span></span>
                <span></span>
            </section>
            
            <nav class="">
                <picture>
                    <img src="assets/image/logos/logo1_green.svg" alt="">
                </picture>
                <ul>
                    <li><a href="#home" class="c-fff">Inicio</a></li>
                    <li><a href="#aboutUs" class="c-fff">Nosotros</a></li>
                    <li><a href="#secImpact" class="c-fff">Impacto ambiental</a></li>
                    <li><a href="#products" class="c-fff">Productos</a></li>
                    <li><a href="#footer" class="c-fff">Contacto</a></li>
                </ul>
                <section id="blackSpace"></section>
            </nav>
            <div class="ui-mask"></div>
        </header>
        

        <!-- END Header -->
        
        <!-- BEGIN HOME -->
        <article id="home">
            <div class='layer bg-black'></div>
			<!--img id="img_logo" src="assets/image/logos/logo1_white.svg" alt="Plasticseen"-->
			<video autoplay loop id="video-background" muted plays-inline>
				<source src="assets/video/nature.mp4" type="video/mp4">
			</video>

            <section class="eslogan center-y">
                <article class="container_eslogan c-fff animated fade" id="nameAnimation">
                    <p style="z-index:6">Procesadora</p>
                    <p style="z-index:5">Plasticseen</p>
                </article>
            </section>
 
		</article>
        <!-- END HOME -->

        <!-- BEGIN process-->
        <article id="aboutUs" class="container flex hgt-90">
            <section class="content_left centerFlex">
                <div class="content_us wh-60">
                    <h2>Nosotros</h2>
                    <p>Somos el fabricante líder en Plástico, xxxxxx, Llantas, xxxxxxx, xxxxx y Residuos. 
                    Tenemos más de x años de experiencia, brindando productos de alta calidad que facilita el proceso de reciclaje y cubre todo el espectro de aplicaciones de reducción de tamaño de materiales.
                    </p>
                </div> 
            </section>
            <section class="content_right centerFlex">
                <picture class="wh-100 hgt-70 shadow radius animated fade" data-animation="fadeInRight">
                    <div class="bg-img radius" style=" background-image:url(./assets/image/nosotros.jpg)"> </div>
                </picture>
            </section>
        </article>    
        <!-- END proces-->
        


        <!-- BEGIN secction Impact-->
        
        <article id="secImpact" class="">
            <h2 class="text-center">IMPACTO AMBIENTAL</h2>
            <section class="content_impact">
                <section class="bg-img animated fade" data-animation="fadeInUp"  style="background-image:url('assets/image/impacto.jpg')"></section>
                <section class="flex p-40">
                    <header class="wh-100 hgt-30">
                        <i class="material-icons">delete</i>
                    </header> 
                    <main class="wh-100">
                        <p class="c-fff">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloribus quibusdam. Velit fuga, consequuntur cupiditate eos molestiae laborum.</p>
                    </main>
                </section>
                <section class="bg-img animated fade" data-animation="fadeInUp"  style="background-image:url('assets/image/impacto2.jpg')"></section>
                <section class="flex p-40">
                    <header class="wh-100 hgt-30">
                        <i class="material-icons">monetization_on</i>
                    </header> 
                    <main class="wh-100">
                        <p class="c-fff">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloribus quibusdam. Velit fuga, consequuntur cupiditate eos molestiae laborum.</p>
                    </main>
                </section>
                <section class=" flex p-40">
                    <header class="wh-100 hgt-30">
                        <i class="material-icons">public</i>
                    </header> 
                    <main class="wh-100">
                        <p class="c-fff">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloribus quibusdam. Velit fuga, consequuntur cupiditate eos molestiae laborum.</p>
                    </main>
                </section> 
                <section class="bg-img animated fade" data-animation="fadeInUp"  style="background-image:url('assets/image/impacto3.jpg')"></section>
                <section class=" flex p-40">
                    <header class="wh-100 hgt-30">
                        <i class="material-icons">airport_shuttle</i>
                    </header> 
                    <main class="wh-100">
                        <p class="c-fff">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloribus quibusdam. Velit fuga, consequuntur cupiditate eos molestiae laborum.</p>
                    </main>
                </section>
                <section class="bg-img animated fade" data-animation="fadeInUp"  style="background-image:url('assets/image/impacto.jpg')"></section>
            </section>
        </article>
        <!-- END secction Impact-->
        

        <!-- BEGIN background-image -->
        <article id="section-img" class="hgt-70 wh-100 bg-img fixed" style="background-image:url(./assets/image/plastic-bottles.jpg)">
            <section class="container">
                <h2 class="animated fade" data-animation="fadeInUp"> Nosotros somos Plasticseen</h2>
            </section>  
        </article>


        <!-- BEGIN Products -->
        <article id="products" class="wh-100">
            <div class="container">
                <h2>Productos</h2>
                <section id="content_products" class="">
                    <div class="itemProduct">
                        <picture class="animated fade" data-animation="fadeIn">
                            <img src="assets/image/bottleIcon.png" alt="Bottle">
                        </picture>
                    </div>
                    <div class="itemProduct">
                        <picture class="animated fade" data-animation="fadeIn">
                            <img src="assets/image/productos/juice.svg" alt="Bottle">
                        </picture>
                    </div>
                    <div class="itemProduct">
                        <picture class="animated fade" data-animation="fadeIn">
                            <img src="assets/image/productos/plastic.svg" alt="Bottle">
                        </picture>
                    </div>
                    <div class="itemProduct">
                        <picture class="animated fade" data-animation="fadeIn">
                            <img src="assets/image/productos/detergent.svg" alt="Bottle">
                        </picture>
                    </div>
                    <div class="itemProduct">
                        <picture class="animated fade" data-animation="fadeIn">
                            <img src="assets/image/productos/water-bottle.svg" alt="Bottle">
                        </picture>
                    </div>
                    <div class="itemProduct">
                        <picture class="animated fade" data-animation="fadeIn">
                            <img src="assets/image/productos/recycle-bag.svg" alt="Bottle">
                        </picture>
                    </div>
                    <div class="itemProduct">
                        <picture class="animated fade" data-animation="fadeIn">
                            <img src="assets/image/productos/cup.svg" alt="Bottle">
                        </picture>
                    </div>
                    <div class="itemProduct">
                        <picture class="animated fade" data-animation="fadeIn">
                            <img src="assets/image/productos/cutlery.svg" alt="Bottle">
                        </picture>
                    </div>
                    <div class="itemProduct">
                        <picture class="animated fade" data-animation="fadeIn">
                            <img src="assets/image/productos/plastic-cup.svg" alt="Bottle">
                        </picture>
                    </div> 
                </section>
            </div>
        </article>
        <!-- END Products --> 
        

        <!-- BEGIN Maps -->
        <!--article id="maps">
            <iframe class="wh-100 hgt-100"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59729.69818431617!2d-103.37593010071356!3d20.665260528725483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b18cb52fd39b%3A0xd63d9302bf865750!2sGuadalajara%2C+Jal.!5e0!3m2!1ses-419!2smx!4v1548804365903" frameborder="0" style="border:0" allowfullscreen></iframe>
        </article -->
        <!-- END Maps -->

        <!-- BEGIN Footer -->
        <article id="footer" class="container">
            <section id="content_footer">
                <div id="section_logo">
                    <picture>
                        <img src="assets/image/logos/logo1_white.svg" alt="">
                    </picture>
                </div>
                <div id="contacto">
                    <h3>Contacto</h3>
                    <ul>
                        <li><a href="tel:+523312059482"> +52 (33) 1205-94-82 </a></li>
                        <li><a href="tel:+523334642517"> +52 (33) 3464-25-17 </a></li>
                        <li><a href="mailto:licsergio_10@hotmail.com"> licsergio_10@hotmail.com</a></li>
                    </ul>
                </div>
                <div class="divider"></div>
                <div id="duenos">
                    <h3>Colaboradores</h3>  
                    <p> Lic.Sergio Ulices Muños G. <br> Rogelio Arámbula Rodríguez</p>
                </div>
                <div class="divider"></div>
                <div id="ubicacion">
                    <h3>Ubicación</h3>
                    <p>Guadalajara, Jal, México; C.P. 44960 </p>
                </div>
                
                
                
                
            </section>
            <footer>&copy; Procesadora Plasticseen</footer>
        </article>
        <!-- END Footer -->

        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/main.js"></script>
        <script src="assets/js/website.js"></script>
        <script src="assets/js/animation.js"></script>
    </body>
</html>
