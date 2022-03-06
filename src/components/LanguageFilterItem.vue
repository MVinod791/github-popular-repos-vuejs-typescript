<template>
    <li class="bar">
      <button type="button"  class="button" :class="{btnActive:isActive===languages.id}"   
      @click.prevent="$emit('show-languages',languages.id)">
          {{languages.id}}
      </button>
    </li>
</template>

<script lang="ts">
import { computed, defineComponent ,PropType} from 'vue'
import LanguageFilterData from '../types/LanguageFilterData'
import store from '@/store'
import OrderLang from '../types/OrderLang'

export default defineComponent({
    props:{
        languages:{
            required:true,
            type:Object as PropType<LanguageFilterData>
        },

        isActive:{
          required:true,
          type:String as PropType<OrderLang>
        }
        
    },
    
    setup() {

            
    },
})
</script>

<style scoped>
.button {
  color: #0f172a;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Roboto';
  flex-shrink: 0;
  margin-right: 16px;
  margin-bottom: 16px;
  padding: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
}

/* button:active {
  border: 1px solid #0284c7;
  color: #0284c7;
  border-radius: 24px;
} */

.bar button.btnActive,
.bar button:focus {
  border: 1px solid #0284c7;
  color: #0284c7;
  border-radius: 24px;
  outline: none;
}


</style>