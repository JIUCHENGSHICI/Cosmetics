<template>
	<div class="search">
		<search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"></search>
	</div>
</template>

<script>
import { Search } from "vux";

export default {
  components: {
    Search
  },
  methods: {
    resultClick(item) {
      window.alert("you click the result item: " + JSON.stringify(item));
    },
    getResult(val) {
      this.results = val ? getResult(this.value) : [];
    },
    onSubmit(val) {
      window.alert("on submit" + val);
    },
    onCancel() {
      console.log("on cancel");
    },
    onFocus() {
      //				console.log('on focus');
    }
  },
  data() {
    return {
      results: [],
      autoFixed: false,
      value: ""
    };
  }
};

function getResult(val) {
  let rs = [];
  for (let i = 0; i < 8; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    });
  }
  return rs;
}
</script>

<style>
@import url("search.css");
@import url("../../assets/app.css");
</style>