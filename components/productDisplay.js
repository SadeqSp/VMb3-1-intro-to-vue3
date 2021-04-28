app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: /*html*/ `
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img v-bind:src="image" :class="{'out-of-stock-img': !inStock}">
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>

                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>

                    <p>Shipping: {{ shipping }}</p>

                    <ul><li v-for="detail in details">{{ detail }}</li></ul>
                    
                    <div 	v-for="(variant, index) in variants" 
                            :key="variant.id"
                            class="color-circle"
                            :style="{backgroundColor: variant.color}" 
                            @mouseover="updateVariant(index)">
                    </div>

                    <button class="button" 
                            :disabled="!inStock"
                            :class="{disabledButton: !inStock}"
                            v-on:click="addToCart">
                            Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            product: "Socks",
            brand: "Vue Mastery",
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/g.jpg', quantity: 50 },
                { id: 2235, color: 'blue',  image: './assets/b.jpg',  quantity: 0  },
            ]
        }
    },
    methods: {
        addToCart() {
            //this.$emit('add-to-cart') // for the 1st part of this lesson (when cart is 0 and will increase 1 by 1)
                                        // when 'addToCart'/method(inside component) happens => "add-to-cart"/event is called (in compoenent's parent[app])
                                        // we must add 'add-to-cart'/event to '<compoenent>' (in index)
                                        // and define a new method for it 'updateCart' (in component's parent[app]) to change the 'cart'/data in it

            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)   
                                        // for the 2nd part of this lesson (when cart is an array and get and hold the 'id' of clicked product)
                                        // sending 'id' to 'updateCart'/method outside of component  
                                        // to see the number in 'cart' instead of added IDs        
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
            if(this.premium) {
                return "free"
            }
            return 2.99
        }
    }
})