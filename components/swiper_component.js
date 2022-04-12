Vue.component('swiper-component',{
    template : 
    `
    <div class="section06">
        <h1 data-aos="fade-up" data-aos-duration="1000">주력 모델</h1>
        <div class="swiper" data-aos="fade-up" data-aos-duration="3000">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div>
                        <img src="./img/sf90-logo.png">
                    </div>
                    <img src="./img/sf90.png" alt="ferrari_sf90">
                </div>
                <div class="swiper-slide">
                    <div>
                        <img src="./img/f8-logo.png">
                    </div>
                    <img src="./img/f8.png" alt="ferrari_f8">
                </div>
                <div class="swiper-slide">
                    <div>
                        <img src="./img/296gtb-logo.png">
                    </div>
                    <img src="./img/296gtb.png" alt="ferrari_296gtb">
                </div>
                <div class="swiper-slide">
                    <div>
                        <img src="./img/roma-logo.png">
                    </div>
                    <img src="./img/roma.png" alt="ferrari_roma">
                </div>
            </div>
            
            <div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </div>
    `
})