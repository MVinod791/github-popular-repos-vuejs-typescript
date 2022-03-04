<template>
    <div class="repo-items">
        <img :src="repos.avatar_url" :alt="repos.name" class="repository-image">
        <h1 class="repo-heading">{{repos.name}}</h1>
        <div class="stars-container">
            <img
                src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
                alt="stars"
                class="star-image"
            />
            <p class="stars-count">{{repos.stars_count}} stars</p>
        </div>
        <div class="stars-container">
            <img
                src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
                alt="forks"
                class="star-image"
            />
            <p class="stars-count">{{repos.forks_count}} stars</p>
        </div>
        <div class="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          class="star-image"
        />
        <p class="stars-count">{{repos.issues_count}} open issues</p>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent ,PropType} from 'vue'

export type ItemData={
    name:string,
    id:number,
    issues_count:string,
    forks_count:number,
    stars_count:number,
    avatar_url:string
  }

export default defineComponent({
    name:'RepoItems',
    props:{
        repos:{
            required:true,
            type:Object
        }
    },
    setup() {
        
    },
})
</script>

<style scoped>
.repo-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8ff;
  border-radius: 24px;
  height: 350px;
  margin-bottom: 24px;
  margin-left: 24px;
  padding: 44px;
  width: 300px;
  

  
}
/* @media screen and (min-width: 576px) {
  .repo-items {
    width: 45%;
    margin-left: 16px;
  }
}

@media screen and (min-width: 992px) {
  .repo-items {
    width: 30%;
  }
}

@media screen and (min-width: 1200px) {
  .repo-items {
    width: 23%;
  }
} */

.repository-image {
  height: 100px;
  width: 100px;
}
.repo-heading {
  color: #e73959;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
}
.stars-container {
  display: flex;
  align-items: center;
  width: 85%;
  margin-bottom: 16px;
}
.star-image {
  height: 18px;
  width: 18px;
  margin-right: 10px;
}
.stars-count {
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0px;
}
</style>