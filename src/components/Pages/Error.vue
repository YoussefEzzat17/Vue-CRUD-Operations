<template>
    <div class="error-container">
      <div class="error-content">
        <h1 class="error-title">
          <span class="error-icon">⚠️</span> Oops, Something Went Wrong!
        </h1>
        <p class="error-message">
          It looks like we hit a snag. Let's get you back on track.
        </p>
        <button class="btn btn-dark error-button" @click="goHome">
          Back to Home
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ErrorPage',
    methods: {
      goHome() {
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  .error-container {
    min-height: 100vh;
    width: 100vw; 
    position: fixed; 
    top: 0;
    left: 0;
    background: linear-gradient(135deg, #f8d7da 0%, #e6f7fa 100%); 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0; 
    box-sizing: border-box;
  }
  
  .error-content {
    max-width: 700px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    padding: 40px;
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .error-content:hover {
    transform: translateY(-5px);
  }
  
  .error-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #721c24;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .error-icon {
    font-size: 2rem;
    color: #dc3545; 
    animation: pulse 2s infinite ease-in-out;
  }
  
  .error-message {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 30px;
    line-height: 1.6;
  }
  
  .error-button {
    background-color: #343a40; 
    border: none;
    padding: 12px 30px;
    font-size: 1.1rem;
    border-radius: 6px;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  }
  
  .error-button:hover {
    background-color: #23272b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .error-button:active {
    transform: translateY(0);
    box-shadow: none;
  }
  
  /* Pulse animation for icon */
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .error-content {
      padding: 30px;
      max-width: 90%;
    }
  
    .error-title {
      font-size: 2rem;
    }
  
    .error-icon {
      font-size: 1.8rem;
    }
  
    .error-message {
      font-size: 1.1rem;
    }
  
    .error-button {
      font-size: 1rem;
      padding: 10px 25px;
    }
  }
  
  @media (max-width: 576px) {
    .error-content {
      padding: 20px;
    }
  
    .error-title {
      font-size: 1.8rem;
      flex-direction: column;
      gap: 8px;
    }
  
    .error-icon {
      font-size: 1.6rem;
    }
  
    .error-message {
      font-size: 1rem;
    }
  
    .error-button {
      font-size: 0.9rem;
      padding: 8px 20px;
    }
  }
  </style>