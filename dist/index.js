Component({
  properties: {
    visible: {
      type: Boolean,
      value: false
    }
  },
  created() {
    this.visible = true;
  },
  methods: {
    auth() {
      this.visible = false;
    }
  }
});
