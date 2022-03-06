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
    loadingStatus:boolean,
    failureStatus:boolean
}

const state:State={
    popularRepos:[],
    loadingStatus:false,
    failureStatus:false
    
};

export type Getters={
    allGithubRepos(state:State):void,
    loadingStatus(state:State):void,
    failureStatus(state:State):void
}

const getters:Getters={
    allGithubRepos:(state)=>state.popularRepos,
    loadingStatus:(state)=>state.loadingStatus,
    failureStatus:(state)=>state.failureStatus
};

const actions={
    async fetchRepos({commit}:any,term:OrderLang){
        try {
            commit('loadingStatus',true)
            const response=await fetch(`https://apis.ccbp.in/popular-repos?language=${term}`)
            const data=await response.json()
            commit('setPopularRepos',data.popular_repos)
            commit('loadingStatus',false)
        } catch (error) {
            console.log(error)
            commit('failureStatus',error)
            commit('loadingStatus',false)
           
        }
        
        
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
    failureStatus(state:State,newErrorStatus:boolean):void 
    
}

const mutations:Mutations={
    setPopularRepos:(state,popularRepos)=>state.popularRepos=popularRepos,
    loadingStatus(state,newLoadingStatus){
        state.loadingStatus=newLoadingStatus
    },
    failureStatus(state,newErrorStatus){
        state.failureStatus=newErrorStatus
    }
   
};

export default({
    state,
    getters,
    actions,
    mutations
})