<template>
    <div>
        <div class="graid">
            <div 
                v-for="(row,r_index) in graid"
                :key="r_index"
                class="row">
                <div 
                v-for="cell in row"
                :key="cell.key"
                class="cell">
                    
                </div>
            </div>
        </div>
    </div>
</template>    
<script>
const graid = new Array(8).fill(1).map((_,r) =>{
    return new Array(8).fill(1).map((_,l) => {
        return {
            key: `key-${r*8+l}`,
            ok:false
        }
    });
})
export default {
    data(){
        return {
            graid
        }
    },
    created(){
        console.log(graid);
    },
    methods:{
        
    }
}
</script>
<style>
    .graid {
        display: inline-block;
    }
    .row:nth-child(odd) .cell:nth-child(odd){
        background-color: gray;
    }
    .row:nth-child(even) .cell:nth-child(even){
        background-color: gray;
    }
    .row {
       line-height: 0;
    }
    .cell{
        display: inline-block;
        width: 80px;
        height: 80px;
        line-height: 80px;
        border: 1px solid grey;
    }

</style>