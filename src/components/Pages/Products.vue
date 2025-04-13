<template>
  <div>
    <h1>Products</h1>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th><th>Title</th><th>Image</th><th>Price</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="p in products" 
          :key="p.id" 
          class="tablerow" 
          @click="$router.push(`/products/${p.id}`)" 
          style="cursor: pointer;"
        >
          <td>{{ p.id }}</td>
          <td>{{ p.title }}</td>
          <td><img :src="p.thumbnail" width="100" /></td>
          <td>{{ p.price }}</td>
          <td @click.stop>
            <router-link :to="`/AddEdit/${p.id}`" class="btn btn-warning btn-sm">
              <i class="bi bi-pencil-square"></i>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="DeletePrd(p.id)">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'; 
import { useStore } from 'vuex';

const store = useStore();

const DeletePrd = (id) => {
  store.dispatch('deleteProduct', id);
};

onMounted(() => {
  store.dispatch('fetchProducts');
});

const products = computed(() => store.getters.allProducts); 
</script>

<script>
export default {
  name: 'ProductsPage' 
}
</script>










<style scoped>
div {
  max-width: 1200px;
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

.table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.table thead {
  background-color: #4a90e2;
  color: #fff;
}

.table th,
.table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.table th {
  font-weight: 600;
  font-size: 1.1rem;
}

.table tbody tr:hover {
  background-color: #b2b2b2;
}

.table img {
  border-radius: 4px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.tablerow {
  cursor: pointer;
}



.table tbody tr {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.table tbody tr:hover {
  transform: scale(1.04);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #f2f2f2;
  z-index: 1;
  position: relative;
}


.btn {
  padding: 8px 12px;
  margin-right: 5px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background-color 0.3s, transform 0.2s;
}

.btn-success {
  background-color: #28a745;
  color: #fff;
}

.btn-success:hover {
  background-color: #218838;
  transform: translateY(-2px);
}

.btn-warning {
  background-color: #ffc107;
  color: #212529;
}

.btn-warning:hover {
  background-color: #e0a800;
  transform: translateY(-2px);
}

.btn-danger {
  background-color: #dc3545;
  color: #fff;
  border: none;
  cursor: pointer;
}

.btn-danger:hover {
  background-color: #c82333;
  transform: translateY(-2px);
}

.table td {
    text-align: center;
    vertical-align: middle;
  }


  .table td:nth-child(1),
  .table td:nth-child(2),
  .table td:nth-child(4) {
    text-align: center;
  }

  .table th {
    text-align: center;
  }

  .table img {
    display: block;
    margin: 0 auto;
  }



/* Responsive Design */
@media (max-width: 768px) {
  .table th,
  .table td {
    padding: 10px;
    font-size: 0.9rem;
  }

  .table img {
    width: 80px;
    margin-top:10px ;
  }

  h1 {
    font-size: 2rem;
  }

  .btn {
    margin-top: 8px;
    font-size: 0.8rem;
    padding: 6px 0; 
    width: 80px; 
    text-align: center; 
    display: inline-block; 
    box-sizing: border-box; 
  }

  .btn-success,
  .btn-warning,
  .btn-danger {
    width: 80px; 
    padding: 6px 0; 
    font-size: 0.8rem; 
    margin-right: 5px; 
  }


  .table td {
    text-align: center;
    vertical-align: middle;
  }

  .table td:nth-child(5) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
  }

  .table td:nth-child(1),
  .table td:nth-child(2),
  .table td:nth-child(4) {
    text-align: center;
  }

  .table th {
    text-align: center;
  }

  .table img {
    display: block;
    margin: 0 auto;
  }
}
</style>



