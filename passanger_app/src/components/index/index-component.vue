<template>
  <div class="container inside_main">
    <div class="row text-center">
      <div class="col">Do you need help?</div>
    </div>

    <form @submit.prevent>
      <div class="form-group">
        <label for="name" class="col-form-label">Name</label>
        <input
          v-model="request.user.name"
          type="text"
          class="form-control"
          id="name"
          placeholder="John"
        />
      </div>

      <div class="form-group">
        <label for="email" class="col-form-label">Email</label>
        <input
          v-model="request.user.email"
          type="email"
          class="form-control"
          id="email"
          placeholder="email@example.com"
        />
      </div>

      <div class="form-group">
        <label for="phone" class="col-form-label">Phone</label>
        <input
          v-model="request.user.phone "
          type="number"
          class="form-control"
          id="phone"
          placeholder="+987654321"
        />
      </div>

      <div class="form-group">
        <label for="time">Time</label>
        <input
          v-model="request.time"
          type="datetime-local"
          class="form-control"
          id="time"
          placeholder
        />
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="start">Start</label>
          <input
            v-model="request.start"
            type="text"
            class="form-control"
            id="start"
            placeholder="Waterloo"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="Destination">Destination</label>
          <input
            v-model="request.destination"
            type="text"
            class="form-control"
            id="Destination"
            placeholder="Manchester"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="help">What help needed</label>
        <textarea v-model="request.help" type="text" class="form-control" id="help" rows="1"></textarea>
      </div>

      <div class="form-group">
        <input
          id="avatarinput"
          class="form-control-file"
          type="file"
          ref="userPhoto"
          @change="getPhoto"
        />
      </div>

      <br />

      <button type="submit" class="btn btn-primary" @click="submit()">Submit</button>
    </form>

    <!--<b-modal ref="confirmation-journey" hide-footer title="Confirmation">-->
    <!--<div class="d-block text-center">-->
    <!--<h3>Hello From My Modal!</h3>-->
    <!--</div>-->
    <!--<b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>-->
    <!--<b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>-->
    <!--</b-modal>-->
  </div>
</template>

<script>
import { mapState } from "vuex";
import { GET_ALL_USERS_QUERY } from "../../services/Queries.js";
import gql from "graphql-tag";
export default {
  name: "IndexComponent",
  components: {},
  data() {
    return {
      request: {
        user: {
          name: "",
          email: "",
          phone: null,
          photo: ""
        },
        time: "",
        start: "",
        destination: "",
        help: ""
      }
    };
  },
  computed: {
    ...mapState([]),
    photo: function() {
      if (this.request.user.photo) {
        // console.log(this.request.user.photo);
        return this.request.user.photo;
      }
      return "";
    }
  },
  created() {
    // this.getUsers();
  },
  methods: {
    submit() {
      console.log(this.request.user.name);
      this.$apollo
        .mutate({
          // Query
          mutation: gql`
            mutation MUT(
              $name: String!
              $phone: String!
              $pic: String!
              $email: String!
            ) {
              createPassenger(
                input: {
                  passenger: {
                    name: $name
                    phone: $phone
                    pic: $pic
                    email: $email
                  }
                }
              ) {
                passenger {
                  id
                }
              }
            }
          `,
          // Parameters
          variables: {
            name: this.request.user.name,
            phone: this.request.user.phone,
            pic:
              "https://images.unsplash.com/photo-1425321556545-264e4650274c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=512",
            email: this.request.user.email
          }
        })
        .then(e => {
          console.log(e.data.createPassenger.passenger.id);
          return this.$apollo.mutate({
            // Query
            mutation: gql`
              mutation(
                $id: Int!
                $start: String!
                $stop: String!
                $toc: String!
                $comment: String!
              ) {
                createRequest(
                  input: {
                    request: {
                      passengerId: $id
                      start: $start
                      stop: $stop
                      toc: $toc
                      comment: $comment
                    }
                  }
                ) {
                  request {
                    id
                  }
                }
              }
            `,
            // Parameters
            variables: {
              id: e.data.createPassenger.passenger.id,
              start: this.request.start,
              stop: this.request.destination,
              toc: "GREAT WESTERN",
              comment: this.request.help
            }
          });
        })
        .then(e => {
          console.log(e);
          this.$toasted.success("Thank you for booking");
        });
    },
    async getPhoto() {
      const file = this.$refs.userPhoto.files[0];
      const base64 = await this.getBase64(file).catch(e => e);
      this.request.user.photo = base64;
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }
  }
};
</script>

<style scoped>
/*.inside_mains {*/
/*border-radius: 20px;*/
/*}*/

/*.colsDoc {*/
/*padding-top: 1em;*/
/*}*/
</style>
