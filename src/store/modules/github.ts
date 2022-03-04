import axios from "axios";
import OrderLang from "@/types/OrderLang";

export type ItemData={
    id:number,
    name:string,
    issues_count:string,
    forks_count:number,
    stars_count:number,
    avatar_url:string
  }

export type State={
    popularRepos:ItemData[]
}

const state:State={
    popularRepos:[]
};

export type Getters={
    allGithubRepos(state:State):void
}

const getters:Getters={
    allGithubRepos:(state)=>state.popularRepos
};

const actions={
    async fetchRepos({commit}:any){
        const response=await fetch('https://apis.ccbp.in/popular-repos')
        const data=await response.json()
        console.log(data)
        commit('setPopularRepos',data.popular_repos)
    },
    async filterRepos({commit}:any,term:OrderLang){
        const response=await fetch(`https://apis.ccbp.in/popular-repos?language=${term}`)
        const data=await response.json()
        commit('setPopularRepos',data.popular_repos)
    }
};

export type Mutations={
    setPopularRepos(state:State,popularRepos:ItemData[]):void
}

const mutations:Mutations={
    setPopularRepos:(state,popularRepos)=>state.popularRepos=popularRepos
};

export default({
    state,
    getters,
    actions,
    mutations
})