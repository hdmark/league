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
      <v-btn @click="getSummoner()">click</v-btn>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  methods: {
    getSummoner: async () => {
      // let data = await axios.get(
      //   "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/crotchetyoldman?api_key=RGAPI-926ce681-d37a-4df6-90bf-de1eab79efbe"
      // );
      //let data = await axios.get("https://google.com");
      let data = await axios.request({
        url: "?api_key=RGAPI-926ce681-d37a-4df6-90bf-de1eab79efbe",
        headers: {
          method: "GET",
          Origin: "https://developer.riotgames.com",
          "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
          //"X-Riot-Token": "RGAPI-926ce681-d37a-4df6-90bf-de1eab79efbe",
          "Accept-Language": "en-US,en;q=0.9",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
        }
        //crossdomain: true,
        //"X-Riot-Token": "RGAPI-926ce681-d37a-4df6-90bf-de1eab79efbe"
        // headers: {
        //   "Access-Control-Allow-Origin": "*",
        //   "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
        //   "Access-Control-Allow-Headers":
        //     "Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type",
        //   "Content-Type": "application/json",
        //   // Accept: "application/json",
        //   // Origin: "https://developer.riotgames.com",
        //   // "Accept-Charset":
        //   //   "application/x-www-form-urlencoded; charset=UTF-8",
        //   "Accept-Language": "en-US,en;q=0.9"
        //   // "User-Agent":
        //   // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
        // }
      });

      console.log(data.data);
    }
  }
};
</script>
