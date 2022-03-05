<template>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        class="failure"
      />
      <h1 class="failure-heading">Something Went Wrong</h1>
    </div>
</template>

<style scoped>
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
    font-size: 48px;
  }
}
</style>