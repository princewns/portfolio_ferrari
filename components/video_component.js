Vue.component('video-component',{
    template : 
    `
      <div class="section01" data-aos="fade-up" data-aos-duration="3000">
          <video muted autoplay loop>
            <source src="./video/ferrari.mp4" type="video/mp4">
            <strong>Your browser does not support the video tag.</strong>
          </video>
        <div class="title-text">
          <h1>FERRARI : Spirit of Italian</h1>
        </div>
        <div class="title-arrow" transition="scroll-y-transition">
          <v-icon class="white--text" x-large="true">
          mdi-chevron-down</v-icon>
        </div>
      </div>
    `,
})