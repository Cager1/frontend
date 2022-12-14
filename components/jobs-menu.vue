<template>
  <v-container>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          dark
          color="blue darken-3"
          class="mb-1"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
              <v-btn
                large
                depressed
                color="blue"
                :value="false"
              >
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn
                large
                depressed
                color="blue"
                :value="true"
              >
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            lg="6"
          >
            <v-card style="height: 100%;">
              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
              </v-card-title>

              <v-divider></v-divider>

              <v-card-text>
                {{ item.description }}
              </v-card-text>

              <v-card-subtitle>
                {{ item.user.name }} <br>
                {{ item.user.email }}
              </v-card-subtitle>
              <v-card-subtitle>
                {{ item.datum }}
              </v-card-subtitle>
              <v-divider></v-divider>

              <div>
                <v-chip
                  v-for="chip in item.services"
                  :key="chip.name"
                  style="margin: 2px"
                  @click="search = chip.name"
                >
                  {{ chip.name }}
                </v-chip>
              </div>
<!--              <v-list dense>-->
<!--                <v-list-item-->
<!--                  v-for="(key, index) in filteredKeys"-->
<!--                  :key="index"-->
<!--                >-->
<!--                  <v-list-item-content :class="{ 'blue&#45;&#45;text': sortBy === key }">-->
<!--                    {{ key }}:-->
<!--                  </v-list-item-content>-->
<!--                  <v-list-item-content-->
<!--                    class="align-end"-->
<!--                    :class="{ 'blue&#45;&#45;text': sortBy === key }"-->
<!--                  >-->
<!--                    {{ item[key.toLowerCase()] }}-->
<!--                  </v-list-item-content>-->
<!--                </v-list-item>-->
<!--              </v-list>-->
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row
          class="mt-2"
          align="center"
          justify="center"
        >
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="ml-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "jobs-menu",
  data () {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: '',
      filter: {},
      sortDesc: true,
      page: 1,
      itemsPerPage: 8,
      sortBy: 'Datum',
      keys: [

        'Datum',
      ],
      items: [
      ],
    }
  },
  computed: {
    numberOfPages () {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
    filteredKeys () {
      return this.keys.filter(key => key !== 'Name')
    },
  },

  mounted() {
    this.getJobs();
  },
  methods: {

    async getJobs() {

      let jobs;
      await this.$axios.$get('/jobs').then(response => {
        jobs = response;
        console.log(response);
      }).catch((err) => {
        console.log(err);
      });

      for (let i = 0; i < jobs.length; i++) {
        jobs[i]['datum'] = jobs[i]['created_at'];
        let dat = new Date(jobs[i].datum);
        let time = new Date(jobs[i].datum);
        jobs[i].datum = dat.toLocaleDateString('hr-HR') + " " + time.toLocaleTimeString('hr-HR');
        let service_names = [];
        for (let j = 0; j < jobs[i].services.length; j++) {
          service_names.push(jobs[i].services[j].name);
        }
        jobs[i].services_names = service_names;

      }

      this.items = jobs;
    },

    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number
    },
  }
}
</script>

<style scoped>

</style>
