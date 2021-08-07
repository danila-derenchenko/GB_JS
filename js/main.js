const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    Cart: [],
    isVisibleCart: false,
    forproducts: [],
    search: "",
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150'
  },
  methods: {
    cart() {
      if (this.isVisibleCart === true) {
        this.isVisibleCart = false;
      }
      else {
        this.isVisibleCart = true;
      }
    },
    filterGoods(evt) {
      if (this.search == "") {
        this.products = this.forproducts;
      }
      else {
        this.products = this.forproducts;
        evt.preventDefault();
        console.log("Искать " + this.search);
        this.products = this.products.filter(i => {
          if (i.product_name == this.search) {
            return i;
          }
        });
        console.log(this.products);
        /* for (let i of this.products) {
          if (i.product_name == this.search) {
            this.forsearch.push(i);
          }
        } */
        if (this.products.length == 0) {
          this.products = this.forproducts;
          alert("Совдадений не найдено");
        }
      }
      // доделать
    },
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product) {
      console.log(product.id_product);
      this.Cart.push(product);
    }
  },
  beforeCreate() { },
  created() {
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        if (data) {
          for (let el of data) {
            this.forproducts.push(el);
            this.products.push(el);
          }
        }
        else {
          alert("Нет данных");
        }
      });
  },
  beforeMount() { },
  mounted() { },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
});
