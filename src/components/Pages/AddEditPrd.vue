<template>
    <div>
      <h1>Form</h1>
      <form @submit.prevent="id ? EditPrd() : AddProduct()">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="title"
            placeholder="Enter Product Title"
          />
          <label>Product Title</label>
        </div>
        <button class="btn btn-dark w-100">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const route = useRoute();
  const router = useRouter();
  
  const id = route.params.id;
  const title = ref('');
  
  const loadProduct = async () => {
    await store.dispatch('fetchProduct', id);
    title.value = store.getters.singleProduct.title;
  };
  
  const AddProduct = async () => {
    await store.dispatch('addProduct', { title: title.value });
    router.push('/products');
  };
  
  const EditPrd = async () => {
    await store.dispatch('updateProduct', {
      id,
      product: { title: title.value }
    });
    router.push('/products');
  };
  
  onMounted(() => {
    if (id) loadProduct();
  });
  </script>
  
  <style scoped>
  div {
    max-width: 600px;
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
  
  form {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .form-floating {
    margin-bottom: 20px;
  }
  
  .form-control {
    border-radius: 5px;
    font-size: 1.1rem;
    padding: 10px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .form-control:focus {
    border-color: #343a40;
    box-shadow: 0 0 8px rgba(52, 58, 64, 0.2);
    outline: none;
  }
  
  .form-floating > label {
    color: #666;
    font-size: 1rem;
    padding: 10px;
  }
  
  .btn-dark {
    background-color: #343a40;
    border: none;
    padding: 12px;
    font-size: 1.1rem;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .btn-dark:hover {
    background-color: #23272b;
    transform: translateY(-2px);
  }
  
  .btn-dark:active {
    transform: translateY(0);
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    div {
      padding: 15px;
    }
  
    h1 {
      font-size: 2rem;
    }
  
    form {
      padding: 15px;
    }
  
    .form-control {
      font-size: 1rem;
      padding: 8px;
    }
  
    .btn-dark {
      font-size: 1rem;
      padding: 10px;
    }
  }
  
  @media (max-width: 576px) {
    h1 {
      font-size: 1.8rem;
    }
  
    form {
      padding: 10px;
    }
  }
  </style>