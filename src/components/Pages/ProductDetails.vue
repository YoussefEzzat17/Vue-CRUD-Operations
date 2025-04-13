<template>
    <div>
      <h1>Product Details</h1>
      <div class="card">
        <img :src="prd.thumbnail" class="card-img-top" alt="..." height="300">
        <div class="card-body">
          <h5 class="card-title">{{ prd.title }}</h5>
          <p class="card-text">{{ prd.description }}</p>
          <router-link to="/products" class="btn btn-dark">Back to Products</router-link>
        </div>
      </div>
    </div>
  </template>
  

  
  <script setup>
  import { onMounted, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const prd = computed(() => store.getters.singleProduct);
  const route = useRoute();
  
  onMounted(() => {
    const id = route.params.id;
    store.dispatch('fetchProduct', id);
  });
  </script>
  


  <style scoped>
  div {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
    font-size: 2.5rem;
    font-weight: 600;
  }
  
  .card {
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  .card-img-top {
    object-fit: contain;
    width: 100%;
    height: 300px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #f8f9fa; 
  }
  
  .card-body {
    padding: 20px;
    text-align: center;
  }
  
  .card-title {
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 15px;
    font-weight: 500;
  }
  
  .card-text {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 20px;
    line-height: 1.6;
  }
  
  .btn-dark {
    background-color: #343a40;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .btn-dark:hover {
    background-color: #23272b;
    transform: translateY(-2px);
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    div {
      padding: 15px;
    }
  
    h1 {
      font-size: 2rem;
    }
  
    .card-img-top {
      height: 250px;
    }
  
    .card-title {
      font-size: 1.5rem;
    }
  
    .card-text {
      font-size: 1rem;
    }
  
    .btn-dark {
      padding: 8px 16px;
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 576px) {
    .card-img-top {
      height: 200px;
    }
  
    h1 {
      font-size: 1.8rem;
    }
  }
  </style>