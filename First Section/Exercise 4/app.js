new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true,
    },
    blue: 'blue',
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '100px',
      backgroundColor: ''
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },
    startProgress: function () {
      var width = 0;
      var vm = this;
      setInterval(function() {
        width += 10;
        vm.progressBar.width = width + 'px'; 
      }, 500);
    }
  }
});
