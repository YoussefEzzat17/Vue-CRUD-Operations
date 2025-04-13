<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/AddEdit">Add_Product</router-link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style scoped>
.navbar {
  padding: 15px 0;
}

.container-fluid {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-nav {
  flex-grow: 0;
  display: flex;
  flex-basis: 100%; 
  margin: 0;
}

.nav-item {
  margin: 0 20px;
}

.nav-link {
  font-size: 1.1rem;
  padding: 8px 12px;
  transition: color 0.3s ease, transform 0.2s ease;
}

.nav-link:hover {
  color: #28a745 !important; 
  transform: translateY(-2px);
}

.d-flex {
  flex-shrink: 0; 
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
    padding: 10px 0;
  }

  .navbar-nav {
    flex-basis: auto;
    margin: 8px 0;
    padding: 10px 0; 
    background-color: #f8f9fa; 
    border-radius: 5px;
  }

  .nav-item {
    margin: 5px 0;
  }

  .nav-link {
    font-size: 1rem;
    padding: 6px 0;
    text-align: center;
    display: block;
  }

  .d-flex {
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    flex-wrap: wrap; 
  }

  .form-control {
    max-width: 90%; 
    font-size: 0.95rem;
    padding: 6px;
    margin-bottom: 8px; 
  }

  .btn-outline-success {
    font-size: 0.95rem;
    padding: 6px 12px;
  }
}

@media (max-width: 576px) {
  .navbar-brand {
    font-size: 1.2rem; 
  }

  .navbar-nav {
    padding: 8px 0;
  }

  .nav-link {
    font-size: 0.9rem;
  }

  .form-control {
    max-width: 95%;
    font-size: 0.9rem;
  }

  .btn-outline-success {
    font-size: 0.9rem;
    padding: 5px 10px;
  }

  .navbar-toggler {
    padding: 4px 8px;
  }
}
</style>