<template>
    <li>
      <button type="button"  class="button"  @click.prevent="$emit('show-languages',languages.id)">
          {{languages.language}}
      </button>
    </li>
</template>

<script lang="ts">
import { defineComponent ,PropType} from 'vue'
import LanguageFilterData from '../types/LanguageFilterData'

export default defineComponent({
    props:{
        languages:{
            required:true,
            type:Object as PropType<LanguageFilterData>
        },
        
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

button:active {
  border: 1px solid #0284c7;
  color: #0284c7;
  border-radius: 24px;
}

</style>