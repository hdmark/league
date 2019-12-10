<template>
  <div>
    <form class="search-form" @submit.prevent="routeToSearch(querySummoner)">
      <input label="Wallet Search" required v-model="querySummoner" name="search summoner" />
      <button native-type="submit" type="primary">Search for a summoner</button>
      <!-- <input class="search-form__input" v-model="searchWallet" type="text"> -->
    </form>
    <div v-if="$apollo.loading">...loading</div>
    <div v-else-if="summonerFound==0">Not found</div>
    <div v-else>
      <div>{{currentSummoner}}</div>
      {{currentSummoner.profileIconId}}
      <img
        :src="`/img/profileicon/${currentSummoner.profileIconId}.png`"
        alt
      />
      <!-- <img src="@/assets/dragontail/9.23.1/img/profileicon/4249.png" alt /> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { SUMMONER } from "@/graphql/queries.js";
export default {
  name: "SUMMONER",

  components: {},

  data: () => ({
    summonerFound: 0,
    querySummoner: ""
  }),
  apollo: {
    currentSummoner: {
      query: SUMMONER,
      variables() {
        return { name: this.summoner };
      },
      update(data) {
        console.log(data);
        if (data == {} || data.summoner == null) {
          return {};
        }
        this.summonerFound = 1;
        console.log("found");
        return data.summoner;
      },
      skip() {
        // skip runs before the query goes off
        // reset the status to searching
        this.summonerFound = 0;

        // if there is no wallet being searched (icemining.com/wallet/)
        // skip the query
        if (!this.summoner || this.summoner == "") {
          console.log("skipped");
          return true;
        }
        console.log("not skipped");
        return false;
      },
      error(error) {
        console.log("error:", error);
        this.summonerFound = 0;
        return true;
      }
    }
  },
  props: ["summoner"],
  methods: {
    routeToSearch(search) {
      this.$router
        .push({
          name: "summoner",
          params: { summoner: this.querySummoner }
        })
        .catch(err => {
          console.log(err);
          return;
        });
    }
  }
};
</script>

