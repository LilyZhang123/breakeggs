<template>
    <div>
        <b-container class="bv-example-row">
            <b-breadcrumb :items="items"/>
            <b-row>
                <b-col>1 of 3</b-col>
                <b-col>2 of 3</b-col>
                <b-col>3 of 3</b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-alert show>Default Alert</b-alert>
                </b-col>

            </b-row>
            <b-row>
                <b-col>
                    <b-alert variant="success" show>Success Alert</b-alert>
                </b-col>

            </b-row>
            <b-row>
                <b-col>
                    <b-alert variant="danger"
             dismissible
             :show="showDismissibleAlert"
             @dismissed="showDismissibleAlert=false">Dismissible Alert!</b-alert>
                    <b-btn @click="showDismissibleAlert=true" variant="info" class="m-1">
                        Show dismissible alert ({{showDismissibleAlert?'visible':'hidden'}})
                    </b-btn>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-alert :show="dismissCountDown"
             dismissible
             variant="warning"
             @dismissed="dismissCountdown=0"
             @dismiss-count-down="countDownChanged">
                        <p>
                            This alert will dismiss after {{dismissCountDown}} seconds...
                        </p>
                        <b-progress variant="warning"
                  :max="dismissSecs"
                  :value="dismissCountDown"
                  height="4px"></b-progress>
                    </b-alert>
                    <b-btn @click="showAlert" variant="info" class="m-1">Show alert with count-down timer</b-btn>
                </b-col>

            </b-row>
            <b-row>
                <div>
                    <b-alert show variant="primary">Primary Alert</b-alert>
                    <b-alert show variant="secondary">Secondary Alert</b-alert>
                    <b-alert show variant="success">Success Alert</b-alert>
                    <b-alert show variant="danger">Danger Alert</b-alert>
                    <b-alert show variant="warning">Warning Alert</b-alert>
                    <b-alert show variant="info">Info Alert</b-alert>
                    <b-alert show variant="light">Light Alert</b-alert>
                    <b-alert show variant="dark">Dark Alert</b-alert>
                </div>
            </b-row>
            <b-row>
                <div><b-badge>New</b-badge></div>
                <div><b-badge pill variant="success">成功</b-badge></div>
                <div><b-badge variant="dark" >成功</b-badge></div>
                <div><b-badge variant="info" >成功</b-badge></div>
                <div><b-badge variant="warning" >成功</b-badge></div>
                <div><b-badge variant="danger" >成功</b-badge></div>
                <div>
                    <h3>
                        Example heading
                        <b-badge>New</b-badge>
                    </h3>
                    <h4>
                        Example heading
                        <b-badge variant="primary">New</b-badge>
                    </h4>
                    <h5>
                        Example heading
                        <b-badge pill variant="success">New</b-badge>
                    </h5>
                </div>

            </b-row>
        </b-container>
    </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      items: [{
      text: 'Admin',
      href: '#',
    }, {
      text: 'Manage',
      href: '#',
    }, {
      text: 'Library',
      active: true
    }],
    }
  },
  mounted:function (){
    
  },
  methods:{
    init(){

    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
    
  },

}
</script>

<style scoped></style>