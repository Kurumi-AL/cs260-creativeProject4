<template>
    <dir class="wrapper">
        <div class="title">
            <h1>Welcome to Kilton's shop</h1>
        </div>

        <b-container class="bv-example-row">
            <b-row>
                <b-col><img id="kilton" src="../assets/Kilton.png"></b-col>
                <b-col style="text-align: center">
                    <br>
                    <h5>Fang and Bone is a secret shop in Legend of Zelda: Breath of the Wild owned and operated by a man(?) named Kilton.
                        <br><br> Kilton has his own currency that only he uses. He'll give you Mon in exchange for monster parts.
                    </h5>
                </b-col>
            </b-row>
        </b-container>
    </dir>
</template>

<script>
export default {
    name: 'HomeTitle',
    
}
</script>

<style>
.wrapper {
    padding-left: 10%;
    padding-right: 10%;
}

.title {
    text-align: center;
}

#kilton {
    margin-left: 50px;
    width: 300px;
}

.bv-example-row {
    padding-top: 5%;
}


</style>