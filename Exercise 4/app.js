new Vue({
  el: '#exercise',
  data: {
    ex1Val : true,
    chClass: '',
  },
  methods: {
    startEffect: function() {
      this.ex1Val = !this.ex1Val;
    },
    startProgress: function () {

    }
  }
});
