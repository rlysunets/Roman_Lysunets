<template>
    <section id="features" class="features section">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6 feature text-center" 
                    v-for="(feature, i) in featuresListData" :key="i">
                    <span class="icon" :class="feature.icon"></span>
                    <div class="feature-content">
                        <h5>{{ feature.title }}</h5>
                        <p>{{ feature.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import axios from "axios"
export default {
    name: "FeaturesList",
    data() {
        return {
            featuresListData: []
        }
    },
    created() {
        axios.get("../data/featuresListData.json")
            .then(resp => {
                this.featuresListData = resp.data
            })
    }
}
</script>

<style scoped>
.feature {
    margin-bottom: 50px;
}

.feature-content {
    padding: 0 15px;
    margin-top: 30px;
}

.feature .icon {
    color: #e84545;
    font-size: 60px;
}
</style>