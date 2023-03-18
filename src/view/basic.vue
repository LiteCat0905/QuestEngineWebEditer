<script>
import { useLoadingBar } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { defineComponent } from 'vue'
// content
export default defineComponent({
    setup() {
        window.$message = useMessage()
        window.$loadingBar = useLoadingBar()
    }
})
</script>