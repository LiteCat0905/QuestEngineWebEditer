import { ref } from 'vue';
import axios from 'axios';
import { useMessage } from "naive-ui";
var baseurl = import.meta.env.VITE_V1_API
const GetPosts = () => {
    const message = useMessage();
    const posts = ref([])
    const load_ = async () => {
        console.info("开始拉取公告信息")
        try {
            var url_notice = baseurl + "/api/notice"
            let data = await axios(url_notice)
            posts.value = data.data
        } catch (error) {
            console.error(error.code)
            message.error(error.code)
        }
    };
    return {posts,load_};

}

export default GetPosts