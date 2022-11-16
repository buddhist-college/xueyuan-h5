import { createApp, onMounted, ref, computed } from '/assets/vue@3.2.45.js'
import data from '/data/index.js'
      
createApp({
  setup () {
    const tabs = computed(() => data.map(v => v.tab))
    const currentIndex = ref(0)

    onMounted(() => {
      document.getElementById('app').style.display = 'block'
    })

    return {
      data,
      tabs,
      currentIndex,
    }
  }
}).mount('#app')