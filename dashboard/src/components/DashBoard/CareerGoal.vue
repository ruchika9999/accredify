<script lang="ts">
import { computed, onMounted } from "vue";

import Chart from "./Chart.vue";
import { careerGoalStore } from "../../store/careerGoal";

export default {
  name: "CareerGoal",
  components: {
    Chart,
  },

  setup() {
    const useCareerGoalStore = careerGoalStore();

    onMounted(() => {
      useCareerGoalStore.fetchCareerGoal();
    });

    const goal = computed(() => {
      const goals = useCareerGoalStore.getCareerGoal;
      const isLoading = useCareerGoalStore.getLoading;
      const [currentGoal] = goals;

      return { currentGoal, isLoading };
    });

    return {
      goal,
    };
  },
};
</script>
<template>
  <h4 class="text-xl font-bold">Career Goal</h4>
  <div
    class="border border-gray-scale-two rounded mt-4 flex items-center justify-center flex-col px-8 py-10"
  >
    <p v-if="goal.isLoading === 'loading'" class="hidden">loading...</p>
    <p class="font-bold text-gray-scale-three text-sm">Your Progress</p>
    <div class="mt-6 mb-6">
      <Chart :progress="goal?.currentGoal?.progress" />
    </div>
    <p class="font-normal text-sm text-center">I want to become a</p>
    <p class="font-bold text-xl mt-1">{{ goal?.currentGoal?.category }}</p>
    <p class="font-bold text-sm text-thirdly mt-6">View Insights</p>
  </div>
</template>
