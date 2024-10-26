<template>
  <section class="terms-conditions">
    <h1 class="title">Terms and Conditions</h1>
    <p class="intro">
      Welcome to Party Yacht! These Terms and Conditions outline the rules and guidelines for using our website and attending our events.
      By accessing our site or purchasing a ticket, you agree to abide by these terms. Please read carefully.
    </p>

    <div class="policy-section">
      <h2 class="section-title">1. General Agreement</h2>
      <p class="section-content">
        By accessing Party Yacht's website or attending our events, you agree to comply with these Terms and Conditions, along with our
        <router-link to="/privacyPolicy">Privacy Policy</router-link> and <router-link to="/refundPolicy">Refund Policy</router-link>. 
        These terms apply to all visitors, users, and others who access or use our website and services.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-title">2. Ticket Purchases and Refunds</h2>
      <p class="section-content">
        All ticket sales are final and non-refundable. Please review our <router-link to="/refundPolicy">Refund Policy</router-link> before purchasing a ticket. 
        Ensure your availability for the event as refunds or exchanges cannot be accommodated under any circumstances.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-title">3. Eligibility and Age Requirements</h2>
      <p class="section-content">
        Party Yacht events are strictly 21+ and require valid, government-issued ID for entry. We reserve the right to deny entry to any
        individual who does not meet the age requirement, without refund.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-title">4. Code of Conduct</h2>
      <p class="section-content">
        Attendees are expected to behave respectfully towards other guests and staff. Any disruptive, offensive, or inappropriate behavior may
        lead to removal from the event without a refund. Party Yacht reserves the right to enforce this policy to maintain a safe and enjoyable atmosphere.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-title">5. Event Cancellations and Rescheduling</h2>
      <p class="section-content">
        In rare cases, Party Yacht may cancel or reschedule events due to weather, safety concerns, or other unforeseen circumstances. In such instances,
        we will notify ticket holders promptly, and refunds will be issued solely at our discretion, as outlined in our <router-link to="/refundPolicy">Refund Policy</router-link>.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-title">6. Limitation of Liability</h2>
      <p class="section-content">
        Party Yacht is not responsible for any personal injury, loss, or damage to personal property during our events. By attending, you assume all
        risks associated with participation and release Party Yacht from any claims or liability.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-title">7. Personal Data and Privacy</h2>
      <p class="section-content">
        Your personal data is collected in accordance with our <router-link to="/privacyPolicy">Privacy Policy</router-link>. By using our site,
        you consent to the collection and use of this data as outlined. We are committed to protecting your information and ensuring it is used responsibly.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-title">8. Intellectual Property</h2>
      <p class="section-content">
        All content on Party Yacht's website, including text, graphics, logos, and images, is the property of Party Yacht and is protected by copyright laws.
        Unauthorized use, reproduction, or distribution of this content is strictly prohibited.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-title">9. Governing Law</h2>
      <p class="section-content">
        These Terms and Conditions are governed by the laws of [Your Country/State]. Any disputes arising out of or related to these terms shall be
        resolved in the courts of [Your Country/State].
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-title">10. Amendments to Terms and Conditions</h2>
      <p class="section-content">
        Party Yacht reserves the right to modify these Terms and Conditions at any time. Changes will be posted on this page, and your continued use
        of our site or services signifies your acceptance of the modified terms. We encourage you to review this page regularly.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-title">11. Contact Information</h2>
      <p class="section-content">
        For questions or concerns regarding these Terms and Conditions, please reach out through our official communication channels. Our team is here to assist with any inquiries you may have.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.terms-conditions{
  padding: 100px 150px;
  h1{
    color: #26264b;
    font-size: 24px;
    font-weight: 500;
  }
  h2{
    color: #26264b;
    font-size: 18px;
    font-weight: 500;
  }
  p{
    font-size: 16px;
    color: #64676c;
    line-height: 1.6;
    margin-bottom: 25px;
  }
  router-link {
    color: #007bff;
    text-decoration: none;
  }

  router-link:hover {
    text-decoration: underline;
  }
}
</style>
