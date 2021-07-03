export default function(defaultValue = null){
    return {
        data() {
            return {
                data:defaultValue,
                isLoading: true
            }
        },
       async created() {
           this.data = await this.fetchData();
           this.isLoading = false;
       },
    }
}