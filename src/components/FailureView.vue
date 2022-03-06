<template>
    <div class="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        class="failure-image"
      />
      <h1 class="failure-heading">Something Went Wrong</h1>
    </div>
</template>

<style scoped>
.failure-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100vh;
}
.failure-image {
  height: 180px;
  width: 250px;
}
@media screen and (min-width: 768px) {
  .failure-image {
    width: 520px;
    height: 320px;
  }
}
.failure-heading {
  color: #1e293b;
  font-size: 28px;
  font-weight: bold;
  font-family: 'Lobster';
}
@media screen and (min-width: 768px) {
  .failure-heading {
    font-size: 38px;
  }
}
</style>