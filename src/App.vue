<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <div>League</div>
        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />-->
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <!-- <HelloWorld /> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
import { SUMMONER } from "@/graphql/queries.js";
export default {
  name: "App",

  components: {},

  data: () => ({
    summonerFound: 0,
    search: ""
  }),
  apollo: {
    summoner: {
      query: SUMMONER,
      variables() {
        return { name: this.querySummoner };
      },
      update(data) {
        if (data == {}) {
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
        if (!this.querySummoner || this.querySummoner == "") {
          console.log("skipped");
          return true;
        }
        console.log("not skipped");
        return false;
      },
      error(error) {
        console.log("error:", error);
        this.summonerFound = 0;
        return;
      }
    }
  },
  props: ["querySummoner"],
  methods: {
    routeToSearch(search) {
      this.$router
        .push({
          name: "home",
          params: { querySummoner: search }
        })
        .catch(err => {
          console.log(err);
          return;
        });
    }
  }
};
</script>
