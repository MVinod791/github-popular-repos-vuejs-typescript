<template>
    <div class="app-container">
        <div class="responsive-container">
            <h1 class="popular-heading">Popular</h1>
            <ul class="filter-list">
                <LanguageFilterItem 
                    v-for="languages in languageFiltersData" 
                    :key="languages.id" 
                    :languages="languages"    
                    :isActive="isActive"                
                    @show-languages="filterLanguages"
                />
            </ul>
            <div v-if="loadingStatus" class="loading-div">
                <LoaderSpinner/>
            </div>
            <ul v-else class="repo-list">
                <li v-for="repos in allGithubRepos" :key="repos.id">
                    <RepoItems :repos="repos" />
                </li>
            </ul>
        </div>
    </div>


</template>

<script lang="ts">
import { computed, defineComponent ,ref} from 'vue'

import LanguageFilterItem from './LanguageFilterItem.vue'
import RepoItems from './RepoItems.vue'

import LanguageFilterData from '../types/LanguageFilterData'
import OrderLang  from '../types/OrderLang'

import store from '@/store'

import LoaderSpinner from './LoaderSpinner.vue'


export default defineComponent({
    name:'GitHubPopularRepos',
    components:{
        LanguageFilterItem,
        RepoItems,
        LoaderSpinner,
    },
    setup() {
        
        const languageFiltersData =ref<LanguageFilterData[]>([
            {id: 'ALL', language: 'All'},
            {id: 'JAVASCRIPT', language: 'Javascript'},
            {id: 'RUBY', language: 'Ruby'},
            {id: 'JAVA', language: 'Java'},
            {id: 'CSS', language: 'CSS'},
        ])       

        const isActive=ref<string>('ALL')

        const filterLanguages=(term:OrderLang)=>{
            isActive.value=term
            store.dispatch('fetchRepos',term)
            
        }      
        
        const allGithubRepos=computed(()=>store.getters.allGithubRepos)

        const loadingStatus=computed(()=>store.getters.loadingStatus)

        const fetchRepos=()=>{
                store.dispatch('fetchRepos')
        }

        return {languageFiltersData,fetchRepos,allGithubRepos,filterLanguages,loadingStatus,isActive}
    },
    
    created(){
        this.fetchRepos()
    }

})
</script>

<style >
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.responsive-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
}
.filter-list {
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px;
}
.repo-list {
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  padding: 0px;
 
}
.popular-heading {
  color: #0f172a;
  font-size: 44px;
  font-weight: bold;
  font-family: 'Lobster';
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
    font-size: 48px;
  }
}
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
