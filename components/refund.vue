<template>
  <section class="refund-policy">
    <h1 class="title">Refund Policy</h1>
    <p class="intro">
      Thank you for choosing Party Yacht for your upcoming event. Please read our refund and returns policy carefully before completing your purchase.
    </p>

    <div class="policy-section">
      <h2 class="section-title">1. Non-Refundable Tickets</h2>
      <p class="section-content">
        All ticket purchases for our yacht events are final and non-refundable. Once a ticket has been purchased, we are unable to offer any refunds,
        regardless of personal circumstances or changes in plans. We recommend ensuring your availability before purchasing a ticket.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-title">2. Non-Transferable Tickets</h2>
      <p class="section-content">
        Tickets are non-transferable. This means that you may not transfer your ticket to another person under any circumstances. The ticket is valid
        only for the individual who made the purchase and whose name is registered during the purchase process.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-title">3. Event Cancellations or Changes</h2>
      <p class="section-content">
        In the unlikely event that Party Yacht must cancel or reschedule an event, we will notify all ticket holders in advance.
        Any decisions regarding refunds or ticket reallocation will be made at our sole discretion, based on the nature of the event change or cancellation.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-title">4. Refunds for Cancellations by Party Yacht</h2>
      <p class="section-content">
        If Party Yacht cancels an event due to unforeseen or genuine reasons, including delays or issues from our side,
        we will offer full refunds to all ticket holders. You will be notified in advance, and refunds will be processed promptly.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-title">5. No Reselling of Tickets</h2>
      <p class="section-content">
        Ticket reselling is strictly prohibited. Tickets purchased through unofficial or third-party channels will not be honored, and entry to the event will be denied.
      </p>
    </div>

    <div class="policy-section">
      <h2 class="section-title">6. Contact Us</h2>
      <p class="section-content">
        If you have any questions about this policy, please contact us via our official communication channels. We’re happy to assist you with any concerns you may have before purchasing your ticket.
      </p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
.refund-policy{
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
  // Responsive styles for tablets and mobile screens
  @media (max-width: 768px) {
    padding: 60px 40px;

    h1 {
      font-size: 22px;
    }

    h2 {
      font-size: 16px;
    }

    p {
      font-size: 15px;
    }
  }

  @media (max-width: 480px) {
    padding: 40px 20px;

    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }
  }
}
</style>
