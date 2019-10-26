<template>
  <section id="content">
    <div class="content-wrap">
      <section-hero />
      <section class="section section-bio section-lines is-medium">
        <div class="container">
          <div class="content is-medium">
            <h2 class="title is-3">Hey folks!</h2>
            <p>
              Hi, I'm Anthuan Vásquez, a {{ age }} years old Developer.
            </p>
            <p>
              I'm a guy passionate for the technology, honest and a self-taught Front-End Developer. I consider myself as a person with initiative, who loves to take on new responsibilities, learning new things and face great challanges.
            </p>
            <p>
              With over {{ yearsOfExperience }} years of experience in the web industry. I am qualified in evaluating business requirements and outreach plans for current and future success. I'm a self-taught Front-End Developer with an emphasis on scalability, robustness and high availability. I've been working with WordPress since January 2010 with version 2.9. I have worked in all versions since. In December 2014 I started my first steps in Magento version 1.9.
            </p>
            <p>
              I have worked with different brands, different needs and different roles, like to work with different aspects of the front-end.
            </p>
            <p>
              I specialize in the visual appearance of the websites or rather in their design, taking into account the technical requirements, functionality and user considerations, besides working with the back-end in the creation of modules / plugins in Magento and WordPress. As a Front-End developer, I have a great understanding of what it means, to provide high availability of Web applications and user experience.
            </p>
            <h3 class="title is-3">I'm Currently.</h3>
            <p>
              Working as a Freelance Front End Web Developer.
            </p>
            <p>
              Collaborating on some <a href="https://github.com/anthuanvasquez">open-source</a> projects.
            </p>
            <p>
              Producing music as <a href="https://oidoperfecto.net">Oido Perfecto</a>.
            </p>
            <p>
              Building my personal brand :).
            </p>
            <p>
              Reading <a href="https://github.com/getify/You-Dont-Know-JS">You Don't JS</a> Series, <a href="http://shop.oreilly.com/product/9780596517748.do">JavaScript: The Good Parts</a>, <a href="https://www.the1thing.com/">The One Thing</a>, <a href="https://www.amazon.com/Elon-Musk-SpaceX-Fantastic-Future-ebook/dp/B00KVI76ZS">Elon Musk</a> books.
            </p>
            <p>
              Fan of Dragon Ball Z, Super :)
            </p>
            <p>
              Being a father.
            </p>
            <p>
              Learning new things.
            </p>
          </div>
        </div>
      </section>
      <section-services />

      <section class="hero hero-quote">
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-two-thirds">
                <h1 class="title">
                  Would you like to Build your Website with Us?
                </h1>
                <h2 class="subtitle">
                  We Create High Quality Websites
                </h2>
              </div>
              <div class="column">
                <a
                  class="button is-large"
                  href="https://forms.gle/QziNYcWx1A7WNY4D9"
                >
                  Enquire Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section-skills />
      <section-workflow />
    </div>
  </section>
</template>

<script>
  import SectionHero from '~/components/SectionHero'
  import SectionServices from '~/components/SectionServices'
  import SectionSkills from '~/components/SectionSkills'
  import SectionWorkflow from '~/components/SectionWorkflow'

  export default {
    components: {
      SectionHero,
      SectionServices,
      SectionSkills,
      SectionWorkflow
    },

    data() {
      return {
        age: 32,
        bornAge: 1987,
        yearsOfExperience: 9,
        initYear: 2010
      };
    },

    head () {
      return {
        title: 'Anthuan Vásquez'
      }
    },

    mounted() {
      const currentYear = new Date().getFullYear();

      this.age = currentYear - this.bornAge
      this.yearsOfExperience = currentYear - this.initYear
    }
  }
</script>

<style lang="scss">
  .hero-quote {
    background: linear-gradient(
      to right,
      $color__linear-1,
      $color__linear-2
    );
  }
</style>
