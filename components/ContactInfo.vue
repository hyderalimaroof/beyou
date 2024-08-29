<template>
    <div>
      <div class="contact-area pt-100 pb-100">
        <div class="container">
          <div class="contact-map mb-10">
            <iframe class="map-size"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1134.5857463920925!2d67.03253409824914!3d24.91537340504461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ffb5e97dd7f%3A0x80113960a649ff35!2sABC%20Apartment!5e0!3m2!1sen!2s!4v1724862231665!5m2!1sen!2s"></iframe>
          </div>
          <div class="custom-row-2">
            <div class="col-lg-4 col-md-5 col-12">
              <div class="contact-info-wrap">
                <div class="single-contact-info">
                  <div class="contact-icon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <div class="contact-info-dec">
                    <p>+923302190039</p>
                  </div>
                </div>
                <div class="single-contact-info">
                  <div class="contact-icon">
                    <i class="fa fa-globe"></i>
                  </div>
                  <div class="contact-info-dec">
                    <p><a href="#">beeyouu1985@gmail.com</a></p>
                    <p><a href="#">beyou.com.pk</a></p>
                  </div>
                </div>
                <div class="single-contact-info">
                  <div class="contact-icon">
                    <i class="fa fa-map-marker"></i>
                  </div>
                  <div class="contact-info-dec">
                    <p>ABC Apartment,</p>
                    <p>Nazimabad No. 4 Block 4 Nazimabad, Karachi</p>
                  </div>
                </div>
                <div class="contact-social text-center">
                  <h3>Follow Us</h3>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61565176766530&mibextid=LQQJ4d"
                        target="_blank" class="icon">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/beyou.com.pk?igsh=MXh0OHNxd2h3aXQ3Yw=="
                        target="_blank" class="icon">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-7 col-12">
            <div class="contact-form">
              <div class="contact-title mb-30">
                <h2>Get In Touch</h2>
              </div>
              <form class="contact-form-style" @submit.prevent="sendEmail">
                <div class="row">
                  <div class="col-lg-6">
                    <input v-model="name" placeholder="Name*" type="text">
                  </div>
                  <div class="col-lg-6">
                    <input v-model="email" placeholder="Email*" type="email">
                  </div>
                  <div class="col-lg-12">
                    <input v-model="subject" placeholder="Subject*" type="text">
                  </div>
                  <div class="col-lg-12">
                    <textarea v-model="message" placeholder="Your Message*"></textarea>
                    <button class="submit" type="submit">SEND</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- V-Modal for displaying success or error messages -->
    <modal name="response-modal" height="auto" :draggable="true">
      <div class="text-center">
        <i class="fa" :class="modalIcon" style="font-size: 3rem;"></i>
        <h3>{{ modalTitle }}</h3>
        <p>{{ modalMessage }}</p>
        <button @click="$modal.hide('response-modal')" class="btn btn-primary mt-3">Close</button>
      </div>
    </modal>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      modalTitle: '',
      modalMessage: '',
      modalIcon: ''
    };
  },
  methods: {
    async sendEmail() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/send-email/', {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        });
        if (response.data.success) {
          this.modalTitle = 'Success';
          this.modalMessage = 'Email sent successfully';
          this.modalIcon = 'fa-check-circle text-success';
        } else {
          this.modalTitle = 'Error';
          this.modalMessage = 'Failed to send email';
          this.modalIcon = 'fa-times-circle text-danger';
        }
        this.$modal.show('response-modal');
      } catch (error) {
        console.error('Error sending email:', error);
        this.modalTitle = 'Error';
        this.modalMessage = 'Error sending email';
        this.modalIcon = 'fa-times-circle text-danger';
        this.$modal.show('response-modal');
      }
    }
  }
};
</script>

<style>
.text-success {
  color: green;
}

.text-danger {
  color: red;
}
</style>