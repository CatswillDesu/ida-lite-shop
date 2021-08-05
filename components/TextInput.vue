<template>
  <input
    v-model="value"
    v-mask="mask"
    type="text"
    :placeholder="placeholder"
    required
    class="text-input"
    @input="handleInput"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    mask: {
      type: [String, RegExp],
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  emits: ['handle-input'],
  data() {
    return {
      value: ''
    }
  },
  methods: {
    handleInput() {
      this.$emit('handle-input', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.text-input {
  padding: 14px;
  border: none;
  outline: none;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: $grey-extra-light;
  font-size: 16px;
  line-height: 21px;
}
</style>
