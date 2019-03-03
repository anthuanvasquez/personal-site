<template>
  <div id="content">
    <div class="content-wrap">
      <section class="section is-medium">
        <div class="container">
          <h1>Contact</h1>
          <form
            action="#"
            method="post"
          >
            <fieldset>
              <div class="field">
                <label class="label">
                  Name
                </label>
                <div class="control">
                  <input
                    class="input is-large"
                    type="text"
                    placeholder="e.g Alex Smith"
                  >
                </div>
              </div>

              <div class="field">
                <label class="label">
                  Email
                </label>
                <div class="control">
                  <input
                    class="input is-large"
                    type="email"
                    placeholder="e.g. alexsmith@gmail.com"
                  >
                </div>
              </div>

              <div class="field">
                <label class="label">
                  Subject
                </label>
                <div class="control">
                  <input
                    class="input is-large"
                    type="text"
                    placeholder="e.g Hi Anthuan!"
                  >
                </div>
              </div>

              <div class="field">
                <label class="label">
                  Message
                </label>
                <div class="control">
                  <textarea
                    class="textarea is-large"
                    placeholder="e.g Nice to meet you!"
                    rows="10"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Contact',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Get in touch'
          }
        ]
      }
    }
  }
</script>
