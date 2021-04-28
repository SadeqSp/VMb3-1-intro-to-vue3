app.component('review-form', {
  template: /*html*/ `
        <form class="review-form" @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <label for="name">Name:</label>
            <input id="name" v-model="name">

            <label for="review">Review:</label>      
            <textarea id="review" v-model="review"></textarea>

            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select> 

            <label>YES<input type="radio" value="yes" v-model="recom"></label>
            <label>NO<input type="radio" value="no" v-model="recom"></label>

            <input class="button" type="submit" value="Submit">  
        </form>
  `,
  data() {
      return {          // define data for each input (form)
          name: '',
          review: '',
          rating: null,
          recom: null
      }
  },
  methods: {
    onSubmit() {
        // basic form validation 
        /*
        if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
            alert('Review is incomplete. Please fill out every field.')
            return
        }
        */

        let productReview = {
            name: this.name,
            review: this.review,
            rating: this.rating,
            recom: this.recom 
        }
        this.$emit('review-submitted', productReview)   // sending values/object(productReview) as a PAYLOAD to the product

        this.name = ''
        this.review = ''
        this.rating = null
        this.recom = null
    }
  }
})