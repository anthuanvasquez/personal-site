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
              Working as a Front End Web Developer with a great <a href="https://justjoin.it/brands/story/snow-dog">team</a> at <a href="https://snow.dog">SNOW.DOG</a>.
            </p>
            <p>
              Collaborating on <a href="https://www.vuestorefront.io/">Vue Storefront</a> and anothers <a href="https://github.com/anthuanvasquez">open-source</a> projects.
            </p>
            <p>
              Producing music as <a href="">Oido Perfecto</a>.
            </p>
            <p>
              Building my personal brand :).
            </p>
            <p>
              Reading <a href="https://github.com/getify/You-Dont-Know-JS">You Don't JS</a> Series and <a href="http://shop.oreilly.com/product/9780596517748.do">JavaScript: The Good Parts</a> books.
            </p>
            <p>
              Fan of Dragon Ball Super :)
            </p>
            <p>
              Being a father.
            </p>
            <p>
              Learnong new things.
            </p>
          </div>
        </div>
      </section>
      <section-services />
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
        age: 31,
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
  .section-bio {
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 100%;
      height: 100%;
      z-index: 0;
      background-image:
        radial-gradient(
          ellipse closest-side,
          rgba($color__radial-1, 0.75),
          $color__radial-2
        ),
        url('/me.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.75;
    }

    .title {
      color: $color__font;
    }

    .content {
      position: relative;
      overflow: hidden;
      z-index: 1;
    }

    a {
      font-weight: 700;

      &:hover {
        color: $color__font;
      }
    }
  }

  .section {
    border-bottom: 1px solid $color__border;
    margin: 0;
  }
</style>
