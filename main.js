const app = Vue.createApp({
    data() {
        return {
            product: "Socks",
            image: "./assets/g.jpg",
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/g.jpg' },
                { id: 2235, color: 'blue',  image: './assets/b.jpg' },
            ],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(img) {
            this.image = img
        }
    }
})