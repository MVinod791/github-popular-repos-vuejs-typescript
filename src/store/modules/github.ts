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

//   export type Status={
//       loadingStatus:false
//   }

export type State={
    popularRepos:ItemData[],
    loadingStatus:boolean
}

const state:State={
    popularRepos:[],
    loadingStatus:false
};

export type Getters={
    allGithubRepos(state:State):void,
    loadingStatus(state:State):void
}

const getters:Getters={
    allGithubRepos:(state)=>state.popularRepos,
    loadingStatus:(state)=>state.loadingStatus
};

const actions={
    async fetchRepos({commit}:any,term:OrderLang){
        commit('loadingStatus',true)
        //const response=await fetch('https://apis.ccbp.in/popular-repos')
        const response=await fetch(`https://apis.ccbp.in/popular-repos?language=${term}`)
        const data=await response.json()
        //console.log(data)
        commit('setPopularRepos',data.popular_repos)
        commit('loadingStatus',false)
        
    },
    // async filterRepos({commit}:any,term:OrderLang){
    //     commit('loadingStatus',true)
    //     const response=await fetch(`https://apis.ccbp.in/popular-repos?language=${term}`)
    //     const data=await response.json()
    //     commit('setPopularRepos',data.popular_repos)
    //     commit('loadingStatus',false)
    // }
};

export type Mutations={
    setPopularRepos(state:State,popularRepos:ItemData[]):void
    loadingStatus(state:State,newLoadingStatus:boolean):void
    
}

const mutations:Mutations={
    setPopularRepos:(state,popularRepos)=>state.popularRepos=popularRepos,
    loadingStatus(state,newLoadingStatus){
        state.loadingStatus=newLoadingStatus
    }
};

export default({
    state,
    getters,
    actions,
    mutations
})