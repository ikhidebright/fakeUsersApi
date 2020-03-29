<template>
  <v-card
    max-width="600"
    class="mx-auto"
  >
    <v-toolbar
      color="light-blue"
      dark
      fixed = true
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Contact</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-list two-line subheader>

      <v-list-item
        v-for="user in users"
        :key="user.id"
        @click=""
      >
        <v-list-item-avatar>
          <v-icon>
          mdi-account
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="user.name"></v-list-item-title>
          <v-list-item-subtitle v-text="user.phone"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon 
            color="red"
            @click="del(user.name)"
            >mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>

  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
      <v-btn
                color="blue"
                dark
                class='mx-auto'
                bottom
                fixed
                v-on="on"
                right
                fab
              >
              <v-icon>mdi-plus</v-icon>
              </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Add User
        </v-card-title>

        <v-card-text>
          <v-col cols="12" sm="6" md="12">
          <v-text-field
            label="Full Name"
            outlined
            hint="e.g Xavier Grace"
            v-model="name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="12">
         <v-text-field
            label="Phone Number"
            v-model="phone"
            counter
            maxlength="11"
            outlined
          ></v-text-field>
        </v-col>
            </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="add"
          >
            Add contact
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

    
  </v-card>
</template>

<script>
import axios from 'axios'

  export default {
    data: () => ({
      dialog: false,
      name: '',
      phone: ''
    }),

    methods: {
      add () {
        let user = {
          name: this.name,
          phone: this.phone
        }
        this.$store.commit("pushUser", user)
        this.dialog = false
        this.name = null
        this.phone = null
      },

      del (name) {
        let del = this.$store.getters.deleteUser(name)
        this.$store.commit("delUser", del)
      }
    },

    created () {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      this.$store.commit("addUser", res.data)
    })
  },

  computed: {
    users () {
      return this.$store.state.users
    }
  }
  }
</script>