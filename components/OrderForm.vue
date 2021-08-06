<template>
  <form class="order-form" @submit.prevent="sendOrder">
    <span class="label">Оформить заказ</span>
    <TextInput placeholder="Ваще имя" requried @handle-input="changeName" />
    <TextInput
      placeholder="Телефон"
      mask="+7 ### ###-##-##"
      requried
      @handle-input="changePhone"
    />
    <TextInput placeholder="Адрес" requried @handle-input="changeAddress" />
    <transition name="fade">
      <div v-if="errors.length" class="errors-alert">
        <span class="alert-title">Исправьте следующие ошибки:</span>
        <span v-for="error in errors" :key="error" class="error-item">
          *{{ error }}
        </span>
      </div>
    </transition>
    <Button centered block>Отправить</Button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
import { validateName, validatePhone } from '~/util/validation'

export default {
  data() {
    return {
      errors: []
    }
  },
  computed: {
    name() {
      return this.$store.state.orderData.name
    },
    phone() {
      return this.$store.state.orderData.phone
    },
    address() {
      return this.$store.state.orderData.address
    }
  },
  methods: {
    sendOrder() {
      this.errors = []
      if (!this.$store.getters['cart/totalCount']) {
        this.errors.push('Коризна пуста')
      }
      if (!validateName(this.name)) {
        this.errors.push('Имя имеет неверный формат')
      }
      if (!validatePhone(this.phone)) {
        this.errors.push('Номер телефона имеет неверный формат')
      }
      if (this.errors.length) return
      this.setOrderAsSent()
    },
    ...mapMutations({
      changeName: 'orderData/changeName',
      changePhone: 'orderData/changePhone',
      changeAddress: 'orderData/changeAddress',
      setOrderAsSent: 'orderData/setOrderAsSent'
    })
  }
}
</script>

<style lang="scss" scoped>
.order-form {
  display: flex;
  flex-direction: column;
  margin-top: auto;

  .label {
    display: block;
    margin-bottom: 16px;
    font-size: 18px;
    color: $grey;
  }

  .errors-alert {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;

    .alert-title {
      display: inline-block;
      margin-bottom: 8px;
      color: $grey;
      font-size: 16px;
    }

    .error-item {
      margin-bottom: 5px;
    }
  }

  //animations
  .fade-enter-active,
  .fade-leave-active {
    transition-property: opacity;
    transition-duration: 0.4s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
